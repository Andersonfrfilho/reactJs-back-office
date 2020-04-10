import { all, call, put, takeLatest, cancel } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../../services/api';
import history from '../../../services/history';
import {
  loading,
  successAction,
  failureAction,
  breakAction,
} from '../common/actions';
import { errorVerify, NewException } from '../../../utils';

function* requestLoginExist() {
  yield put(loading(''));
  const tokenExist = localStorage.getItem('populus@token');
  if (tokenExist === null) {
    yield put(breakAction(''));
    yield cancel();
  }
  history('/drawer');
  yield put(successAction(''));
}
function* requestLogin({ payload: { email, password } }) {
  yield put(loading(''));
  try {
    const {
      data: { token },
    } = yield call(api.post, `/sessions`, { email, password });
    if (!token || token === null) {
      throw new NewException(
        'erro-login',
        'Falha ao realizar login, verifique o usuario ou senha...'
      );
    }
    localStorage.setItem('populus@token', token);
    toast.success('login efetuado com sucesso');
    history.push('/Drawer');
    yield put(successAction(''));
  } catch (error) {
    const message = errorVerify(error);
    toast.error(message);
    yield put(failureAction(message));
  }
}
function* requestRegisterUser({
  payload: { name, phone, email, password, confirmPassword },
}) {
  yield put(loading(''));
  try {
    const {
      data: { token },
    } = yield call(api.post, `/users`, {
      name,
      phone,
      email,
      password,
      confirmPassword,
    });
    toast.success('cadastro efetuado com sucesso');
    history.push('/Login');
    yield put(successAction(''));
  } catch (error) {
    const message = errorVerify(error);
    toast.error(message);
    yield put(failureAction(message));
  }
}
export default all([
  takeLatest('@login/REQUEST_USER_EXIST', requestLoginExist),
  takeLatest('@login/REQUEST_LOGIN', requestLogin),
  takeLatest('@login/REQUEST_REGISTER_USER', requestRegisterUser),
]);
