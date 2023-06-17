import { all, fork } from 'redux-saga/effects'
import fiveStar from './fiveStar'


export default function * rootSaga () {
  yield all([
    fork(fiveStar),
  ])
}