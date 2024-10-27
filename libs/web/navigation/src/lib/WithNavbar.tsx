import React from 'react';
import { Navbar } from './Navbar';

export const WithNavbar = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => {
  const WithNavbarComponent: React.FC<P> = (props) => {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <WrappedComponent {...props} />
        </main>
      </div>
    );
  };

  return WithNavbarComponent;
};
