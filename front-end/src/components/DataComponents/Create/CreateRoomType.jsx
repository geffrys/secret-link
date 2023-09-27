import { useForm } from "react-hook-form";
import { useRoomTypes } from "../../../context/RoomTypesContext";
import { useHotels } from "../../../context/HotelsContext";
import { useNavigate } from "react-router-dom";
import "../../../css/Data.css";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";

function CreateRoomType() {
  const navigate = useNavigate();
  const { postRoomTypeData } = useRoomTypes();
  const { hotels, getHotelsList } = useHotels();

  useEffect(() => {
    getHotelsList();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit((data) => {
    data.room_status = 1;
    postRoomTypeData(data);
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
          <h2 className="registerdata__title1">Room Type</h2>
          <h1 className="registerdata__title2">Required Information</h1>
          <section className="registerdata__requiered">
            <h3 className="registerdata_title">Food Type Information</h3>
            <section className="registerdata__personal">
              <div>
                <label>Room name</label>
                <input
                  type="text"
                  {...register("room_name", { required: true })}
                />
                {errors.room_name?.type === "required" && (
                  <p>The field is required</p>
                )}
              </div>

              <div className="registerdata__textarea">
                <label>Room Description</label>
                <textarea
                  type="text"
                  {...register("room_description", { required: true })}
                />
                {errors.room_description?.type === "required" && (
                  <p>The field is required</p>
                )}
              </div>

              <div>
                <label>Food Capability</label>
                <input
                  type="number"
                  {...register("room_capability", { required: true })}
                />
                {errors.room_capability?.type === "required" && (
                  <p>The field is required</p>
                )}
              </div>

              <div>
                <label>Hotel Name</label>
                <select {...register("id_hotel", { required: true })}>
                  <option value="">...</option>
                  {hotels.map((hotel) => (
                    <option key={hotel.id_hotel} value={hotel.id_hotel}>
                      {hotel.hotel_name}
                    </option>
                  ))}
                </select>
                {errors.id_hotel?.type === "required" && (
                  <p>The field is required</p>
                )}
              </div>
            </section>
          </section>
          <section className="registerdata__botones">
            <button type="submit" className="btnregister">
              Create Room
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

export default CreateRoomType;
