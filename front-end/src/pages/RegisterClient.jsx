import { useForm } from "react-hook-form";
import "../css/Registerclient.css";
import {useNavigate} from 'react-router-dom'

function RegisterClient() {
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
    navigate('/client')
  }

  return (
    <section className="registerclient">
      <form onSubmit={onSubmit} className="registerclient__form">
        <h2 className="registerclient__title">Costumer Registration</h2>
        <h1 className="registerclient__title2">Required Information</h1>

        <section className="registerclient__requiered">
          <h3 className="information_title">Personal Information</h3>
          <section className="registerclient__personal">
            <div>
              <label>FIRST NAME</label>
              <input
                type="text"
                {...register("firstName", { required: true })}
              />
              {errors.firstName?.type === "required" && (
                <p>the field is required</p>
              )}
            </div>

            <div>
              <label>MIDDLE NAME</label>
              <input
                type="text"
                {...register("middleName", { required: true })}
              />
              {errors.middleName?.type === "required" && (
                <p>the field is required</p>
              )}
            </div>

            <div>
              <label>SURNAME</label>
              <input
                type="text"
                {...register("surName", { required: true })}
              />
              {errors.surName?.type === "required" && (
                <p>the field is required</p>
              )}
            </div>

            <div>
              <label>SECOND SURNAME</label>
              <input
                type="text"
                {...register("secondSurName", { required: true })}
              />
              {errors.secondSurName?.type === "required" && (
                <p>the field is required</p>
              )}
            </div>

            <div>
              <label>ID</label>
              <select {...register("idType", { required: true })}>
                <option value="TI">T.I</option>
                <option value="CC">C.C</option>
                <option value="CE">C.E</option>
              </select>
              <input
                type="text"
                {...register("id", { required: true })}
                placeholder="#"
              />
              {errors.idType?.type === "required" && (
                <p>the field is required</p>
              )}
              {errors.id?.type === "required" && <p>the field is required</p>}
            </div>

            <div>
              <label>BIRTHDATE</label>
              <input
                type="date"
                {...register("birthdate", { required: true })}
              />
              {errors.birthdate?.type === "required" && (
                <p>the field is required</p>
              )}
            </div>
          </section>

          <h3 className="information_title">Contact Information</h3>
          <section className="registerclient__contact">
            <div>
              <label>CONTACT NUMBER</label>
              <input
                type="tel"
                {...register("contactNumber", { required: true })}
              />
              {errors.contactNumber?.type === "required" && (
                <p>the field is required</p>
              )}
            </div>

            <div>
              <label>ADDRESS</label>
              <input type="text" {...register("address", { required: true })} />
              {errors.address?.type === "required" && (
                <p>the field is required</p>
              )}
            </div>

            <div>
              <label>EMAIL</label>
              <input
                type="email"
                {...register("email", {
                  required: true,
                  pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
                })}
              />
              {errors.email?.type === "required" && (
                <p>the field is required</p>
              )}
              {errors.email?.type === "pattern" && (
                <p>the email format is incorrect</p>
              )}
            </div>

            <div>
              <label>CITY OF RESIDENCE</label>
              <input
                type="text"
                {...register("cityResidence", { required: true })}
              />
              {errors.cityResidence?.type === "required" && (
                <p>the field is required</p>
              )}
            </div>
          </section>

          <h3 className="information_title">Health Information</h3>
          <section className="registerclient__health">
            <div>
              <label>HEALTH</label>
              <input type="text" {...register("health", { required: true })} />
              {errors.health?.type === "required" && (
                <p>the field is required</p>
              )}
            </div>

            <div>
              <label>Rh</label>
              <select {...register("rh", { required: true })}>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
              </select>
              {errors.rh?.type === "required" && (
                <p>blood type field is required</p>
              )}
            </div>

            <div>
              <label>DISEASES</label>
              <input
                type="text"
                {...register("diseases", { required: true })}
              />
              {errors.diseases?.type === "required" && (
                <p>the field is required</p>
              )}
            </div>

            <div>
              <label>ADDITIONAL INFO</label>
              <textarea type="text" {...register("additionalInfo")} />
            </div>
          </section>

          <h3 className="information_title">Security</h3>
          <section className="registerclient__security">
            <div>
              <label>PIN</label>
              <input type="password" {...register("pin", { required: true })} />
              {errors.pin?.type === "required" && <p>the field is required</p>}
            </div>

            <div>
              <label>CONFIRM PIN</label>
              <input
                type="password"
                {...register("confirmPin", { required: true })}
              />
              {errors.confirmPin?.type === "required" && (
                <p>the field is required</p>
              )}
            </div>

            <div>
              <label>RECOVERY NUMBER</label>
              <input
                type="text"
                {...register("recoveryNumber", { required: true })}
              />
              {errors.recoveryNumber?.type === "required" && (
                <p>the field is required</p>
              )}
            </div>

            <div>
              <label>RECOVERY EMAIL</label>
              <input
                type="email"
                {...register("recoveryEmail", {
                  required: true,
                  pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
                })}
              />
              {errors.recoveryEmail?.type === "pattern" && (
                <p>the email format is incorrect</p>
              )}
              {errors.recoveryEmail?.type === "required" && (
                <p>the field is required</p>
              )}
            </div>
          </section>
        </section>
        <section className="registerclient__botones">
        <button type="submit" className="btnregister">Register</button>
        <button onClick={onNavigate} className="btncancel">Cancel</button>
        </section>
      </form>
    </section>
  );
}

export default RegisterClient;
