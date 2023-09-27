import { useForm } from "react-hook-form";
import { useDestinations } from "../../../context/DestinationsContext";
import { useHotels } from "../../../context/HotelsContext";
import { useNavigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";

function CreateDestination() {
  const navigate = useNavigate();
  const { destinations, getDestinationsList } = useDestinations();
  const { postHotelById } = useHotels();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    getDestinationsList();
  }, []);

  const onSubmit = handleSubmit((data) => {
    data.hotel_status = 1;
    postHotelById(data);
    setTimeout(() => {
      navigate("/datapage");
    }, 4000);
  });

  const onNavigate = () => {
    navigate("/datapage");
  };

  return (
    <section className="registerdata">
      <Toaster />
      <form onSubmit={onSubmit}>
        <section className="registerdata__form">
          <h2 className="registerdata__title1">Hotels</h2>
          <h1 className="registerdata__title2">Required Information</h1>
          <section className="registerdata__requiered">
            <h3 className="registerdata_title">Hotel Information</h3>
            <section className="registerdata__personal">
              <div>
                <label>Hotel name</label>
                <input
                  type="text"
                  {...register("hotel_name", { required: true })}
                />
                {errors.hotel_name?.type === "required" && (
                  <p>The field is required</p>
                )}
              </div>

              <div>
                <label>Hotel stars</label>
                <input
                  type="text"
                  {...register("hotel_stars", { required: true })}
                />
                {errors.hotel_stars?.type === "required" && (
                  <p>The field is required</p>
                )}
              </div>

              <div>
                <label>Destination</label>
                <select {...register("id_destination", { required: true })}>
                  <option value="">...</option>
                  {destinations.map((data) => (
                    <option
                      key={data.id_destination}
                      value={data.id_destination}
                    >
                      {data.destination_name}
                    </option>
                  ))}
                </select>
                {errors.id_destination?.type === "required" && (
                  <p>The field is required</p>
                )}
              </div>
            </section>
          </section>
          <section className="registerdata__botones">
            <button type="submit" className="btnregister">
              Create Hotel
            </button>
            <button onClick={onNavigate} className="btncancel">
              Cancel
            </button>
          </section>
        </section>
      </form>
    </section>
  );
}

export default CreateDestination;
