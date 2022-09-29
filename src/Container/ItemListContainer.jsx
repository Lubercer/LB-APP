import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../components/ItemList/ItemList";
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";


const ItemListContainer = (props) => {
    const { idCategoria } = useParams();
    const [productos, setProductos] = useState([]);
    useEffect(() => {
        const querydb = getFirestore();
        const queryCollection = collection(querydb, 'items');
        if (idCategoria) {
            const queryFilter = query(queryCollection, where('categoryId', '==', idCategoria))
            getDocs(queryFilter)
                .then((res) => setProductos(res.docs.map(productos => ({ id: productos.id, ...productos.data() }))))
        }
        else {
            getDocs(queryCollection)
                .then(res => setProductos(res.docs.map(productos => ({ id: productos.id, ...productos.data() }))))
        }
    }, [idCategoria]);
    return (
        <div>
            <h1>{props.greeting}</h1>
            <div>
            </div>
            <ItemList items={productos} />
        </div>
    );
}


export default ItemListContainer;
