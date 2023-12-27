import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import accountReducer, { deposit, withdraw } from "../features/account/accountSlice";

const AccountOperation = () => {
  const [deposite, setDeposit] = useState("");
  const [currency, setCurrency] = useState("USD");
  const [withdrawe, setWithdraw] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [loanPurpose, setLoanPurpose] = useState("");
  const checkAcc=useSelector((state)=>state.account);
  const handleDeposit = () => {
    if(!deposite)return
    dispatch(deposit(deposite));
  };
  console.log(checkAcc,"account status")
  const handlewithdraw = () => {
    if(checkAcc.balance=="") return alert("cannot withdraw")
    else
  dispatch(withdraw(withdrawe));
  };
  const handleRequest = () => {};
  const handlePayloan = () => {};
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
          <option value="Us dollar">Us dollar</option>
          <option value="pound">Pound</option>
          <option value="euro">Euro</option>
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
