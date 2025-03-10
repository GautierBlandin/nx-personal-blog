import React from 'react';

interface BannerProps {
  title: string;
  subtitle?: string;
}

export const Banner: React.FC<BannerProps> = ({ title, subtitle }) => {
  return (
    <div className="w-full bg-neutral-800 text-white py-32 mb-16 shadow-[0_6px_10px_-2px_rgba(0,0,0,0.4)]">
      <div className="mx-auto max-w-8xl">
        <h1 className="text-white py-0">{title}</h1>
        {subtitle && <h3 className="text-white">{subtitle}</h3>}
      </div>
    </div>
  );
};
