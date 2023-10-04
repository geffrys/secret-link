import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import "../css/Registerclient.css";
import { useNavigate } from "react-router-dom";
import { useRh } from "../context/RhContext";
import { useDocTypes } from "../context/DocTypesContext";
import { useEps } from "../context/EpsContext";
import { useClient } from "../context/ClientContext";
import { Toaster } from "react-hot-toast";

function RegisterClient() {
  const [isButtonPressed, setIsButtonPressed] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { Signup } = useClient();
  const { rhList, getRhList } = useRh();
  const { docTypesList, getDocTypesList } = useDocTypes();
  const { eps, getEpsList } = useEps();

  const navigate = useNavigate();
  const changeBtn = () => {
    setIsButtonPressed(!isButtonPressed);
    setTimeout(() => {
      setIsButtonPressed(false);
    }, 4100);
  };

  const onSubmit = handleSubmit((data) => {
    data.id_document_type = parseInt(data.id_document_type);
    data.id_eps = parseInt(data.id_eps);
    data.id_rh = parseInt(data.id_rh);
    changeBtn();
    Signup(data);
  });

useEffect(() => {
  getRhList();
  getDocTypesList();
  getEpsList();
}, []);

const onNavigate = () => {
  navigate("/client");
};

  return (
    <section className="registerclient">
      <Toaster />
      <form onSubmit={onSubmit} className="registerclient__form">
        <h2 className="registerclient__title">Customer Registration</h2>
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
              <p>The field is required</p>
            )}
          </div>

          <div>
            <label>MIDDLE NAME</label>
            <input
              type="text"
              {...register("client_middleName", { required: false })}
            />
            {errors.client_middleName?.type === "required" && (
              <p>The field is required</p>
            )}
          </div>

          <div>
            <label>SURNAME</label>
            <input
              type="text"
              {...register("client_lastname", { required: true })}
            />
            {errors.surName?.type === "required" && (
              <p>The field is required</p>
            )}
          </div>

          <div>
            <label>SECOND SURNAME</label>
            <input
              type="text"
              {...register("client_secondlastname", { required: true })}
            />
            {errors.client_secondlastname?.type === "required" && (
              <p>The field is required</p>
            )}
          </div>

            <div>
              <label>ID</label>
              <select {...register("id_document_type", { required: true })}>
                <option value="">...</option>
                {docTypesList
                  ?.filter((docType) => docType.status_document_type === 1)
                  .map((docType) => (
                    <option
                      key={docType.id_document_type}
                      value={docType.id_document_type}
                    >
                      {docType.name_document_type}
                    </option>
                  ))}
              </select>
              {errors.id_document_type?.type === "required" && (
                <p>ID type required</p>
              )}
              <input
                type="number"
                {...register("client_document_number", { required: true })}
                placeholder="#"
              />
              {errors.client_document_number?.type === "required" && (
                <p>ID number required</p>
              )}
            </div>

          <div>
            <label>BIRTHDATE</label>
            <input
              type="date"
              {...register("client_birthdate", { required: true })}
            />
            {errors.client_birthdate?.type === "required" && (
              <p>The field is required</p>
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
              <p>The field is required</p>
            )}
          </div>

          <div>
            <label>ADDRESS</label>
            <input
              type="text"
              {...register("client_address", { required: true })}
            />
            {errors.client_address?.type === "required" && (
              <p>The field is required</p>
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
              <p>The field is required</p>
            )}
            {errors.client_mail?.type === "pattern" && (
              <p>The email format is incorrect</p>
            )}
          </div>

          <div>
            <label>CITY OF RESIDENCE</label>
            <input
              type="text"
              {...register("client_city", { required: true })}
            />
            {errors.client_city?.type === "required" && (
              <p>The field is required</p>
            )}
          </div>
        </section>

        <h3 className="information_title">Health Information</h3>
        <section className="registerclient__health">
          <div>
            <label>HEALTH</label>
            <select {...register("name_eps", { required: true })}>
              <option value="">...</option>
              {eps
                ?.filter((eps) => eps.status_eps === 1)
                .map((eps) => (
                  <option key={eps.id_eps} value={eps.id_eps}>
                    {eps.name_eps}
                  </option>
                ))}
            </select>
            {errors.name_eps?.type === "required" && (
              <p>The field is required</p>
            )}
          </div>

          <div>
            <label>Rh</label>
            <select {...register("name_rh", { required: true })}>
              <option value="">...</option>
              {rhList?.map((rh) => {
                return (
                  <option key={rh.id_rh} value={rh.id_rh}>
                    {rh.name_rh}
                  </option>
                );
              })}
            </select>
            {errors.name_rh?.type === "required" && (
              <p>Blood type field is required</p>
            )}
          </div>

          <div>
            <label>DISEASES</label>
            <input
              type="text"
              placeholder="leave empty if none"
              {...register("diseases", { required: false })}
            />
          </div>

          <div className="aditional">
            <label>ADDITIONAL INFO</label>
            <textarea
              type="text"
              placeholder="leave empty if none additional information provided"
              {...register("additionalInfo", { required: false })}
            />
          </div>
        </section>

          <h3 className="information_title">Security</h3>
          <section className="registerclient__security">
            <div>
              <label>PIN</label>
              <input
                type="password"
                placeholder="min 4 numbers / max 6"
                {...register("client_password", { required: true })}
              />
              {errors.client_password?.type === "required" && (
                <p>The field is required</p>
              )}
            </div>

            <div>
              <label>CONFIRM PIN</label>
              <input
                type="password"
                placeholder="confirm pin"
                {...register("client_password2", { required: true })}
              />
              {errors.client_password2?.type === "required" && (
                <p>The field is required</p>
              )}
            </div>
          </section>
        </section>
        <section className="registerclient__botones">
          {!isButtonPressed && (
            <button type="submit" className="btnregister">
              Register
            </button>
          )}
          <button onClick={onNavigate} className="btncancel">
            Cancel
          </button>
        </section>
      </form>
    </section>
  );
}

export default RegisterClient;
