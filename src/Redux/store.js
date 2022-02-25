// the store is made for all the states
import { combineReducers, createStore, applyMiddleware} from "redux";
import {phoneReducer}  from "./Phone/reducerPhone";
import tvReducer from './Tv/reducerTv';
import { commentReducer } from "./comments/reducerComments";
import thunk from "redux-thunk";
import {composeWithDevTools} from 'redux-devtools-extension'

const rootReducer = combineReducers({
    phone:phoneReducer,
    television: tvReducer,
    comments: commentReducer
})

// use redux-devtools: configuration, import compose from 'redux'
// const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

// the second way to install the react-devtool is: npm install --save redux-devtools-extension

// const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store;

// last step is to create a function that we will use to realize the api call. Let switch in the actionComment.js