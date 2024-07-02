import React, { useRef, useState } from 'react'
import './navbar.css'
import logo from "../../assets/logo.svg"
import underline from "../../assets/nav_underline.svg"
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from "../../assets/menu_open.svg";

const Navbar = () => {

  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right="0";
  }
  const closeMenu = () => {
    menuRef.current.style.right="-350px";
  }
  return (
    <div className="navbar">
     
      <AnchorLink className='anchor-link nav-logo' href='#home'>
          <p>sha<span className='highlight_bg'>FaLi.</span></p>
        </AnchorLink>
     <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open'/>
     <ul ref={menuRef} className="nav-menu">
      <div onClick={closeMenu} className="nav-mob-close">X</div>
      <li>
        <AnchorLink className='anchor-link' href='#home'>
          <p className='nav-link'>Home</p>
        </AnchorLink>
        </li>
      <li>
        <AnchorLink className='anchor-link' href='#about'>
          <p className='nav-link'>About Me</p>
        </AnchorLink>
      </li>
      <li>
        <AnchorLink className='anchor-link' href='#mywork'>
          <p className='nav-link' >My work</p>
        </AnchorLink>
      </li>
      <li>
        <AnchorLink className='anchor-link' href='#contact'>
          <p className='nav-link'>Contact</p>
        </AnchorLink>
      </li>
     </ul>

     <div className="nav-contact">
      <AnchorLink className='anchor-link' href='#contact'>
        Connect With Me
      </AnchorLink>
     </div>
    </div>
  )
}

export default Navbar
