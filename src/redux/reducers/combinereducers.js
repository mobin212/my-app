import { combineReducers } from "redux";
import { setReducer,selectReducer, buyReducer } from "./reduser";


 const Reducers = combineReducers({
    allProduct : setReducer,
    one : selectReducer,
    buy : buyReducer,
    // remove:removeReducer
})

export default Reducers;