
import React, { useState, useContext}from "react";
const CartContext = React.createContext([]);

export const useCartContext = () => useContext (CartContext);

const CartProvider = ({childen}) => {
const [cart, setCart]= useState([]);
const limpiarCart = () => setCart([]);

const busquedaCart = (id) => cart.find(productos => productos.id === id) ? true : false;

const borrarCarrito = (id) => setCart (cart.filter(productos => productos.id =! id));

// const addcart = (items, quantity) => {
// 		if (busquedaCart(items.id)) {
// 			setCart(
// 				cart.map((productos) => {
// 					return productos.id === items.id
// 						? { ...productos, quantity: productos.quantity + quantity }
// 						: productos;
// 				}),
// 			);
// 		} else {
// 			setCart([...cart, { ...items, quantity }]);
// 		}
// 	};
    return (
        <CartContext.Provider value={{limpiarCart,
        busquedaCart,
        borrarCarrito}}>
            {childen} 
        </CartContext.Provider>
    )
}
export default CartProvider;