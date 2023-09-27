import { useDestinations } from "../../../context/DestinationsContext";
import { useHotels } from "../../../context/HotelsContext";

import { useEffect } from "react";

function HotelsRows() {
  const { destinations, getDestinationsList } = useDestinations();
  const { hotels, getHotelsList, updateHotelById } = useHotels();

  const updateHotels = (data) => {
    data.hotel_status = data.hotel_status === 1 ? 0 : 1;
    updateHotelById(data.id_hotel, data);
  };

  const getDestinationName = (id) => {
    const destination = destinations.find((destination) => destination.id_destination === id);
    return destination.destination_name;
  }

  useEffect(() => {
    getDestinationsList();
    getHotelsList();
  });
  return (
    <>
      {hotels.map((data) => (
        <tr key={data.id_hotel}>
          <td>{data.id_hotel}</td>
          <td>{data.hotel_name}</td>
          <td>{data.hotel_stars} ⭐</td>
          <td>{getDestinationName(data.id_destination)}</td>
          <td
            className="rowsdatacheck"
            onClick={() => updateHotels(data)}
          >
            {data.hotel_status === 1 ? "✔️" : "❌"}
          </td>
        </tr>
      ))}
    </>
  );
}

export default HotelsRows;
