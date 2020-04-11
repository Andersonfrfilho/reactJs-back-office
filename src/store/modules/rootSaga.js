import { all } from 'redux-saga/effects';

import login from './users/sagas';
import contact from './contacts/sagas';

export default function* rootSaga() {
  return yield all([login, contact]);
}
