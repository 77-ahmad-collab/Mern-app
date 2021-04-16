import React, { useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router";

export const About = () => {
  const history = useHistory();
  const callme = async () => {
    const dat = await axios
      .get("/about")
      .then((res) => console.log(res, "kk"))
      .catch((err) => {
        console.log(err.response.status, "er");
        history.push("/");
      });
    // console.log(dat);
  };
  useEffect((val) => {
    callme();
  }, []);
  return (
    <div>
      <h3>This is about components</h3>
    </div>
  );
};
