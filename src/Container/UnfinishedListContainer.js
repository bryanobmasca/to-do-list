import { connect } from "react-redux";
import UnfinishedList from "../Components/UnfinishedList";


const mapStateToProps = state => ({
    todos: state.todos.filter(todo => !todo.done)
});


const UnfinishedListContainer= connect(mapStateToProps)(
    UnfinishedList
);

export default UnfinishedListContainer;