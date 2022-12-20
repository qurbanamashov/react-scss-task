import React from 'react'
import './navbar.scss'
function Navbar() {
  return (
    <nav>
        <div className='navbar'>
            <div className='navbar_img'>
                <img src="https://www.asus.com/media/img/2017/images/logo-rog.svg" alt="" />
            </div>
            <div className='navbar_menu'>
                <ul>
                    <li>Praducts</li>
                    <li>Innovation</li>
                    <li>Downloades</li>
                    <li>Community</li>
                    <li>what's hot</li>
                    <li>Support</li>
                </ul>
                <div className='navbar_menu_img'>
                    <img src="https://banner2.cleanpng.com/20180823/ozp/kisspng-asus-laptop-logo-brand-font-krypton-technologies-device-support-5b7eae6ce474d3.9411941915350288449358.jpg" alt="" />
                </div>
            </div>
            <div className='navbar_icon'>
            <i class="fa-solid fa-magnifying-glass"></i>
            <i class="fa-regular fa-user"></i>
            </div>
        </div>
        <div className='navbar_red'>
            <p>Create an account for better product support!</p>
        </div>
    </nav>
  )
}
export default Navbar