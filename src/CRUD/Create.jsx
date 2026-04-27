import React, { useEffect, useState } from 'react'
import { ToastContainer, Bounce, toast } from "react-toastify"
import axios from "axios"
import { Link } from "react-router-dom"
function Create() {
    let url = import.meta.env.VITE_API_URL
    const [formdata, setFormdata] = useState({
        name: "",
        email: "",
        phone: "",
        address: ""
    })

    const [data, setData] = useState([])

    function handlechange(e) {
        let { name, value } = e.target;
        setFormdata({ ...formdata, [name]: value })
    }
    async function handlesave(e) {
        e.preventDefault();
        if (!formdata.name || !formdata.address || !formdata.email || !formdata.phone) {
            toast.error("Please fill all the fields")
        }
        else {
            const res = await axios.post(url, formdata)
            console.log(res);

            if (res.status === 201) {
                toast.success("Data saved!!!")
            }
        }
        console.log("save");
    }

    function handlefetch() {
        axios.get(url).then((res) => {
            console.log(res);
            setData(res.data)
        }).catch((err) => {
            console.log(err);
        })
    }

    useEffect(() => {
        handlefetch()
    }, [])

    function handleremove(id) {
        console.log(id);
        axios.delete(url + "/" + id).then(() => {
            toast.success("Data deleted!!")
            handlefetch()
        }).catch((err) => {
            console.log(err);
        })

    }

    function handleedit(item) {
        console.log(item);
        let newname = prompt("Enter name")

        axios.put(url + "/" + item.id, { name: newname }).then(() => {
            toast.success("Data updated!!")
            handlefetch()
        }).catch((err) => {
            console.log(err);
        })

    }
    return (
        <div className='container'>
            <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            />
            <form onSubmit={handlesave}>
                <input type="text" placeholder='Name...' className='form-control my-3'
                    name='name'
                    value={formdata.name}
                    onChange={handlechange}
                />
                <input type="text" placeholder='Email...' className='form-control my-3' name='email' value={formdata.email} onChange={handlechange} />
                <input type="text" placeholder='Phone...' className='form-control my-3' name='phone' value={formdata.phone} onChange={handlechange} />
                <input type="text" placeholder='Address...' className='form-control my-3' name='address' value={formdata.address} onChange={handlechange} />
                <button type="submit" className='btn btn-primary'>Create</button>
                <button type="reset" className='btn btn-danger mx-3'>Reset</button>
            </form>

            {
                data.length === 0 ? (
                    <p className='mt-4'>
                        Loading....
                    </p>
                ) : (
                    <table className='table table-bordered'>
                        <thead>
                            <tr>
                                <th>Sno</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Age</th>
                                <th>
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        {
                            data.map((item, index) => {
                                return (
                                    <tbody>
                                        <tr key={index}>
                                            <td>
                                                {index + 1}
                                            </td>
                                            <td>
                                                <Link to={"/user-table/" + item.name} state={item}>
                                                    {item.name}
                                                </Link>
                                            </td>
                                            <td>
                                                {item.email}
                                            </td>
                                            <td>
                                                {item.age}
                                            </td>
                                            <td>
                                                <button className='btn btn-primary' onClick={() => handleedit(item)}>Edit</button>
                                                <button className='btn btn-danger' onClick={() => handleremove(item.id)}>Delete</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                )
                            })
                        }
                    </table>
                )
            }
        </div>
    )
}

export default Create