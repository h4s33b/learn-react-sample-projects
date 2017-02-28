import ActionTypes from '../actions/actionTypes';

const initial_state = { counter: 0 };
export function counterReducer(state = initial_state, action) {
  switch (action.type) {
    case ActionTypes.IncrementCounterSuccess: {
      var newState = Object.assign({}, state);
      newState.counter += 1;
      return newState;
    }
    case ActionTypes.DecrementCounterSuccess: {
      var newState = Object.assign({}, state);
      if (newState && newState.counter) {
        newState.counter -= 1;
      }
      return newState;
    }
    case ActionTypes.LoadInitialState : {
      return state;
    }
    default:
      return state;
  }
}