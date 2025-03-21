import React from 'react';
import { Helmet } from 'react-helmet';
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
      <Helmet>
        <title>
          {title ?? 'Gautier Blandin - A blog about software engineering'}
        </title>
        {description && <meta name="description" content={description} />}
      </Helmet>
      <Navbar />
      {children}
    </div>
  );
};
