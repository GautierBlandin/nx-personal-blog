import * as pulumi from '@pulumi/pulumi';
import * as aws from '@pulumi/aws';
import * as synced from '@pulumi/synced-folder';

const stack = pulumi.getStack();
const stackConfig = new pulumi.Config();
const PRODUCTION = 'prod';

const certificateArn =
  stack === PRODUCTION ? stackConfig.require('certificateArn') : undefined;
const targetDomain =
  stack === PRODUCTION ? stackConfig.require('targetDomain') : undefined;

const config = {
  // targetDomain is the domain/host to serve content at.
  targetDomain: targetDomain,
  // If true create an A record for the www subdomain of targetDomain pointing to the generated cloudfront distribution.
  // If a certificate was generated it will support this subdomain.
  // default: true
  certificateArn: certificateArn,
};

// Create an S3 bucket to store the static website content
const bucket = new aws.s3.Bucket('static-website-bucket');

// Sync the contents of the dist folder to the S3 bucket
new synced.S3BucketFolder('website-bucket-deployment', {
  path: '../personal-blog-ssr/build/client',
  bucketName: bucket.bucket,
  acl: 'private',
});

/*
 * Route53 configuration
 */

// Split a domain name into its subdomain and parent domain names.
// e.g. "www.example.com" => "www", "example.com".
// function getDomainAndSubdomain(domain: string): {
//   subdomain: string;
//   parentDomain: string;
// } {
//   const parts = domain.split('.');
//   if (parts.length < 2) {
//     throw new Error(`No TLD found on ${domain}`);
//   }
//   // No subdomain, e.g. awesome-website.com.
//   if (parts.length === 2) {
//     return { subdomain: '', parentDomain: domain };
//   }
//
//   const subdomain = parts[0];
//   parts.shift(); // Drop first element.
//   return {
//     subdomain,
//     // Trailing "." to canonicalize domain.
//     parentDomain: parts.join('.') + '.',
//   };
// }

// Creates a new Route53 DNS record pointing the domain to the CloudFront distribution.
// function createAliasRecord(
//   targetDomain: string,
//   distribution: aws.cloudfront.Distribution
// ): aws.route53.Record {
//   const domainParts = getDomainAndSubdomain(targetDomain);
//   const hostedZoneId = aws.route53
//     .getZone({ name: domainParts.parentDomain }, { async: true })
//     .then((zone) => zone.zoneId);
//   return new aws.route53.Record(targetDomain, {
//     name: domainParts.subdomain,
//     zoneId: hostedZoneId,
//     type: 'A',
//     aliases: [
//       {
//         name: distribution.domainName,
//         zoneId: distribution.hostedZoneId,
//         evaluateTargetHealth: true,
//       },
//     ],
//   });
// }

// function createWWWAliasRecord(
//   targetDomain: string,
//   distribution: aws.cloudfront.Distribution
// ): aws.route53.Record {
//   const domainParts = getDomainAndSubdomain(targetDomain);
//   const hostedZoneId = aws.route53
//     .getZone({ name: domainParts.parentDomain }, { async: true })
//     .then((zone) => zone.zoneId);
//
//   return new aws.route53.Record(`${targetDomain}-www-alias`, {
//     name: `www.${targetDomain}`,
//     zoneId: hostedZoneId,
//     type: 'A',
//     aliases: [
//       {
//         name: distribution.domainName,
//         zoneId: distribution.hostedZoneId,
//         evaluateTargetHealth: true,
//       },
//     ],
//   });
// }

// if config.includeWWW include an alias for the www subdomain
const distributionAliases =
  stack === PRODUCTION
    ? [config.targetDomain!, `www.${config.targetDomain!}`]
    : undefined;

/*
 * CloudFront configuration
 */

// Create an Origin Access Control for CloudFront
const cloudfrontOAC = new aws.cloudfront.OriginAccessControl('cloudfrontOAC', {
  originAccessControlOriginType: 's3',
  signingBehavior: 'always', // always override authorization header
  signingProtocol: 'sigv4', // only allowed value
});

