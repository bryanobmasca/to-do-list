import React, { Component } from 'react';
import './index.css'
import { deleteTodo, toggleTodo } from '../../apis/todos';
import { Button, Checkbox, List } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

class ToDoItem extends Component {
    onToggleTodo = () => {
        toggleTodo(this.props.todo).then(response => {
            this.props.toggleTodo(response.data.id);
        })
    }

    onRemoveItem = () => {
        if (window.confirm('Delete "'+ this.props.todo.text+ '"?')) {
            deleteTodo(this.props.todo.id).then(response => {
                this.props.deleteToDo(response.data.id);
            })
        }
    }

    render() {
        return (
            <List.Item>
                <Checkbox onClick={this.onToggleTodo} checked={this.props.todo.done}>
                    <span>{this.props.todo.text}</span>
                </Checkbox>
                <div>
                    <Button icon={<DeleteOutlined />} onClick={this.onRemoveItem} />
                </div>
            </List.Item >
        );
    }
}

export default ToDoItem;