// Kalian bisa menambahkan CSS di src/components/Header.css
import React from 'react';

const Header = () => {
    return (
        <div className='header-container'>
            <h1 className='header-title'>Call a Friend</h1>
            <p className='header-subtitle'>your friendly contact app</p>
        </div>
    )
}

export default Header;