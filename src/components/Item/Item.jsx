import { Link } from "react-router-dom";
import React, {useContext} from "react";
const Item = ({ items }) => {

    return (
        <ul>
            <Link to={`/item/${items.id}`}>
                <div href="" className="card">
                    <img src={items.image} class="card__image" alt="" />
                    <div className="card__overlay">
                        <div className="card__header">
                            <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                            <img className="card__thumb" src="https://i.imgur.com/7D7I6dI.png" alt="" />
                            <div className="card__header-text">
                                <h3 className="card__title">{items.title}</h3>
                                <span className="card__status">{items.id}</span>
                            </div>
                        </div>
                        <p className="card__description">${items.price}</p>
                    </div>
                </div>
            </Link>
        </ul>
    );
}



export default Item;