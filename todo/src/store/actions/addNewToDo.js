import ActionTypes from './actionTypes';
import database from '../../configs/dbconfigs';

export function addNewToDo(todoText) {
    return dispatch => {
        dispatch(addToDoRequestedAction());
        const todoRef = database.ref('/todos');
        todoRef.push({
            todoText
        })
            .then(() => {
                dispatch(addToDoFulfilledAction({ todoText }));
            })
            .catch((error) => {
                dispatch(addToDoRejectedAction());
            });
    }
}

function addToDoRequestedAction() {
    return {
        type: ActionTypes.AddNewToDoRequested
    };
}

function addToDoRejectedAction() {
    return {
        type: ActionTypes.AddNewToDoRejected
    }
}

function addToDoFulfilledAction(todo) {
    return {
        type: ActionTypes.AddNewToDoFulfilled,
        todo
    };
}