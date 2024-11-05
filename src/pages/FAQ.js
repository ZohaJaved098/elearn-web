import React from 'react'

const FAQ = () => {
  return (
    <div className="faq-container" >
      <h1>Frequenctly Asked Questions</h1>
      <ol className="faq-list">
        <li className="faq-item"><h2>What is E-Learn?</h2>
        <p>E-Learn is an online platform that aggregates free computer science courses from educational platforms such as Coursera, providing learners with easy access to a wide range of high-quality educational content.</p>
        
        </li>
        <li className="faq-item"><h2>How do I sign up for courses on E-Learn?</h2>
        <p>To sign up for courses on E-Learn, first, create an account by registering on our website. Once registered, browse the available courses and click on the course you're interested in to be redirected to the respective platform where you can enroll.
        </p></li>
        <li className="faq-item"><h2>Are the courses on E-Learn free?</h2>
        <p>Yes, all courses listed on E-Learn are free. We curate and provide links to free computer science courses available on other educational platforms. However, some platforms might offer optional paid certificates.</p></li>
        <li className="faq-item"><h2>Can I earn certificates from courses completed through E-Learn?</h2>
        <p>E-Learn itself does not provide certificates. However, the external platforms we link to offer certificates upon course completion. Please check the specific course details on the respective platform for more information on certification.</p></li>
        <li className="faq-item"><h2>How do I get support if I have issues with a course on E-Learn?</h2>
        <p>If you encounter issues with a specific course, please refer to the support options provided by the platform hosting the course . For issues related to the E-Learn website or for general inquiries, you can contact our support team through the "Contact Us" section on our website.
        </p></li>
      </ol>
      </div>
  )
}

export default FAQ
