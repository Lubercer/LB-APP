import { Link } from "react-router-dom";

const Item = ({ items }) => {
    return (
        <ul class="cards">
            <Link to={`/item/${items.id}`}>
                <a href="" class="card">
                    <img src={items.thumbnail} class="card__image" alt="" />
                    <div class="card__overlay">
                        <div class="card__header">
                            <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                            <img class="card__thumb" src="https://i.imgur.com/7D7I6dI.png" alt="" />
                            <div class="card__header-text">
                                <h3 class="card__title">{items.title}</h3>
                                <span class="card__status">{items.id}</span>
                            </div>
                        </div>
                        <p class="card__description">${items.price}</p>
                        <div>
                            <button id="buttonComprar">
                                COMPRAR</button>
                        </div>
                    </div>
                </a>
            </Link>
        </ul>
    );
}



export default Item;