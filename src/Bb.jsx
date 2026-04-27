import a from "./assets/react.svg"
function Fita() {
    let user = "Parthasarathy Erode"
    let url = "https://www.google.com"
    let img = "https://img.freepik.com/free-photo/cybersecurity-concept-collage-design_23-2151877145.jpg?semt=ais_hybrid&w=740&q=80"
    // console.log(user)
    return (
        <>
            <h1>
                {user}
            </h1>
            <a href={url}>
                Google
            </a>
            <img src={img} alt="" style={
                {
                    height: "200px",
                    border: "2px solid red"
                }
            } />

            <img src={a} alt="" />
            <ol>
                <li>Html</li>
                <li>Css</li>
                <li id="demo">JavaScript</li>
                <li>React</li>
                <li>Node</li>
                <li>Express</li>
                <li>MongoDB</li>
            </ol>
            <p className="para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus sapiente nesciunt maiores possimus quae quia hic ut accusantium officiis quaerat consequuntur, qui ipsam repudiandae repellendus in ducimus perspiciatis nobis enim.
            </p>
        </>
    )
}

export default Fita