import React from 'react'
import "./about.css";
import theme_pattenrn from "../../assets/theme_pattern.svg";

const About = () => {
  return (
  <div className="about" id='about'>
   <div className="about-title">
    <h2>About <span className='highlight_bg'>me</span></h2>
    
   </div>

   <div className="about-section">
    <div className="about-left">
        <img src='https://images.pexels.com/photos/5496463/pexels-photo-5496463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt="" />
    </div>
    

    <div className="about-right">
    <div className="about-para">
        <p>
        As a dedicated and detail-oriented Frontend Engineer, I excel in developing dynamic, user-friendly web applications. My technical expertise includes HTML, CSS, JavaScript, and ReactJS, enabling me to create responsive and interactive user interfaces. I proficiently utilize modern CSS frameworks such as Tailwind CSS and Bootstrap to build visually appealing and consistent designs.
        </p>

        <p>
        My design capabilities are enhanced by my proficiency in SaaS and Figma, allowing me to craft and implement high-fidelity prototypes and comprehensive design systems. With a foundational understanding of SEO optimization.  
        </p>
      </div>

      <div className="about-skills">
        <div className="about-skill">
            <p>HTML & CSS</p> <hr style={{width: "50%"}}/>
        </div>
        <div className="about-skill">
            <p>Scss</p> <hr style={{width: "30%"}}/>
        </div>
        <div className="about-skill">
            <p>Tailwind</p> <hr style={{width: "50%"}}/>
        </div>
        <div className="about-skill">
            <p>Javascript</p> <hr style={{width: "50%"}}/>
        </div>
        <div className="about-skill">
            <p>React</p> <hr style={{width: "55%"}}/>
        </div>
      </div>
    </div>

   </div>
  </div>
  )
}

export default About
