import { createSlice } from "@reduxjs/toolkit";

// initial state of the customer
export const customerInitialstate={
    fullName:"",
    nationalId:"",
    createdAt:"",
  }
  const customerSlice=createSlice({
name:"customer",
initialState:customerInitialstate,
reducers:{
  createCustomer:{
    prepare:(name,id)=>{
      return{
        payload:{
          name,
          id,
        }
      }
    },
    reducer:(state,action)=>{
      state.fullName=action.payload.fullName;
      state.nationalId=action.payload.nationalId;
     
  },
},
  updateCustomer:(state,action)=>{
    state.fullName=action.payload.fullName;
  }
}
  })
  // // customer reducer functions
  // export const customerReducer=(state=customerInitialstate,action)=>{
  // if(action.type==="customer/createCustomer")
  // return{
  //   ...state,
  //   fullName:action.payload.fullName,
  //   nationalId:action.payload.nationalId,
  //   createdAt:action.payload.createdAt,
  // }
  // if(action.type==="customer/updateCustomer"){
  //   return{
  //     ...state,
  //     fullName:action.payload
  //   }
  // }
  // return state;
  // };
  // // action/creator for customer-------------------------
  // export const createCustomer=(fullName,nationalId,createdAt)=>{
  //   return{
  //     type:"customer/createCustomer",
  //   payload:{
  //     fullName,
  //     nationalId,
  //     createdAt: new Date().toISOString
  //   }
  //   }
  // }
  // export const updateCustomer=(fullName)=>{
  //   return{
  //     type:"customer/updateCustomer",
  //     payload:fullName
  //   }
  // }; 
  // export default customerReducer;
  export const {createCustomer,updateCustomer}=customerSlice.actions
  export default customerSlice.reducer