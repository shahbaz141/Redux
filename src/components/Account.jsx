import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { resetacc } from '../features/account/accountSlice';

const Account = ({currency1}) => {
    const dispatch=useDispatch()
    // const [currency,setCurrency]=useState("");
    // setCurrency(currencyName);
  let data=useSelector((state)=>state.account);
  console.log(data, "the account data is")
  const handleReset=()=>{
    dispatch(resetacc());
  };
  return (
    <div>
        <h2>Account details</h2>
        <h3>balance: {data.balance?data.balance:"0"} {currency1}</h3>
        <h3>laon:{data.loan?data.loan:0}</h3>
        <h3>laonPurpose:{!data.loanPurpose==""?data.loanPurpose:""}</h3>
        <h3>loan paid:</h3>
        <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default Account