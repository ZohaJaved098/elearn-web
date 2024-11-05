import React from 'react'
import Navbar from '../component/Navbar'
import Header from '../component/Header'
import Testimonials from '../pages/Testimonial'
import FAQ from '../pages/FAQ'
const Home = () => {
  return (
    <>
      <Navbar></Navbar>
      <Header></Header>
      <Testimonials></Testimonials>
      <FAQ></FAQ>
    </>
  )
}

export default Home
