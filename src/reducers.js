import { combineReducers } from "redux";

const todos = (state = [], action) => {
    if (action.type === "ADD_TO_DO") {
        return [...state, action.payload];
    }
    else if (action.type === "REVERT_STATUS") {
        return state.map(todo =>
            todo.id === action.payload ? { ...todo, done: !todo.done }
                : todo);
    } else if (action.type === "DELETE_TO_DO") {
        const todos = state.filter(todo => todo.id !== action.payload);
        return todos;
    } else if (action.type === "INIT_TODO") {
        return action.payload
    }
    return state;
}

export default combineReducers({
    todos
});