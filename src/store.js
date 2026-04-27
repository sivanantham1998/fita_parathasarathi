const initalState = {
    count: 0,
    role: "user"
}

export const reducer = (state = initalState, action) => {
    if (action.type === "INCREMENT") {
        return { ...state, count: state.count + 1 }
    }
    return state
}