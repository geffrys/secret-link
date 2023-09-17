import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useTransportation } from "../context/TransportationContext.jsx";
import { useDestinations } from "../context/DestinationsContext.jsx";
import { useItinerary } from "../context/ItineraryContext.jsx";
import { useFoodTypes } from "../context/FoodTypesContext.jsx";
import { useRoomTypes } from "../context/RoomTypesContext.jsx";
import { useHotels } from "../context/HotelsContext.jsx";
import { usePackages } from "../context/PackagesContext.jsx";

import "../css/CreatePackages.css";
import { useEffect } from "react";

function CreatePackages() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const { transportation, getTransportationsList } = useTransportation();
  const { destinations, getDestinationsList } = useDestinations();
  const { itineraries, getItinerariesList } = useItinerary();
  const { foodTypes, getFoodTypesList } = useFoodTypes();
  const { roomTypes, getRoomTypesList } = useRoomTypes();
  const { hotels, getHotelsList } = useHotels();
  const { createPackage  } = usePackages();

  useEffect(() => {
    getTransportationsList();
    getDestinationsList();
    getItinerariesList();
    getFoodTypesList();
    getRoomTypesList();
    getHotelsList();
  }, []);

  const onNavigate = () => {
    navigate("/packages");
  };

  const onSubmit = handleSubmit((data) => {
    // const { pin1, pin2 } = data;
    // if (pin1 !== pin2) {
    //   setValue("pin1", "", { shouldValidate: true });
    //   setValue("pin2", "", { shouldValidate: true });
    //   alert("Pins don't match");
    //   return;
    // }
    data.id_destination = parseInt(data.id_destination);
    data.id_food_type = parseInt(data.id_food_type);
    data.id_hotel = parseInt(data.id_hotel);
    data.id_itinerary = parseInt(data.id_itinerary);
    data.id_room_type = parseInt(data.id_room_type);
    data.id_transport = parseInt(data.id_transport);
    data.travelpack_days = parseInt(data.travelpack_days);
    data.travelpack_price = parseInt(data.travelpack_price);
    data.travelpack_status = parseInt(data.travelpack_status);
    createPackage(data);
    navigate("/packages");
  });

  return (
    <section className="create_package">
      <form onSubmit={onSubmit} className="create_package__form">
        <h2 className="create_package__title">Create New Package</h2>
        <h1 className="create_package__title2">Required Information</h1>

        <section className="create_package__requiered">
          <section className="create_package__divs">
            <div>
              <label>Food Type</label>
              <select {...register("id_food_type", { required: false })}>
                <option value="">N/A</option>
                {foodTypes
                  ?.filter((foodType) => foodType.food_status === 1)
                  .map((foodType) => (
                    <option
                      key={foodType.id_food_type}
                      value={foodType.id_food_type}
                    >
                      {foodType.food_name}
                    </option>
                  ))}
              </select>
              {errors.id_food_type?.type === "required" && (
                <p>The field is required</p>
              )}
            </div>

            <div>
              <label>Room Type</label>
              <select {...register("id_room_type", { required: false })}>
                <option value="">N/A</option>
                {roomTypes
                  ?.filter((roomType) => roomType.room_status === 1)
                  .map((roomType) => (
                    <option
                      key={roomType.id_room_type}
                      value={roomType.id_room_type}
                    >
                      {roomType.room_name}
                    </option>
                  ))}
              </select>
              {errors.id_room_type?.type === "required" && (
                <p>The field is required</p>
              )}
            </div>

            <div>
              <label>Transport</label>
              <select {...register("id_transport", { required: false })}>
                <option value="">N/A</option>
                {transportation?.map((transport) => (
                  <option
                    key={transport.id_transport}
                    value={transport.id_transport}
                  >
                    {transport.transport_name}
                  </option>
                ))}
              </select>
              {errors.id_transport?.type === "required" && (
                <p>The field is required</p>
              )}
            </div>

            <div>
              <label>Destination</label>
              <select {...register("id_destination", { required: true })}>
                <option value="">...</option>
                {destinations
                  ?.filter(
                    (destination) => destination.destination_status === 1
                  )
                  .map((destination) => (
                    <option
                      key={destination.id_destination}
                      value={destination.id_destination}
                    >
                      {destination.destination_name}
                    </option>
                  ))}
              </select>
              {errors.id_destination?.type === "required" && (
                <p>The field is required</p>
              )}
            </div>

            <div>
              <label>Itinerary</label>
              <select {...register("id_itinerary", { required: false })}>
                <option value="">N/A</option>
                {itineraries
                  ?.filter((itinerary) => itinerary.itinerary_status === 1)
                  .map((itinerary) => (
                    <option
                      key={itinerary.id_itinerary}
                      value={itinerary.id_itinerary}
                    >
                      {itinerary.itinerary_name}
                    </option>
                  ))}
              </select>
              {errors.id_destination?.type === "required" && (
                <p>The field is required</p>
              )}
            </div>

            <div>
              <label>Hotel</label>
              <select {...register("id_hotel", { required: false })}>
                <option value="">N/A</option>
                {hotels
                  ?.filter((hotel) => hotel.hotel_status === 1)
                  .map((hotel) => (
                    <option key={hotel.id_hotel} value={hotel.id_hotel}>
                      {hotel.hotel_name}
                    </option>
                  ))}
              </select>
              {errors.id_hotel?.type === "required" && (
                <p>The field is required</p>
              )}
            </div>

            <div>
              <label>Price</label>
              <input
                type="number"
                placeholder="Price in COP currency"
                {...register("travelpack_price", { required: true })}
              />
              {errors.travelpack_price?.type === "required" && (
                <p>The field is required</p>
              )}
            </div>

            <div>
              <label>Status</label>
              <input
                type="number"
                placeholder="true: 1 or false: 0"
                {...register("travelpack_status", { required: true })}
              />
              {errors.travelpack_status?.type === "required" && (
                <p>The field is required</p>
              )}
            </div>

            <div>
              <label>Days of stay</label>
              <input
                type="number"
                {...register("travelpack_days", { required: true })}
              />
              {errors.travelpack_days?.type === "required" && (
                <p>The field is required</p>
              )}
            </div>
          </section>
          <div className="texarea">
            <label className="textarea__label">Description</label>
            <textarea
              type="text"
              maxLength="250"
              placeholder="Add a description of the new package. MAX 225 characters"
              {...register("travelpack_description", { required: true })}
            />
            {errors.travelpack_description?.type === "required" && (
              <p>The field is required</p>
            )}
          </div>
        </section>
        <section className="registerclient__botones">
          <button type="submit" className="btnregister">
            Create
          </button>
          <button onClick={onNavigate} className="btncancel">
            Cancel
          </button>
        </section>
      </form>
    </section>
  );
}

export default CreatePackages;
