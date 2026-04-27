import { useReducer } from "react"

export default function Reducer() {
    const [state, dispatch] = useReducer((state, action) => {
        if (action.type === "increase") {
            return {
                count: state.count + 1
            }
        }
        else if (action.type === "decrease") {
            return {
                count: state.count - 1
            }
        }
    }, {
        count: 0
    })
    return (
        <div>
            <h1>Reducer</h1>
            <h4>
                {state.count}
            </h4>
            <button onClick={
                () => {
                    dispatch({ type: "increase" })
                }
            }>
                Increase
            </button>
            <button onClick={
                () => {
                    dispatch({ type: "decrease" })
                }
            }>
                Decrease
            </button>
        </div>
    )
}