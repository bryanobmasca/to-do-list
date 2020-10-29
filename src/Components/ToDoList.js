import { Col, Row } from 'antd';
import React, { Component } from 'react';
import ToDoGeneratorContainer from '../Container/ToDoGeneratorContainer';
import ToDoGroupContainer from '../Container/ToDoGroupContainer';
import { Typography } from 'antd';
const { Title } = Typography;

class ToDoList extends Component {

    render() {
        return (
            <Row>
                <Col span={12} offset={6}>
                    <Title>All List</Title>
                    <ToDoGeneratorContainer />
                    <ToDoGroupContainer />
                </Col>
            </Row>
        );
    }
}

export default ToDoList;