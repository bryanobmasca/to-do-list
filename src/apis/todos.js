import api from './api'

export const getTodos = () => (api.get('/api/todos'))
export const addTodo = (text) => (api.post('/api/todos', { text }))
export const deleteTodo = (id) => (api.delete(`/api/todos/${id}`))
export const toggleTodo = ({ id, done }) => (api.put(`/api/todos/${id}`, { done: !done }))