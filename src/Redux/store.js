// the store is made for all the states
import { combineReducers, createStore } from "redux";
import {phoneReducer}  from "./Phone/reducerPhone";
import tvReducer from './Tv/reducerTv';

const rootReducer = combineReducers({
    phone:phoneReducer,
    television: tvReducer
})

const store = createStore(rootReducer)

export default store;