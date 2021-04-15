import React from "react";
import { Route } from "react-router";
import { About } from "./About";
import { Home } from "./Home";
import Login from "./Login";
import { Navbar } from "./Navbar";
import Register from "./Register";

export const Routes = () => {
  return (
    <div>
      <Navbar />
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/reg">
        <Register />
      </Route>
      <Route exact path="/about">
        <About />
      </Route>
    </div>
  );
};
