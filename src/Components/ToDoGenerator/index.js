import React, { Component } from 'react';
import './index.css'
import { addTodo } from '../../apis/todos';

class ToDoGenerator extends Component {

    onSubmit = (event) => {
        event.preventDefault();
        const text = event.target.toDoText.value;
        if (text === "" || text === null) {
            alert("To-Do item must be filled out");
            return false;
        }
        addTodo(text).then(response => {
            this.props.addToDo(response.data);
            event.target.toDoText.value = "";
        });
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input type="text" name="toDoText" id="toDoText" placeholder="Input new to-do here..." />
                <input type="submit" value="Add" />
            </form>
        );
    }
}

export default ToDoGenerator;