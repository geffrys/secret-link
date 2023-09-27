import { useForm } from "react-hook-form";
import { useDestinations } from "../../../context/DestinationsContext";
import { useNavigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";

function CreateDestination() {
  const navigate = useNavigate();
  const { createDestination } = useDestinations();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit((data) => {
    data.destination_status = 1;
    data.id_agencie = 1;
    createDestination(data);
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
          <h2 className="registerdata__title1">Destination</h2>
          <h1 className="registerdata__title2">Required Information</h1>
          <section className="registerdata__requiered">
            <h3 className="registerdata_title">Destination Information</h3>
            <section className="registerdata__personal">
              <div>
                <label>Destination Name</label>
                <input
                  type="text"
                  {...register("destination_name", { required: true })}
                />
                {errors.destination_name?.type === "required" && (
                  <p>The field is required</p>
                )}
              </div>
            </section>
          </section>
          <section className="registerdata__botones">
            <button type="submit" className="btnregister">
              Create Destination
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
