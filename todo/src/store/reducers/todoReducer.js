import ActionTypes from '../actions/actionTypes';

export function todoReducer(state = {}, action) {
    switch (action.type) {
        case ActionTypes.AddNewToDoFulfilled: {
            const newState = Object.assign({}, state, {
                inProgress: false,
                success: 'Added guest.'
            });
            newState.todos = newState.todos || [];
            newState.todos = newState.todos.slice();
            newState.todos.push(action.todo);
            return newState;
        }
        case ActionTypes.getToDoFulfilled: {
            const newState = Object.assign({}, state, {
                inProgress: false,
                success: 'Get.'
            });
            newState.todos = newState.todos || [];
            newState.todos = newState.todos.slice();
            action.todos.forEach(element=>{
                newState.todos.push(element);
            })
            //newState.todos.push(action.todos);
            return newState;
        }
        default:
            return state;
    }
}