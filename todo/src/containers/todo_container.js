import { connect } from 'react-redux';
import TodoComponent from '../components/todo_component';
import { getTodo } from '../store/actions/getTodo';
import { addNewToDo } from '../store/actions/addNewToDo';
import { watchToDoAddedEvent } from '../store/actions/todoAddedEvent';

function mapStateToProps(state) {
    return {
        todos: state.todo
    };
}

function mapDispatchToProps(dispatch) {
    watchToDoAddedEvent(dispatch);
    return {
        onGetTodo: () => dispatch(getTodo()),
        onAddToDo: (name) => dispatch(addNewToDo(name))
    };
}

const TodoContainer = connect(mapStateToProps, mapDispatchToProps)(TodoComponent);

export default TodoContainer;