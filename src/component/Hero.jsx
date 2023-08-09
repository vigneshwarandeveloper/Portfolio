import React from 'react';
import "./hero.css";
import auth from "../assets/vignesh.jpeg";
import {FaBootstrap, FaCss3Alt, FaGithub, FaHtml5, FaJsSquare, FaLinkedin, FaReact} from "react-icons/fa";
import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <section id="Heros">
    <div className="header-center">
    <div className="header">
      <div className="container">
        <div className="row">
        <div className="image-container">
          <img src={auth} alt="no img" className='imag-container' />
        </div>
          <div className="header-txt">
            <div className="title">
              <h1>Front-End React Developer 👋</h1>
              <p className='details'>Hi,I'm Vigneshwaran.A passionate Front-end React Developer.  </p>
              <div className="my-links">
      <li className='link'><Link to="https://github.com/vigneshwarandeveloper?tab=repositories"><FaGithub className='git'/></Link></li>

    <li  className='link'><Link to="https://www.linkedin.com/in/vigneshwaran-m-626894282/"><FaLinkedin className='linkedin'/></Link></li>
      </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   
    <div className="tech-stack">
      <p><strong>Tech Stack:</strong></p>
      <ul className="tech">
      <li><FaHtml5 className='html'/></li>
    <li><FaCss3Alt  className='css'/></li>
    <li><FaJsSquare className='js'/></li>
    <li><FaBootstrap className='boot'/></li>
    <li><FaReact  className='react'/></li>
      </ul>
    </div>
    </div>
    </section>
  )
}
