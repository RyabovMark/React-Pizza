import React from 'react';
import './index.scss';
import Header from "./components/Header/Header";
import Home from "./components/Pages/Home";
import ShopCart from "./components/Pages/ShopCart";
import {Route, Routes} from "react-router-dom";


export const AppContext = React.createContext();

function App() {
  const [searchValue, setSearchValue] = React.useState('');

    return (
    <AppContext.Provider value={{searchValue, setSearchValue}}>
      <div className="wrapper">
        <div className="container">
          <Header/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/shop-cart' element={<ShopCart/>}/>
          </Routes>
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
