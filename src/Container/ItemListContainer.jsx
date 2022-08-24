import ItemCount from "../components/ItemCount/ItemCount";

const ItemListContainer = (props) => {
const onAdd = (valor) => {
    (console.log(`Compraste ${valor } unidades`));
}

    return (
        <div>
        <h1>{props.greeting}</h1>
            <ItemCount initial={1} stock={10} onAdd={onAdd}/>
        </div>
    );
}

export default ItemListContainer;
