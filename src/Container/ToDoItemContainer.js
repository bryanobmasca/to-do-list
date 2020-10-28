import { connect } from "react-redux";
import ToDoItem from "../Components/ToDoItem";
import { toggleTodo, deleteToDo } from "../actions";



const mapDispatchToProps = (dispatch) => ({
    toggleTodo: (id) => {
        dispatch(toggleTodo(id))
    },
    deleteToDo: (id) => {
        dispatch(deleteToDo(id))
    },
});


const ToDoItemContainer = connect(null, mapDispatchToProps)(
    ToDoItem
);

export default ToDoItemContainer;