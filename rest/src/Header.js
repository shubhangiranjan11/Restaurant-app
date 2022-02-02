import React from "react";
import image from './CANTEEN.png';
import Footer from "./Footer";
import logo from './star2.png';

function Header(params) {
    return (
        <>
            <div className='container'>
                <div className='header'>
                    <div className='image'>
                        <img src={image} className="can" />

                        <div className='res'>
                            <h1 className='name'>AADIL RESTAURANT</h1>
                            <p> <img src={logo} className="black" /><span>U.S Certified</span></p>
                            <div className='sec_container'>
                                <img src={logo} className="black2" />
                                <h4 className='menu'>Menu</h4>
                                <img src={logo} className="black2" />
                                <h4 className='about'>About</h4>
                                <img src={logo} className="black2" />
                                <h4 className='award'>Awards</h4>
                                <h2 className='num'>345678905<br />*We Deliver</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div></>
    )
}

export default Header;

