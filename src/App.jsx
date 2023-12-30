import React, { useState } from "react";
import CreateCustomer from "./components/CreateCustomer";
import Customer from "./components/Customer";
import AccountOperation from "./components/AccountOperation";
import { useSelector } from "react-redux";
import Account from "./components/Account";
import BalanceDisplay from "./components/BalanceDisplay";

const App = () => {
  const [currency,setcurrency]=useState("");
  const state = useSelector((state) => state.customer);
  console.log(currency)
  
  return (
    <div>
      <h1>💵The React-Redux Bank💰</h1>
      {state.fullName==="" ? (
        <CreateCustomer />
       ) : ( 
        <>
        <BalanceDisplay/>
          <Customer  />
          <AccountOperation setCurrency1={setcurrency}/>
          <Account currency1={currency}/>
        </>
        )}  
    </div>
  );
};

export default App;
