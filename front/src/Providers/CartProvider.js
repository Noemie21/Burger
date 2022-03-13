import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext()

export const CartProvider = (props) => {

    let [cart, setCart] = useState([])
    let [total, setTotal] = useState(0)
    //localStorage.setItem("cart", [])

    // useEffect(() => {
    //     setCart(props);
    // }, [props]);

    return (
        <CartContext.Provider value={{cart, setCart, total, setTotal}} >
            {props.children}
        </CartContext.Provider>
    )

}
