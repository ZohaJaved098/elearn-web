import React from 'react'
import Navbar from '../component/Navbar'
import FAQ from '../pages/FAQ'
const About = () => {
  return (
    <div className='about'>
      <Navbar></Navbar>
      <div className="about-heading">
        <h1>About  E-Learn</h1>
      </div>
      <div className="about-contents">
        <div className="column">
          <h2>Our Vision</h2>
          <p>We envision a world where everyone interested in computer science has easy access to free, high-quality learning opportunities. By curating courses from reputable platforms such as Coursera, we aim to streamline the learning process and support your journey in the tech world.</p>
        </div> 
        <div className="column">
          <h2>What We Offer</h2>
          <ul>
            <li><p>We collect and organize free computer science courses from leading e-learning platforms, saving you time and effort in finding the right resources.</p></li>
            <li><p>Access a wide range of topics and skills related to computer science all in one place, tailored to meet diverse learning needs.</p></li>
          </ul>
        </div>  
        <div className="column">
          <h2>Our Values</h2>

          <p>We are committed to providing free educational resources to learners around the world. We ensure that the courses we feature are from reputable sources and meet high standards of quality. We strive to make the process of finding and accessing educational content as straightforward as possible.</p>
          
          </div>
          <div className="column">
          
          <h2>Join Us</h2>
          <p>Whether you're looking to enhance your skills, explore new topics, or start a career in computer science, E-Learn is here to support your educational journey. Explore our curated collection of courses and start learning today!</p> 

          </div>
          
        </div>
        <FAQ></FAQ>
      

    </div>
  )
}

export default About
