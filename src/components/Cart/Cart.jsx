import { addDoc, collection, getFirestore } from "firebase/firestore";
import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CardContext";
import ItemCart from "../ItemCart/ItemCart";
import { useState, useContext } from "react";
import Swal from "sweetalert2"

const Cart = () => {
    const { cart, precioTotal } = useCartContext();
    const [cliente, setCliente] = useState({});

    const order = {
        cliente,
        items: cart.map(productos =>({id: productos.id, title:productos.title, quantity:productos.quantity})),
        total: precioTotal(),
    }
    const handleInput = ({name, value}) => {
        setCliente({...cliente, [name]: value})
    }
    const handleClick = () => {
        const db = getFirestore();
        const ordersCollection = collection (db,'orders');
        addDoc(ordersCollection, order)
        .then (({id})=> {
            Swal.fire ('Su pedido fue registrado con el numero de orden:', id, 'sucess')
    });
}
    if (cart.length === 0) {   
        return (
            <>
                <p id="carritoTexto">No hay elementos en el carrito</p>
                < Link to='/'>
                    <button id="linkCompra">HACER UNA COMPRA</button>
                </Link>
            </>
        )
    }
    return (
        <>{
        cart.map (items => <ItemCart key={items.id} items={items}/>)
            }
            <p id="totalPrecio">
            Total: ${precioTotal()}
            </p>
            <div>
                <form action="#">
                    <input
                    onChange={({target})=> handleInput(target)}
                    value={cliente.name}
                    name="name" 
                    type="text" 
                    placeholder="name"/>
                    <input
                    onChange={({target})=> handleInput(target)}
                    value={cliente.email}
                    name="email" 
                    type="text" 
                    placeholder="email"/>
                    <input
                    onChange={({target})=> handleInput(target)}
                    value={cliente.password}
                    name="password" 
                    type="password" 
                    placeholder="password"/>
                </form>
            </div>
            <button onClick={handleClick} id="compra">Finalizar Compra</button>
        </>
    )

}
export default Cart;