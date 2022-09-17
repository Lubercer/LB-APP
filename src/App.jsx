
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarLightMode from './components/Navbar/NavbarLightMode';
import ItemListContainer from './Container/ItemListContainer';
import './Styles.css';
import ItemDetailContainer from './Container/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartWidget from './components/CartWidget/CartWidget';
import Form from './components/Form/Form';
import React from 'react';
import CartProvider from './context/CardContext';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <CartProvider>   
          <NavbarLightMode />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="producto/:idProducto" element={<ItemListContainer />} />
            <Route path="categoria/:idCategoria" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="cartWidget" element={<CartWidget />} />
            <Route path="/item/:id/comprar" element={<Form />} />
          </Routes>
      </CartProvider>   
      </BrowserRouter>
    </>
  );
}
export default App;
