import React from 'react';
import { cn } from '../cn';

export function Table({
  className,
  ...props
}: React.HTMLAttributes<HTMLTableElement>) {
  return (
    <div className="w-full overflow-x-auto pb-4">
      <table className={cn('w-full', className)} {...props} />
    </div>
  );
}

export function TableHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLTableSectionElement>) {
  return <thead className={cn('bg-gray-100', className)} {...props} />;
}

export function TableBody({
  className,
  ...props
}: React.HTMLAttributes<HTMLTableSectionElement>) {
  return <tbody className={cn('', className)} {...props} />;
}

export function TableRow({
  className,
  ...props
}: React.HTMLAttributes<HTMLTableRowElement>) {
  return <tr className={cn('hover:bg-gray-100', className)} {...props} />;
}

export function TableHead({
  className,
  ...props
}: React.HTMLAttributes<HTMLTableCellElement>) {
  return (
    <th
      className={cn(
        'px-4 py-3 border border-gray-300 text-left font-bold text-xl',
        className
      )}
      {...props}
    />
  );
}

export function TableCell({
  className,
  ...props
}: React.HTMLAttributes<HTMLTableCellElement>) {
  return (
    <td
      className={cn('px-4 py-2 border border-gray-300', className)}
      {...props}
    />
  );
}

export const table = {
  render: 'Table',
};

export const thead = {
  render: 'TableHeader',
};

export const tbody = {
  render: 'TableBody',
};

export const tr = {
  render: 'TableRow',
};

export const th = {
  render: 'TableHead',
};

export const td = {
  render: 'TableCell',
};
