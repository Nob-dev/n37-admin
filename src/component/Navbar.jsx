import React from 'react';
import {  AiFillFileAdd, AiOutlineHome } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';

const NavItem = ({ to, value, closed, Icon }) => {
    const commonClasses = 
    "flex items-center space-x-2 w-full p-2 block text-white whitespace-nowrap"
    const activeClass = commonClasses + ' bg-blue-500 text-white' 
    const inAactiveClass = commonClasses + ' text-gray-800' 
    return (
        
        <NavLink 
        className={({ isActive }) => (isActive ? activeClass : inAactiveClass)} 
        to={to}
        >
        {Icon} 
        <span className={closed 
            ? "w-0 transition-width overflow-hidden" 
            : "w-full transition-width overflow-hidden"
        } 
    >
      {value}
      </span>
    </NavLink>
    );
};

export default function Navbar({closed}) {
  return (
    <nav>
      <div className="flex justify-center p-3">
        <img className="w-14" src="./logo.png" alt="" />
      </div>
        <ul>
            <li>
                <NavItem closed={closed} to="/" value="Home" Icon={<AiOutlineHome size={24} />} />
            </li>
            <li>
            <NavItem 
            closed={closed} 
            to="/create-post"
            value="Create Post"
            Icon={<AiFillFileAdd size={24} />} />
            </li>
        </ul>
    </nav>
  )
}
