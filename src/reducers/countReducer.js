export const initialState = {
    count: 0
}

export const countReducer = (state, action) => {
    switch (action.type) {
        case "Increment":
            return { count: state.count + 1 }
        case "Decrement":
            return { count: state.count - 1 }
        default:
            return state;
    }
}