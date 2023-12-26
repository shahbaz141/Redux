import React from 'react'
import CreateCustomer from './components/CreateCustomer'
import Customer from './components/Customer'
import AccountOperation from './components/AccountOperation'

const App = () => {
  return (
    <div><h1>💵The React-Redux Bank💰</h1>
    <CreateCustomer/>
    <Customer/>
    <AccountOperation/>
    </div>
  )
}

export default App