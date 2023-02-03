import {createStore,combineReducers,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {restuarantListReducer} from './reducers/restaurantReducer'
/// reducer
const reducers= combineReducers
({
    restaurentReducer:restuarantListReducer
})

///middleware
const middleware=[thunk]

///createstore
/// (...) --> spreate opreater to push multiple value 
const  store= createStore(reducers,applyMiddleware(...middleware))

export default store