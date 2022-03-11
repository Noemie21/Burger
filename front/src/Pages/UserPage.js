import React, { useContext, useState } from 'react';
import { StoreContext } from '../Providers/StoreProvider';
import { useNavigate } from 'react-router-dom';
import { Row, Col, ListGroup} from 'react-bootstrap';
import Products from '../Components/User/Products'
import Ingredients from '../Components/User/Ingredients'
import Drinks from '../Components/User/Drinks'


export default function UserPage() {

    let navigate = useNavigate()
    let [menu, setMenu] = useState("products")

    return(
        <div >
            <Row>
                <Col sm={3}>
                    <ListGroup variant="flush">
                        <ListGroup.Item action onClick={()=> setMenu("products")}>Produits</ListGroup.Item>
                        <ListGroup.Item action onClick={()=> setMenu("ingredients")}>Ingredients</ListGroup.Item>
                        <ListGroup.Item action onClick={()=> setMenu("drinks")}>Boissons</ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col sm={9}>
                    { menu == "products" && <Products /> }
                    { menu == "ingredients" && <Ingredients /> }
                    { menu == "drinks" && <Drinks /> }
                </Col>
            </Row>
        </div>
    ) 
}
