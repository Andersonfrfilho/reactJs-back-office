import { combineReducers } from 'redux';

import users from './users/reducer';
import contact from './contacts/reducer';
import common from './common/reducer';

export default combineReducers({
  users,
  contact,
  common,
});
