import { useForm } from "react-hook-form";
import { useTransportation } from "../../../context/TransportationContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";

function CreateRoomType() {
  const navigate = useNavigate();
  const { postTransportationData } = useTransportation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit((data) => {
    data.transport_status = 1;
    postTransportationData(data);
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
          <h2 className="registerdata__title1">Transport</h2>
          <h1 className="registerdata__title2">Required Information</h1>
          <section className="registerdata__requiered">
            <h3 className="registerdata_title">Transport Information</h3>
            <section className="registerdata__personal">
              <div>
                <label>Transport name</label>
                <input
                  type="text"
                  {...register("transport_name", { required: true })}
                />
                {errors.transport_name?.type === "required" && (
                  <p>The field is required</p>
                )}
              </div>

              <div className="registerdata__textarea">
                <label>Transport Description</label>
                <textarea
                  type="text"
                  {...register("transport_description", { required: true })}
                />
                {errors.transport_description?.type === "required" && (
                  <p>The field is required</p>
                )}
              </div>

              <div>
                <label>Transport Price</label>
                <input
                  type="number"
                  {...register("transport_price", { required: true })}
                />
                {errors.transport_price?.type === "required" && (
                  <p>The field is required</p>
                )}
              </div>
            </section>
          </section>
          <section className="registerdata__botones">
            <button type="submit" className="btnregister">
              Create Transport
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
