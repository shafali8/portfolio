import React from "react";
import theme_pattenrn from "../../assets/theme_pattern.svg";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "./contact.css";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "f9aa4a5-52ca-4a7c-bcb9-e656a4d7899e");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message)
    }
  };
  return (
    <div className="contact" id="contact">
      <div className="contact-title">
        <h2>Get in <span className="highlight_bg">touch</span> </h2>
      </div>

      <div className="contact-section">
        <div className="contact-left">
          <h3 className="">Let's talk</h3>
          <p>
            I'm excited to apply for the Frontend Developer. I believe my
            experience and passion for web development make me a great fit. I
            look forward to the opportunity to contribute to your team.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
            <MdEmail />
              <p>shafalisonker6@gmail.com</p>
            </div>
            <div className="contact-detail">
              <FaPhoneAlt />
              <p>+91-7987595987</p>
            </div>
            <div className="contact-detail">
           
              <p>shafaliwebdev.in</p>
            </div>
            <div className="contact-detail"> 
              <a href="https://www.linkedin.com/in/shafali-sonker-b0568023b/b">
              <FaLinkedin />
              </a>
              <a href="https://github.com/shafali8">
              <FaGithub />
              </a>
              <a href="https://x.com/home?lang=en-in">
              <FaXTwitter />
              </a>
            </div>
          </div>
        </div>
        <form 
         onSubmit={onSubmit}
        className="contact-right">
            <label htmlFor="name">Your Name</label>
            <input type="text" placeholder="Enter your name" name="name" id="name"/>
            <label htmlFor="email">Your Email</label>
            <input type="text" placeholder="Enter your email" name="email" id="name" />
            <label htmlFor="text-msg">Write your message here</label>
            <textarea name="text-msg" id="text-meg" rows="8" placeholder="Enter your message"></textarea>
            <button className="contact-submit anchor-link" type="submit">Submit now</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
