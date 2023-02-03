import { R_FAIL,R_SUCCESS } from "../constants/restuarantConstants";
//reducer function

export const restuarantListReducer=(state={restaurantList:[]},action)=>
{
    switch(action.type)
    {
        case R_SUCCESS:
            return{restaurantList:action.payload}
        case R_FAIL:
            return{restaurantList:action.error}
        default:
            return state        
    }
}