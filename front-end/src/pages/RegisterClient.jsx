import React, { useEffect } from 'react'
import { useForm } from "react-hook-form";


function RegisterClient() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = handleSubmit((data) => {
        console.log(data);
    });

    useEffect(() => { });

    return (
        <section className="registerclient">
            <form onSubmit={onSubmit} className="registerclient__form">
                <h2>Register Client</h2>
                <h1>Required Information</h1>
                <h3>Personal Information</h3>
                <div>
                    <label>FIRST NAME</label>
                    <input type="text" {...register('firstName', { required: true })} />
                    {errors.firstName?.type === 'required' && <p>the field is required</p>}
                </div>
                <div>
                    <label>SECOND NAME</label>
                    <input type="text" {...register('secondName', { required: true })} />
                    {errors.secondName?.type === 'required' && <p>the field is required</p>}
                </div>
                <div>
                    <label>SURNAME</label>
                    <input type="text" {...register('surname', { required: true })} />
                    {errors.surname?.type === 'required' && <p>the field is required</p>}
                </div>
                <div>
                    <label>SECOND SURNAME</label>
                    <input type="text" {...register('secondSurname', { required: true })} />
                    {errors.secondSurname?.type === 'required' && <p>the field is required</p>}
                </div>
                <div>
                    <label>ID</label>
                    <select {...register('idType', { required: true })}>
                        <option value="TI">TARJETA DE IDENTIDAD</option>
                        <option value="CC">CEDULA DE CIUDADANIA</option>
                        <option value="CE">CEDULA DE EXTRANJERIA</option>
                    </select>
                    <input type="text" {...register('id', { required: true })} placeholder="#" />
                    {errors.idType?.type === 'required' && <p>the field is required</p>}
                    {errors.id?.type === 'required' && <p>the field is required</p>}
                </div>
                <div>
                    <label>BIRTHDATE</label>
                    <input type="date" {...register('birthdate', { required: true })} />
                    {errors.birthdate?.type === 'required' && <p>the field is required</p>}
                </div>

                <h3>Contact Information</h3>
                <div>
                    <label>CONTACT NUMBER</label>
                    <input type="tel" {...register('contactNumber', { required: true })} />
                    {errors.contactNumber?.type === 'required' && <p>the field is required</p>}
                </div>
                <div>
                    <label>ADDRESS</label>
                    <input type="text" {...register('address', { required: true })} />
                    {errors.address?.type === 'required' && <p>the field is required</p>}
                </div>
                <div>
                    <label>EMAIL</label>
                    <input type="email" {...register('email', {
                        required: true,
                        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
                    })} />
                    {errors.email?.type === 'required' && <p>the field is required</p>}
                    {errors.email?.type === 'pattern' && <p>the email format is incorrect</p>}
                </div>
                <div>
                    <label>CITY OF RESIDENCE</label>
                    <input type="text" {...register('cityResidence', { required: true })} />
                    {errors.cityResidence?.type === 'required' && <p>the field is required</p>}
                </div>

                <h3>Health Information</h3>
                <div>
                    <label>HEALTH</label>
                    <input type="text" {...register('health', { required: true })} />
                    {errors.health?.type === 'required' && <p>the field is required</p>}
                </div>
                <div>
                    <label>Rh</label>
                    <select {...register('rh', { required: true })}>
                        <option value="">A+</option>
                        <option value="">A-</option>
                        <option value="">O+</option>
                        <option value="">O-</option>
                        <option value="">B+</option>
                        <option value="">B-</option>
                        <option value="">AB+</option>
                        <option value="">AB-</option>
                    </select>
                    {errors.rh?.type === 'required' && <p>the field is required</p>}
                </div>
                <div>
                    <label>DISEASES</label>
                    <input type="text" {...register('diseases', { required: true })} />
                    {errors.diseases?.type === 'required' && <p>the field is required</p>}
                </div>
                <div>
                    <label>ADDITIONAL INFO</label>
                    <input type="text" {...register('additionalInfo')} />
                </div>

                <h3>Security</h3>
                <div>
                    <label>PIN</label>
                    <input type="password" {...register('pin', { required: true })} />
                    {errors.pin?.type === 'required' && <p>the field is required</p>}
                </div>
                <div>
                    <label>CONFIRM PIN</label>
                    <input type="password" {...register('confirmPin', { required: true })} />
                    {errors.confirmPin?.type === 'required' && <p>the field is required</p>}
                </div>
                <div>
                    <label>RECOVERY NUMBER</label>
                    <input type="text" {...register('recoveryNumber', { required: true })} />
                    {errors.recoveryNumber?.type === 'required' && <p>the field is required</p>}
                </div>
                <div>
                    <label>RECOVERY EMAIL</label>
                    <input type="email" {...register('recoveryEmail', {
                        required: true,
                        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
                    })} />
                    {errors.recoveryEmail?.type === 'pattern' && <p>the email format is incorrect</p>}
                    {errors.recoveryEmail?.type === 'required' && <p>the field is required</p>}
                </div>
                <input type="submit" value="Register" />
            </form>
        </section>
    );
}

export default RegisterClient;
