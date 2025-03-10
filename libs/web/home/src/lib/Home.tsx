import { articleRoute, articles } from '@nx-personal-blog/web-articles';
import { NavbarLayout } from '@nx-personal-blog/navigation';
import React from 'react';

export function Home() {
  return (
    <NavbarLayout>
      <main className="flex-grow">
        <div className="flex justify-center mx-4">
          <div className="max-w-6xl w-full">
            <div>
              <p>Hi, I'm Gautier, welcome to my blog!</p>
              <p>
                I'm a software engineer at{' '}
                <a href="https://trackit.io/">TrackIt</a>, where I work on
                full-stack web development and cloud architecture using AWS.
              </p>
              <hr />
              <h5> Recent articles </h5>
              <ul>
                {Object.values(articles)
                  .slice(0, 5)
                  .map((article) => (
                    <li key={article.identifier}>
                      <a href={articleRoute(article.identifier)}>
                        {article.subtitle
                          ? `${article.title} - ${article.subtitle}`
                          : article.title}
                      </a>
                    </li>
                  ))}
              </ul>
              <hr />
              <h5>Socials</h5>
              <ul>
                <li>
                  <a href="https://github.com/gautierblandin">GitHub</a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/gautier-blandin-661640138/">
                    LinkedIn
                  </a>
                </li>
              </ul>
              <hr />
              <h5>Contact</h5>
              <p>
                Feel free to reach out to me at:{' '}
                <a href="mailto:gautier.blandin.dev@gmail.com">
                  gautier.blandin.dev@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>
    </NavbarLayout>
  );
}
