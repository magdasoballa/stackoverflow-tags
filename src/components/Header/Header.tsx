import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div className='header'>
            <div className='home-icon'>
                <Link to="/">

                </Link>
            </div>
            <h1 className="home-heading">Stack exchange</h1>
        </div>
    );
};

export default Header;
