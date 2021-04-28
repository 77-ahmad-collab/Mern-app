import logo from "./logo.svg";
import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import { read } from "node:fs";

function App() {
  const [data, setdata] = useState({
    name: "",
    email: "",
    file: "",
    filename: "",
  });
  const [p, setp] = useState("");

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setdata((val) => {
      return { ...val, [name]: value };
    });
  };

  // technoiuq 2 js
  const [fileinputstate, setfileinputstate] = useState("");
  const [selected, setselectedfile] = useState("");
  const [previewsource, setpreviewsource] = useState("");
  const callme = (e) => {
    const file = e.target.files[0];
    setselectedfile(file);
    previewfile(file);
  };
  const previewfile = (file) => {
    // const reader = new FileReader();
    // reader.readAsDataURL(file);
    // reader.onloadend = () => {
    //   setpreviewsource(reader.result);
    // };
  };

  const callsubmit = (e) => {
    e.preventDefault();
    // if (!selected) return;
    // uploadimage(previewsource);
  };
  const uploadimage = (base64image) => {
    // console.log(base64image);
  };
  return (
    <div className="App">
      {/* start of techniwue 2 */}

      <form>
        <input type="file" name="image" />
        <button type="submit">Submit</button>
      </form>
      {/* {previewsource && (
        <img src={previewsource} alt="logo" width="330px" height="300px" />
      )} */}
      {/* end of technique 2 */}
      {/* technique 1 */}
      {/* <form
        onSubmit={(e) => {
          e.preventDefault();
          const fd = new FormData();
          fd.append("name", data.name);
          fd.append("email", data.email);
          fd.append("dp", data.file);
          const options = fd;
          // console.log("your button is fine", fd);
          axios
            .post("/add", options)
            .then((res) => {
              console.log(res);
              setp(res.data);
            })
            .catch((errr) => console.log(errr));
        }}
      >
        <input
          type="text"
          name="name"
          value={data.name}
          onChange={handleChange}
          placeholder="name"
        />
        <input
          type="text"
          name="email"
          value={data.email}
          onChange={handleChange}
          placeholder="email"
        />
        <br></br>
        {data.filename}
        <input
          type="file"
          name="file"
          onChange={(e) => {
            console.log(e.target.files[0]);
            setdata((val) => {
              return {
                ...val,
                file: e.target.files[0],
                filename: e.target.files[0].name,
              };
            });
          }}
        />
        <img src={`/log.png`} alt="no"></img>
        <button>Submite</button>
      </form> */}
    </div>
  );
}

export default App;
