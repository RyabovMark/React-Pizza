import React, {useEffect, useState} from 'react';
import './index.scss';
import Header from "./components/Header/Header";
import Home from "./components/Pages/Home";
import ShopCart from "./components/Pages/ShopCart";
import {Route, Routes} from "react-router-dom";

function App() {

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://62b626ae42c6473c4b403a58.mockapi.io/pizzas')
      .then(res => res.json())
      .then(arr => setItems(arr))
      .then(() => setIsLoading(false));
  }, [])

  return (
    <div className="wrapper">
      <div className="container">
        <Header/>
        <Routes>
          <Route path='/' element=
            {
              <Home items={items}
                    isLoading={isLoading}
              />
            }
          />
          <Route path='/shop-cart' element={<ShopCart/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
