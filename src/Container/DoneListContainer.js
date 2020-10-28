import { connect } from "react-redux";
import DoneList from "../Components/DoneList";


const mapStateToProps = state => ({
    todos: state.todos.filter(todo => todo.done)
});


const DoneListContainer= connect(mapStateToProps)(
    DoneList
);

export default DoneListContainer;