import { all } from 'redux-saga/effects';

import login from './users/sagas';
import home from './home/sagas';

export default function* rootSaga() {
  return yield all([login, home]);
}
