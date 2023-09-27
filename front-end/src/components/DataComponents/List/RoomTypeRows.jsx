import { useRoomTypes } from "../../../context/RoomTypesContext";
import { useHotels } from "../../../context/HotelsContext";
import { useEffect } from "react";

function RoomTypeRows() {
  const { roomTypes, getRoomTypesList, updateRoomTypeData } = useRoomTypes();
  const { hotels, getHotelsList } = useHotels();

  const updateRoom = (data) => {
    data.room_status = data.room_status === 1 ? 0 : 1;
    updateRoomTypeData(data.id_room_type, data)
  };

  const getHotelName = (id) => {
    const hotel = hotels.find((hotel) => hotel.id_hotel === id);
    return hotel.hotel_name;
  }

  useEffect(() => {
    getRoomTypesList();
    getHotelsList();
  });
  return (
    <>
      {roomTypes.map((data) => (
        <tr key={data.id_room_type}>
          <td>{data.id_room_type}</td>
          <td>{data.room_name}</td>
          <td>{data.room_description}</td>
          <td>{data.room_capability}</td>
          <td>{getHotelName(data.id_hotel)}</td>
          <td className="rowsdatacheck" onClick={() => updateRoom(data)}>
            {data.room_status === 1 ? "✔️" : "❌"}
          </td>
        </tr>
      ))}
    </>
  );
}

export default RoomTypeRows;
