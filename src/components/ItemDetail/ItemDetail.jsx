import ItemCount from "../ItemCount/ItemCount";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CardContext";
const ItemDetail = ({items}) => {
    const [carrito, setCarrito] = useState (false);
    const {addCart} = useCartContext();

    const onAdd = (quantity) => {
    setCarrito (true);
    // addCart (items, quantity);
    }
    return (
        <ul className="cards"> 
            <div href="" className="card">
                <img src={items.thumbnail} class="card__image" alt="" />
                <div className="card__overlay">
                    <div class="card__header">
                        <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                        <img className="card__thumb" src="https://i.imgur.com/7D7I6dI.png" alt="" />
                        <div className="card__header-text">
                            <h3 className="card__title">{items.title}</h3>
                            <span className="card__status">{items.id}</span>
                        </div>
                    </div>
                    <p className="card__description">${items.price}</p>
                        <div>
                            {
                        carrito 
                            ? <Link to="comprar">
                                <button id="buttonComprar">
                            COMPRAR</button>
                            </Link>
                        : <ItemCount initial={1} stock={10} onAdd={onAdd} /> 
                        } 
                        </div>    
                </div>
            </div>
    
    </ul>
    );
} 

export default ItemDetail;