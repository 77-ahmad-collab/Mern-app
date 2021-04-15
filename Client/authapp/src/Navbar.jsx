import React from "react";
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <div>
      <Link to="/" exact>
        home
      </Link>
      <Link to="/login" exact>
        login
      </Link>
      <Link to="/reg" exact>
        REgiser
      </Link>
      <Link to="/about">About</Link>
    </div>
  );
};
