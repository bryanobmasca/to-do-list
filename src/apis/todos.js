import api from './api'

export const getTodos = () => api.get('/todos')
export const addTodo = (text) => api.post('/todos', { text })
export const deleteTodo = (id) => api.delete(`/todos/${id}`)
export const toggleTodo = ({ id, done }) => api.put(`/todos/${id}`, { done: !done })