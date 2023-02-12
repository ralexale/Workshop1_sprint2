import React from 'react'
import './styles.scss';

//icons
import enterpriseLogo from '../assets/img/logo.svg';
import mediaIcon1 from '../assets/img/icon-facebook.svg';
import mediaIcon2 from '../assets/img/icon-instagram.svg';
import mediaIcon3 from '../assets/img/icon-pinterest.svg';
import mediaIcon4 from '../assets/img/icon-twitter.svg';
const Footer = () => {
    
  return (
    <>
        <section className='footer-container sec1'>
            <div className="footer-container__incons-div">
                    <figure className='footer-container__enterprise-logo'><img src={enterpriseLogo} alt="" /></figure>
                <div class="footer-container__media-icons">
                        <figure className="footer-container__face"><img src={mediaIcon1} alt="" /></figure>
                        <figure className="footer-container__twiter"><img src={mediaIcon2} alt="" /></figure>
                        <figure className="footer-container__pinterest"><img src={mediaIcon3} alt="" /></figure>
                        <figure className="footer-container__instagram"><img src={mediaIcon4} alt="" /></figure>
                </div>
            </div>
            <div class="footer-container__div-list">
                <ul>
                    <li><a href="#about" className='subray'>About</a></li>
                    <li><a href="#about" className='subray'>Careers</a></li>
                    <li><a href="#products" className='subray'>Events</a></li>
                    <li><a href="#products" className='subray'>Products</a></li>
                    <li><a href="#suport" className='subray'>Support</a></li>
                </ul>
                <p>2021 Loopstudios. All rights reserved.</p>
            </div> 
        </section>
        <section className='footer-container sec2'>
            <div className="footer-container__incons-div">
                    <figure className='footer-container__enterprise-logo'><img src={enterpriseLogo} alt="" /></figure>
                
            </div>
            <div class="footer-container__div-list">
                <ul>
                    <li><a href="#about" className='subray'>About</a></li>
                    <li><a href="#about" className='subray'>Careers</a></li>
                    <li><a href="#products" className='subray'>Events</a></li>
                    <li><a href="#products" className='subray'>Products</a></li>
                    <li><a href="#suport" className='subray'>Support</a></li>
                </ul>
                <div class="footer-container__media-icons">
                        <figure className="footer-container__face"><img src={mediaIcon1} alt="" /></figure>
                        <figure className="footer-container__twiter"><img src={mediaIcon2} alt="" /></figure>
                        <figure className="footer-container__pinterest"><img src={mediaIcon3} alt="" /></figure>
                        <figure className="footer-container__instagram"><img src={mediaIcon4} alt="" /></figure>
                </div>
                <p>2021 Loopstudios. All rights reserved.</p>
            </div> 
        </section>
    </>
  )
}



export default Footer
