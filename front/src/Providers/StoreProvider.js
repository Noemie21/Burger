import React, { createContext, useState, useEffect, useRef, useContext } from 'react';
import { useParams } from 'react-router';
import { getUser, getIngredients, getProducts, getCommands } from '../Services/API';
import { useNavigate } from "react-router-dom";

export const StoreContext = createContext()

export const StoreProvider = (props) => {

    let [user, setUser] = useState([])
    let [ingredients, setIngredients] = useState([])
    let [products, setProducts] = useState([])
    let [commands, setCommands] = useState([])
    let interval = useRef()
    let navigate = useNavigate();
    function refresh() {
        getIngredients().then((data) => {
            setIngredients(data.ingredient)  
        })
        getProducts().then((data) => {
            setProducts(data.product)  
        })

    }

    useEffect(() => {
  
        getUser().then((data) => {
            setUser(data) 
        })
        getIngredients().then((data) => {
            setIngredients(data.ingredient)  
        })
        getProducts().then((data) => {
            setProducts(data.product)  
        })
        getCommands().then((data) => {
            setCommands(data.command)  
        })
        // getUser().then((data) => {
        //     if (data.role === 'admin') {
        //         navigate('/admin')
        //     }
        //     else if (data.role === 'kitchen') {
        //         navigate('/kitchen')
        //     }
        //     else if (data.role === 'terminal') {
        //         navigate('/user')
        //     }
        // })
        
    }, [])

    return (
        <StoreContext.Provider value={{ user, setUser, ingredients, setIngredients, products, setProducts, refresh, commands, setCommands}} >
            {props.children}
        </StoreContext.Provider>
    )

}