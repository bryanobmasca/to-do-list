import './App.css';
import ToDoList from './Components/ToDoList';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import FinishedListContainer from './Container/FinishedListContainer';
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

const { Content, Footer, Sider } = Layout;
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
              <Menu.Item key="finished" icon={<CheckOutlined />}>
                <Link to="/finished">
                  Finished List
                </Link>
              </Menu.Item>
              <Menu.Item key="undone" icon={<CloseOutlined />}>
                Unfinished List
            </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Content>
              <div className="site-layout-background">
                <Switch>
                  <Route exact path="/" component={ToDoList}></Route>
                  <Route exact path="/finished" component={FinishedListContainer}></Route>
                  <Route path="*" component={NotFound}></Route>
                </Switch>
              </div>
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
