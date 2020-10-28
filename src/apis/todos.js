import api from './api'

export const getTodos = () => {
    return api.get('/api/todos')
}

export const addTodo = (text) => {
    return api.post('/api/todos', {text})
}

export const deleteTodo = (id) => {
    return api.delete(`/api/todos/${id}`)
}

export const toggleTodo = ({id, done}) => {
    return api.put(`/api/todos/${id}`, {done: !done})
}