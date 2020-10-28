export const addToDo = (todo) => {
    return { type: "ADD_TO_DO", payload: todo };
}

export const revertStatus = (id) => {
    return { type: "REVERT_STATUS", payload: id }
}

export const deleteToDo = (id) => {
    return { type: "DELETE_TO_DO", payload: id }
}

export const initTodos = todos => {
    return { type: "INIT_TODO", payload: todos }
}