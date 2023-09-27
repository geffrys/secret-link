import React from "react";
import FoodTypeRows from "./FoodTypeRows";
import { FaPlusCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function FoodTypeTable() {
  const navigate = useNavigate();
  return (
    <>
      <section className="packages__top">
        <h1 className="packages__title">Food Types</h1>
        <span className="packages__add" onClick={() => navigate("/foodtypes")}>
          <FaPlusCircle />
        </span>
      </section>
      <section className="packages__case">
        <table className="packages__table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <FoodTypeRows />
          </tbody>
        </table>
      </section>
    </>
  );
}

export default FoodTypeTable;
