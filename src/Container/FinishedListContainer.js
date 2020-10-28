import { connect } from "react-redux";
import FinishedList from "../Components/FinishedList";


const mapStateToProps = state => ({
    todos: state.todos.filter(todo => todo.done)
});


const FinishedListContainer= connect(mapStateToProps)(
    FinishedList
);

export default FinishedListContainer;