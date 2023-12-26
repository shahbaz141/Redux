import React, { useState } from "react";

const CreateCustomer = () => {
  const [name, setName] = useState("");
  const [id,setID]=useState("")
  const handleClick=()=>{};
  return (
    <div>
      <h2>Create New Customer</h2>
      <div className="inputs">
        <label htmlFor="name">Customer Full Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="inputs">
        <label htmlFor="id">National ID</label>
        <input
          type="text"
          id="id"
          value={id}
          onChange={(e) => setID(e.target.value)}
        />
      </div>
      <button onClick={handleClick}>Create New Customer</button>
    </div>
  );
};

export default CreateCustomer;
