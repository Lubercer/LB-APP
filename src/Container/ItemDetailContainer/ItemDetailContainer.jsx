
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail/ItemDetail";

const ItemDetailContainer = (props) => {
    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(false);
    const {idProducto} = useParams;
    const buscarProductos = async () => {
        try {
            const response = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=piercing`)
            const data = await response.json();
            setProductos(data.results[1]);
            setCargando(true)
        } catch (e) {
            console.log(e);
        }
    }
    useEffect(() => {
            buscarProductos();
    }, []);
    if (!cargando) {
        return (
            <button id="cargando" type="button" disabled>
            <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
            Loading...
            </button>
            );
    }
    return (
        <div>
            {productos && <ItemDetail items={productos} />}
        </div>
    );
}
export default ItemDetailContainer;