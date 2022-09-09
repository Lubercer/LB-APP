
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail/ItemDetail";

const ItemDetailContainer = (props) => {
    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(false);
    const { id } = useParams ();

    const buscarProductos = async () => {
        try {
            const response = await fetch(`https://Api.mercadolibre.com/items/${id}`)
            const data = await response.json();
            setProductos(data);
            setCargando(true)
        } catch (e) {
            console.log(e);
        }
    }
    useEffect(() => {
            buscarProductos();
    }, [id]);
    
    if (!cargando) {
        return (
            <button id="cargando" type="button" disabled>
            <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
            Loading...
            </button>
            );
    }
    return (
        <div>
            <ItemDetail items={productos} />
        </div>
    );
}
export default ItemDetailContainer;