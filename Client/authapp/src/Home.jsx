import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
export const Home = () => {
  const history = useHistory();
  const [name, setname] = useState("");
  const callhome = async () => {
    await axios
      .get("/home")
      .then((res) => {
        console.log(res.data);
        setname(res.data);
      })
      .catch((err) => {
        console.log(err.response);
        history.push("/login");
      });
  };
  useEffect(() => {
    callhome();
  });
  return (
    <div>
      This is a home component
      <h2>{name}</h2>
    </div>
  );
};
