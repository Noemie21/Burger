import React, { useContext } from 'react';
import { StoreContext } from '../Providers/StoreProvider';
import { useNavigate } from 'react-router-dom';
import Menu from '../Components/Menu'

export default function UserPage() {

    let navigate = useNavigate()

    const { user } = useContext(StoreContext)

    return(
        <div>
            <div>
                <h1>User : {user.username}</h1>
            </div>
            <Menu />
        </div>
    )
    
}