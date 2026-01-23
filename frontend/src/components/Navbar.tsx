import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">My App</div>
      <ul className="navbar-links">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;