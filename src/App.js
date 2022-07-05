import React, { Component } from 'react';
import Header from './Components/Header';
import Home from './Components/Home';
import CalculatorUI from './Components/CalculatorUI';
import Quote from './Components/Quote';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
const App = () => {
  return (
    <Router>
      <div className='app' id='home'>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/calculator' element={<CalculatorUI />} />
          <Route path='/quote' element={<Quote />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
