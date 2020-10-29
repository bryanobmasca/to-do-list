import React, { Component } from 'react';
import { deleteTodo, toggleTodo } from '../apis/todos';
import { Button, Checkbox, List, Tooltip, Popconfirm } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

class ToDoItem extends Component {
    onToggleTodo = () => {
        toggleTodo(this.props.todo).then(response => {
            this.props.toggleTodo(response.data.id);
        })
    }

    onRemoveItem = () => {
        deleteTodo(this.props.todo.id).then(response => {
            this.props.deleteToDo(this.props.todo.id);
        })
    }

    render() {
        const toggleTodoTooltip = "Mark todo as " + (this.props.todo.done ? "unfinished" : "finished")

        return (
            <List.Item>
                <Tooltip placement="leftTop" title={toggleTodoTooltip}>
                    <Checkbox onClick={this.onToggleTodo} checked={this.props.todo.done}>
                        <span>{this.props.todo.text}</span>
                    </Checkbox>
                </Tooltip>
                <div>
                    <Tooltip placement="rightTop" title="Delete todo">
                        <Popconfirm
                            icon={<DeleteOutlined />} 
                            title="Are you sure delete this todo?"
                            onConfirm={this.onRemoveItem}
                            okText="Yes"
                            cancelText="No"
                        >
                            <Button icon={<DeleteOutlined />} />
                        </Popconfirm>
                    </Tooltip>
                </div>
            </List.Item >
        );
    }
}

export default ToDoItem;