import React from 'react';
import { Navbar } from './Navbar';

interface NavbarLayoutProps {
  children: React.ReactNode;
}

export const NavbarLayout: React.FC<NavbarLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen pb-16">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
    </div>
  );
};
