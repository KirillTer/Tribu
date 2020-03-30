import { put, call, takeLatest, all } from 'redux-saga/effects';

import { LOAD_MAIN_START, LOAD_MAIN_SUCCESS, LOAD_MAIN_FAILURE,
LOAD_MORE_START, LOAD_MORE_SUCCESS, LOAD_MORE_FAILURE,
LOAD_DETAIL_START, LOAD_DETAIL_SUCCESS, LOAD_DETAIL_FAILURE } from '../actionTypes'
import { fetchMainApi, fetchMoreApi, fetchDetailApi } from '../../api'

function* callFetchMain() {
    try {
        const result = yield call(fetchMainApi)  
        yield put({ type: LOAD_MAIN_SUCCESS, payload: result });
    } catch(error) {
        yield put({ type: LOAD_MAIN_FAILURE, payload: error });
    }
}

function* callFetchMore({payload}) {
    try {
        const result = yield call(() => fetchMoreApi(payload))
        yield put({ type: LOAD_MORE_SUCCESS, payload: result });
    } catch(error) {
        yield put({ type: LOAD_MORE_FAILURE, payload: error });
    }
}

function* callFetchDetail({payload}) {
    try {
        const result = yield call(() => fetchDetailApi(payload))
        yield put({ type: LOAD_DETAIL_SUCCESS, payload: result });
    } catch(error) {
        yield put({ type: LOAD_DETAIL_FAILURE, payload: error });
    }
}

function* mainWatcher() {
    yield takeLatest(LOAD_MAIN_START, callFetchMain)
}

function* moreWatcher() {
    yield takeLatest(LOAD_MORE_START, action => callFetchMore(action))
}

function* detailWatcher() {
    yield takeLatest(LOAD_DETAIL_START, action => callFetchDetail(action))
}

export default function* rootSaga() {
    yield all([
        mainWatcher(),
        moreWatcher(),
        detailWatcher()
    ]);
}