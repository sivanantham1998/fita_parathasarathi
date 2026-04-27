function Partha() {
    let obj = {
        name: "siva",
        age: 29,
        location: "erode",
        qualification: "MCA"
    }
    let ar = [
        "html", "css", "javscript", "react", "node", "express", "mongodb"
    ]

    let role = "user"
    return (
        <>
            <h1>Partha</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
            <ol>
                <li>
                    {7 + 8}
                </li>
                <li>
                    {7 - 8}
                </li>
            </ol>

            {
                obj.name
            }
            <br />

            {ar[0]}

            {
                role === "admin" ? (
                    <div>
                        <h3>Hi admin</h3>
                        <button>Add</button>
                        <button>Delete</button>
                        <button>Update</button>
                    </div>
                ) : (
                    <div>
                        <h3>Hi user</h3>
                        <button>View</button>
                    </div>
                )
            }
        </>
    )
}

export default Partha