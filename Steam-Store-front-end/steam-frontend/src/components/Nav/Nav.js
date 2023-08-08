import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg bg-primary bg-gradient">
      <div className="container">
        <Link className="navbar-brand" to={"/"}>
          VideoGameSales
        </Link>
        <Link className="d-flex nav-link" to={"/new-game"}>
          <button className="btn btn-outline-dark">New Game</button>
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
