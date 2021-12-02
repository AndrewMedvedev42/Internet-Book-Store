import basketReducer from "./basket-reducer";
import {combineReducers} from "redux"

const rootReducer = combineReducers({
    basket_list:basketReducer
})
export default rootReducer