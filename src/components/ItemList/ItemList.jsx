import Item from "../Item/Item";

const ItemList = ({ items }) => {
    return (
        <div>{
            items.map((items) => {
                return (
                    <Item key={items.id} items={items} />
                )
            })
        }
        </div>
    )
}


export default ItemList;
