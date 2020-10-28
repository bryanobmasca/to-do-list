import './App.css';
import ToDoList from './Components/ToDoList';
import { HashRouter, BrowserRouter, Route, Link, Switch } from "react-router-dom";
import DoneListContainer from './Container/DoneListContainer';
import NotFound from './Components/NotFound';

function App() {
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
            <Route path="*" component={ NotFound }></Route>
          </Switch>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
