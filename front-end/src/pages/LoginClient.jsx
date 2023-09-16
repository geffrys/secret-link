import { useEffect } from "react";
import { useForm } from "react-hook-form";
import CategoriesAdmin from "../components/CategoriesAdmin";
import { useNavigate } from "react-router-dom";

function LoginClient() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  const onNavigate = () => {
    navigate("/registerclient");
  };

  return (
    <section className="login">
      <form onSubmit={onSubmit} className="login__form">
        <h1>Start Session</h1>
        <input
          type="text"
          {...register("client_document_number", { required: true })}
          placeholder="ID Client"
        />
        {errors.client_document_number && <p>IDClient is required</p>}
        <input
          type="password"
          {...register("client_password", { required: true })}
          placeholder="PIN"
        />
        {errors.client_password && <p>PIN is required</p>}
        <button type="submit" className="submitbutton">Validate</button>
        <button onClick={onNavigate} className="registerbtn">Register</button>
      </form>
      <CategoriesAdmin />
    </section>
  );
}

export default LoginClient;
