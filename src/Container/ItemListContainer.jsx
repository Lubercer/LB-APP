import { useEffect, useState } from "react";
import ItemCount from "../components/ItemCount/ItemCount";
import ItemList from "../components/ItemList/ItemList";

const ItemListContainer = (props) => {
    const [productos, setProductos] = useState([]);

    const buscarProductos = async () => {
        try {
            const response = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=Piercing`)
            const data = await response.json();
            setProductos(data.results);
        }catch (e) {
            console.log(e);
        }
    }
    useEffect( () => {
    const timer = setTimeout(() => {
        buscarProductos ();
    },2000);
    }, []);
const onAdd = (valor) => {
        (console.log(`Compraste ${valor} unidades`));
    }
    return (
        <div>
            <h1>{props.greeting}</h1>
            <ItemCount initial={1} stock={10} onAdd={onAdd} />
            <div>
            </div>
            <ItemList items={productos}/>
        </div>
    );
    }


export default ItemListContainer;
