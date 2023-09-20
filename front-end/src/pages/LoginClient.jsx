import { useForm } from "react-hook-form";
import CategoriesAdmin from "../components/CategoriesAdmin";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

import "../css/LoginClient.css";
import { useEffect } from "react";

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

  const ToastRes = () => {
    toast.success('connection reestablished', {
      position: 'bottom-left',
    });
  };
  const ToastLost = () => {
    toast.error('connection lost', {
      position: 'bottom-left',
    });
  };

  useEffect(() => {
    const handleOnlineStatus = () => {
      if (navigator.onLine) {
        ToastRes();
      } else {
        ToastLost();
      }
    };

    window.addEventListener("online", handleOnlineStatus);
    window.addEventListener("offline", handleOnlineStatus);

    return () => {
      window.removeEventListener("online", handleOnlineStatus);
      window.removeEventListener("offline", handleOnlineStatus);
    };
  }, []);



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
