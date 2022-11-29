/**
 * External dependencies
 */
import React from 'react';

/**
 * Internal dependencies
 */
import Footer from './Footer/Footer';
import Header from './Header/Header';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />

      {children}

      <Footer />
    </>
  )
};

export default Layout;
