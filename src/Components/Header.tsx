import { PropsWithChildren } from 'react';

const Header = ({ children }: PropsWithChildren) => (
  <header id="header" className="text-center">
    {children}
  </header>
);
export default Header;
