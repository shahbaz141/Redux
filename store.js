// import combineReducer for multiple reducers
import { createStore,combineReducers,applyMiddleware } from "redux";
import { accountReducer } from "./src/features/account/accountSlice";
import { customerReducer } from "./src/features/customer/customerSlice";
import { thunk } from "redux-thunk";


// here we will write the function to use multiple reducers
const rootReducer=combineReducers({
  account:accountReducer,
  customer:customerReducer
});
export const store=createStore(rootReducer,applyMiddleware(thunk));

