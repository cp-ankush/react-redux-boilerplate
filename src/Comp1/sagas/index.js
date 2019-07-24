import { takeEvery, call, put } from 'redux-saga/effects'
import {getData} from '../api'
import {
	GET_DATA,
  GET_DATA_SUCCESS
} from '../constants'

function* fetchData(action: any) {
	try {
    console.log("==coming saga=>>>")
      const response = yield call(getData);
      console.log("response:::", response)
      yield put({
  			type: GET_DATA_SUCCESS,
        data: response
  		})

	} catch (e) {
		// console.log('error is', e)
		// yield put({
		// 	type: PAYMENT_INFO_FAILURE,
		// })
	}
}

export default function* main() {
	yield takeEvery(GET_DATA, fetchData)
}
