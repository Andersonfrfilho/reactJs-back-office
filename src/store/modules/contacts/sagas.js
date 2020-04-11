import { all, call, put, takeLatest } from 'redux-saga/effects';
import { createBrowserHistory } from 'history';
import {
  loading,
  successAction,
  failureAction,
  breakAction,
} from '../common/actions';

function* requestToPageAddContact({ payload: { history } }) {
  yield put(loading(''));
  history.push('/drawer/register');
  yield put(successAction(''));
}
export default all([
  takeLatest('@contacts/REQUEST_TO_PAGE_ADD_CONTACT', requestToPageAddContact),
]);
