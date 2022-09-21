
import React from "react";
import { useCartContext } from "../../context/CardContext";


const ItemCart = ({items}) => {
    const {borrarCarrito} = useCartContext();
    return (
    <>
    <div className="itemCart">
            <img src={items.thumbnail} alt={items.title} />
        </div>
        <div>
            <p>Titulo: {items.title}</p>
            <p>Cantidad: {items.quantity}</p>
            <p>precio: ${items.price}</p>
            <p>Subtotal: ${items.quantity * items.price}</p>
            <button onClick={() => borrarCarrito(items.id)}>Eliminar</button>
            <br />
        </div></>
    ) 
}


export default ItemCart;