import React, { useState, useEffect } from 'react';

const ItemCount = ({ initial, stock, onAdd }) => {
    const [count, setCount] = useState(parseInt(initial));
    const restProduct = () => {
        setCount(count - 1);
    }
    const sumProduct = () => {
        setCount(count + 1);
    }
    useEffect(() => {
        setCount(parseInt(initial));
    }, [initial])

    return (
        <div id='count'>
            <button disabled={count <= 1} onClick={restProduct}>-</button>
            <span id='spanCount'>{count}</span>
            <button disabled={count >= stock} onClick={sumProduct}>+</button>
            <div>
                <button disabled={count >= stock} onClick={() => onAdd(count)}>Agregar al carrito</button>
            </div>
        </div>
    );
}
export default ItemCount;