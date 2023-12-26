import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createCustomer, updateCustomer } from '../features/customer/customerSlice';
import { deposit } from '../features/account/accountSlice';

const Customer = () => {
  const customerState=useSelector((state)=>state.customer);
  const dispatch=useDispatch();
  // dispatch(customer); starts rendering non stop if this method is used 
  useEffect(() => {
    // Dispatching createCustomer action when the component mounts
    const data=dispatch(createCustomer("shahbaz",37405-121222-1))
    console.log(data);
    const data1=dispatch(updateCustomer("imran farooq"));
    console.log(data1);
  }, [dispatch]);
  console.log(customerState);
  return (
    <div><h1>Welcome {customerState.fullName}</h1></div>
  )
}

export default Customer