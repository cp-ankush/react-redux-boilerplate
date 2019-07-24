import { fork } from "redux-saga/effects";
import fetchComp1Saga from '../Comp1/sagas'
// import fetchUpcomingMatchesSaga from "../src/Home/sagas/fetchUpcomingMatchesSaga";

export default function* rootSaga() {
 yield [
  // fork(fetchUpcomingMatchesSaga)
  fork(fetchComp1Saga)
 ];
}
