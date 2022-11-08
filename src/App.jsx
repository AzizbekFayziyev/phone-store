import React, { useEffect } from 'react';
import Navbar from './components/navigation/Navbar';
import NavigationBar from './components/navigation/NavigationBar';
import Products from './components/product/Products';
import { Routes, Route } from "react-router-dom";
import Product from './components/product/Product';

export default function App() {
  // RENDERING COMPONENTS
  return (
    <>
      <Navbar />
      <div className='app'>
        <NavigationBar />
        <Routes>
          <Route index path='/' element={<Products />} />
          <Route path='/product/:id' element={<Product />} />
        </Routes>
      </div>
    </>
  )
}
