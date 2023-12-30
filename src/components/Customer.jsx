import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'


const Customer = () => {
  const customerState=useSelector((state)=>state.customer);
  // const dispatch=useDispatch();
  // dispatch(customer); starts rendering non stop if this method is used 
  // useEffect(() => {
  //   // Dispatching createCustomer action when the component mounts
  //   const data=dispatch(createCustomer("shahbaz",37405-121222-1)) //createcustomer
  //   console.log(data);
  //   const data1=dispatch(updateCustomer("imran farooq")); //updateCustomer 
  //   console.log(data1);
  // }, [dispatch]);
  // console.log(customerState); //updated customer state
  return (
    <div><h1>Welcome {customerState.fullName}</h1></div>
  )
}

export default Customer