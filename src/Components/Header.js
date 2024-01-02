import React from 'react'
import Logo from '../Assets/images/Logo.png';
import search from '../Assets/images/search.png';
import login from '../Assets/images/login.png';
import cart from '../Assets/images/cart.png';
import './Header.css';

function Header() {
    return (
        <div className='header'>
            <div className='logo'>
                <img src={Logo} alt='Logo' />
            </div>

            <div className='search'>
                <input type='text' placeholder='Lets find your pair' />
                <button><img src={search} alt='search' /></button>
            </div>

            <div className='second'>
                <div className='nav'>
                    <ul>
                        <li><a href="#">Become a partner</a></li>
                        <li><a href="#">Find More</a></li>
                    </ul>
                </div>

                <div className='login'>
                    <button><p>Login </p></button>
                    <img src={login} alt='login' />
                </div>

                <div className='cart'>
                    <button><img src={cart} alt='cart' /><p>Cart</p></button>
                </div>
            </div>
        </div>
    )
}

export default Header