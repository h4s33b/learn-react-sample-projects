import ActionTypes from './actionTypes';
import database from '../../configs/dbconfigs';

export function getTodo() {
  return dispatch => {
    dispatch(getTodoRequestedAction());
    return database.ref('/todos').once('value', snap => {
      const todo = [];
      snap.forEach(childSnapshot=>{
          todo.push(childSnapshot.val());
      })
      dispatch(getTodoFulfilledAction(todo))
    })
    .catch((error) => {
      console.log(error);
      dispatch(getTodoRejectedAction());
    });
  }
}

function getTodoRequestedAction() {
  return {
    type: ActionTypes.getToDoRequested
  };
}

function getTodoRejectedAction() {
  return {
    type: ActionTypes.getToDoRejected
  }
}

function getTodoFulfilledAction(todos) {
  return {
    type: ActionTypes.getToDoFulfilled
  };
}