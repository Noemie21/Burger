import React from 'react';
import { StoreContext } from '../Providers/StoreProvider';
import { useNavigate, useParams } from 'react-router-dom';
import { getProduct } from '../Services/API';
import { useState, useEffect, useRef, useContext } from 'react';
import { Table, Button, Container, Row, Col, ListGroup } from 'react-bootstrap';





export default function ProductPage() {

    let navigate = useNavigate()
    const { id } = useParams();
    let [product, setProduct] = useState()

    useEffect(() => {

        getProduct(id).then((data) => {
            console.log(data)
            setProduct(data.product)  
        })

        
    }, [])
    if (product) {
        return(
            <div>
                <h1>Product : {id}</h1>
                <h2>Nom : {product.name}</h2>
                <h2>Price : {product.price} €</h2>
                <p><ListGroup variant="flush">{product.ingredients.map(({ id, name }) => {
                                return <ListGroup.Item action href={`/ingredients/${id}`}>{name}</ListGroup.Item>
                            })}</ListGroup></p>
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