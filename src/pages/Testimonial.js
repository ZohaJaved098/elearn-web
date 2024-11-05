import React from 'react'
import image1 from '../images/st1.png'
import image2 from '../images/st2.png'
const Testimonial = () => {
  const data=[
    {
      name: "Saniya Ismail",
      img: image1,
      testimonial: " Lorem ipsum dolor sit amet consectetur adipisicing elit. A quia tempora possimus, enim cumque eum! Nemo, eveniet voluptate. Itaque consequatur dicta adipisci quo consectetur, nam qui sint dolor corrupti placeat? " 
    },
    {
      name: "Ahmed",
      img: image2,
      testimonial: " Lorem ipsum dolor sit amet consectetur adipisicing elit. A quia tempora possimus, enim cumque eum! Nemo, eveniet voluptate. Itaque consequatur dicta adipisci quo consectetur, nam qui sint dolor corrupti placeat? " 
    },
    {
      name: "Zoha Javed",
      img: image1,
      testimonial: " Lorem ipsum dolor sit amet consectetur adipisicing elit. A quia tempora possimus, enim cumque eum! Nemo, eveniet voluptate. Itaque consequatur dicta adipisci quo consectetur, nam qui sint dolor corrupti placeat? " 
    },
    {
      name: "Javed Alam",
      img: image2,
      testimonial: " Lorem ipsum dolor sit amet consectetur adipisicing elit. A quia tempora possimus, enim cumque eum! Nemo, eveniet voluptate. Itaque consequatur dicta adipisci quo consectetur, nam qui sint dolor corrupti placeat? " 
    },
    {
      name: "Saman Javed",
      img: image1,
      testimonial: " Lorem ipsum dolor sit amet consectetur adipisicing elit. A quia tempora possimus, enim cumque eum! Nemo, eveniet voluptate. Itaque consequatur dicta adipisci quo consectetur, nam qui sint dolor corrupti placeat? " 
    },
    {
      name: "Unaiza Javed",
      img: image1,
      testimonial: " Lorem ipsum dolor sit amet consectetur adipisicing elit. A quia tempora possimus, enim cumque eum! Nemo, eveniet voluptate. Itaque consequatur dicta adipisci quo consectetur, nam qui sint dolor corrupti placeat? " 
    },
    {
      name: "Tayyab Alam",
      img: image2,
      testimonial: " Lorem ipsum dolor sit amet consectetur adipisicing elit. A quia tempora possimus, enim cumque eum! Nemo, eveniet voluptate. Itaque consequatur dicta adipisci quo consectetur, nam qui sint dolor corrupti placeat? " 
    }
  ]
  return (
    <div className='test' >
      <h1>Testimonials</h1>
      <h2>What Students say about courses</h2>
      <div className="wrapper">
      {data.map((data, index) => (
          <div key={index} className="item">
            <img src={data.img} alt="img fom freepik" />
            <h3>{data.name}</h3>
            <p><i class="fa-solid fa-quote-left"></i>{data.testimonial}<i class="fa-solid fa-quote-right"></i></p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonial
