import React from 'react';
import { Link } from 'react-router-dom';
import {FaEnvelopeOpenText} from "react-icons/fa";
import "./contact.css";

export const Email = () => {
  return (
    <section id="Contacts">
    <div className="contact-center">
        <div className="contact-container">
            <div className="contact-row">
                <h1>CONTACT</h1>
                
                <p>Don't be shy! Hit me up! 👇</p>
            </div>
            <div className="email-contact">
            <h1><FaEnvelopeOpenText /></h1>
            <h3>Email <Link to="mailto:vigneshwaran.ms2001@gmail.com"><h4>vigneshwaran.ms2001@gmail.com</h4></Link></h3>
            </div>
        </div>
    </div>
    </section>
  )
}
