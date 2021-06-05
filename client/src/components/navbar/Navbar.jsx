import React from 'react';
 import  './navbar.css';
import Logo from '../../assets/img/favicon.svg'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
    <div className="container">
        <div className="navbar">
   <img src={Logo} className="navbar__logo"/>
<div className="navbar__header">MERN CLOUD</div>
<div className="navbar__login"><NavLink to="/login">Log in</NavLink></div>
<div className="navbar__registration"><NavLink to="/registration">Sign up</NavLink></div>
    </div>
</div>
        );
}

export default Navbar;