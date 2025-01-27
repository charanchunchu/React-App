// import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
// import Window from './pages/Window';
// import Warranty from './pages/Warranty';
// import Door from './pages/Door';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Services from './pages/Services';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          {/* <Route path="/window" element={<Window />} />
          <Route path="/warranty" element={<Warranty />} />
          <Route path="/door" element={<Door />} /> */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;