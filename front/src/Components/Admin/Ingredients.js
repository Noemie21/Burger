import React, { useContext } from 'react'
import { StoreContext } from '../../Providers/StoreProvider'
import { useNavigate, Link } from 'react-router-dom';
import { Table, Button, Container, Row, Col } from 'react-bootstrap';
import { removeIngredient } from '../../Services/API';


export default function Ingredients() {

    let navigate = useNavigate()
    const { ingredients } = useContext(StoreContext)
    const { refresh } = useContext(StoreContext)

    return (
    <div>
        <br/>
        <br/>
        <Container>
            <Row>
                <Col sm={10}><h1>Ingrédients : </h1></Col>
                <Col sm={2}><Button href="ingredients/new">Ajouter un Ingrédient</Button></Col>
            </Row>
            <br/>
            <br/>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Type</th>
                    <th>Price</th>
                    <th>Edit</th>
                    <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {ingredients.map(({ id, name, quantity, type, price }) => {
                        return <tr>
                            <td>{id}</td>
                            <td><Link to={`/ingredients/${id}`}>{name}</Link></td>
                            <td>{quantity}</td>
                            <td>{type}</td>
                            <td>{price} €</td>
                            <td><Button href={`/ingredients/${id}/edit`}>Editer</Button></td>
                            <td><Button onClick={async ()=> {
                                await removeIngredient(id)
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