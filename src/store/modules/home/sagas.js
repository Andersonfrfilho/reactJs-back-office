import { all, call, put, takeLatest } from 'redux-saga/effects';
import {
  loading,
  successAction,
  failureAction,
  breakAction,
} from '../common/actions';
import history from '../../../services/history';

function* requestChangePage() {
  yield put(loading(''));
  history.push('/Drawer/userList');
  // observação caso vc tente utiliza o history go ele ira para agina porém resetaram os estados
  // o que não deve ser feito pois estou tentando passar os estados para o reducer de uma pagina
  // para acessa-los ao seu inicio :x
  // history.go();
  yield put(successAction(''));
}
export default all([
  takeLatest('@testeNavigation/REQUEST_CHANGE_PAGE', requestChangePage),
]);
