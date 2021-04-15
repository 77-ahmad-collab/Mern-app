import React, { useState } from "react";

const Login = () => {
  const [user, setuser] = useState({
    email: "",
    password: "",
  });
  const handlechange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setuser((val) => {
      return { ...val, [name]: value };
    });
  };
  console.log(user);
  return (
    <div>
      <h2>This is a login part</h2>
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
    </div>
  );
};

export default Login;
