import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import Payment from './components/Payment/Payment';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="payment" element={<Payment/>}/>
      </Routes>
    </div>
  );
}

export default App;
