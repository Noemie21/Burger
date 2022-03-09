import React, { createContext, useState, useEffect, useRef, useContext } from 'react';
import { useParams } from 'react-router';
import { getUser } from '../Services/API';
import { useNavigate } from "react-router-dom";

export const StoreContext = createContext()

export const StoreProvider = (props) => {

    let [user, setUser] = useState([])
    let interval = useRef()
    let navigate = useNavigate();


    useEffect(() => {
  
        getUser().then((data) => {
            setUser(data) 
            if (data.role === 'admin') {
                navigate('/home')
            }
            else if (data.role === 'kitchen') {
                navigate('/kitchen')
            }
            else if (data.role === 'terminal') {
                navigate('/user')
            }
    
        })
        
    }, [])

    return (
        <StoreContext.Provider value={{ user, setUser}} >
            {props.children}
        </StoreContext.Provider>
    )

}