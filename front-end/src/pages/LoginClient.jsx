import { useForm } from "react-hook-form";
import CategoriesAdmin from "../components/CategoriesAdmin";
import { useNavigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import "../css/LoginClient.css";
import { useContext, useEffect } from "react";
import { ClientContext } from "../context/ClientContext.jsx";

function LoginClient() {
  const { isClientValidated, signIn } = useContext(ClientContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = handleSubmit((data) => {
    signIn(data);
  });

  useEffect(()=>{
    if(isClientValidated){
      console.log("melo")
      navigate("/dashboardclient");
    }
  })

  const onNavigate = () => {
    navigate("/registerclient");
  };

  return (
    <section className="login_client">
      <Toaster />
      <div className="login_client__categories">
        <CategoriesAdmin />
      </div>
      <section className="login_client__login">
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
          <button type="submit" className="submitbutton">
            Validate
          </button>
          <button onClick={onNavigate} className="registerbtn">
            Register
          </button>
        </form>
      </section>
    </section>
  );
}

export default LoginClient;
