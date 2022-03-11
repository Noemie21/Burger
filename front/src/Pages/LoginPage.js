import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { login } from '../Services/API'
import { getToken } from '../Services/API'
import { useNavigate } from "react-router-dom";
import { Form, Button, Container } from 'react-bootstrap';
import { getUser } from '../Services/API';


export default function LoginPage() {

    let navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm();

    return (
        <Container fluid="sm">
        <Form onSubmit={handleSubmit(async (form) => {
            
            let response = await login(form)
    
            localStorage.setItem('token', response.data)
    
            //navigate('/user')

            getUser().then((data) => {
                if (data.role === 'admin') {
                    navigate('/admin')
                }
                else if (data.role === 'kitchen') {
                    navigate('/kitchen')
                }
                else if (data.role === 'terminal') {
                    navigate('/user')
                }
            })
        })}>
            <br/>
            <br/>
            <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter username" {...register("username", { required: true })}/>
                {errors.username && <span>This field is required</span>}
            </Form.Group>
    
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" {...register("password", { required: true })} />
                {errors.password && <span>This field is required</span>}
            </Form.Group>
    
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
        </Container>
    )

}
