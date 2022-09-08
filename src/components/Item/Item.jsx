const Item = ({items}) => {
    return (
    <div id="items">
<img src={items.thumbnail} alt=""/>
<div/>
<div>
<h5>{items.title}</h5>
</div>
<div>
<h6>id:{items.id}</h6>
</div>
<div> 
<button id="buttonComprar">
	COMPRAR
</button>
</div>
</div>
);
}

export default Item;