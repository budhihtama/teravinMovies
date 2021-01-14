import axios from 'axios';
import {put, takeLatest} from 'redux-saga/effects';
import {ToastAndroid} from 'react-native';
import {getData} from './mainApi'

function* connect(action) {
  try {
    const resData = yield getData();
    // console.log(resData.data.results)
    // success connect
    yield put({type: 'CONNECT_SUCCESS', payload: resData.data.results});
    console.log('Connect Success');
  } catch (err) {
    // error
    console.log(err);
    yield put({type: 'CONNECT_FAILED'});
    ToastAndroid.showWithGravity(
      'Connection Failed',
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM,
    );
  }
}

function* connectSaga() {
  yield takeLatest('CONNECT', connect)
}
export default connectSaga;
