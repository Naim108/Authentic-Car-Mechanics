import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    const activeStyle={
        fontWeight: "bold",
        color: "red"
      }
    return (
        
            <nav className="container mt-3 header-part ">
                <NavLink activeStyle={activeStyle}  to="/home">Home</NavLink>
                <NavLink activeStyle={activeStyle}  to="/about">About</NavLink>
                <NavLink activeStyle={activeStyle} to="/friends">Friends</NavLink>
                
            </nav>
        
    );
};

export default Header;