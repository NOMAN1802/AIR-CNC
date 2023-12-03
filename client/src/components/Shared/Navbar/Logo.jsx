import React from 'react';
import LogoImg from '../../../assets/images/logo.png'
import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <Link >
            <img className='hidden md:block'
             src={LogoImg} 
            width='100'
            height='100'
            alt="logo" />
            
        </Link>
    );
};

export default Logo;