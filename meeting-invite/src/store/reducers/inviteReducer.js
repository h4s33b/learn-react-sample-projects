import ActionTypes from '../actions/actionTypes';

export function inviteReducer(state = {}, action) {
  switch (action.type) {
    case ActionTypes.GetInviteFulfilled: {
      const { host, agenda, guests } = action.invite;
      const newState = Object.assign({}, state, {
        inProgress: false,
        success: 'Got invite.',
        host,
        agenda
      });
      newState.guests = [];
      if (guests) {
        newState.guests = Object.keys(guests).map(k => guests[k]);
      }
      return newState;
    }
    case ActionTypes.AddToInviteFulfilled: {
      const newState = Object.assign({}, state, {
        inProgress: false,
        success: 'Added guest.'
      });
      newState.guests = newState.guests || [];
      newState.guests = newState.guests.slice();
      newState.guests.push(action.guest);
      return newState;
    }
    case ActionTypes.GuestAdded: {
      const newState = Object.assign({}, state);
      newState.guests = newState.guests || [];
      newState.guests = newState.guests.slice();
      newState.guests.push(action.guest);
      return newState;
    }
    default:
      return state;
  }
}