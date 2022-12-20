import React from 'react'
import "./footer.scss"
function Footer() {
    return (
        <footer>
            <div className='footer'>
                <ul className='ul1'>
                    <li>ABOUT RUG</li>
                    <li>HOME</li>
                    <li>HOWNROOM</li>
                    <li>ACCESSIBILITY HELP</li>
                </ul>
                <ul className='ul2'>
                    <li><a href='!#'><i class="fa-brands fa-facebook-f"></i></a></li>
                    <li><a href='!#'><i class="fa-brands fa-twitter"></i></a></li>
                    <li><a href='!#'><i class="fa-brands fa-discord"></i></a></li>
                    <li><a href='!#'><i class="fa-brands fa-youtube"></i></a></li>
                    <li><a href='!#'><i class="fa-regular fa-message"></i></a></li>
                    <li><a href='!#'><i class="fa-brands fa-instagram"></i></a></li>
                </ul>
            </div>
            <div className='footer_xett'></div>
            <div className='footer_navbar'>
                <div className='footer_navbar_left'>
                    <i class="fa-solid fa-globe"></i>
                    <p>Global/Englind</p>
                </div>
                <div className='footer_navbar_right'>
                    <ul>
                        <li>TERMS OF USE NOTICE</li>
                        <li>PRIVACY POLICY</li>
                        <li>©ASUSTEK COMPUTER INC. ALL RIGHTS RESERVED.</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer