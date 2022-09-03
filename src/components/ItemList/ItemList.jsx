import ItemDetail from "../ItemDetail/ItemDetail";
import ItemCount from "../ItemCount/ItemCount";

const ItemList = ({ items }) => {
    const onAdd = (valor) => {
        (console.log(`Compraste ${valor} unidades`));
    }
    return (
        <div>{
            items.map((items, index) => {
                return (
                    <div key={index}>
                    { <ItemCount initial={1} stock={10} onAdd={onAdd} /> }
                    </div>
                )
            })
        }
        </div>
    )
}


export default ItemList;
