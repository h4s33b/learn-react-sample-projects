import { connect } from 'react-redux';
import TodoComponent from '../components/todo_component';
import { getTodo } from '../store/actions/getTodo';
import { addNewToDo } from '../store/actions/addNewToDo';

function mapStateToProps(state) {
    return {
        todos: state.todo
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onGetTodo: () => dispatch(getTodo()),
        onAddToDo: (name) => dispatch(addNewToDo(name))
    };
}

const TodoContainer = connect(mapStateToProps, mapDispatchToProps)(TodoComponent);

export default TodoContainer;