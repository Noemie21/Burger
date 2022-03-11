import React from 'react';
import { useForm } from "react-hook-form";
import { editIngredient, getIngredient } from '../../Services/API'
import { useNavigate, useParams } from 'react-router-dom';
import { Form, Button, Container } from 'react-bootstrap';
import { useState, useEffect, useContext } from 'react';
import { StoreContext } from '../../Providers/StoreProvider';



export default function EditIngredientPage() {

    let navigate = useNavigate();
    const { id } = useParams();
    let [ingredient, setIngredient] = useState()

    useEffect(() => {

        getIngredient(id).then((data) => {
            setIngredient(data.ingredient)  
        })

        
    }, [])

    const { refresh } = useContext(StoreContext)
    const { register, handleSubmit, formState: { errors } } = useForm();

    if (ingredient) {
        return(
        <Container fluid="sm">
            <Form onSubmit={handleSubmit(async (form) => {
                
                let response = await editIngredient(id, form)
                console.log('coucou')
                refresh()
                navigate('/admin')
            })}>
                <br/>
                <br/>
                
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder={ingredient.name} defaultValue={ingredient.name} {...register("name", { required: true })}/>
                    {errors.name && <span>This field is required</span>}
                </Form.Group>
        
                <Form.Group className="mb-3" controlId="formBasicPrice">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="number" placeholder={ingredient.price} defaultValue={ingredient.price} step=".01" {...register("price", { required: true })} />
                    {errors.price && <span>This field is required</span>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicQuantity">
                    <Form.Label>Quantity</Form.Label>
                    <Form.Control type="number" placeholder={ingredient.quantity} defaultValue={ingredient.quantity} {...register("quantity", { required: true, min: 1 })} />
                    {errors.quantity && <span>This field is required</span>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicType">
                    <Form.Label>Type</Form.Label>
                    <Form.Select  {...register("type", { required: true })}>
                        <option value={ingredient.type}>-- {ingredient.type} --</option>
                        <option value="burger">burger</option>
                        <option value="side">side</option>
                        <option value="drink">drink</option>
                    </Form.Select>
                    {errors.type && <span>This field is required</span>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicRequested">
                    <Form.Label>Requested</Form.Label>
                    <Form.Check defaultChecked={ingredient.requested == 1 && "true"} {...register("requested")}/>
                </Form.Group>
        
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
            
        )
    }
    else {
        return(
        <h1>Loading</h1>
        )
    }

}
