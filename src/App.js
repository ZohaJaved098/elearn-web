// import logo from './logo.svg';
// import TopButton from './component/TopButton';
import './App.css';
import Home from './pages/Home';
import Register from './auth/Register'
import Login from './auth/Login'
import ForgotPassword from './auth/ForgotPassword'
import Courses from './pages/Courses'
import FAQ from './pages/FAQ'
import Testimonials from './pages/Testimonial'
import About from './pages/About'
import ContactUs from './pages/ContactUs';
import { BrowserRouter as Router,  Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={< ForgotPassword/>} />
          <Route path="/about" element={< About/>} />
          <Route path="/testimonials" element={< Testimonials/>} />
          <Route path="/faqs" element={< FAQ/>} />
          <Route path="/courses" element={< Courses/>} />
          <Route path='/contact-us' element={<ContactUs/>}  />
{/* otp add krna */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
