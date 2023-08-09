import React from 'react'
import "./about.css"
import aboutimg from "../assets/about1.jpg"

export const Aboutme = () => {
    return (
      <section id="Abouts">
      <div className="about">
        <div className="about-center">
          <div className="about-container">
            <div className="about-row">
              <div className="about-img">
                <img src={aboutimg} alt="noimg"  />
              </div>
              <div className="about-txt">
                <h1>About Me</h1>
                <h2>A dedicated Front-End Developer</h2>
                <p className="about-details">
                As a Junior Front-End Developer, I possess an impressive arsenal of skills in HTML, CSS, JavaScript, React.I excel in designing and maintaining responsive websites that offer a smooth user experience. My expertise lies in crafting dynamic, engaging interfaces through writing clean and optimized code and utilizing cutting-edge development tools and techniques. I am also a team player who thrives in collaborating with cross-functional teams to produce outstanding web applications.
                </p>
              </div>
            </div>
            </div>
        </div>
        </div>
      </section>
  )
}
