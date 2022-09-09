
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarLightMode from './components/Navbar/NavbarLightMode';
import ItemListContainer from './Container/ItemListContainer';
import './Styles.css';
import ItemDetailContainer from './Container/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartWidget from './components/CartWidget/CartWidget';

const App = () => {
  return (
    <>
    <BrowserRouter>
    <NavbarLightMode/>
    <Routes>
      <Route path="/" element={<ItemListContainer/>} />
      <Route path="producto/:idProducto" element={<ItemListContainer/>} />
      <Route path="categoria/:idCategoria" element={<ItemListContainer/>} />
      <Route path="/item/:id" element={<ItemDetailContainer/>}/>
      <Route path="cartWidget" element={<CartWidget/>} />
    </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
