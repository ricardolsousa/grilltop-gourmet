import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Payment from './../components/Payment/Payment';
import App from './../App';

const RoutesList = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Navbar />}>
                <Route index element={<App />} />
                <Route path="payment" element={<Payment />} />
            </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default RoutesList;
