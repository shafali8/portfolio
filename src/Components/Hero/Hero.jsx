import React from 'react'
import "./hero.css";
import AnchorLink from 'react-anchor-link-smooth-scroll';
const Hero = () => {
  return (
   <div className="hero" id='home'>
      
     <h2>
      <span className='highlight_bg'>I'm Shafali Sonker,
        </span> <br /><span className='job'>Frontend developer</span>
        <br /><span className='job'>UI/UX Designer</span>
      </h2>
   
     <p>
     Dynamic and detail-oriented Frontend Engineer with a strong background in HTML, CSS, JavaScript, and ReactJS, adept at creating responsive, user-friendly web applications using Tailwind CSS and Bootstrap.
     </p>
     <div className="hero-action">
      <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
      <div className="hero-resume anchor-link highlight_bg"><a href="../../assets/Shafali_Sonker_CV" download="Shafali_Resume.pdf">My Resume</a></div>
     </div>
   </div>
  )
}

export default Hero
