import React from 'react'
import './HomePage.css';
import JoinButton from './JoinButton';
import Best from '../Assets/images/Bestoffers.png';
import shoe1 from '../Assets/images/shoe1.png';
import shoe2 from '../Assets/images/shoe2.png';
import shoe3 from '../Assets/images/shoe3.png';
import shoe4 from '../Assets/images/shoe4.png';
import shoe5 from '../Assets/images/shoe5.png';
import shoe6 from '../Assets/images/shoe6.png';
import shoe7 from '../Assets/images/shoe7.png';
import shoe8 from '../Assets/images/shoe8.png';
import shoe9 from '../Assets/images/shoe9.png';
import logo from '../Assets/images/Logo.png';
import brand1 from '../Assets/images/brand1.png';

function HomePage() {
    return (
        <div>
            <div className='categories'>
                <div className='one'>
                    <div className='logo'>
                        <img src={Best} alt='best offers' style={{ width: '5.5rem', height: '5.5rem' }} />
                    </div>

                </div>

                <div className='two'>
                    <div className='image'>
                        <img src={shoe1} alt='shoe1' style={{ width: '5rem', height: '5rem' }} />
                    </div>

                </div>

                <div className='two'>
                    <div className='image'>
                        <img src={shoe2} alt='shoe2' />
                    </div>

                </div>

                <div className='two'>
                    <div className='image'>
                        <img src={shoe3} alt='shoe3' style={{ width: '7rem', height: '5rem' }} />
                    </div>

                </div>

                <div className='two'>
                    <div className='image'>
                        <img src={shoe4} alt='shoe4' style={{ width: '8.5rem', height: '6.5rem' }} />
                    </div>

                </div>

                <div className='two'>
                    <div className='image'>
                        <img src={shoe5} alt='shoe5' style={{ width: '7rem', height: '7rem' }} />
                    </div>

                </div>
            </div>

            <div className='label'>
                <div className='name' >
                    <p>Top Offers</p>
                </div>
                <div className='labels' style={{ background: '#F1EDEB', color: '#491C1E' }}>
                    <p>Heels</p>
                </div>
                <div className='labels' style={{ background: '#F0F0F0', color: '#555555' }}>
                    <p>Sneakers</p>
                </div>
                <div className='labels' style={{ background: '#EDF3F9', color: '#49535E' }}>
                    <p>Casual Shoes</p>
                </div>
                <div className='labels' style={{ background: '#EBF2F4', color: '#46443E' }}>
                    <p>Running Shoes</p>
                </div>
                <div className='labels' style={{ background: '#FBF6F0', color: '#4C4233' }}>
                    <p>Flats</p>
                </div>
            </div>

            <div className='speciality'>
                <div className='slider'>
                    <div className='main'>
                        <div className='left'>
                            <button><i
                                className="fas fa-chevron-down"
                                style={{ transform: 'rotate(90deg)' }}
                            ></i></button>
                        </div>
                        <div className='product'>
                            <div className='big_shoe'>
                                <img src={shoe6} style={{ width: '18rem', height: '12rem' }} />
                            </div>
                            <div className='content'>
                                <div className='images'>
                                    <img src={logo} />
                                    <img src={brand1} />
                                </div>
                                <div className='prices'>
                                    <h3 id='head'>
                                        Puma 360 Pro<br />Light weight | White
                                    </h3>
                                    <p id='light'><s>₹5,999</s> From ₹2,999</p>
                                    <p id='small'>Most Comfortable Shoe Under 2K</p>
                                </div>
                            </div>
                        </div>

                        {/*<div className='product'>
                        <div className='big_shoe'>
                            <img />
                        </div>
                        <div className='content'>
                            <div className='images'>
                                <img src={logo} />
                                <img src={shoe6} />
                            </div>
                            <div className='prices'>
                                <p id='head'>
                                    Puma 360 Pro<br />Light weight | White
                                </p>
                                <p id='light'><s>₹5,999</s> From ₹2,999</p>
                                <p id='small'>Most Comfortable Shoe Under 2K</p>
                            </div>
                        </div>
                    </div>

                    <div className='product'>
                        <div className='big_shoe'>
                            <img />
                        </div>
                        <div className='content'>
                            <div className='images'>
                                <img src={logo} />
                                <img src={shoe6} />
                            </div>
                            <div className='prices'>
                                <p id='head'>
                                    Puma 360 Pro<br />Light weight | White
                                </p>
                                <p id='light'><s>₹5,999</s> From ₹2,999</p>
                                <p id='small'>Most Comfortable Shoe Under 2K</p>
                            </div>
                        </div>
                    </div>

                    <div className='product'>
                        <div className='big_shoe'>
                            <img />
                        </div>
                        <div className='content'>
                            <div className='images'>
                                <img src={logo} />
                                <img src={shoe6} />
                            </div>
                            <div className='prices'>
                                <p id='head'>
                                    Puma 360 Pro<br />Light weight | White
                                </p>
                                <p id='light'><s>₹5,999</s> From ₹2,999</p>
                                <p id='small'>Most Comfortable Shoe Under 2K</p>
                            </div>
                        </div>
                    </div> */}

                        <div className='aright'>
                            <button><i
                                className="fas fa-chevron-down"
                                style={{ transform: 'rotate(-90deg)' }}
                            ></i></button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='step'>


                <div className='points'>
                    <h3>About Step +</h3>
                    <h1>Unlock the best of the<br />deals with step+</h1>
                    <ul>
                        <li>Early access to season sales</li>
                        <li>Free shiping on minimum value orders as well</li>
                        <li>Speical collection early access</li>
                        <li>Exciting discounts</li>
                    </ul>
                    <JoinButton />
                </div>

                <div className='showcase'>
                    <div className='shelf'>
                        <img src={shoe7} alt='shoe' />
                    </div>
                    <div className='shelf'>
                        <img src={shoe8} alt='shoe' />
                    </div>
                    <div className='shelf'>
                        <img src={shoe9} alt='shoe' />
                    </div>
                </div>
            </div>

        </div>


    )
}

export default HomePage