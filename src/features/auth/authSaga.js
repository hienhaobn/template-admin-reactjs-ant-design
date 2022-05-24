import { fork, take, call, delay } from 'redux-saga/effects';
import {authActions} from "./authSlice";

function* handleLogin(payload) {
  console.log('handle login', payload);
  yield delay(100);
  localStorage.setItem('access_token', 'fake_token');
  // redirect admin page
}

function* handleLogout() {
  console.log('handle logout');
  localStorage.removeItem('access_token');
  // redirect to login
}

function* watchLoginFlow() {
  while (true) {
    const isLoggedIn = Boolean(localStorage.getItem('access_token'));
    console.log('isLoggedIn', isLoggedIn)
    if (!isLoggedIn) {
      const action = yield take(authActions.login.type);
      yield fork(handleLogin, action.payload);
    }

    yield take(authActions.logout.type);
    yield call(handleLogout);
  }
}

export function* authSaga() {
  yield fork(watchLoginFlow);
}
