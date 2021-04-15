import React, { useState } from "react";
import axios from "axios";
const Register = () => {
  const [user, setuser] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const handlechange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setuser((val) => {
      return { ...val, [name]: value };
    });
  };
  console.log(user, "user");
  return (
    <div>
      <h2>This is a register app</h2>
      <input
        type="text"
        placeholder="name"
        name="name"
        value={user.name}
        onChange={handlechange}
      />
      <input
        type="email"
        placeholder="email"
        name="email"
        value={user.email}
        onChange={handlechange}
      />
      <input
        type="text"
        placeholder="password"
        name="password"
        value={user.password}
        onChange={handlechange}
      />
      <input
        type="text"
        placeholder="cpaswword"
        name="cpassword"
        value={user.cpassword}
        onChange={handlechange}
      />
      <br></br>
      <button
        onClick={async () => {
          const res = await axios.post("/signup", user);
          console.log(res, "myres");
        }}
      >
        {" "}
        Submits
      </button>
    </div>
  );
};

export default Register;
