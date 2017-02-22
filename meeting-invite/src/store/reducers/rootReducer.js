import { combineReducers } from 'redux';
import { inviteReducer } from './inviteReducer';

const rootReducer = combineReducers({
  invite: inviteReducer
});

export default rootReducer;