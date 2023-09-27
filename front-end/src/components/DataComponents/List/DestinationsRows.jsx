import { useDestinations } from "../../../context/DestinationsContext";
import { useEffect } from "react";

function DestinationsRows() {
  const { destinations, getDestinationsList, updateDestinationById } =
    useDestinations();

  const updateDestinations = (data) => {
    data.destination_status = data.destination_status === 1 ? 0 : 1;
    updateDestinationById(data.id_destination, data);
  };

  useEffect(() => {
    getDestinationsList();
  });
  return (
    <>
      {destinations.map((data) => (
        <tr key={data.id_destination}>
          <td>{data.id_destination}</td>
          <td>{data.destination_name}</td>
          <td className="rowsdatacheck" onClick={() => updateDestinations(data)}>
            {data.destination_status === 1 ? "✔️" : "❌"}
          </td>
        </tr>
      ))}
    </>
  );
}

export default DestinationsRows;
