import React, { useEffect, useState } from "react";
import axios from "axios";
export const Contact = () => {
  const [dat, setdat] = useState({
    name: "",
    email: "",
    message: "",
  });
  const run = async () => {
    await axios
      .get("/contact")
      .then((res) => {
        console.log(res.data);
        setdat({
          name: res.data.name,
          email: res.data.email,
          message: "",
        });
      })
      .catch((err) => console.log(err.response));
  };
  useEffect(() => {
    run();
  }, []);
  const handlechange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setdat((val) => {
      return { ...val, [name]: value };
    });
  };
  return (
    <div>
      <input
        type="text"
        name="name"
        value={dat.name}
        onChange={handlechange}
        placeholder="enter your name"
      />
      <input
        type="email"
        name="email"
        value={dat.email}
        onChange={handlechange}
        placeholder="enter your mail id"
      />
      <input
        type="text"
        name="message"
        value={dat.message}
        onChange={handlechange}
        placeholder="enter your message"
      />
      <button>Submit</button>
    </div>
  );
};
