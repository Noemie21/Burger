import React, { useContext } from 'react';
import { StoreContext } from '../Providers/StoreProvider';
import { useNavigate } from 'react-router-dom';

export default function UserPage() {

    let navigate = useNavigate()

    const { user } = useContext(StoreContext)

    return(
        <div>
            <h1>Home</h1>
            <h1>Page {user.role}</h1>

            <ul>
                <li>username :{user.username}</li>
            </ul>
        </div>
    )
}