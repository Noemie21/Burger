import React from 'react';
import { useContext } from 'react';
import { useForm } from "react-hook-form";
import { newIngredient } from '../../Services/API'
import { useNavigate } from "react-router-dom";
import { Form, Button, Container } from 'react-bootstrap';
import { StoreContext } from '../../Providers/StoreProvider';



export default function NewIngredientPage() {

    let navigate = useNavigate();
    const { refresh } = useContext(StoreContext)
    const { register, handleSubmit, formState: { errors } } = useForm();

    return (
        <Container fluid="sm">
        <Form onSubmit={handleSubmit(async (form) => {
            
            let response = await newIngredient(form)
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

            <Form.Group className="mb-3" controlId="formBasicQuantity">
                <Form.Label>Quantity</Form.Label>
                <Form.Control type="number" placeholder="Quantity" {...register("quantity", { required: true, min: 1 })} />
                {errors.quantity && <span>This field is required</span>}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicType">
                <Form.Label>Type</Form.Label>
                <Form.Select  {...register("type", { required: true })}>
                    <option value="">-- choose type --</option>
                    <option value="burger">burger</option>
                    <option value="side">side</option>
                    <option value="drink">drink</option>
                </Form.Select>
                {errors.type && <span>This field is required</span>}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicRequested">
                <Form.Label>Requested</Form.Label>
                <Form.Check {...register("requested")}/>
            </Form.Group>
    
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
        </Container>
    )

}
