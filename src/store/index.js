import { combineReducers, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from "../sagas"

import Auth from '../Auth/reducers/index'

const sagaMiddleware = createSagaMiddleware();

const AppReducers = combineReducers({
    Auth,
});

const rootReducer = (state, action) => {
	return AppReducers(state,action);
}

let store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga)

export default store;
