import PackagesRows from "../components/TravelPackages/PackagesRows.jsx";
import { FaPlusCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "../css/Packages.css";

function TravelPackages() {
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
        <button className="packages__bttn" onClick={() => navigate("/client")}>Volver</button>
      </section>
    </section>
  );
}

export default TravelPackages;
