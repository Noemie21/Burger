import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from '../Providers/CartProvider';
import { useNavigate } from 'react-router-dom';
import { Row, Col, ListGroup, Offcanvas, Container, Button} from 'react-bootstrap';
import Products from '../Components/User/Products'
import Ingredients from '../Components/User/Ingredients'
import Drinks from '../Components/User/Drinks'
import { AiOutlineShoppingCart } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";


export default function UserPage() {

    let navigate = useNavigate()
    let [menu, setMenu] = useState("products")
    const { cart } = useContext(CartContext)
    const { total } = useContext(CartContext)
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // useEffect(() => {
    //     console.log(cart);
    // }, [cart]);

    return(
        <div >
            <Row>
                <Col sm={11}></Col>
                <Col sm={1}>
                    <h1><FaShoppingCart action onClick={handleShow}/> {cart.length}</h1>
                    <Offcanvas show={show} onHide={handleClose} placement='end'>
                        <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Panier</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                        {cart.map(({ id, name, price }) => {
                            return <ul>
                                <li>{name}</li>
                                <li>{price} €</li>
                            </ul>
                        })}
                        <Container>
                            <Row>
                                <Col sm={6}><h3>Total : {total} €</h3></Col>
                                <Col sm={2}></Col>
                                <Col sm={4}>
                                    <Button href="ingredients/new">Commander</Button>
                                </Col>
                            </Row>
                        </Container>
                        
                        </Offcanvas.Body>
                    </Offcanvas>
                </Col>

            </Row>
            <Row>
                <Col sm={3}>
                    <ListGroup variant="flush">
                        <ListGroup.Item action onClick={()=> setMenu("products")}>Produits</ListGroup.Item>
                        <ListGroup.Item action onClick={()=> setMenu("ingredients")}>Ingredients</ListGroup.Item>
                        <ListGroup.Item action onClick={()=> setMenu("drinks")}>Boissons</ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col sm={9}>
                    { menu === "products" && <Products /> }
                    { menu === "ingredients" && <Ingredients /> }
                    { menu === "drinks" && <Drinks /> }
                </Col>
            </Row>
        </div>
    ) 
}
