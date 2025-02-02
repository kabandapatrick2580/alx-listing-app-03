import Header from "./Header";
import Footer from "./Footer";
import React from 'react';
import { LayoutProps } from '../../interfaces';


const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
    <div>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
      </div>
    </>
  );
}

export default Layout;