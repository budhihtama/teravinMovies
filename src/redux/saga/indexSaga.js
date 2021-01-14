import {all} from 'redux-saga/effects';
import connectSaga from './connectionSaga'


export default function* rootSaga() {
    yield all([connectSaga()])
}