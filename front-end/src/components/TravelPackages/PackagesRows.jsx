import { usePackages } from "../../context/PackagesContext";
import { useDestinations } from "../../context/DestinationsContext";
import { useTransportation } from "../../context/TransportationContext";
import { FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function PackagesRows() {
  const { packages, getPackagesList } = usePackages();
  const { destinations, getDestinationsList } = useDestinations();
  const { transportation, getTransportationsList } = useTransportation();
  const navigate = useNavigate();


  useEffect(() => {
    getDestinationsList();
    getTransportationsList();
    getPackagesList();
  });

  const availablePackages = packages?.filter(
    (pack) => pack.travelpack_status === 1
  );

  const getDestinationName = (id) => {
    const destination = destinations?.find(
      (destination) => destination.id_destination === id
    );
    return destination?.destination_name;
  };

  const getTransportationName = (id) => {
    const transport = transportation?.find(
      (transport) => transport.id_transport === id
    );
    return transport ? transport.transport_name : "N/A";
  };
  return (
    <>
      {availablePackages.map((pack) => (
        <tr key={pack.id_travel_pack}>
          <td>{getDestinationName(pack.id_destination)}</td>
          <td>
            {pack.travelpack_price.toLocaleString("es-CO", {
              style: "currency",
              currency: "COP",
            })}
          </td>
          <td>{getTransportationName(pack.id_transport)}</td>
          <td>{pack.travelpack_days}</td>
          <td
            className="packages__eye"
            onClick={() => navigate(`/create-packages/${pack.id_travel_pack}`)}
          >
            <FaEye />
          </td>
        </tr>
      ))}
    </>
  );
}

export default PackagesRows;
