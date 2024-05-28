import React from 'react';

interface Header {
  title: string;
  description?: string;
}

const Header: React.FC = ({ title, description }) => {
  return (
    <header id="header">
      <h1 id="title">{title}</h1>
      {description && <p id="description">{description}</p>}
    </header>
  );
};
export default Header;
