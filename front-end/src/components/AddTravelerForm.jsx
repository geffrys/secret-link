import { useForm } from "react-hook-form";
import { useState } from "react";
import { getDocTypes } from "../api/doctypes.api";
import { getRh } from "../api/rh.api";
import { getEps } from "../api/eps.api";
import "../css/AddTravelerForm.css";

const AddTravelerForm = () => {

    const [docTypesList, setDocTypesList] = useState([])
    const [rhList, setRhList] = useState([])
    const [epsList, setEpsList] = useState([])

    useState(() => {
        let response = []
        async function callUtilities() {
            response = await getDocTypes();
            setDocTypesList(response.data);
            response = await getRh();
            setRhList(response.data);
            response = await getEps();
            setEpsList(response.data);
        }
        callUtilities()
    },[1])

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = handleSubmit((data) => {
        console.log(data);
    })


    return (
        <div className="formAp_container">
            <div className="addtravelers_form_title">
                <h1>Add Traveler Form</h1>
                <p>(All fields are required!)</p>
            </div>
            <div>
                <form action="" className="addtravelers_form" onSubmit={onSubmit}>
                    <div className="Ap_formGroup">
                        <label>Nombre</label>
                        <input type="text" {...register("name_additional_people", { required: true })} />
                        {errors.name_additional_people?.type === "required" && (
                            <p>name is required</p>
                        )}
                    </div>
                    <div className="Ap_formGroup">
                        <select {...register("id_document_type", { required: true })}>
                            <option value="">select Document type</option>
                            {
                                docTypesList.map((docType) => (
                                    <option key={docType.id_document_type} value={docType.id_document_type}>{docType.name_document_type}</option>
                                ))
                            }
                        </select>
                        <input type="text" {...register("document_number_additional_people", { required: true })} />
                        {errors.document_number_additional_people?.type === "required" && (
                            <p>document number is required</p>
                        )}
                        {errors.id_document_type?.type === "required" && (
                            <p>document type is required</p>
                        )}
                    </div>
                    <div className="Ap_formGroup">
                        <label htmlFor="">Rh</label>
                        <select name="" id="" {...register("additional_people.rh", { required: true })}>
                            <option value="">select Rh type</option>
                            {
                                rhList.map((rh) => (
                                    <option key={rh.id_rh} value={rh.id_rh}>{rh.name_rh}</option>
                                ))
                            }
                        </select>
                       
                    </div>
                    <div className="Ap_formGroup">
                        <label htmlFor="">Eps</label>
                        <select name="" id="" {...register("additional_people.eps")}>
                            <option value="">select Eps</option>
                            {
                                epsList.map((eps) => (
                                    <option key={eps.id_eps} value={eps.id_eps}>{eps.name_eps}</option>
                                ))
                            }
                        </select>
                       
                    </div>
                    <div className="actions_additional_people">
                        <button type="submit">Accept</button>
                        <button>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddTravelerForm