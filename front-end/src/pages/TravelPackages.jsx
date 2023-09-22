import PackagesRows from "../components/TravelPackages/PackagesRows.jsx";
import PackagesRowsUn from "../components/TravelPackages/PackageRowsUn.jsx";
import { useAuth } from "../context/AuthContext.jsx";

import { FaPlusCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "../css/Packages.css";
import { useState } from "react";

function TravelPackages() {
  const { user } = useAuth();
  const [state, setState] = useState(false);
  const handleState = () => {
    setState(!state);
  };
  const navigate = useNavigate();
  return (
    <section className="packages">
      <section className="packages__container">
        <section className="packages__top">
          <h1 className="packages__title">Available Packages</h1>
          <span
            className="packages__add"
            onClick={() => navigate("/create-packages")}
          >
            <FaPlusCircle />
          </span>
        </section>
        <section className="packages__case">
          <table className="packages__table">
            <thead>
              <tr>
                <th>Destination</th>
                <th>Package price</th>
                <th>Transportation</th>
                <th>Days of stay</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              <PackagesRows />
            </tbody>
          </table>
        </section>
        {state && (
          <>
            <section className="packages__top">
              <h1 className="packages__title">Unavailabe Packages</h1>
            </section>
            <section className="packages__case">
              <table className="packages__table">
                <thead>
                  <tr>
                    <th>Destination</th>
                    <th>Package price</th>
                    <th>Transportation</th>
                    <th>Days of stay</th>
                    <th>Details</th>
                  </tr>
                </thead>
                <tbody>
                  <PackagesRowsUn />
                </tbody>
              </table>
            </section>
          </>
        )}

        <section className="packages__btns">
          {user?.id_agent_type != 2 && (
            <button className="packages__bttn" onClick={handleState}>
              Show Unavailable Packages
            </button>
          )}
          <button
            className="packages__bttn"
            onClick={() => navigate("/client")}
          >
            Back
          </button>
        </section>
      </section>
    </section>
  );
}

export default TravelPackages;
