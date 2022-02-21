// the store is made for all the states
import { createStore } from "redux";
import { phoneReducer } from "./Phone/reducerPhone";

const store = createStore(phoneReducer)

export default store;