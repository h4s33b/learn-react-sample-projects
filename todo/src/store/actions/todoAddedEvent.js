import ActionTypes from './actionTypes';
import database from '../../configs/dbconfigs';

export function watchToDoAddedEvent(dispatch) {
    database.ref('/todos').on('child_added', (snap) => {
        dispatch(getGuestAddedAction(snap.val()));
    });
}

function getGuestAddedAction(todos) {
    return {
        type: ActionTypes.getToDoFulfilled,
        todos
    };
}