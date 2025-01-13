import React from 'react'
import '../style.css'
import footerlogo from '../../assets/footerlogo.svg'

function Footer() {
  return (
    <div className='footer'>
        <div className='footer__logo'>
            <img src={footerlogo} alt="Logo Kasa"/>
        </div>
        <h2>© 2020 Kasa. All rights reserved</h2>
    </div>
  )
}

export default Footer