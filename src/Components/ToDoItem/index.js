import React, { Component } from 'react';
import './index.css'
import { deleteTodo, toggleTodo } from '../../apis/todos';


class ToDoItem extends Component {
    onToggleTodo = () => {
        toggleTodo(this.props.todo).then(response => {
            this.props.toggleTodo(response.data.id);
        })
    }

    onRemoveItem = () => {
        deleteTodo(this.props.todo.id).then(response => {
            this.props.deleteToDo(response.data.id);
        })
    }

    render() {

        return (
            <li onClick={this.onToggleTodo} className={this.props.todo.done ? "done" : "undone"}>
                <span>{this.props.todo.text}</span>
                <button onClick={this.onRemoveItem}>X</button>
            </li>
        );
    }
}

export default ToDoItem;