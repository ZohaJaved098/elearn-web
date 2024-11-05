import React from "react";
import Navbar from "../component/Navbar";
function ContactUs() {
    const [result, setResult] = React.useState("");
  
    const onSubmit = async (event) => {
      event.preventDefault();
      const formData = new FormData(event.target);
  
      formData.append("access_key", "2af5cd54-bebd-474c-add2-f47690039c43");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  
    return (
      <>
      <Navbar></Navbar>
      <div className="contact container">
    
        <form onSubmit={onSubmit}>
        <h1>Message Me!</h1>
          <div className="field">
          <label htmlFor="name">Name: </label>
          <input type="text" name="name" required/>
          </div>
          
          <div className="field">
          <label htmlFor="email">E-mail: </label>
          <input type="email" name="email" required/>
          </div>
          
          <div className="field">
          <label htmlFor="message">Message: </label>
          <textarea name="message" required></textarea>
          </div>
          
  
          <button className="right" type="submit">Send Message</button>
          <span>{result}</span>
           
        </form>
        <div className="contact-links">
          <a href="https://www.linkedin.com/in/zoha-javed-1b5b2919a/" target="_blank" className="contact-link slide-in-right">
              <i className="fab fa-linkedin"></i> LinkedIn
          </a>
          <a href="https://wa.me/+923094048154" target="_blank" className="contact-link slide-in-left">
              <i className="fab fa-whatsapp"></i> WhatsApp
          </a>
        </div>
      </div>
      </>
      
    );
  }
export default ContactUs;