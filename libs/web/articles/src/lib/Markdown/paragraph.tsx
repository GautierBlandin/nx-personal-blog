import { cn } from '../cn';

export const Paragraph = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <p className={cn('font-paragraph', className)}>{children}</p>;
};

export const paragraph = {
  render: 'Paragraph',
};
