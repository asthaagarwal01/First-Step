import React from 'react'
import './Footer.css';
import logo from '../Assets/images/Logo.png';

function Footer() {
    return (
        <div className='footer'>
            <div className='section'>
                <div className='headings'>
                    <div className='logoo'>
                        <img src={logo} alt='logo' />
                    </div>
                    <p>32 Windsor Street<br />Back Lane<br />Hudson Road, NY<br /><br/>44007.</p>
                </div>

                <div className='content'>
                    <div className='links'>
                        <p>LINKS</p>
                    </div>
                    <ul>
                        <li>About us</li>
                        <li>Contact</li>
                        <li>Login</li>
                        <li>Sign Up</li>
                        <li>Step +</li>
                    </ul>

                </div>

                <div className='right'>
                    <div className='query'>
                        <p>WANT TO BECOME A SELLER ?</p>
                    </div>
                    <p>We value your service and extend our support in partnership with you.</p>
                    <input type='email' placeholder='Drop your email' />
                </div>
            </div>
            <hr/>
            <p id='copy'>All Copyrights Reserved © First Step 2024</p>
        </div>
    )
}

export default Footer