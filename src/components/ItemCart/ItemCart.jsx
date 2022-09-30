
import React from "react";
import { useCartContext } from "../../context/CardContext";


const ItemCart = ({items}) => {
    const {borrarCarrito} = useCartContext();
    return (
    <>
    {/* <div className="Card">
            <img src={items.image} alt={items.title} />
        </div>
        <div>
            <p>Titulo: {items.title}</p>
            <p>Cantidad: {items.quantity}</p>
            <p>precio: ${items.price}</p>
            <p>Subtotal: ${items.quantity * items.price}</p>
            <button onClick={() => borrarCarrito(items.id)}>Eliminar</button>
            <br />
        </div */}
        <ul className="cards"> 
            <div href="" className="card">
                <img src={items.image} class="card__image" alt="" />
                <div className="card__overlay">
                    <div class="card__header">
                        <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                        <img className="card__thumb" src="https://i.ibb.co/1bYFjYF/Whats-App-Image-2022-09-30-at-4-48-09-PM.jpg" alt="" />
                        <div className="card__header-text">
                            <h3 className="card__title">{items.title}</h3>
                            <span className="card__status">{items.id}</span>
                        </div>
                    </div>
                    <p className="card__description">${items.price}</p>
                <p id="subCompra">Cantidad: {items.quantity}</p>
                    <p id="subCompra">Subtotal: ${items.quantity * items.price}</p>
            <button onClick={() => borrarCarrito(items.id)}>Eliminar</button>
                </div>
            </div>
    </ul>
        </>
    ) 
}


export default ItemCart;