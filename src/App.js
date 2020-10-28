import './App.css';
import ToDoList from './Components/ToDoList';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import DoneListContainer from './Container/DoneListContainer';
import NotFound from './Components/NotFound';
import React, { Component } from 'react';
import { getTodos } from './apis/todos';
import { initTodos } from './actions';
import { connect } from 'react-redux';
import { Layout, Menu, } from 'antd';
import {
  UnorderedListOutlined,
  CheckOutlined,
  CloseOutlined,
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
class App extends Component {
  state = {
    collapsed: true,
  };

  componentDidMount() {
    getTodos().then(response => {
      this.props.initTodos(response.data)
    })
  }

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    const { collapsed } = this.state;
    return (
      <BrowserRouter>
        <Layout style={{ minHeight: '100vh' }}>
          <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
            <Link to="/"><div className="logo" /></Link>
            <Menu theme="dark" defaultSelectedKeys={['all']} mode="inline">
              <Menu.Item key="all" icon={<UnorderedListOutlined />}>
                <Link to="/">
                  All List
                </Link>
              </Menu.Item>
              <Menu.Item key="done" icon={<CheckOutlined />}>
                <Link to="/done">
                  Finished List
                </Link>
              </Menu.Item>
              <Menu.Item key="undone" icon={<CloseOutlined />}>
                Unfinished List
            </Menu.Item>
            </Menu>
          </Sider>
          <Layout className="site-layout">
            <Content style={{ margin: '40px 0 20px 0' }}>
              <Switch>
                <Route exact path="/" component={ToDoList}></Route>
                <Route exact path="/done" component={DoneListContainer}></Route>
                <Route path="*" component={NotFound}></Route>
              </Switch>

            </Content>
            <Footer style={{ textAlign: 'center' }}>©2020</Footer>
          </Layout>
        </Layout>
      </BrowserRouter>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  initTodos: todos => dispatch(initTodos(todos))
})

export default connect(null, mapDispatchToProps)(App);
