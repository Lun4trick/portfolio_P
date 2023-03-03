import React from 'react';
import { NavLink } from 'react-router-dom';
import navBarItems from './navBarItems';

const NavBar: React.FC = () => (
  <nav className="py-10 px-5 mb-12 flex justify-between">
    <h1 className="desktop:text-3xl tablet:text-xl text-slate-700 font-mono"> Hi I&apos;m Levente</h1>
    <ul className='flex gap-2'>
      {navBarItems.map(item => (
        <li id={item.name}>
          <NavLink
            to={item.path}
            className="bg-gradient-to-r from-slate-500 to-slate-800 laptop:text-lg mobile:text-sm text-gray-300 px-4 py-2 rounded-md
          hover:rounded-xl transition-all duration-500"
          >
            {item.name}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
  
);

export default NavBar;