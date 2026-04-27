import { useEffect, useLayoutEffect, useState } from "react"

export default function Effect() {
    const [count, setCount] = useState(0)

    const [device, setDevice] = useState("desktop")
    useEffect(
        () => {
            console.log("Effect is called")
            document.title = `Effect , ${count}`
            fetch('https://jsonplaceholder.typicode.com/todos/1')
                .then(response => response.json())
                .then(json => console.log(json))
        }, [count]
    )


    function handlesize() {
        if (window.innerWidth >= 768) {
            setDevice("tablet")
        }
        else {
            setDevice("mobile")
        }
    }

    useLayoutEffect(
        () => {

            handlesize()

            window.addEventListener("resize", handlesize)

            return () => {
                window.removeEventListener("resize", handlesize)
            }
        }, []
    )

    return (
        <div>
            <h1>Effect , {count}</h1>
            <h3> this is {device}</h3>
            <button className="btn btn-primary" onClick={
                () => {
                    setCount(count + 1)
                }
            }>
                Click
            </button>
        </div>
    )
}