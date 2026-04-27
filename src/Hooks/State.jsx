import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function State() {
    const [a, b] = useState("parthasarathy")
    const [count, setCount] = useState(0)
    const navigate = useNavigate()
    return (
        <div>
            <h1>{a} <br /> {count}</h1>
            <button className="btn btn-primary" onClick={
                () => {
                    b("Erode")
                    setCount(count + 1)
                }
            }>Change</button>
            <button onClick={
                () => {
                    setCount(count - 1)
                }
            }>
                Decrease
            </button>
            <button onClick={
                () => {
                    setCount(0)
                }
            }>
                Reset
            </button>

            <button onClick={
                () => navigate("/")
            }>
                Back
            </button>
        </div>
    )
}