import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import "./footer.css";

export const Bottom = () => {
  return (
    <div className="footer">
    <div className="footer-center">
    <div className="container">
        <div className="footer-row">
            <h2>Copyright © 2023.All rights are reserved</h2>
            <div className="footer-links">
                <Link to="https://www.linkedin.com/in/vigneshwaran-m-626894282/"><FaLinkedin className='in'/></Link>
                <Link to="https://github.com/vigneshwarandeveloper?tab=repositories"><FaGithub
                  className='gt'
                /></Link>
            </div>
        </div>
    </div>
    </div>
    </div>
  )
}
