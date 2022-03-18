import React, { useContext } from 'react';
import { StoreContext } from '../Providers/StoreProvider';
import { useNavigate } from 'react-router-dom';
import { Table, Button, Container, Row, Col, ListGroup, Card } from 'react-bootstrap';


export default function KitchenPage() {

    const { user } = useContext(StoreContext)
    const { commands } = useContext(StoreContext)
    //console.log(user)

    return(
        <div>
            <h1>Kitchen</h1>
            <h1>Commands</h1>
            <Container>
            <Row gap={2}>
            {Array.from({ length: 1 }).map((_, idx) => (
                commands.map(({ id, createdAt, products, ingredients }) => {
                    return <Col>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                    <Card.Title>Command {id}</Card.Title>
                    <Card.Text>
                        <ul>
                            <li>{createdAt}</li>
                            {products.map(({id}) => {
                                return<li>product : {id}</li>
                            })}
                            {ingredients.map(({id}) => {
                                return<li>ingredient : {id}</li>
                            })}
                        </ul>
                    </Card.Text>
                    
                    </Card.Body>
                </Card>
                <br/>
                </Col>
                })
            ))}
            </Row>
            </Container>
            <ul>
            {commands.map(({ id, createdAt, products, ingredients }) => {
                        return <li>
                            {id}<br/>
                            {createdAt}
                        </li>
                    })}
            </ul>
        </div>
    )
}