import React, {useEffect, useState} from 'react';
import './index.scss';
import Header from "./components/Header/Header";
import Home from "./components/Pages/Home";
import ShopCart from "./components/Pages/ShopCart";
import {Route, Routes} from "react-router-dom";

function App() {



  return (
    <div className="wrapper">
      <div className="container">
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/shop-cart' element={<ShopCart/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
