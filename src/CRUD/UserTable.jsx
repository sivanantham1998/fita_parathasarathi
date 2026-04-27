import React from 'react'
import { useLocation } from 'react-router-dom'

export default function UserTable() {
    let data = useLocation()
    console.log(data.state);

    return (
        <div>
            <h1>{data.state.name}</h1>
            <h1>{data.state.email}</h1>
            <h1>{data.state.phone}</h1>
            <h1>{data.state.address}</h1>
        </div>
    )
}
