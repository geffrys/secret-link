import { useFormAction } from "react-router-dom";
import DefaultLayout from "../Layout/DefaultLayout";

const RegisterClient = () => {

    const { register, handleSubmit } = useFormAction

    return <div>
        <h2>Register Client</h2>
        <h1>Required Information</h1>
        <form>
            <h3>Personal Information</h3>
            <div>
                <label>FIRST NAME</label>
                <input type="text" name="" />
            </div>
            <div>
                <label>SECOND NAME</label>
                <input type="text" name="" />
            </div>
            <div>
                <label>SURNAME</label>
                <input type="text" name="" />
            </div>
            <div>
                <label>SECOND SURNAME</label>
                <input type="text" name="" />
            </div>
            <div>
                <label>ID</label>
                <select>
                    <option value="TI">TARJETA DE IDENTIDAD</option>
                    <option value="CC">CEDULA DE CIUDADANIA</option>
                    <option value="CE">CEDULA DE EXTRANJERIA</option>
                </select>
                <input type="text" name="" placeholder="#" />
            </div>
            <div>
                <label>BIRTHDATE</label>
                <input type="date" name="" />
            </div>

            <h3>Contact Information</h3>
            <div>
                <label>CONTACT NUMBER</label>
                <input type="tel" name="" />
            </div>
            <div>
                <label>ADDRESS</label>
                <input type="text" name="" />
            </div>
            <div>
                <label>EMAIL</label>
                <input type="email" name="" />
            </div>
            <div>
                <label>CITY OF RESIDENCE</label>
                <input type="text" name="" />
            </div>

            <h3>Health Information</h3>
            <div>
                <label>HEALTH</label>
                <input type="text" name="" />
            </div>
            <div>
                <label>Rh</label>
                <select>
                    <option value="">A+</option>
                    <option value="">A-</option>
                    <option value="">O+</option>
                    <option value="">O-</option>
                    <option value="">B+</option>
                    <option value="">B-</option>
                    <option value="">AB+</option>
                    <option value="">AB-</option>
                </select>
            </div>
            <div>
                <label>DISEASES</label>
                <input type="text" name="" />
            </div>
            <div>
                <label>ADDITIONAL INFO</label>
                <input type="text" name="" />
            </div>

            <h3>Security</h3>
            <div>
                <label>PIN</label>
                <input type="password" name="" />
            </div>
            <div>
                <label>CONFIRM PIN</label>
                <input type="password" name="" />
            </div>
            <div>
                <label>RECOVERY NUMBER</label>
                <input type="text" name="" />
            </div>
            <div>
                <label>RECOVERY EMAIL</label>
                <input type="email" name="" />
            </div>
            <input type="submit" value="Register"/>
        </form>
    </div>
}

export default RegisterClient;
