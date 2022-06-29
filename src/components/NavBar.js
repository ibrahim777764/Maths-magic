import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';

const NavBar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/calculator',
      text: 'Calculator',
    },
    {
      id: 3,
      path: '/quotes',
      text: 'Quotes',
    },
  ];
  return (
    <Navbar className="navbar">
      <h1>Math Magician</h1>
      <Nav className="navLinks">
        {
        links.map((link) => <NavLink key={link.id} to={link.path} activeClassName="active-link" id="nav" exact>{link.text}</NavLink>)
      }
      </Nav>
    </Navbar>
  );
};

export default NavBar;
