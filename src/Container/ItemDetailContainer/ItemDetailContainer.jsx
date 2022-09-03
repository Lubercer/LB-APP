
import { useEffect, useState } from "react";
import ItemDetail from "../../components/ItemDetail/ItemDetail";

const ItemDetailContainer = (props) => {
    const [productos, setProductos] = useState([]);

    const buscarProductos = async () => {
        try {
            const response = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=Piercing`)
            const data = await response.json();
            setProductos(data.results[1]);
        } catch (e) {
            console.log(e);
        }
    }
    useEffect(() => {
            buscarProductos();
    }, []);

    return (
        <div>
            {productos && <ItemDetail items={productos}/>}
        </div>
    );
}
export default ItemDetailContainer;