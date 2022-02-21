import React, { createContext, useState, useEffect, useRef, useContext } from 'react';
import { useParams } from 'react-router';
import { getUser } from '../Services/API';

export const StoreContext = createContext()

export const StoreProvider = (props) => {

    let [user, setUser] = useState([])
    let interval = useRef()


    useEffect(() => (
  
        getUser().then((data) => {
            setUser(data) 
        })
    ), [])

    return (
        <StoreContext.Provider value={{ user, setUser}} >
            {props.children}
        </StoreContext.Provider>
    )

}