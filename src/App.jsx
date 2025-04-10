import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Masterhome from './components/Masterhome';

import Featuredhomes from './components/FeaturedHomes';
import Searchform from './components/Searchform';
import Card from './components/Card';
import Explore from './components/Explore';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Aboutus from './components/Aboutus';
import Properties from './components/Properties';


import Home from './pages/Home';

// import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="navbar-fixed-space"></div>
        <Routes>
          
        <Route path='/' element={<Home />} />
          <Route path='/about' element={<Aboutus />} />
          <Route path='/properties' element={<Properties />} />
          <Route path='/contact' element={<Contact />} />
          
        </Routes>
        <Footer />


      </div>
    </Router>
  );
}

export default App;
