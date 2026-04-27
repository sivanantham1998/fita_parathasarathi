import { useEffect, useState } from "react";

export default function Form() {
    // const [name, setName] = useState(null)
    const [formData, setFormata] = useState({
        name: "",
        email: "",
        password: ""
    })

    function handleChange(e) {
        let { name, value } = e.target;
        setFormata({
            ...formData,
            [name]: value
        })
    }
    function save(e) {
        e.preventDefault()
        console.log("Form submitted");
        console.log(formData);
        localStorage.setItem("studentdata", JSON.stringify(formData))
    }

    useEffect(() => {
        let data = localStorage.getItem("studentdata")
        console.log(JSON.parse(data));

    }, [])
    return (
        <>
            <form onSubmit={save} onReset={
                () => {
                    console.log("Form reset");
                    localStorage.removeItem("studentdata")
                }
            }>
                <input type="text" placeholder="Enter name here..." name="name" value={formData.name} onChange={handleChange} />
                <input type="email" placeholder="Enter email here" name="email" value={formData.email} onChange={handleChange} />
                <input type="password" placeholder="Enter password" name="password" value={formData.password} onChange={handleChange} />
                <button type="submit">Save</button>
                <button type="reset">Reset</button>
            </form>
        </>
    )
}