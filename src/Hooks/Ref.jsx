import { useRef } from "react"

export default function Ref() {
    let name = useRef(null)
    return (
        <div>
            <h1>Ref</h1>
            <input type="text" ref={name} />
            <button className="btn btn-primary" onClick={
                () => {
                    name.current.focus()
                }
            }>
                Focus
            </button>

        </div>
    )
}