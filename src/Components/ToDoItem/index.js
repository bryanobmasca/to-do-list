import React, { Component } from 'react';
import './index.css'
import { deleteTodo, toggleTodo } from '../../apis/todos';


class ToDoItem extends Component {
    onMarkAsDone = () =>{
        toggleTodo(this.props.todo).then(response => {
            this.props.revertStatus(response.data.id);
        })
    }

    onRemoveItem = () =>{
        deleteTodo(this.props.todo.id).then(response => {
            this.props.deleteToDo(response.data.id);
        })
    }

    render() {
    
        return (
            <li  onClick={this.onMarkAsDone} className={this.props.todo.done ? "true" : "false"}>
                <span>{this.props.todo.text}</span>
                <button onClick={this.onRemoveItem}>X</button>
            </li>
        );
    }
}

export default ToDoItem;