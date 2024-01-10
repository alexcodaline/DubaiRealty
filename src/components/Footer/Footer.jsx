import React from 'react'
import './Footer.scss'
import logo from "./../../img/icons/header-decoration.svg";
export default function Footer() {
    return (
        <footer className='footer'>
            <div className='container'>
                <div className='footer-container'>
                    <div className='footer-logo'>
                        <a href="/">
                            <div className="logo-footer">
                                <img src={logo} alt="logo" style={{ height: "63px",width: "40px" }} />
                            </div>
                            <span className="logo-title">DubaiRealty</span>

                            <span className="logo-text">Real Estate</span>
                        </a>
                    </div>
                    <div className='footer-links-container'>
                        <div className='footer-links'>
                            <div className='footer-links-name'>Buy</div>
                            <div className='links'>
                                <a href="/">Apartment in Dubai</a>
                                <a href="/">House in Dubai</a>
                                <a href="/">Apartment in Dubai</a>
                                <a href="/">Loft in Dubai</a>
                                <a href="/">Penthouse in Dubai</a>
                                <a href="/">Villa in Dubai</a>
                            </div>
                        </div>
                        <div className='footer-links'>
                            <div className='footer-links-name'>Services</div>
                            <div className='links'>
                                <a href="/">Property management in Dubai, UAE</a>
                                <a href="/">Sell ​​property in Dubai, UAE</a>
                                <a href="/">Rent property in Dubai, UAE</a>
                                <a href="/">Investments in Dubai, UAE</a>
                                <a href="/">Real estate for cryptocurrency in Dubai</a>
                                <a href="/">Moving to Dubai, UAE</a>
                            </div>
                        </div>
                        <div className='footer-links'>
                            <div className='footer-links-name'>Information</div>
                            <div className='links'>
                                <a href="/">Video</a>
                                <a href="/">Podcasts</a>
                                <a href="/">Laws</a>
                                <a href="/">Questions and answers</a>
                                <a href="/">Books</a>
                                <a href="/">Articles</a>
                            </div>
                        </div>
                        <div className='footer-links'>
                            <div className='footer-links-name'>Buy</div>
                            <div className='links'>
                                <a href="/">Apartment in Dubai</a>
                                <a href="/">House in Dubai</a>
                                <a href="/">Apartment in Dubai</a>
                                <a href="/">Loft in Dubai</a>
                                <a href="/">Penthouse in Dubai</a>
                                <a href="/">Villa in Dubai</a>
                            </div>
                        </div>
                        <div className='footer-links'>
                            <div className='footer-links-name'>About company</div>
                            <div className='links'>
                                <a href="/">Jobs </a>
                                <a href="/">Story</a>
                                <a href="/">Licenses</a>
                                <a href="/">Why are we</a>
                                <a href="/">Real estate agency</a>
                            </div>
                        </div>
                        <div className='footer-links'>
                            <div className='footer-links-name'>Contact</div>
                            <div className='links'>
                                <a href="/">964 Worthington Drive
                                    Dubai, UAE </a>
                                <a href="mailto:dubairealty@mail.com">dubairealty@mail.com</a>
                            </div>
                        </div>
                    </div>
                    <div className='copyright'> 
                    <span className='copyright-info'>Copyright © 2024 Dubai Realty</span>
                    </div>
                </div>
            </div>
        </footer >
    )
}
