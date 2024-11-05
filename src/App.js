import Home from './pages/Home';
import Courses from './pages/Courses'
import FAQ from './pages/FAQ'
import Testimonials from './pages/Testimonial'
import About from './pages/About'
import ContactUs from './pages/ContactUs';
import { BrowserRouter as Router,  Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={< About/>} />
          <Route path="/testimonials" element={< Testimonials/>} />
          <Route path="/faqs" element={< FAQ/>} />
          <Route path="/courses" element={< Courses/>} />
          <Route path='/contact-us' element={<ContactUs/>}  />
        </Routes>
      </Router>
    </>
  );
}

export default App;
