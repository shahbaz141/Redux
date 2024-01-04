// import combineReducer for multiple reducers
import { createStore, combineReducers, applyMiddleware } from "redux";
// import { thunk } from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./features/account/accountSlice";
import customerReducer from "./features/customer/customerSlice";

// here we will write the function to use multiple reducers
// const rootReducer=combineReducers({
//   account:accountReducer,
//   customer:customerReducer
// });
// export const store=createStore(rootReducer,applyMiddleware(thunk));
 export const store = configureStore({
  reducer: {
    account: accountReducer,
    customer: customerReducer,
  },
});
