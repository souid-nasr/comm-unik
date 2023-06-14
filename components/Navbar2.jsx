import React from 'react';
import Link from 'next/link';
const Navbar = (props) => {
  return (
    <nav className="ContainerNav">
      <span className="MainNav">Unik Espace</span>
      <div className="LinksNav">
        <Link href="/">ACCUEIL
</Link>
        <span>Link A</span>
        <span>Link B</span>
      </div>
      {props.children}
    </nav>
  );
};

export default Navbar;