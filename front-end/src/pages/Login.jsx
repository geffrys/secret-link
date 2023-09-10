import { useEffect } from "react";
import { useForm } from "react-hook-form";


function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  useEffect(() => {});

  return (
    <section className="login">
      <form onSubmit={onSubmit} className="login__form">
        <h1>Log In</h1>
        <input
          type="text"
          {...register("userName", { required: true })}
          placeholder="Username"
        />
        {errors.userName && <span>Username is required</span>}
        <input
          type="password"
          {...register("password", { required: true })}
          placeholder="Password"
        />
        {errors.password && <span>Password is required</span>}

        <button type="submit">LogIn</button>
      </form>
    </section>
  );
}

export default Login;