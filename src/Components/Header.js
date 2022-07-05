import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
  const [link, updateLink] = useState('/');
  return (
    <header className='header'>
      <h1 className='title'>Math Magician</h1>
      <ul className='links'>
        <li className='link-item'>
          <Link
            to='/'
            className={link === '/' ? 'link selected' : 'link'}
            onClick={() => updateLink('/')}
          >
            Home
          </Link>
        </li>
        <li className='link-item'>
          <Link
            to='/calculator'
            className={link === '/calculator' ? 'link selected' : 'link'}
            onClick={() => updateLink('/calculator')}
          >
            Calculator
          </Link>
        </li>
        <li className='link-item'>
          <Link
            to='quote'
            className={link == '/quote' ? 'link selected' : 'link'}
            onClick={() => updateLink('/quote')}
          >
            Quote
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
