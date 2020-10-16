import React, { useState } from "react";
import useInput from "../hooks/useInput";

function UserForm() {
  const [firstName, bindFirstName, resetFirstName] = useInput("");
  const [lastName, bindLastName, resetLastName] = useInput("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (firstName.length > 0 && lastName.length > 0) {
      alert(`Hello ${firstName} ${lastName}`);
      resetFirstName();
      resetLastName();
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="firstName">First Name</label>
        <input type="text" {...bindFirstName} />
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <input type="text" {...bindLastName} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default UserForm;
