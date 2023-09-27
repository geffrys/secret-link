import { FaPlusCircle } from "react-icons/fa";
import RoomTypeRows from "./RoomTypeRows";
import { useNavigate } from "react-router-dom";

function RoomTypeTable() {
  const navigate = useNavigate();
  return (
    <>
      <section className="packages__top">
        <h1 className="packages__title">Room Types</h1>
        <span className="packages__add" onClick={() => navigate("/roomtypes")}>
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
              <th>Capability</th>
              <th>Hotel</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <RoomTypeRows />
          </tbody>
        </table>
      </section>
    </>
  );
}

export default RoomTypeTable;
