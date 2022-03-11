let baseUrl = 'http://127.0.0.1:7000'

export const getToken = () => {
    return localStorage.getItem('token')
}

export const logout = () => {
    localStorage.removeItem('token');
    return 'yes'
}

export const login = async ({ username, password }) => {

    let response = await fetch(`${baseUrl}/auth`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: username,
            password: password,
        })
    })

    let json = await response.json()

    return json

}

export const getUser = async () => {

    let response = await fetch(`${baseUrl}/users/me`, {
        method: 'GET',
        headers: {
            //'Content-Type': 'application/json',
            'Authorization': `Bearer ${getToken()}`
        }
    })

    let json = await response.json()

    return json.data

}
export const getIngredients = async () => {

    let response = await fetch(`${baseUrl}/ingredients`, {
        method: 'GET',
        headers: {
            //'Content-Type': 'application/json',
            'Authorization': `Bearer ${getToken()}`
        }
    })

    let json = await response.json()

    return json.data

}
export const getIngredient = async (id) => {

    let response = await fetch(`${baseUrl}/ingredients/${id}`, {
        method: 'GET',
        headers: {
            //'Content-Type': 'application/json',
            'Authorization': `Bearer ${getToken()}`
        }
    })

    let json = await response.json()

    return json.data

}
export const newIngredient = async ({ name, price, quantity, type, requested}) => {

    let response = await fetch(`${baseUrl}/ingredients`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${getToken()}`
        },
        body: JSON.stringify({
            name: name,
            price : price, 
            quantity : quantity,
            type: type,
            requested : requested
        })
    })

    let json = await response.json()

    return json
}
export const editIngredient = async (id, { name, price, quantity, type, requested}) => {

    let response = await fetch(`${baseUrl}/ingredients/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${getToken()}`
        },
        body: JSON.stringify({
            name: name,
            price : price, 
            quantity : quantity,
            type: type,
            requested : requested
        })
    })

    let json = await response.json()

    return json
}
export const removeIngredient = async (id ) => {

    let response = await fetch(`${baseUrl}/ingredients/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${getToken()}`
        }
    })

    let json = await response.json()

    return json
}
export const getProducts = async () => {

    let response = await fetch(`${baseUrl}/products`, {
        method: 'GET',
        headers: {
            //'Content-Type': 'application/json',
            'Authorization': `Bearer ${getToken()}`
        }
    })

    let json = await response.json()

    return json.data

}
