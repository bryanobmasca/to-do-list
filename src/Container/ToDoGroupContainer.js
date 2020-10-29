import { connect } from "react-redux";
import ToDoGroup from "../Components/ToDoGroup";


const mapStateToProps = state => ({
    todos: state.todos
});


const ToDoGroupContainer = connect(mapStateToProps)(
    ToDoGroup
);

export default ToDoGroupContainer;