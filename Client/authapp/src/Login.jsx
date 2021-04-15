import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router";

const Login = () => {
  const history = useHistory();
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
      <button
        onClick={async () => {
          const res = await axios
            .post("/login", user)
            .then((resp) => {
              console.log(resp);
              history.push("/");
            })

            .catch((err) => console.log(err.response, "ah"));
          if (res) {
            if (res.status == 200) {
              history.push("/about");
            }
          }
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default Login;
