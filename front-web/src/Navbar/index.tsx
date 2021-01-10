import './styles.css';
import { ReactComponent as Logo } from './logo.svg';
import React from 'react';
import { Link } from 'react-router-dom';
function NavBar() {
    return (
        <nav className="main-navbar">
            <Logo />
            <Link className="logo-text" to="/"> DS Delivery</Link>
        </nav>
    )
}


export default NavBar;