import { useCallback, useMemo, useState } from "react"

export default function CallbackMemo() {
    const [count, setCount] = useState(0)

    let memoValue = useMemo(
        () => {
            return count * 10
        }, [count]
    )

    let call = useCallback(
        (a, b) => {
            return count + a + b
        }, [count]
    )
    return (
        <div>
            <h1>CallbackMemo</h1>
            <h3>
                Value {count}
                <br />
                Memo value {memoValue}
                <br />
                Callback value {call(10, 20)}
            </h3>
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