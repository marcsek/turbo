import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="absolute inset-0 flex h-11 items-center justify-start gap-4 bg-neutral-900 px-16 text-base">
      <Link to="/">Home</Link>
      <Link to="login">Login</Link>
      <Link to="protected">Protected</Link>
    </div>
  );
};

export default Header;
