import React from 'react';

export const List = ({
  children,
  ordered,
  className,
}: {
  children: React.ReactNode;
  ordered: boolean;
  className?: string;
}) => {
  const Component = ordered ? 'ol' : 'ul';
  return (
    <Component className={className}>{children}</Component>
  );
};

export const list = {
  render: 'List',
  attributes: {
    ordered: { type: Boolean },
  },
};
