//@ts-check
import React from 'react';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer.jsx"
import Cart from"./Components/Cart/Cart.jsx";
import NavBar from "./Components/Navbar/NavBar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer"
import CheckOut from './Components/CheckOut/CheckOut.jsx';
import Footer from './Components/Footer/Footer'






function App() {

  

  return (
    <BrowserRouter>
    
    <div>
    <NavBar  />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:idCategory" element={<ItemListContainer />} />
        <Route path="/item/:idItem" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<CheckOut />} />
      </Routes>
      <Footer />
    </div>

    </BrowserRouter>
  );
}

export default App;
