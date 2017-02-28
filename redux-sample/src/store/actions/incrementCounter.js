import ActionTypes from './actionTypes';

export function incrementCounter() {
  return dispatch => {
    dispatch(getIncrementFulfilledAction())
  }
}

function getIncrementFulfilledAction() {
  return {
    type: ActionTypes.IncrementCounterSuccess
  };
}