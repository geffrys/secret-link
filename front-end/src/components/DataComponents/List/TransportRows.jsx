import { useTransportation } from "../../../context/TransportationContext";
import { useEffect } from "react";

function TransportRows() {
  const { transportation, getTransportationsList, updateTransportationData } =
    useTransportation();
  useEffect(() => {
    getTransportationsList();
  });

  const updateTransport = (data) => {
    data.transport_status = data.transport_status === 1 ? 0 : 1;
    updateTransportationData(data.id_transport, data);
  };
  return (
    <>
      {transportation.map((data) => (
        <tr key={data.id_transport}>
          <td>{data.id_transport}</td>
          <td>{data.transport_name}</td>
          <td>{data.transport_description}</td>
          <td>{data.transport_price.toLocaleString("es-CO", {
              style: "currency",
              currency: "COP",
            })}</td>
          <td className="rowsdatacheck" onClick={() => updateTransport(data)}>
            {data.transport_status === 1 ? "✔️" : "❌"}
          </td>
        </tr>
      ))}
    </>
  );
}

export default TransportRows;
