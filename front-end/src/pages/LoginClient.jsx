import React from 'react'
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import CategoriesAdmin from '../components/CategoriesAdmin'


function LoginClient() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = handleSubmit((data) => {
        console.log(data);
    });

    useEffect(() => { });

    return (
        <section className="login">
            <form onSubmit={onSubmit} className="login__form">
                <h1>Log In</h1>
                <input
                    type="text"
                    {...register("userName", { required: true })}
                    placeholder="ID Client"
                />
                {errors.userName && <p>IDClient is required</p>}
                &nbsp;
                <input
                    type="password"
                    {...register("password", { required: true })}
                    placeholder="PIN"
                />
                {errors.password && <p>PIN is required</p>}
                &nbsp;
                <button type="submit">Validate</button>
            </form>
            &nbsp;
            <CategoriesAdmin />
        </section>
    );
}

export default LoginClient;

