import React, { useContext, useState } from 'react'
import { StoreContext } from '../../Providers/StoreProvider'
import { CartContext } from '../../Providers/CartProvider';
import { useNavigate, Link } from 'react-router-dom';
import { Table, Button, Container, Row, Col, ListGroup, Card } from 'react-bootstrap';


export default function Products() {

    let navigate = useNavigate()
    const { products } = useContext(StoreContext)
    const { refresh } = useContext(StoreContext)
    const { cart } = useContext(CartContext)
    const { setCart } = useContext(CartContext)
    const { total } = useContext(CartContext)
    const { setTotal } = useContext(CartContext)
    //let [cart, setCart] = useState([])
    console.log(cart)

    return (
    <div>
        <br/>
        <br/>
        <Container>
            <Row>
                <Col sm={10}><h1>Produits : </h1></Col>
            </Row>
            <br/>
            <br/>
            <Row gap={2}>
            {Array.from({ length: 1 }).map((_, idx) => (
            products.map(({ id, name, price, ingredients }) => {
                return <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Header>Product {id}</Card.Header>
                        <Card.Body>
                            <Card.Title>{name}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{price} €</Card.Subtitle>
                            <Card.Text> {ingredients.map(({ id, name }) => {
                                return <span>{name}, </span>
                            })}
                            </Card.Text>
                            <Button variant="primary" action onClick={()=> {
                            setCart(
                                [...cart, 
                                {type: "product",
                                id : id, 
                                name: name,
                                price: price,
                                ingredients: ingredients}]);
                            setTotal(total + price)
                            }
                            }>Ajouter au panier</Button>
                        </Card.Body>
                    </Card>
                    <br />
                    </Col>
            })
            ))}
            </Row>
        </Container>
        
    </div>
    )
}
