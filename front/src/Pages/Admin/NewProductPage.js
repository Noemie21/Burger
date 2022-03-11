import React from 'react';
import { useForm } from "react-hook-form";
import { newProduct, getIngredient } from '../../Services/API'
import { useNavigate } from "react-router-dom";
import { Form, Button, Container } from 'react-bootstrap';
import { useState, useEffect, useContext } from 'react';
import { StoreContext } from '../../Providers/StoreProvider';




export default function NewIngredientPage() {

    let navigate = useNavigate();

    const { ingredients } = useContext(StoreContext)
    const { refresh } = useContext(StoreContext)
    const { register, handleSubmit, formState: { errors } } = useForm();

    return (
        <Container fluid="sm">
        <Form onSubmit={handleSubmit(async (form) => {
            
            let response = await newProduct(form)
            console.log('coucou')
            refresh()
            navigate('/admin')
        })}>
            <br/>
            <br/>
           
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter name" {...register("name", { required: true })}/>
                {errors.name && <span>This field is required</span>}
            </Form.Group>
    
            <Form.Group className="mb-3" controlId="formBasicPrice">
                <Form.Label>Price</Form.Label>
                <Form.Control type="number" placeholder="Price" step=".01" {...register("price", { required: true })} />
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
    )

}
