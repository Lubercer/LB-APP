import { addDoc, collection, getFirestore } from "firebase/firestore";
import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CardContext";
import ItemCart from "../ItemCart/ItemCart";

const Cart = () => {
    const { cart, precioTotal } = useCartContext();

    const order = {
        cliente: {
            name:'Luna Bercernelo',
            mail: 'luna_bercernelo@icloud.com',
            telefono: '1132456723',
            direccion: 'Av Juan Domingo 2322'

        },
        items: cart.map(productos =>({id: productos.id, title:productos.title, quantity:productos.quantity})),
        total: precioTotal(),
    }
    const handleClick = () => {
        const db = getFirestore();
        const ordersCollection = collection (db,'orders');
        addDoc(ordersCollection, order)
        .then (({id})=> console.log(id))
    };
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
            <button onClick={handleClick} id="compra">Finalizar Compra</button>
        </>
    )

}
export default Cart;