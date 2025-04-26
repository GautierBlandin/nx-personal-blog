import React from 'react';
import { Navbar } from './Navbar';

interface NavbarLayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

export const NavbarLayout: React.FC<NavbarLayoutProps> = ({
  children,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col min-h-screen pb-16">
      <Navbar />
      {children}
    </div>
  );
};
