import React from 'react'
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
import p4 from "../assets/p4.png";
import "./work.css";
import {FaExternalLinkAlt, FaGithub, } from "react-icons/fa";
import { Link } from 'react-router-dom';

export const Works = () => {
  return (
    <section id="Projects">
    <div className="works">
    <div className="work-center">
    <div className="work-container">
      <div className="Works-section">
        <div className="work-row">
          <div className="my-works">
          <h3>PORTFOLIO</h3>
          <h1>Each Project is a unique piece of development 🧩
          </h1> 

<div className="work-links">
          <div className="work">
          <div className="work-img">
            <img src={p4} alt="nop1" />
          </div>
          <div className="work-title">
            <h2>Unsplash Image</h2>
            <p>This Project is based on react,html,css
            and javascript.Is inspired by unsplash website.
            </p>
          </div>
          <div className="work-link">
            <Link to="https://scintillating-selkie-fd47ff.netlify.app">Demo Link <FaExternalLinkAlt /></Link>
            <Link to="//github.com/vigneshwarandeveloper/Unsplash-app"><FaGithub className='git' /></Link>
          </div>
          </div>

          <div className="work">
          <div className="work-img">
            <img src={p3} alt="nop2" />
          </div>
          <div className="work-title">
            <h2>Color Generator</h2>
            <p>Color generator website using react,html,css & javascript</p>
          </div>
          <div className="work-link">
            <Link to="https://superb-nasturtium-a4ee09.netlify.app">Demo Link <FaExternalLinkAlt /></Link>
            <Link to="https://github.com/vigneshwarandeveloper/Color-Generator"><FaGithub className='git' /></Link>
          </div>
          </div>

          <div className="work">
          <div className="work-img">
            <img src={p2} alt="nop3" />
          </div>
          <div className="work-title">
            <h2>Lorem Generator</h2>
            <p>Lorem generator website using react,html,css & javascript</p>
          </div>
          <div className="work-link">
            <Link to="https://aquamarine-narwhal-ad4937.netlify.app/">Demo Link <FaExternalLinkAlt /></Link>
            <Link to="//github.com/vigneshwarandeveloper/Lorem-Generator"><FaGithub className='git'/></Link>
          </div>
          </div>

          <div className="work">
          <div className="work-img">
            <img src={p1} alt="nop2" />
          </div>
          <div className="work-title">
            <h2>Comfy Sloth</h2>
            <p>This is a e-commerce website based on
            Reactjs,toastify,html,css & javascript.
            </p>
          </div>
          <div className="work-link">
            <Link to="https://jovial-donut-dbd38c.netlify.app/">Demo Link <FaExternalLinkAlt /></Link>
            <Link to="//github.com/vigneshwarandeveloper/projectp"><FaGithub className='git' /></Link>
          </div>
          </div>
          </div>




          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
    </section>
  )
}
