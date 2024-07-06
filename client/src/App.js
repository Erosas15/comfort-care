import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// importing components
import Header from './components/Header';
import Footer from './components/Footer';

import HomePage from "./components/HomePage";
import AboutUsPage from "./components/AboutUsPage";
import IndependentLivingPage from "./components/IndependentLivingPage";
import PartnershipPage from './components/PartnershipPage';
import ContactUsPage from './components/ContactUsPage'; 

function App(){
  return (
    <Router>
        <Header/>

        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/about-us" element={<AboutUsPage/>}/>
          <Route path="/independent-living" element={<IndependentLivingPage/>}/>
          <Route path="/partnership" element={<PartnershipPage/>}/>
          <Route path="/contact-us" element={<ContactUsPage/>}/>
        </Routes>

        <Footer/>
    </Router>
  )
}


export default App;