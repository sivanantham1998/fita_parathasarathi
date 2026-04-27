import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function User() {
    const arr = [
        "html", "css", "js"
    ]

    const navigate = useNavigate()
    return (
        <div>
            <h1>User</h1>
            <ul>
                {arr.map((item, index) => {
                    return (
                        <li key={index} onClick={
                            () => navigate("/user/" + item)
                        }>{item}</li>
                    )
                })}
            </ul>
        </div>
    )
}
