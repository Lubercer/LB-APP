import ItemDetail from "../ItemDetail/ItemDetail";
import ItemCount from "../ItemCount/ItemCount";
import Item from "../Item/Item";

const ItemList = ({ items }) => {
    return (
        <div className="d-flex flex-wrap">{
            items.map((items, index) => {
                return (               
                    <div className="col-md-4" key={index}>
                        <Item key={items.id} items={items} />
                    </div>
                )
            })
        }
        </div>
    )
}


export default ItemList;
