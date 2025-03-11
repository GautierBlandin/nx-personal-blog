import React from 'react';

export function ContentContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-center mx-4 sm:mx-8 md:mx-16 lg:mx-24">
      <div className="max-w-6xl w-full">{children}</div>
    </div>
  );
}
