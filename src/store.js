import {createStore,combineReducers,applyMiddleware} from "redux";
import thunk from "redux-thunk";

/// reducer
const reducers= combineReducers({})

///middleware
const middleware=[thunk]

///createstore
/// (...) --> spreate opreater to push multiple value 
const  store= createStore(reducers,applyMiddleware(...middleware))

export default store