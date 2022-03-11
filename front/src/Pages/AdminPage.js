import React, { createContext, useState, useEffect, useRef, useContext } from 'react';
import { StoreContext } from '../Providers/StoreProvider';
import { useNavigate } from 'react-router-dom';
import { ListGroup, Container} from 'react-bootstrap';
import Ingredients from '../Components/Admin/Ingredients'
import Products from '../Components/Admin/Products'

export default function AdminPage() {

    let navigate = useNavigate()
    //state menu
    let [menu, setMenu] = useState("ingredients")

    const { user } = useContext(StoreContext)
    
    function alertClicked() {
        alert('You clicked the third ListGroupItem');
      }

    return(
        <div>
            <div>
                <h1>Admin : {user.username}</h1>
            </div>
            <Container>
                <ListGroup horizontal>
                    <ListGroup.Item action onClick={()=> setMenu("ingredients")}>Ingredients</ListGroup.Item>
                    <ListGroup.Item action onClick={()=> setMenu("products")}>Produits</ListGroup.Item>
                    <ListGroup.Item action onClick={()=> setMenu("stats")}>Statistiques</ListGroup.Item>
                </ListGroup>
            </Container>
            { menu == "ingredients" && <Ingredients /> }
            { menu == "products" && <Products /> }
            
        </div>
    )
    
}