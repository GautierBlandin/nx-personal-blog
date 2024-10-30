import React from 'react';

interface HeadingProps {
  children: React.ReactNode;
  level: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
}

export const Heading: React.FC<HeadingProps> = ({ children, level, className }) => {
  const Component = `h${level}` as keyof JSX.IntrinsicElements;

  return <Component className={className}>{children}</Component>;
};

export const heading = {
  render: 'Heading',
  attributes: {
    level: { type: Number, required: true },
  },
};
