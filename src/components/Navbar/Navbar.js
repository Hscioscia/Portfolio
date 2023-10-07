import React from "react";
import './Navbar.css';
import {Link} from 'react-scroll';
import menu from '../../assets/menu.png'
import { useState } from "react";
import SocialLinks from "../Social/SocialLinks";

const Navbar = () =>{
    const [showMenu, setShowMenu] = useState(false)
    return (
        <nav className="navbar">
            <SocialLinks />
            <div className="desktopMenu">
            <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-150} duration={500} className="menuItemList">Home</Link>
            <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-50} duration={500} className="menuItemList">Sobre Mi</Link>
            <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-50} duration={500} className="menuItemList"> Contacto </Link>
            </div>
            {/*Mobile Menu*/}
            <img src={menu} alt="Logo" className='bogMenu' onClick={()=>setShowMenu(!showMenu)} />
            <div className="navMenu" style={{display: showMenu? 'flex':'none'}}>
            <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-150} duration={500} className="itemList" onClick={()=>setShowMenu(false)}>Home</Link>
            <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-100} duration={500} className="itemList" onClick={()=>setShowMenu(false)}>Sobre Mi</Link>
            <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-50} duration={500} className="itemList" onClick={()=>setShowMenu(false)}> Contacto </Link>
            </div>
        </nav>
    )
}

export default Navbar;