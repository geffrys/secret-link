import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { useTransportation } from "../context/TransportationContext.jsx";
import { useDestinations } from "../context/DestinationsContext.jsx";
import { useItinerary } from "../context/ItineraryContext.jsx";
import { useFoodTypes } from "../context/FoodTypesContext.jsx";
import { useRoomTypes } from "../context/RoomTypesContext.jsx";
import { useHotels } from "../context/HotelsContext.jsx";
import { usePackages } from "../context/PackagesContext.jsx";
import { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext.jsx";

import "../css/CreatePackages.css";

function CreatePackages() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const params = useParams();
  const [active, setActive] = useState(false);
  const [isButtonPressed, setIsButtonPressed] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const { transportation, getTransportationsList } = useTransportation();
  const { destinations, getDestinationsList } = useDestinations();
  const { itineraries, getItinerariesList } = useItinerary();
  const { foodTypes, getFoodTypesList } = useFoodTypes();
  const { roomTypes, getRoomTypesList } = useRoomTypes();
  const { hotels, getHotelsList } = useHotels();
  const { packages, createPackage, updatePackageById } = usePackages();

  useEffect(() => {
    getTransportationsList();
    getDestinationsList();
    getItinerariesList();
    getFoodTypesList();
    getRoomTypesList();
    getHotelsList();
  }, [
    transportation,
    destinations,
    itineraries,
    foodTypes,
    roomTypes,
    hotels,
    packages,
  ]);

  const onNavigate = () => {
    navigate("/packages");
  };

  const isFieldsDisabled = () => {
    if (params.id_transport && !active) {
      return true;
    } else {
      return false;
    }
  };

  const changeActive = () => {
    setActive(!active);
  };

  const changeBtn = () => { 
    setIsButtonPressed(!isButtonPressed);
  }

  useEffect(() => {
    if (params.id_transport && !active) {
      setValue(
        "id_food_type",
        packages?.find(
          (pack) => pack.id_travel_pack === parseInt(params.id_transport)
        )?.id_food_type
      );
      setValue(
        "id_room_type",
        packages?.find(
          (pack) => pack.id_travel_pack === parseInt(params.id_transport)
        )?.id_room_type
      );
      setValue(
        "id_transport",
        packages?.find(
          (pack) => pack.id_travel_pack === parseInt(params.id_transport)
        )?.id_transport
      );
      setValue(
        "id_destination",
        packages?.find(
          (pack) => pack.id_travel_pack === parseInt(params.id_transport)
        )?.id_destination
      );
      setValue(
        "id_itinerary",
        packages?.find(
          (pack) => pack.id_travel_pack === parseInt(params.id_transport)
        )?.id_itinerary
      );
      setValue(
        "id_hotel",
        packages?.find(
          (pack) => pack.id_travel_pack === parseInt(params.id_transport)
        )?.id_hotel
      );
      setValue(
        "travelpack_price",
        packages?.find(
          (pack) => pack.id_travel_pack === parseInt(params.id_transport)
        )?.travelpack_price
      );
      setValue(
        "travelpack_status",
        packages?.find(
          (pack) => pack.id_travel_pack === parseInt(params.id_transport)
        )?.travelpack_status
      );
      setValue(
        "travelpack_days",
        packages?.find(
          (pack) => pack.id_travel_pack === parseInt(params.id_transport)
        )?.travelpack_days
      );
      setValue(
        "travelpack_description",
        packages?.find(
          (pack) => pack.id_travel_pack === parseInt(params.id_transport)
        )?.travelpack_description
      );
    }
  });

  const onSubmit = handleSubmit((data) => {
    data.id_destination = parseInt(data.id_destination);
    data.id_food_type = parseInt(data.id_food_type);
    data.id_hotel = parseInt(data.id_hotel);
    data.id_itinerary = parseInt(data.id_itinerary);
    data.id_room_type = parseInt(data.id_room_type);
    data.id_transport = parseInt(data.id_transport);
    data.travelpack_days = parseInt(data.travelpack_days);
    data.travelpack_price = parseInt(data.travelpack_price);
    data.travelpack_status = parseInt(data.travelpack_status);
    if (!params.id_transport) {
      changeBtn();
      createPackage(data);
      changeBtn();
    } else if (params.id_transport) {
      changeBtn();
      updatePackageById(parseInt(params.id_transport), data);
      changeBtn();
    }
    setTimeout(() => {
      navigate("/packages");
    }, 4000);
  });

  return (
    <section className="create_package">
      <Toaster />
      <form onSubmit={onSubmit} className="create_package__form">
        <section className="create_package__top">
          <h2 className="create_package__title">
            {!params.id_transport ? "Create New Package" : "Package"}
          </h2>
          {/* {PackageResponse && <div className="create_package__response">{PackageResponse}</div>} */}
        </section>
        <h1 className="create_package__title2">
          {!params.id_transport
            ? "Required information"
            : "Package information"}
        </h1>

        <section className="create_package__requiered">
          <section className="create_package__divs">
            {/* {PackageErrors.map((error, i) => (
              <div className="error" key={i}>
                {error}
              </div>
            ))} */}
            <div>
              <label>Food Type</label>
              <select
                {...register("id_food_type", { required: false })}
                disabled={isFieldsDisabled()}
              >
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
              <select
                {...register("id_room_type", { required: false })}
                disabled={isFieldsDisabled()}
              >
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
              <select
                {...register("id_transport", { required: false })}
                disabled={isFieldsDisabled()}
              >
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
              <select
                {...register("id_destination", { required: true })}
                disabled={!params.id_transport ? false : true}
              >
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
              <select
                {...register("id_itinerary", { required: false })}
                disabled={isFieldsDisabled()}
              >
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
              <select
                {...register("id_hotel", { required: false })}
                disabled={isFieldsDisabled()}
              >
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
                disabled={isFieldsDisabled()}
                {...register("travelpack_price", { required: true })}
              />
              {errors.travelpack_price?.type === "required" && (
                <p>The field is required</p>
              )}
            </div>

            <div>
              <label>Status</label>
              <select
                type="number"
                placeholder="true: 1 or false: 0"
                disabled={isFieldsDisabled()}
                {...register("travelpack_status", { required: true })}
              >
                <option value="1">Available</option>
                <option value="0">Unavailable</option>
              </select>

              {errors.travelpack_status?.type === "required" && (
                <p>The field is required</p>
              )}
            </div>

            <div>
              <label>Days of stay</label>
              <input
                type="number"
                disabled={isFieldsDisabled()}
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
              disabled={isFieldsDisabled()}
              {...register("travelpack_description", { required: true })}
            />
            {errors.travelpack_description?.type === "required" && (
              <p>The field is required</p>
            )}
          </div>
        </section>
        <section className="registerclient__botones">
          {!params.id_transport && !isButtonPressed &&(
            <button type="submit" className="btnregister">
              Create Package
            </button>
          )}

          {params.id_transport && active && !isButtonPressed &&(
            <button type="submit" className="btnregister">
              Update Package
            </button>
          )}
          {params.id_transport && !active && user.id_agent_type != 2 &&(
            <button
              type="button"
              className="btnregister"
              onClick={changeActive}
            >
              Modify Package
            </button>
          )}
          <button onClick={onNavigate} className="btncancel">
            Cancel
          </button>
        </section>
      </form>
    </section>
  );
}

export default CreatePackages;
