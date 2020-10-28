import './App.css';
import ToDoList from './Components/ToDoList';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import DoneListContainer from './Container/DoneListContainer';
import NotFound from './Components/NotFound';
import React, { Component } from 'react';
import { getTodos } from './apis/todos';
import { initTodos } from './actions';
import { connect } from 'react-redux';

class App extends Component {
  componentDidMount() {
    getTodos().then(response => {
      this.props.initTodos(response.data)
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <BrowserRouter>
            <ul>
              <li><Link to="/">Go to list page</Link></li>
              <li><Link to="/done">Go to Done page</Link></li>
            </ul>
            <Switch>
              <Route exact path="/" component={ToDoList}></Route>
              <Route path="/done" component={DoneListContainer}></Route>
              <Route path="*" component={NotFound}></Route>
            </Switch>
          </BrowserRouter>
        </header>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  initTodos: todos => dispatch(initTodos(todos))
})

export default connect(null, mapDispatchToProps)(App);
