import React from 'react';
import { useForm } from "react-hook-form";
import { editProduct, getProduct } from '../../Services/API'
import { useNavigate, useParams } from 'react-router-dom';
import { Form, Button, Container } from 'react-bootstrap';
import { useState, useEffect, useRef, useContext } from 'react';
import { StoreContext } from '../../Providers/StoreProvider';




export default function EditIngredientPage() {

    let navigate = useNavigate();

    const { id } = useParams();
    let [product, setProduct] = useState()

    useEffect(() => {

        getProduct(id).then((data) => {
            setProduct(data.product)  
        })

        
    }, [])
    const { ingredients } = useContext(StoreContext)
    const { refresh } = useContext(StoreContext)
    const { register, handleSubmit, formState: { errors } } = useForm();

    if (product) {
    return (
        <Container fluid="sm">
        <Form onSubmit={handleSubmit(async (form) => {
            
            let response = await editProduct(id, form)
            console.log('coucou')
            refresh()
            navigate('/admin')
        })}>
            <br/>
            <br/>
           
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter name" defaultValue={product.name} {...register("name", { required: true })}/>
                {errors.name && <span>This field is required</span>}
            </Form.Group>
    
            <Form.Group className="mb-3" controlId="formBasicPrice">
                <Form.Label>Price</Form.Label>
                <Form.Control type="number" placeholder="Price" step=".01" defaultValue={product.price} {...register("price", { required: true })} />
                {errors.price && <span>This field is required</span>}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicIngredients">
                <Form.Label>Ingredients</Form.Label>
                <Form.Select  multiple {...register("ingredients", { required: true })}>
                {ingredients.map(({ id, name }) => (
                    <option value={id}>{name}</option>
                ))}
                </Form.Select>
                {errors.type && <span>This field is required</span>}
            </Form.Group>

            {/* <Form.Group className="mb-3" controlId="formBasicIngredients">
                <Form.Label>Ingrédients</Form.Label>
                {ingredients.map(({ id, name }) => (
                    <Form.Check  {...register("ingredients")}>
                        <Form.Check.Input type="checkbox" value={id}/>
                        <Form.Check.Label>{name}</Form.Check.Label>
                    </Form.Check>
                ))}
                {errors.type && <span>This field is required</span>}
            </Form.Group> */}
    
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
        </Container>
    )}
    else {
        return(
        <h1>Loading</h1>
        )
    }

}
