import React from 'react';
import './Header.scss';
import { Typography } from '@mui/material';


const Header = () => {
    return (
        <div className='header'>
            <Typography variant="h2" className='home-heading' >
                Stackoverflow tags
            </Typography>
        </div>
    );
};

export default Header;
