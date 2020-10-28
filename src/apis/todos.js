import api from './api'

export const getTodos = () => {
    return api.get('/api/todos')
}

export const addTodo = (text) => {
    return api.post('/api/todos', {text})
}