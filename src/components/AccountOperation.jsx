import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import accountReducer, {
  deposit,
  payloan,
  requestLoan,
  withdraw,
} from "../features/account/accountSlice";

const AccountOperation = ({setCurrency1}) => {
  const [deposite, setDeposit] = useState("");
  const [currency, setCurrency] = useState("USD");
  const [withdrawe, setWithdraw] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [loanPurpose, setLoanPurpose] = useState("");
  const checkAcc = useSelector((state) => state.account);
   useEffect(() => {
    setCurrency1(currency); // Update the currency in the parent component using setCurrency1
  }, [currency, setCurrency1]);
  const handleDeposit = () => {
    if (!deposite) return;
    dispatch(deposit(deposite,currency));
    setDeposit("");
  };
  console.log(checkAcc, "account status");
  const handlewithdraw = () => {
    if (checkAcc.balance == 0 || withdrawe > checkAcc.balance)
      return alert("cannot withdraw balance is less than withdraw");
    else dispatch(withdraw(withdrawe));
    setWithdraw("");
  };
  const handleRequest = () => {
    if(!checkAcc.loan==0 ||!checkAcc.loanPurpose=="") return alert("already loan taken or LoanPurpose added ");
    if(loanPurpose=="") return alert("enter the LoanPurpose");
      dispatch(requestLoan(loanPurpose,loanAmount))
      setLoanAmount("");
      setLoanPurpose("");
    };
  
  const handlePayloan = () => {
    if(!checkAcc.laon==0)
      return
      dispatch(payloan());
    
  };
  const Account = useSelector((state) => state.account);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   // deposit/withdraw/loan action when the component mounts but not working error says deposit is not a function-----------------
  //   // dispatch(withdraw(1000));
  // }, [dispatch]);
  // console.log(Account);
  return (
    <div className="inputs">
      <div className="inp">
        <div>
          <label htmlFor="deposit">Deposit</label>
          <input
            type="number"
            id="deposit"
            value={deposite}
            onChange={(e) => setDeposit(e.target.value)}
          />
        </div>
        <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
          <option value="USD">Us dollar</option>
          <option value="GBP">Pound</option>
          <option value="EUR">Euro</option>
        </select>
        <button onClick={handleDeposit}>Deposit</button>
      </div>
      <div>
        <label htmlFor="withdraw">Withdraw</label>
        <input
          type="number"
          id="withdraw"
          value={withdrawe}
          onChange={(e) => setWithdraw(e.target.value)}
        />
        <button onClick={handlewithdraw}>Withdraw</button>
      </div>
      <div>
        <label htmlFor="laon">Request a Loan</label>
        <input
          type="number"
          id="loan"
          placeholder="loan amount"
          value={loanAmount}
          onChange={(e) => setLoanAmount(e.target.value)}
        />
        <input
          type="text"
          placeholder="loan purpose"
          value={loanPurpose}
          onChange={(e) => setLoanPurpose(e.target.value)}
        />
        <button onClick={handleRequest}>Request Loan</button>
      </div>
      <div>
        <span>PayBack $X</span>
        <button onClick={handlePayloan}>Pay Loan</button>
      </div>
    </div>
  );
};

export default AccountOperation;
