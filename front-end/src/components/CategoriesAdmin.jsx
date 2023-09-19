import React, { useEffect } from "react";
import SeePlansBttn from "./SeePlansBttn";
import RegisterAgentsBttn from "./RegisterAgentsBttn";
import { useAuth } from "../context/AuthContext.jsx";

function CategoriesAdmin() {
  const { user } = useAuth();
  const categories = () => {
    if (user.id_agent_type === 1) {
      return (
        <div className="categories__cat">
          <h1 className="categories__titulo">Categories Admin</h1>
          <SeePlansBttn />
          <RegisterAgentsBttn />
        </div>
      );
    } else if (user.id_agent_type === 2) {
      return (
        <div className="categories__cat">
          <h1 className="categories__titulo">Categories agent</h1>
          <SeePlansBttn />
        </div>
      );
    }
  };

  return <section className="categories">{categories()}</section>;
}

export default CategoriesAdmin;
