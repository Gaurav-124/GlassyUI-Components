import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-description'>
        <p>
          Elevate your UI with our collection of beautifully crafted,
          glassmorphic components. Perfect for creating modern, sleek interfaces
          with depth and style.
        </p>
      </div>
      <div className='footer-links'>
        <div className='social-media'>
          <p>Social</p>
          <div className='social-icons'>
            <a href='#'>
              <i className='fa-brands fa-instagram'></i>
            </a>
            <a href='#'>
              <i className='fa-brands fa-facebook'></i>
            </a>
            <a href='#'>
              <i className='fa-brands fa-youtube'></i>
            </a>
            <a href='#'>
              <i className='fa-brands fa-x-twitter'></i>
            </a>
          </div>
        </div>
        <div className='footer-divider'></div>
        <div className='footer-nav'>
          <Link to='/slider-details'>Sliders</Link>
          <br />
          <Link to='/speed-dial-details'>Speed Dial</Link>
          <br />
          <Link to='/button-details'>Buttons</Link>
          <br />
          <Link to='/input-details'>Inputs</Link>
          <br />
          <Link to='/card-details'>Cards</Link>
        </div>
        <div className='footer-nav'>
          <Link to='/progress-bar-details'>Progress Bar</Link>
          <br />
          <Link to='/modal-details'>Modals</Link>
          <br />
          <Link to='/navigation-details'>Navigation</Link>
          <br />
          <Link to='/popup-details'>Popups</Link>
          <br />
          <Link to='/textarea-details'>Textarea</Link>
        </div>
      </div>
      <p className='footer-rights'>
        &copy; 2023 GlassyUI. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
