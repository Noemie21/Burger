import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from '../Providers/CartProvider';
import { useNavigate } from 'react-router-dom';
import { Row, Col, ListGroup, Offcanvas, Container, Button} from 'react-bootstrap';
import Products from '../Components/User/Products'
import Ingredients from '../Components/User/Ingredients'
import Drinks from '../Components/User/Drinks'
import { FaShoppingCart } from "react-icons/fa";
import { getUser, newCommand } from '../Services/API';



export default function UserPage() {

    let navigate = useNavigate()
    let [menu, setMenu] = useState("products")
    const { cart, setCart } = useContext(CartContext)
    const { total, setTotal } = useContext(CartContext)
    const { pro, setPro } = useContext(CartContext)
    const { ingr, setIngr } = useContext(CartContext)
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    console.log(pro)
    console.log(ingr)
    // useEffect(() => {
    //     console.log(cart)
    // }, [cart]);
    // getUser().then((data) => {
    //     if (data.role === 'user') {
            
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
                        <Container>
                        {cart.map(({ id, name, price }) => {
                            return <Row>
                                <Col sm={8}>{name}<br/>{price} €</Col>
                                <Col sm={4}>
                                    <Button 
                                        variant="outline-danger" 
                                        size="sm"
                                        onClick={() => {
                                            setCart((cart) => cart.filter((_, i) => i !== cart.length - 1));
                                            setTotal(total - price)
                                          }
                                        }
                                    >Retirer</Button>
                                </Col>
                            </Row>
    
                        })}
                        <br/>
                        <br/>
                            <Row>
                                <Col sm={6}><h3>Total : {total} €</h3></Col>
                                <Col sm={2}></Col>
                                <Col sm={4}>
                                    <Button onClick={async (pro, ingr)=> {
                                        await newCommand(pro, ingr);
                                        console.log("commandé !")
                                    }}>Commander</Button>
                                </Col>
                                {/* <td><Button variant="danger" onClick={async ()=> {
                                await removeProduct(id)
                                refresh()
                            }}>Delete</Button></td> */}
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
// }
// })
}