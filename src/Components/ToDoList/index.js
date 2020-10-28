import { Col, Row } from 'antd';
import React, { Component } from 'react';
import DoneListContainer from '../../Container/DoneListContainer';
import ToDoGeneratorContainer from '../../Container/ToDoGeneratorContainer';
import ToDoGroupContainer from '../../Container/ToDoGroupContainer';
import "./index.css"

class ToDoList extends Component {

    render() {
        return (
            <Row>
                <Col span={12} offset={6}>
                <ToDoGeneratorContainer/>
                <ToDoGroupContainer/>
                </Col>
            </Row>
        );
    }
}

export default ToDoList;