
import React, { useState, useContext}from "react";
import { act } from "react-dom/test-utils";
const CartContext = React.createContext([]);

export const useCartContext = () => useContext (CartContext);

const CartProvider = ({children}) => {
const [cart, setCart]= useState([]);
console.log('carrito: ', cart);
const limpiarCart = () => setCart([]);

const busquedaCart = (id) => cart.find(productos => productos.id === id) ? true : false;

const borrarCarrito = (id) => setCart (cart.filter(productos => productos.id !== id));

const addCart = (items, quantity) => {
		if (busquedaCart(items.id)) {
			setCart(
				cart.map((productos) => {
					return productos.id === items.id
						? { ...productos, quantity: productos.quantity + quantity }
						: productos;
				}),
			);
		} else {
			setCart([...cart, { ...items, quantity }]);
		}
	};
    const precioTotal = () =>{
        return cart.reduce((prev, act) => prev + act.quantity * act.price, 0)
    }
    const totalProductos = () => cart.reduce((acumulador, productoActual) => acumulador + productoActual.quantity, 0);
    return (
        <CartContext.Provider value={{limpiarCart,
        busquedaCart,
        borrarCarrito, addCart, precioTotal, totalProductos,
        cart}}>
            {children} 
        </CartContext.Provider>
    )
}

export default CartProvider;