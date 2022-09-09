import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemCount from "../components/ItemCount/ItemCount";
import ItemList from "../components/ItemList/ItemList";

const ItemListContainer = (props) => {
    const {idCategoria} = useParams();
    const [productos, setProductos] = useState([]);
    const buscarProductos = async () => {
        try {
            const response = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=Piercing+${idCategoria||""}`)
            const data = await response.json();
            setProductos(data.results);
        }catch (e) {
            console.log(e);
        }
    }
    useEffect( () => {
    buscarProductos ();

    }, [idCategoria]);
    return (
        <div>
            <h1>{props.greeting}</h1>
            <div>
            </div>
            <ItemList items={productos}/>
        </div>
    );
    }


export default ItemListContainer;
