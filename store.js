// import combineReducer for multiple reducers
import { createStore,combineReducers } from "redux";
import { accountReducer } from "./src/features/account/accountSlice";
import { customerReducer } from "./src/features/customer/customerSlice";


// here we will write the function to use multiple reducers
const rootReducer=combineReducers({
  account:accountReducer,
  customer:customerReducer
});
export const store=createStore(rootReducer);

