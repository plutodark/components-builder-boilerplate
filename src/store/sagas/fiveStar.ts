import {
  FIVE_STAR__API_REQUEST
} from 'src/store/types'
import {
  fiveStarApiFailure,
  fiveStarApiSuccess
} from 'src/store/actions'
import { call, put, takeLatest } from 'redux-saga/effects'
import _get from 'lodash/get'
import axios from 'axios'


const getFiveStarApiRequest = async () => {
  const { status, data } = await axios({
    url: 'https://cat-fact.herokuapp.com/facts/',
    method: 'GET',
  })
  return data
}

function * getFiveStar(): Generator {
  try {
    const result = yield call(getFiveStarApiRequest)
    yield put(fiveStarApiSuccess(result))
  } catch (error) {
    yield put(fiveStarApiFailure())
  }
}

export default function * getFiveStarSaga () {
  yield takeLatest(FIVE_STAR__API_REQUEST, getFiveStar)
}
