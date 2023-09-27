import { FaPlusCircle } from "react-icons/fa";
import DestinationsRows from "./DestinationsRows";
import { useNavigate } from "react-router-dom";

function DestinationsTable() {
  const navigate = useNavigate();
  return (
    <>
      <section className="packages__top">
        <h1 className="packages__title">Destinations</h1>
        <span className="packages__add" onClick={() => navigate("/destination")}>
          <FaPlusCircle />
        </span>
      </section>
      <section className="packages__case">
        <table className="packages__table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <DestinationsRows />
          </tbody>
        </table>
      </section>
    </>
  );
}

export default DestinationsTable;
