import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import accountReducer, { withdraw } from "../features/account/accountSlice";

const AccountOperation = () => {
  const [deposit, setDeposit] = useState("");
  const [currency, setCurrency] = useState("USD");
  const [withdraw, setWithdraw] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [loanPurpose, setLoanPurpose] = useState("");
  const handleDeposit = () => {};
  const handlewithdraw = () => {};
  const handleRequest=()=>{};
  const handlePayloan=()=>{};
  const Account=useSelector((state)=>state.account);
  const dispatch = useDispatch();

  useEffect(() => {
    // deposit/withdraw/loan action when the component mounts but not working-----------------
    // dispatch(withdraw(1000)); 
  }, [dispatch]);
  console.log(Account)
  return (
    <div className="inputs">
      <div className="inp">
        <div>
          <label htmlFor="deposit">Deposit</label>
          <input
            type="number"
            id="deposit"
            value={deposit}
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
          value={withdraw}
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
