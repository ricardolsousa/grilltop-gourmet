import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import Payment from './components/Payment/Payment';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import { Provider } from 'react-redux';
import store from '../src/store/store';
import { ToastProvider } from 'react-toast-notifications';

function App() {

  return (
    <ToastProvider>
      <div className="App">
        <Provider store={store}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="payment" element={<Payment />} />
          </Routes>
        </Provider>
      </div>
    </ToastProvider>
  );
}

export default App;
