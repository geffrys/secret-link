import { FaPlusCircle } from "react-icons/fa";
import TransportRows from "./TransportRows";
import { useNavigate } from "react-router-dom";

function TransportTable() {
  const navigate = useNavigate();
  return (
    <>
      <section className="packages__top">
        <h1 className="packages__title">Transportation</h1>
        <span className="packages__add" onClick={() => navigate("/transportation")}>
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
            <TransportRows />
          </tbody>
        </table>
      </section>
    </>
  );
}

export default TransportTable;
