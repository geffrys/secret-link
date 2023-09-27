import { useForm } from "react-hook-form";
import { useFoodTypes } from "../../../context/FoodTypesContext";
import { useNavigate } from "react-router-dom";
import "../../../css/Data.css";

function FoodTypeData() {
  const navigate = useNavigate();
  const { postFoodTypeData } = useFoodTypes();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit((data) => {
    data.food_price = parseInt(data.food_price);
    data.food_status = 1;
    postFoodTypeData(data);
    setTimeout(() => {
      navigate("/datapage");
    }, 4000);
  });

  const onNavigate = () => {
    navigate("/datapage");
  };

  return (
    <section className="registerdata">
      <form onSubmit={onSubmit}>
        <section className="registerdata__form">
          <h2 className="registerdata__title1">Food Type</h2>
          <h1 className="registerdata__title2">Required Information</h1>
          <section className="registerdata__requiered">
            <h3 className="registerdata_title">Food Type Information</h3>
            <section className="registerdata__personal">
              <div>
                <label>Food Name</label>
                <input
                  type="text"
                  {...register("food_name", { required: true })}
                />
                {errors.food_name?.type === "required" && (
                  <p>The field is required</p>
                )}
              </div>

              <div className="registerdata__textarea">
                <label>Food Description</label>
                <textarea
                  type="text"
                  {...register("food_description", { required: true })}
                />
                {errors.food_description?.type === "required" && (
                  <p>The field is required</p>
                )}
              </div>

              <div>
                <label>Food Price</label>
                <input
                  type="number"
                  {...register("food_price", { required: true })}
                />
                {errors.food_price?.type === "required" && (
                  <p>The field is required</p>
                )}
              </div>
            </section>
          </section>
          <section className="registerdata__botones">
            <button type="submit" className="btnregister">
              Create Food Type
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

export default FoodTypeData;
