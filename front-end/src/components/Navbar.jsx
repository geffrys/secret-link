import React from "react";
import "../css/Navbar.css";
import SignOutBtn from "./SignOutBttn";
import imgLogo from "../img/Logo Vuelo secreto png2.png";
import { useAuth } from '../context/AuthContext.jsx'
import {useNavigate} from 'react-router-dom'

function Navbar() {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate()
  const onNavigate = () => {
    navigate(isAuthenticated ? '/client' : '/')
  }
  return (
    <section className="navbar">
      <section className="navbar__titulo">
        <figure onClick={onNavigate}>
          <img
            src={imgLogo}
            alt="Vuelo-Secreto Logo Image PNG"
            style={{ width: "120px", height: "auto" }}
          />
        </figure>
        <h1>Secreto Link</h1>
      </section>
      {isAuthenticated && <SignOutBtn />}
    </section>
  );
}

export default Navbar;
