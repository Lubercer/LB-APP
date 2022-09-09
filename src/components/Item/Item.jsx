import { Link } from "react-router-dom";

const Item = ({items}) => {
    return (
        <div id="items">
        <img src={items.thumbnail} alt="" />
        <h5>{items.title}</h5>
        <h6>{items.id}</h6>
        <p>${items.price}</p>
        <div>
        <Link to={`/item/${items.id}`}>VER MAS</Link>
        </div>
        <button  id="buttonComprar">
            COMPRAR</button>
    </div>
);
}

export default Item;