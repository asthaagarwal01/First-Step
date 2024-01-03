import React from 'react'
import './Footer.css';
import logo from '../Assets/images/Logo.png';

function Footer() {
  return (
    <div className='footer'>
        <div className='headings'>
            <div className='logoo'>
                <img src={logo} alt='logo' />
            </div>
            <div className='links'>
                <p>LINKS</p>
            </div>
            <div className='query'>
                <p>WANT TO BECOME A SELLER ?</p>
            </div>
        </div>

        <div className='content'>
            <p>32 Windsor Street<br/>Back Lane<br/>Hudson Road, NY<br/>44007.</p>
            <ul>
                <li>About us</li>
                <li>Contact</li>
                <li>Login</li>
                <li>Sign Up</li>
                <li>Step +</li>
            </ul>
            
            <div className='right'>
            <p>We value your service and extend our support in partnership with you.</p>
            <input type='email' />
            </div>
        </div>
    </div>
  )
}

export default Footer