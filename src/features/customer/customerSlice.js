// initial state of the customer
export const customerInitialstate={
    fullName:"",
    nationalId:"",
    createdAt:"",
  }
  
  // customer reducer functions
  export const customerReducer=(state=customerInitialstate,action)=>{
  if(action.type==="customer/createCustomer")
  return{
    ...state,
    fullName:action.payload.fullName,
    nationalId:action.payload.nationalId,
    createdAt:action.payload.createdAt,
  }
  if(action.type==="customer/updateCustomer"){
    return{
      ...state,
      fullName:action.payload
    }
  }
  return state;
  };
  // action/creator for customer-------------------------
  export const createCustomer=(fullName,nationalId,createdAt)=>{
    return{
      type:"customer/createCustomer",
    payload:{
      fullName,
      nationalId,
      createdAt: new Date().toISOString
    }
    }
  }
  export const updateCustomer=(fullName)=>{
    return{
      type:"customer/updateCustomer",
      payload:fullName
    }
  }; 
  export default customerReducer;