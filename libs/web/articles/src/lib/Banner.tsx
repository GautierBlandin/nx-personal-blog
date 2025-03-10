import React from 'react';

interface BannerProps {
  title: string;
  subtitle?: string;
}

export const Banner: React.FC<BannerProps> = ({ title, subtitle }) => {
  return (
    <div className="w-full bg-neutral-800 text-white py-8 px-4 mb-8">
      <div className="container mx-auto max-w-8xl pl-8">
        <h1 className="text-white mb-2">{title}</h1>
        {subtitle && <h3 className="text-white">{subtitle}</h3>}
      </div>
    </div>
  );
};
