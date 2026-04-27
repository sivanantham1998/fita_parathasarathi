import React from 'react'
import { useEffect, useState } from 'react'

export const Output = () => {

    const [data, setData] = useState([])
    const names = [
        "siva", "arun", "sarathy", "rithika", "sankar", "tamil", "kaviya", "vishal", "santhosh", "max"
    ]

    const stu = [
        {
            name: 'arun',
            gender: 'Male',
            physics: 88,
            maths: 87,
            english: 78
        },
        {
            name: 'rajesh',
            gender: 'Male',
            physics: 96,
            maths: 100,
            english: 95
        },
        {
            name: 'moorthy',
            gender: 'Male',
            physics: 89,
            maths: 90,
            english: 70
        },
        {
            name: 'raja',
            gender: 'Male',
            physics: 30,
            maths: 25,
            english: 40
        },
        {
            name: 'usha',
            gender: 'Female',
            physics: 67,
            maths: 45,
            english: 78
        },
        {
            name: 'priya',
            gender: 'Female',
            physics: 56,
            maths: 46,
            english: 78
        },
        {
            name: 'Sundar',
            gender: 'Male',
            physics: 12,
            maths: 67,
            english: 67
        },
        {
            name: 'Kavitha',
            gender: 'Female',
            physics: 78,
            maths: 71,
            english: 67
        },
        {
            name: 'Dinesh',
            gender: 'Male',
            physics: 56,
            maths: 45,
            english: 67
        },
        {
            name: 'Hema',
            gender: 'Female',
            physics: 71,
            maths: 90,
            english: 23
        },
        {
            name: 'Gowri',
            gender: 'Female',
            physics: 100,
            maths: 100,
            english: 100
        },
        {
            name: 'Ram',
            gender: 'Male',
            physics: 78,
            maths: 55,
            english: 47
        },
        {
            name: 'Murugan',
            gender: 'Male',
            physics: 34,
            maths: 89,
            english: 78
        },
        {
            name: 'Jenifer',
            gender: 'Female',
            physics: 67,
            maths: 88,
            english: 90
        }
    ]

    names.map((item, index) => {
        console.log(item, index);

    })

    function a(name) {
        console.log("hello " + JSON.stringify(name));

    }

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then((res) => res.json())
            .then((data) => setData(data))
    }, [])

    function b(name) {
        alert("name is:" + name)
    }
    return (
        <div>
            <ol>
                {
                    names.map((item, index) => {
                        return (
                            <li>{item}</li>
                        )
                    })
                }
            </ol>
            <table className='table table-bordered'>
                <tr>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>Physics</th>
                    <th>Maths</th>
                    <th>English</th>
                    <th>Total</th>
                    <th>Result</th>
                    <th></th>
                </tr>

                {
                    stu.map((item, index) => {
                        const total = item.physics + item.english + item.maths
                        return (
                            <tr>
                                <td>{item.name}</td>
                                <td>{item.gender}</td>
                                <td>{item.physics}</td>
                                <td>{item.maths}</td>
                                <td>{item.english}</td>
                                <td>{total}</td>
                                <td>
                                    {total >= 200 ? "pass" : "fail"}
                                </td>
                                <td>
                                    <button className='btn btn-primary' onClick={
                                        () => {
                                            a(item)
                                        }
                                    }>
                                        Click {item.name}
                                    </button>
                                </td>
                            </tr>
                        )
                    })
                }
            </table>


            <div className='d-flex flex-wrap'>
                {
                    data.map((item, index) => {
                        return (
                            <div className="card" style={{ width: "18rem" }}>
                                <div className="card-body">
                                    <h5 className="card-title">{item.name}</h5>
                                    <p className="card-text">{item.body}</p>
                                    <a href="#" className="btn btn-primary" onClick={
                                        () => {
                                            b(item.name)
                                        }
                                    }>Go somewhere</a>
                                    <address className='blockquote'>
                                        {item.email}
                                    </address>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
