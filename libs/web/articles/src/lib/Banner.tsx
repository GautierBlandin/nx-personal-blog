import React from 'react';

interface BannerProps {
  title: string;
  subtitle?: string;
}

export const Banner: React.FC<BannerProps> = ({ title, subtitle }) => {
  return (
    <div className="w-full bg-main-900 text-white h-48 md:h-64 shadow-[0_6px_10px_-2px_rgba(0,0,0,0.4)] flex items-center">
      <div className="mx-auto max-w-9xl w-full px-8">
        <div className="flex flex-col justify-center">
          <h1 className="text-white py-0">{title}</h1>
          {subtitle && <h4 className="text-white">{subtitle}</h4>}
        </div>
      </div>
    </div>
  );
};
