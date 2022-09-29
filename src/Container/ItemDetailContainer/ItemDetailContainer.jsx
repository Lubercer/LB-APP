
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail/ItemDetail";

const ItemDetailContainer = (props) => {
    const [productos, setProductos] = useState({});
    const [cargando, setCargando] = useState(false);
    const { id } = useParams ();

    useEffect(() => {
        const querydb = getFirestore();
        const queryDoc = doc(querydb, 'items', id)
        getDoc (queryDoc)
        .then(res => setProductos({id:res.id, ...res.data()}))
    }, [id]);
   
    return (
        <div>
            <ItemDetail items={productos} />
        </div>
    );
}
export default ItemDetailContainer;