import React from 'react';
import './index.scss';
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Main from "./components/Pages/Main";
import ShopCart from "./components/Pages/ShopCart";


function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <Header/>
        <Navigation/>
        <Main/>
        <ShopCart/>
      </div>
    </div>
  );
}

export default App;
