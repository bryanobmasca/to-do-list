export const ADD_TO_DO = "ADD_TO_DO";
export const REVERT_STATUS = "REVERT_STATUS";
export const DELETE_TO_DO = "DELETE_TO_DO";
export const INIT_TODO = "INIT_TODO";

export const addToDo = (todo) => {
    return { type: ADD_TO_DO, payload: todo };
}

export const revertStatus = (id) => {
    return { type: REVERT_STATUS, payload: id }
}

export const deleteToDo = (id) => {
    return { type: DELETE_TO_DO, payload: id }
}

export const initTodos = todos => {
    return { type: INIT_TODO, payload: todos }
}