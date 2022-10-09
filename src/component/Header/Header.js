import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <nav className='header'>
            <div>
                <a href="/home">Home</a>
                <a href="/meals">Meals</a>
                <a href="/meals">Description</a>
                <a href="/meals">About</a>

            </div>
            <div>
                <a href="/login">Log in</a>
                <a href="/login">Sign up</a>
            </div>
        </nav>
    );
};

export default Header;