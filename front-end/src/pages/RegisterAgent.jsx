import { useEffect } from "react";
import { useForm } from "react-hook-form";
import "../css/Registerclient.css";
import { useNavigate } from "react-router-dom";
import { useRh } from "../context/RhContext";
import { useDocTypes } from "../context/DocTypesContext";
import { useEps } from "../context/EpsContext";

function RegisterAgent() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const { rhList, getRhList } = useRh();
  const { docTypesList, getDocTypesList } = useDocTypes();
  const { eps, getEpsList } = useEps();

  const navigate = useNavigate();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
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
      <form onSubmit={onSubmit} className="registerclient__form">
        <h2 className="registerclient__title">Agent Registration</h2>
        <h1 className="registerclient__title2">Required Information</h1>

        <section className="registerclient__requiered">
          <h3 className="information_title">Personal Information</h3>
          <section className="registerclient__personal">
            <div>
              <label>FIRST NAME</label>
              <input type="text" {...register("name_ag", { required: true })} />
              {errors.name_ag?.type === "required" && (
                <p>The field is required</p>
              )}
            </div>

            <div>
              <label>ID</label>
              <select {...register("id_dt", { required: true })}>
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
              {errors.id_dt?.type === "required" && <p>ID type required</p>}
              <input
                type="number"
                {...register("document_number", { required: true })}
                placeholder="#"
              />
              {errors.document_number?.type === "required" && (
                <p>ID number required</p>
              )}
            </div>
          </section>

          <h3 className="information_title">Contact Information</h3>
          <section className="registerclient__contact">
            <div>
              <label>CONTACT NUMBER</label>
              <input
                type="tel"
                {...register("phone_ag", { required: true })}
              />
              {errors.phone_ag?.type === "required" && (
                <p>The field is required</p>
              )}
            </div>

            <div>
              <label>EMAIL</label>
              <input
                type="email"
                {...register("user_email", {
                  required: true,
                  pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
                })}
              />
              {errors.user_email?.type === "required" && (
                <p>The field is required</p>
              )}
              {errors.user_email?.type === "pattern" && (
                <p>The email format is incorrect</p>
              )}
            </div>
          </section>

          <h3 className="information_title">Security</h3>
          <section className="registerclient__security">
            <div>
              <label>PASSWORD</label>
              <input
                type="password"
                placeholder="min 9 characters"
                rules={{ required: true, min: 9 }}
                {...register("user_password", { required: true })}
              />
              {errors.user_password?.type === "required" && <p>The field is required</p>}
              {errors.user_password?.type === "min" && <p>The field is required</p>}
            </div>

            <div>
              <label>CONFIRM PASSWORD</label>
              <input
                type="password"
                placeholder="confirm password"
                {...register("pin2", { required: true })}
              />
              {errors.pin2?.type === "required" && <p>The field is required</p>}
            </div>
          </section>
        </section>
        <section className="registerclient__botones">
          <button type="submit" className="btnregister">
            Register
          </button>
          <button onClick={onNavigate} className="btncancel">
            Cancel
          </button>
        </section>
      </form>
    </section>
  );
}

export default RegisterAgent;
