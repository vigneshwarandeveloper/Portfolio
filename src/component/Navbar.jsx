import React from 'react';
import logo from "../assets/logo.svg";
import {FaBars} from "react-icons/fa";
import "./Navbar.css";
import {Link} from "react-scroll"
export const Navbar = ({opensidebar}) => {
  return (
    <div className="nav-center">
    <div className='nav-container'>
    <div className="nav-header">
        <Link to="#Heros">
        <img src={logo} alt='noimg' /> 
        </Link>
        <button className="nav-toggle">
            <FaBars onClick={opensidebar}/>
        </button>
    </div>
    <ul className="nav-links">
         <li><Link to="Heros" 
         scroll={true} 
         offset={-430}
         duration={500}
         >Home</Link></li>
        <li><Link to="Abouts"
         scroll={true} 
         offset={-200}
         duration={500}
        >About</Link></li>
        <li><Link to="Projects"
        scroll={true} 
         offset={-100}
         duration={500}
        >Projects</Link></li>
        <li><Link to="Contacts"
        scroll={true} 
         offset={-10}
         duration={500}
        >Contact</Link></li> 
    </ul>
    </div>
    </div>
  )
}
