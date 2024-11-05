import React from 'react'
import header from '../images/header image.png'
import '../css/styles.css'
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const handleRegisterClick = () => {
    navigate('/register'); 
  };
  return (
    <div className='header'>
      <img src={header} alt="E-Learn Image Illustration" />
      <div className="headtext">
        <h1>
          Welcome E-Learners!
        </h1>
        <p>
          At <b>E-Learn</b>, we make computer science education accessible to everyone. We've handpicked free courses from top platforms like <b>Coursera </b> to help you learn new skills and achieve your goals.
          
          <br /> <br />
          Explore topics like programming, data structures, AI, and cybersecurity <b>all for free</b>. Whether you're advancing your career or exploring new interests, E-Learn has you covered.
          <br /> <br />
          
          <b className='center'>Ready to Get Started? Register Now!</b>
          <br /> <br />
          Your journey in computer science begins here. Register today and discover endless possibilities with E-Learn!
        </p>
        <button onClick={handleRegisterClick} >Register Now!</button>
      </div>
    </div>
  )
}

export default Header
