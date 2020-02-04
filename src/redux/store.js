import {createStore, combineReducers, applyMiddleware} from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import houseReducer from './houseReducer'

const rootReducer = combineReducers({houseReducer})

export default createStore(rootReducer, applyMiddleware(promiseMiddleware))