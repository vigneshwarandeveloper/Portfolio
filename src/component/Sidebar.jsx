import React from 'react'
import logo from "../assets/logo.svg";
import "./Navbar.css";
import { FaTimes } from 'react-icons/fa';
import {Link} from "react-scroll"

export const Sidebar = ({isopen,closesidebar}) => {

  return (
    <div className='sidebar-container'>
    <aside className={`${isopen?"sidebar show-sidebar":"sidebar"}`}>
<div className="sidebar-header">
    <img src={logo} alt="noimg" className='logo'/>
    <button className="close-btn"><FaTimes onClick={closesidebar}/></button>
</div>
 <ul className="links">
    <li ><Link to="Heros"
     scroll={true} 
         offset={-430}
         duration={500}
         onClick={closesidebar}
    >Home</Link></li>

  <li><Link to="Abouts"
         scroll={true} 
         offset={-200}
         duration={500}
         onClick={closesidebar}
        >About</Link></li>

        <li><Link to="Projects"
        scroll={true} 
         offset={-100}
         duration={500}
         onClick={closesidebar}
        >Projects</Link></li>

        <li><Link to="Contacts"
        scroll={true} 
         offset={-10}
         duration={500}
         onClick={closesidebar}
        >Contact</Link></li> 
</ul>
    </aside>
   
    </div>
  )
}
