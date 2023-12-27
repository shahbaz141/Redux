import React from "react";
import CreateCustomer from "./components/CreateCustomer";
import Customer from "./components/Customer";
import AccountOperation from "./components/AccountOperation";
import { useSelector } from "react-redux";

const App = () => {
  const state = useSelector((state) => state.customer);
  
  return (
    <div>
      <h1>💵The React-Redux Bank💰</h1>
      {state.fullName==="" ? (
        <CreateCustomer />
       ) : ( 
        <>
          <Customer />
          <AccountOperation />
        </>
       )} 
    </div>
  );
};

export default App;
