import React from 'react';
import { StoreContext } from '../Providers/StoreProvider';
import { useNavigate, useParams } from 'react-router-dom';
import { getIngredient } from '../Services/API';
import { useState, useEffect, useRef, useContext } from 'react';




export default function IngredientPage() {

    let navigate = useNavigate()
    const { id } = useParams();
    let [ingredient, setIngredient] = useState()

    useEffect(() => {

        getIngredient(id).then((data) => {
            setIngredient(data.ingredient)  
        })

        
    }, [])
    if (ingredient) {
        return(
            <div>
                <h1>Ingredient : {id}</h1>
                <h2>Nom : {ingredient.name}</h2>
                <h2>Stock : {ingredient.quantity}</h2>
                <h2>Price : {ingredient.price} €</h2>
            </div>
        )
    }
    else {
        return(
        <h1>Loading</h1>
        )
    }
   
    
}
/*
if (ingredients.id == id) {
                return <tr>
                <td>{id}</td>
                <td>{name}</td>
                <td>{quantity}</td>
                <td>{type}</td>
                <td>{price} €</td>
            </tr>
            }
*/