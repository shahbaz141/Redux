// import combineReducer for multiple reducers
import { createStore,combineReducers } from "redux";
import { accountReducer } from "./src/features/account/accountSlice";
import { customerReducer } from "./src/features/customer/customerSlice";


// here we will write the function to use multiple reducers
const rootReducer=combineReducers({
  account:accountReducer,
  customer:customerReducer
})
const store=createStore(rootReducer);
store.dispatch({type:"account/deposit", payload:1000});
console.log(store.getState());
store.dispatch({type:"account/withdraw",payload:500});
console.log(store.getState());
store.dispatch({type:"account/requestLoan",payload:{
    amount:1000,
    purpose:"buy a beer",
}})
console.log(store.getState());
store.dispatch({type:"account/payloan"})
console.log(store.getState());

store.dispatch(requestLoan("buy a car",2000))
console.log(store.getState());

store.dispatch(payloan());
console.log(store.getState());

store.dispatch(createCustomer("shahbaz",1234))
console.log(store.getState());
