import React from 'react'
import "./Footer.scss";

function Footer() {
  return <div className='footer'>
    <div className='footer__logo'>
        <img src='../logo-black.png' alt='logo' width="150" />
    </div>
    <div className='footer__text'>
        © 2020 Kasa. All rights reserved
    </div>
  </div>
}

export default Footer