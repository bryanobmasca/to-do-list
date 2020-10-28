import React, { Component } from 'react';
import { addTodo } from '../../apis/todos';
import { Input, Form, Button, Row, Col } from 'antd';

class ToDoGenerator extends Component {
    formRef = React.createRef();
    
    onSubmit = (values) => {
        const text = values.text;

        addTodo(text).then(response => {
            this.props.addToDo(response.data);
            this.formRef.current.resetFields();
        });
        
    }

    render() {
        return (
            <Form onFinish={this.onSubmit} ref={this.formRef}>
                <Row>
                    <Col flex="auto">
                        <Form.Item name="text" rules={[{required: true, message: 'Please enter new to-do.'}]}>
                            <Input placeholder="Input new to-do here..."/>
                        </Form.Item>
                    </Col>
                    <Col>
                        <Form.Item>
                            <Button type="primary" block htmlType="submit">Add</Button>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        );
    }
}

export default ToDoGenerator;