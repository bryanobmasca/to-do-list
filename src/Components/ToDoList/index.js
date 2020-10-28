import React, { Component } from 'react';
import DoneListContainer from '../../Container/DoneListContainer';
import ToDoGeneratorContainer from '../../Container/ToDoGeneratorContainer';
import ToDoGroupContainer from '../../Container/ToDoGroupContainer';
import "./index.css"

class ToDoList extends Component {
    
    render() {
        return (
            <div id="toDoList">
                <h1>To Do List</h1>
                <div>
                <ToDoGeneratorContainer/>
                <ToDoGroupContainer/>
                </div>
            </div>
        );
    }
}

export default ToDoList;