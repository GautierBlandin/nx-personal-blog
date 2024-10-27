import React from 'react';
import { cn } from '../cn';

interface HeadingProps {
  children: React.ReactNode;
  level: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
}

export const Heading: React.FC<HeadingProps> = ({ children, level, className }) => {
  const Component = `h${level}` as keyof JSX.IntrinsicElements;

  const styles = {
    h1: 'text-6xl font-bold font-title mb-4',
    h2: 'text-5xl font-bold font-title mb-4',
    h3: 'text-4xl font-bold font-title mb-2',
    h4: 'text-3xl font-bold font-title mb-2',
    h5: 'text-2xl font-bold font-title',
    h6: 'text-xl font-bold font-title',
  };

  return <Component className={cn(styles[`h${level}`], className)}>{children}</Component>;
};

export const heading = {
  render: 'Heading',
  attributes: {
    level: { type: Number, required: true },
  },
};
