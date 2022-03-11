import React, { useContext } from 'react'
import { StoreContext } from '../../Providers/StoreProvider'
import { useNavigate, Link } from 'react-router-dom';
import { Table, Button, Container, Row, Col, ListGroup } from 'react-bootstrap';
import { removeProduct } from '../../Services/API';



export default function Products() {

    let navigate = useNavigate()
    const { products } = useContext(StoreContext)
    const { refresh } = useContext(StoreContext)

    return (
    <div>
        <br/>
        <br/>
        <Container>
            <Row>
                <Col sm={10}><h1>Products : </h1></Col>
                <Col sm={2}><Button href="products/new">Ajouter un Produit</Button></Col>
            </Row>
            <br/>
            <br/>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Ingredients</th>
                    <th>Edit</th>
                    <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(({ id, name, price, ingredients }) => {
                        return <tr>
                            <td>{id}</td>
                            <td><Link to={`/products/${id}`}>{name}</Link></td>
                            <td>{price}</td>
                            <td><ListGroup variant="flush">{ingredients.map(({ id, name }) => {
                                return <ListGroup.Item action href={`/ingredients/${id}`}>{name}</ListGroup.Item>
                            })}</ListGroup></td>
                            <td><Button href={`/products/${id}/edit`}>Editer</Button></td>
                            <td><Button variant="danger" onClick={async ()=> {
                                await removeProduct(id)
                                refresh()
                            }}>Delete</Button></td>
                        </tr>
                    })}
                </tbody>
            </Table>
        </Container>
        
    </div>
    )
}
//Ingredients()