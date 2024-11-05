import React from 'react'
import "../css/styles.css"
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <a className='navbar' to="index.html">E-Learn</a>
      <input type="checkbox" id="sidebar-active"/>
      <label htmlFor="sidebar-active" className="open-sidebar-button">
        <svg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 -960 960 960" width="32"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
      </label>      
      <label id="overlay" htmlFor="sidebar-active"></label>      
      <div className="links-container">
        <label htmlFor="sidebar-active" className="close-sidebar-button">
          <svg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 -960 960 960" width="32"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
        </label>
        <Link to="/">Home</Link> 
        <Link to="/courses">Courses</Link>
        <Link to="/about">About</Link>
        <Link to="/contact-us">Contact Us</Link> 
      </div>
    </nav>

  )
}

export default Navbar
