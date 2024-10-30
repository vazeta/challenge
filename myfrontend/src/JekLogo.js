import React from 'react';
import logo from './assets/jek_logo.png';

const Logo = () => {
    return (
        <img 
            src={logo} 
            alt="Logo da  nossa biblioteca(corresponde à logo da jek)" 
            style={{
                position: 'absolute',
                top: '10px',
                left: '30px',
                width: '150px',
                height: 'auto',
            }}
        />
    );
};

export default Logo;
