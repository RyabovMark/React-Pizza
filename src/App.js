import React from 'react';
import './index.scss';
import Home from "./components/Pages/Home";
import ShopCart from "./components/Pages/ShopCart";
import {Route, Routes} from "react-router-dom";
import SinglePage from "./components/Pages/SinglePage";
import Layout from "./components/Pages/Layout";

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='shop-cart' element={<ShopCart/>}/>
            <Route path='pizza/:id' element={<SinglePage/>}/>
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
