import ActionTypes from '../actions/actionTypes';

export function todoReducer(state = {}, action) {
    switch (action.type) {
        case ActionTypes.AddNewToDoFulfilled: {
            const newState = Object.assign({}, state, {
                inProgress: false,
                success: 'Added guest.'
            });
            newState.todos = newState.todos || [];
            return newState;
        }
        case ActionTypes.getToDoFulfilled: {
            const newState = Object.assign({}, state, {
                inProgress: false,
                success: 'Get.'
            });
            newState.todos = newState.todos || [];
            if (action.todos && action.todos.todoText) {
                newState.todos.push(action.todos);
            }
            return newState;
        }
        default:
            return state;
    }
}