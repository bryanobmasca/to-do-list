export const ADD_TO_DO = "ADD_TO_DO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const DELETE_TO_DO = "DELETE_TO_DO";
export const INIT_TODO = "INIT_TODO";

export const addToDo = todo => ({ type: ADD_TO_DO, payload: todo });
export const toggleTodo = id => ({ type: TOGGLE_TODO, payload: id });
export const deleteToDo = id => ({ type: DELETE_TO_DO, payload: id });
export const initTodos = todos => ({ type: INIT_TODO, payload: todos });
