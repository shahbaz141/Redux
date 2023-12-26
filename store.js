import { createStore } from "redux";
const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};
const reducer = (state = initialState, action) => {
  if (action.type === "account/deposit") {
    return {
      ...state,
      balance: state.balance + action.payload,
    };
  }
  if (action.type === "account/withdraw") {
    return {
      ...state,
      balance: state.balance - action.payload,
    };
  }
  if (action.type === "account/requestLoan") {
    return {
      ...state,
      loan:action.payload.amount,
      loanPurpose:action.payload.purpose,
      balance:state.balance + action.payload.amount
    };
  }
  if(action.type==="account/payloan")
 {
    return{
        ...state,
        balance:state.balance-state.loan,
        loan:0,
        loanPurpose:"",
    };
 } 
 return state;
};
const store=createStore(reducer);
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
const deposit=(amount)=>{
  return {
    type:"account/deposit",
    payload:amount,
  }
}
store.dispatch(deposit(1500));
console.log(store.getState());
const withdraw=(amount)=>{
  return{
    type:"account/withdraw",
    payload:amount,
  }
}
store.dispatch(withdraw(1500));
console.log(store.getState());
const requestLoan=(purpose,amount)=>{
  return{
    type:"account/requestLoan",
    payload:{
      purpose,
      amount,

    }
  }
}
store.dispatch(requestLoan("buy a car",2000))
console.log(store.getState());
const payloan=()=>{
  return{
    type:"account/payloan",
  }
}
store.dispatch(payloan());
console.log(store.getState());