import { FaPlusCircle } from "react-icons/fa";
import HotelsRows from "./HotelsRows";
import { useNavigate } from "react-router-dom";

function HotelsTable() {
  const navigate = useNavigate();
  return (
    <>
      <section className="packages__top">
        <h1 className="packages__title">Hotels</h1>
        <span className="packages__add" onClick={() => navigate("/hotels")}>
          <FaPlusCircle />
        </span>
      </section>
      <section className="packages__case">
        <table className="packages__table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Hotel Stars</th>
              <th>Destination</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <HotelsRows />
          </tbody>
        </table>
      </section>
    </>
  );
}

export default HotelsTable;
