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
                {...register("client_name", { required: true })}
              />
              {errors.client_name?.type === "required" && (
                <p>the field is required</p>
              )}
            </div>

            <div>
              <label>MIDDLE NAME</label>
              <input
                type="text"
                {...register("client_middleName", { required: false })}
              />
              {errors.client_middleName?.type === "required" && (
                <p>the field is required</p>
              )}
            </div>

            <div>
              <label>SURNAME</label>
              <input
                type="text"
                {...register("client_lastname", { required: true })}
              />
              {errors.surName?.type === "required" && (
                <p>the field is required</p>
              )}
            </div>

            <div>
              <label>SECOND SURNAME</label>
              <input
                type="text"
                {...register("client_secondlastname", { required: true })}
              />
              {errors.client_secondlastname?.type === "required" && (
                <p>the field is required</p>
              )}
            </div>

            <div>
              <label>ID</label>
              <select {...register("id_document_type", { required: true })}>
                <option value="TI">T.I</option>
                <option value="CC">C.C</option>
                <option value="CE">C.E</option>
              </select>
              <input
                type="text"
                {...register("client_document_number", { required: true })}
                placeholder="#"
              />
              {errors.id_document_type?.type === "required" && (
                <p>the field is required</p>
              )}
              {errors.client_document_number?.type === "required" && <p>the field is required</p>}
            </div>

            <div>
              <label>BIRTHDATE</label>
              <input
                type="date"
                {...register("client_birthdate", { required: true })}
              />
              {errors.client_birthdate?.type === "required" && (
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
                {...register("cliente_phone", { required: true })}
              />
              {errors.cliente_phone?.type === "required" && (
                <p>the field is required</p>
              )}
            </div>

            <div>
              <label>ADDRESS</label>
              <input type="text" {...register("client_address", { required: true })} />
              {errors.client_address?.type === "required" && (
                <p>the field is required</p>
              )}
            </div>

            <div>
              <label>EMAIL</label>
              <input
                type="email"
                {...register("client_mail", {
                  required: true,
                  pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
                })}
              />
              {errors.client_mail?.type === "required" && (
                <p>the field is required</p>
              )}
              {errors.client_mail?.type === "pattern" && (
                <p>the email format is incorrect</p>
              )}
            </div>

            <div>
              <label>CITY OF RESIDENCE</label>
              <input
                type="text"
                {...register("client_city", { required: true })}
              />
              {errors.client_city?.type === "required" && (
                <p>the field is required</p>
              )}
            </div>
          </section>

          <h3 className="information_title">Health Information</h3>
          <section className="registerclient__health">
            <div>
              <label>HEALTH</label>
              <input type="text" {...register("name_eps", { required: true })} />
              {errors.name_eps?.type === "required" && (
                <p>the field is required</p>
              )}
            </div>

            <div>
              <label>Rh</label>
              <select {...register("name_rh", { required: true })}>
                <option value="1">A+</option>
                <option value="2">A-</option>
                <option value="3">O+</option>
                <option value="4">O-</option>
                <option value="5">B+</option>
                <option value="6">B-</option>
                <option value="7">AB+</option>
                <option value="8">AB-</option>
              </select>
              {errors.name_rh?.type === "required" && (
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

            <div className="aditional">
              <label>ADDITIONAL INFO</label>
              <textarea type="text" {...register("additionalInfo")} />
            </div>
          </section>

          <h3 className="information_title">Security</h3>
          <section className="registerclient__security">
            <div>
              <label>PIN</label>
              <input type="password" {...register("pin1", { required: true })} />
              {errors.pin1?.type === "required" && <p>the field is required</p>}
            </div>

            <div>
              <label>CONFIRM PIN</label>
              <input
                type="password"
                {...register("pin2", { required: true })}
              />
              {errors.pin2?.type === "required" && (
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
