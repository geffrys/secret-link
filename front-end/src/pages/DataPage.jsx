import { useNavigate } from "react-router-dom";
import FoodTypeTable from "../components/DataComponents/List/FoodTypeTable";
import RoomTypeTable from "../components/DataComponents/List/RoomTypeTable";
import TransportTable from "../components/DataComponents/List/TransportTable";
import DestinationsTable from "../components/DataComponents/List/DestinationsTable";
import HotelsTable from "../components/DataComponents/List/HotelsTable";

function DataPage() {
  const navigate = useNavigate();
  return (
    <section className="packages">
      <section className="packages__container">
        <FoodTypeTable />
        <hr />
        <br />
        <RoomTypeTable />
        <hr />
        <br />
        <TransportTable />
        <hr />
        <br />
        <DestinationsTable />
        <hr />
        <br />
        <HotelsTable />

        <section className="packages__btns">
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

export default DataPage;
