import React from 'react'
import { Link, useParams } from 'react-router-dom'

export default function UserDetail() {
    let data = useParams()
    console.log(data);

    return (
        <div>
            <h1>{data.name}</h1>
            <Link to="/userdata">
                <button>
                    Back
                </button>
            </Link>
        </div>
    )
}
