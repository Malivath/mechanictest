// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header'; 
import FancyButton from './Components/FancyButton'; // Adjust the path as necessary
import Services from './Components/Services';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import './App.scss';  // Global styles

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        {/* New navigation buttons section */}
        <div className="navigation-section">
          <FancyButton text="Services" to="/services" />
          <FancyButton text="About Us" to="/about" />
          <FancyButton text="Contact" to="/contact" />
        </div>
        <main>
          <Routes>
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            {/* Add more routes as needed */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;