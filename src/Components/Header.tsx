import React, { ReactNode } from 'react';

const Header: React.FC<{ children: ReactNode }> = ({ children }) => (
  <header id="header" className="text-center">
    {children}
  </header>
);
export default Header;
