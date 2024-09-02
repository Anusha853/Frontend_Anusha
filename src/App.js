import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import PlanCarousel from './components/PlanCarousel';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import ContactUs from './components/ContactUs';
import HomePage from './components/HomePage';
import AuthPage from './components/AuthPage';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navbar is always displayed */}
        
        <Routes>
          {/* Home Page Route */}
          <Route 
            path="/" 
            element={
              <>
                <Header />
                <PlanCarousel />
                <Testimonials />
                <Footer />
              </>
            } 
          />
          {/* Contact Us Route */}
          <Route path="/contact-us" element={<ContactUs />} />
          {/* Auth Page Route */}
          <Route path="/auth" element={<AuthPage />} />
          {/* Additional HomePage Route for Sign Up button */}
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