const cachingDisabledPolicyId = '4135ea2d-6df8-44a3-9df3-4b5a84be39ad';
const cachingOptimizedPolicyId = '658327ea-f89d-4fab-a63d-7e88639e58f6';
const cachePolicyId =
  stack === PRODUCTION ? cachingOptimizedPolicyId : cachingDisabledPolicyId;

// Create a CloudFront function for index.html redirects
const indexRedirectFunction = new aws.cloudfront.Function(
  'indexRedirectFunction',
  {
    name: 'index-redirect',
    runtime: 'cloudfront-js-1.0',
    code: `function handler(event) {
    var request = event.request;
    var uri = request.uri;
    
    // If URI ends with '/', append 'index.html'
    if (uri.endsWith('/')) {
        request.uri = uri + 'index.html';
    }
    // If URI doesn't end with '/' or '.html', append '/index.html'
    else if (!uri.includes('.')) {
        request.uri = uri + '/index.html';
    }
    
    return request;
}`,
    publish: true,
  }
);

// Create a CloudFront distribution
const distribution = new aws.cloudfront.Distribution(
  'cloudfront-distribution',
  {
    enabled: true,
    aliases: distributionAliases,
    defaultRootObject: 'index.html',
    origins: [
      {
        originId: 'S3Origin',
        domainName: bucket.bucketRegionalDomainName,
        originAccessControlId: cloudfrontOAC.id,
      },
    ],
    defaultCacheBehavior: {
      targetOriginId: 'S3Origin',
      viewerProtocolPolicy: 'redirect-to-https',
      allowedMethods: ['GET', 'HEAD', 'OPTIONS'],
      cachedMethods: ['GET', 'HEAD', 'OPTIONS'],
      cachePolicyId,
      minTtl: 0,
      defaultTtl: 300,
      maxTtl: 1200,
      functionAssociations: [
        {
          eventType: 'viewer-request',
          functionArn: indexRedirectFunction.arn,
        },
      ],
    },
    restrictions: {
      geoRestriction: {
        restrictionType: 'none',
      },
    },
    viewerCertificate:
      stack === PRODUCTION
        ? {
            acmCertificateArn: certificateArn,
            sslSupportMethod: 'sni-only',
          }
        : {
            cloudfrontDefaultCertificate: true,
          },
  }
);

// Create a bucket policy to allow CloudFront to access the S3 bucket
new aws.s3.BucketPolicy(
  'allowCloudFrontBucketPolicy',
  {
    bucket: bucket.bucket,
    policy: {
      Version: '2012-10-17',
      Statement: [
        {
          Sid: 'AllowCloudFrontServicePrincipalRead',
          Effect: 'Allow',
          Principal: {
            Service: 'cloudfront.amazonaws.com',
          },
          Action: ['s3:GetObject'],
          Resource: pulumi.interpolate`${bucket.arn}/*`,
          Condition: {
            StringEquals: {
              'AWS:SourceArn': distribution.arn,
            },
          },
        },
      ],
    },
  },
  { dependsOn: [bucket, distribution] }
);

// If in production, create Route53 records
if (stack === PRODUCTION && targetDomain) {
  const zone = aws.route53.getZone({ name: targetDomain }, { async: true });

  new aws.route53.Record('a-record', {
    zoneId: zone.then((zone) => zone.zoneId),
    name: targetDomain,
    type: 'A',
    aliases: [
      {
        name: distribution.domainName,
        zoneId: distribution.hostedZoneId,
        evaluateTargetHealth: true,
      },
    ],
  });

  new aws.route53.Record('www-a-record', {
    zoneId: zone.then((zone) => zone.zoneId),
    name: `www.${targetDomain}`,
    type: 'A',
    aliases: [
      {
        name: distribution.domainName,
        zoneId: distribution.hostedZoneId,
        evaluateTargetHealth: true,
      },
    ],
  });
}

export const cloudFrontUrl = distribution.domainName;
