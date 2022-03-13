import React, { useContext } from 'react'
import { StoreContext } from '../../Providers/StoreProvider'
import { CartContext } from '../../Providers/CartProvider';
import { useNavigate, Link } from 'react-router-dom';
import { Table, Button, Container, Row, Col, ListGroup, Card } from 'react-bootstrap';


export default function Ingredients() {

    let navigate = useNavigate()
    const { ingredients } = useContext(StoreContext)
    const { cart } = useContext(CartContext)
    const { setCart } = useContext(CartContext)
    const { total } = useContext(CartContext)
    const { setTotal } = useContext(CartContext)

    return (
    <div>
        <br/>
        <br/>
        <Container>
            <Row>
                <Col sm={10}><h1>Boissons : </h1></Col>
            </Row>
            <br/>
            <br/>
            <Row gap={2}>
            {Array.from({ length: 1 }).map((_, idx) => (
            ingredients.map(({ id, name, price, type}) => {
                if (type == "drink") {
                    return <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Header>Boisson {id}</Card.Header>
                        <Card.Body>
                            <Card.Title>{name}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{price} €</Card.Subtitle>
                            <Card.Text> {type}</Card.Text>
                            <Button variant="primary" action onClick={()=> {
                              setCart(
                                  [...cart, 
                                  {id : id, 
                                  name: name,
                                  price: price}]);
                              setTotal(total + price)
                            }
                            }>Ajouter au panier
                            </Button>
                        </Card.Body>
                    </Card>
                    <br />
                    </Col> 
                }  
            })
            ))}
            </Row>
        </Container>
        
    </div>
    )
}
{Array.from({ length: 4 }).map((_, idx) => (
    <Col>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  ))}
//Ingredients()