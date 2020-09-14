import { auth } from '../../firebase';
import { all, takeEvery, call, put } from 'redux-saga/effects';

import { LOGIN_FETCH_ASYNC } from '../typeAction/type';

// action 
import {
    startFetching,
    stopFetching,
    fill,
    setFetchingError
} from '../reducers/actions';


// wathcer
function* watcherLogin() {
    yield takeEvery(LOGIN_FETCH_ASYNC, fetchLogin)
}


// async fetch
function fetcher(action: any) {
    return auth.signInWithEmailAndPassword(action.payload.personalAccount, action.payload.password)
        .then(({ user }) => {
            return user
        })
}


// worker
function* fetchLogin(action: any) {
    try {
        yield put(startFetching());
        const result = yield call(fetcher, action);
        yield put(fill(result));
    } catch (error) {
        yield put(setFetchingError(error.message));
    } finally {
        yield put(stopFetching());
    }
}

export default function* rootSaga() {
    yield all([
        call(watcherLogin)
    ]);
}