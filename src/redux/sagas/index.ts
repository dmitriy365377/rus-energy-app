import { auth } from '../../firebase';
import { all, takeEvery, call } from 'redux-saga/effects';

import { LOGIN_FETCH_ASYNC } from '../../types/type';

function* watcherLogin() {
    yield takeEvery(LOGIN_FETCH_ASYNC, fetchLogin)
}

function fetcher(action: any) {
    console.log(action)
    auth.signInWithEmailAndPassword(action.payload.personalAccount, action.payload.password)
        .then(user => console.log(user))
        .then(err => console.log(err))
}

// return new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         return resolve("Авторизован")
    //     }, 3000)
    // })
    //     .then(result => result)
//"username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC";
function* fetchLogin(action: any) {
    console.log(action)
    try {
        const result = yield call(fetcher, action);
    } catch (error) {

    }
}

export default function* rootSaga() {
    yield all([
        call(watcherLogin)
    ]);
}