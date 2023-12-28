// initial state for the account
const accountInitialState = {
  balance: 0,
  loan: "",
  loanPurpose: "",
};
// account reducer functions
export const accountReducer = (state = accountInitialState, action) => {
  if (action.type == "reset/reset1")
    return {
      ...state,
      balance: state.balance==0,
      loan: state.loan==0,
      loanPurpose: state.loanPurpose=="",
    };
  if (action.type === "account/deposit") {
    return {
      ...state,
      balance: state.balance + parseFloat(action.payload),
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
      loan: action.payload.amount,
      loanPurpose: action.payload.purpose,
      balance: state.balance + parseInt(action.payload.amount),
    };
  }
  if (action.type === "account/payloan") {
    return {
      ...state,
      balance: state.balance - state.loan,
      loan: 0,
      loanPurpose: "",
    };
  }
  return state;
};
// action/creators for the account reducer
export const deposit = (amount) => {
  return {
    type: "account/deposit",
    payload: amount,
  };
};

export const withdraw = (amount) => {
  return {
    type: "account/withdraw",
    payload: amount,
  };
};

export const requestLoan = (purpose, amount) => {
  return {
    type: "account/requestLoan",
    payload: {
      purpose,
      amount,
    },
  };
};
export const payloan = () => {
  return {
    type: "account/payloan",
  };
};
export const resetacc = () => {
  return {
    type: "reset/reset1",
  };
};
export default accountReducer;
