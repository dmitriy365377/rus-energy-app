import { all, takeEvery, call } from 'redux-saga/effects';

import { LOGIN_FETCH_ASYNC } from '../../types/type';

function* watcherLogin() {
    yield takeEvery(LOGIN_FETCH_ASYNC, fetchLogin)
}

function fetcher() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve("Авторизован")
        }, 3000)
    })
        .then(result => result)
}
//"username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC";
function* fetchLogin() {
    try {
        const result = yield call(fetcher);
        console.log(result)
        document.cookie = `username=${result} expires=Thu, 12 Sep 2020 12:00:00 UTC`
        // yield put()
    } catch (error) {

    }
}

export default function* rootSaga() {
    yield all([
        call(watcherLogin)
    ]);
}