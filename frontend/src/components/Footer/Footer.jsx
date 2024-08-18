import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
function Footer() {
  return (
    <div className='footer' id='footer'>
        <div className='footer-content'>
            <div className='footer-content-left'>
                <img src={assets.logo}/>
                <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Donec blandit eleifend nam nascetur varius facilisi class.</p>
                <div className='footer-social-icon'>
                    <img src={assets.facebook_icon} alt='facebook_icon' />
                    <img src={assets.twitter_icon} alt='twitter_icon' />
                    <img src={assets.linkedin_icon} alt='linkedin_icon' />
                </div>
            </div>
            <div className='footer-content-center'>
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className='footer-content-right'>
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+223-2323-212</li>
                    <li>contact@foodDel.com</li>
                </ul>
            </div>
        </div>
        <hr/>
        <p className='footer-copyright'>Copyright 2024 - All Right Reserved</p>
    </div>
  )
}

export default Footer