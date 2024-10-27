import React from 'react';
import { cn } from '../cn';

export const Separator = ({ className }: { className?: string }) => {
  return <hr className={cn('w-1/5 my-8 border-gray-700', className)} />;
};

export const separator = {
  render: 'Separator',
};
