

const ItemDetail = ({ items }) => {
    return (
        <div id="items">
            <img src={items.thumbnail} alt="" />
            <h5>{items.title}</h5>
            <h6>{items.id}</h6>
            <p>${items.price}</p>
            <button  id="buttonComprar">
                COMPRAR</button>
        </div>
    );
}

export default ItemDetail;