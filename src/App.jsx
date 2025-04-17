import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Aboutus from './components/Aboutus';
import Properties from './components/Properties';
import Contact from './components/Contact';



function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="main-content"></div>
        
          <Routes>
            
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<Aboutus />} />
            <Route path='/properties' element={<Properties />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        
      </div>
        <Footer />
    </Router>
  );
}

export default App;