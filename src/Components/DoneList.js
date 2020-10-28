import React, { Component } from 'react';
import ToDoItemContainer from '../Container/ToDoItemContainer';

class DoneList extends Component {
    render() {
        const todos = this.props.todos.map((todo) => (
            <li key={todo.id}> {todo.text} </li>
        ));
        return (
            <ul>
                {todos}
            </ul>
        );
    }
}

export default DoneList;