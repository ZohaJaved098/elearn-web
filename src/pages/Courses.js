import React from 'react';
import Navbar from '../component/Navbar';
import '../css/styles.css'
import Testimonial from './Testimonial';
const courses = [
  {
    title: "Introduction to Computers",
    description: "Learn about computer components like CPU, memory, and storage. Learn how computer system components, such as the CPU, memory, and storage devices, interact with the operating system. Gain insight into security, hardware, and software relationships.",
    url: "https://www.coursera.org/learn/introduction-to-computers"
  },
  {
    title: "Cybersecurity for Everyone",
    description: "Cybersecurity affects everyone, including in the delivery of basic products and services. If you or your organization want to better understand how to address your cybersecurity, this is the course for you and your colleagues to take -- from seasoned professionals to your non-technical colleagues.",
    url: "https://www.coursera.org/learn/cybersecurity-for-everyone"
  },
  {
    title: "Machine Learning",
    description: "Learn about the most effective machine learning techniques, and gain practice implementing them and getting them to work for yourself.",
    url: "https://www.coursera.org/learn/machine-learning"
  },
  {
    title: "Python for Everybody",
    description: "This Specialization builds on the success of the Python for Everybody course and will introduce fundamental programming concepts including data structures, networked application program interfaces, and databases, using the Python programming language.",
    url: "https://www.coursera.org/specializations/python"
  },
  {
    title: "Introduction to Data Science",
    description: "This specialization provides an introduction to data science using the Python programming language. You will learn the basics of data science, and how to use Python to clean, analyze, and visualize data.",
    url: "https://www.coursera.org/specializations/data-science-python"
  },
  {
    title: "Build a free website with WordPress",
    description: "A project based course where You will learn all about building your first ever website with wordpress, using plugins and other features of wordpress. After completing this project, you will be able to create a website, select and modify the main features such as a color scheme, a logo or a menu, add pages and create articles. WordPress is an easy and free platform that provides all the tools you need to create an organized and visually appealing product while offering potential added customization and tools at a low price. Everything for your website is available on this platform! ",
    url: "https://www.coursera.org/projects/build-free-website-wordpress"
  },
  {
    title: "HTML, CSS, and Javascript for Web Developers",
    description: "Learn new concepts from industry experts; Gain a foundational understanding of a subject or tool; Develop job-relevant skills with hands-on projects; Earn a shareable career certificate",
    url: "https://www.coursera.org/learn/html-css-javascript-for-web-developers"
  },
  {
    title: "Algorithms Specialization",
    description: "This Specialization covers the essential information that every serious programmer needs to know about algorithms and data structures, with emphasis on applications and scientific performance analysis of Java implementations.",
    url: "https://www.coursera.org/specializations/algorithms"
  },
  {
    title: "From Excel to Power BI",
    description: "Learners will be instructed in how to make use of Excel and Power BI to collect, maintain, share and collaborate, and to make data driven decisions",
    url: "https://www.coursera.org/learn/from-excel-to-power-bi"
  },
  
  {
    title: "AI For Everyone",
    description: "AI is not only for engineers. If you want your organization to become better at using AI, this is the course to tell everyone, especially your non-technical colleagues, to take.",
    url: "https://www.coursera.org/learn/ai-for-everyone"
  },
  {
    title: "Preparing to Manage Human Resources",
    description: "This course provides a foundation for developing your own approach to skillfully managing employees by illustrating alternative human resource management (HRM) strategies, introducing the importance of the legal context, and thinking about what motivates employees. This will then give you the factual and conceptual basis for developing specific, critical HRM skills in subsequent courses on hiring employees, managing performance, and rewarding employees. ",
    url: "https://www.coursera.org/learn/managing-human-resources"
  }
];


const Courses = () => {
  return (
    <div className='courses'>
      <Navbar></Navbar>
      <h1>Free Computer Science Courses</h1>
      <div id="courses-container">
        
        {courses.map((course, index) => (
          <div key={index} className="course">
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <a href={course.url} target="blank" >Learn more</a>
          </div>
        ))}
      </div>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Courses;

