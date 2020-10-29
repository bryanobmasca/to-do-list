import { Col, List, Row } from 'antd';
import React, { Component } from 'react';
import { Typography } from 'antd';
const { Title } = Typography;

class Unfinished extends Component {
    render() {
        const todos = this.props.todos.map((todo) => (
            <List.Item key={todo.id}> {todo.text} </List.Item>
        ));
        return (
            <Row>
                <Col span={12} offset={6}>
                    <Title>Unfinished Todos</Title>
                    <div className="todo-group">
                        <List size="large">
                            {todos}
                        </List>
                    </div>
                </Col>
            </Row>
        );
    }
}

export default Unfinished;