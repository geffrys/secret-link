import React from "react";
import "../css/Navbar.css";
import SignOutBtn from "./SignOutBttn";
import imgLogo from "../img/Logo Vuelo secreto png2.png";
import { useAuth } from '../context/AuthContext.jsx'

function Navbar() {
  const { isAuthenticated } = useAuth();

  return (
    <section className="navbar">
      <section className="navbar__titulo">
        <figure>
          <img
            src={imgLogo}
            alt="Vuelo-Secreto Logo Image PNG"
            style={{ width: "125px", height: "auto" }}
          />
        </figure>
        <h1>Secreto Link</h1>
      </section>
      {isAuthenticated && <SignOutBtn />}
    </section>
  );
}

export default Navbar;
