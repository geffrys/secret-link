import { useEffect } from "react";
import { useForm } from "react-hook-form";
import "../css/Login.css";
import { useAuth } from "../context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const { signIn, isAuthenticated, errors: signinErrors, user } = useAuth();

  const onSubmit = handleSubmit((data) => {
    signIn(data);
    console.log(user);
  });

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/registerclient");
    }
  }, [isAuthenticated]);

  return (
    <section className="login">
      <form onSubmit={onSubmit} className="login__form">
        <h1>Log In</h1>
        {signinErrors.map((error, i) => (
          <div className="error" key={i}>
            {error}
          </div>
        ))}
        <input
          type="text"
          {...register("user_name", { required: true })}
          placeholder="Username*"
        />
        {errors.user_name && <p>Username is required</p>}
        <input
          type="password"
          {...register("user_password", { required: true })}
          placeholder="Password*"
        />
        {errors.user_password && <p>Password is required</p>}

        <button type="submit">Log In</button>
      </form>
    </section>
  );
}

export default Login;
