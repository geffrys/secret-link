import { set, useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { getDocTypes } from "../api/doctypes.api";
import { getRh } from "../api/rh.api";
import { getEps } from "../api/eps.api";
import "../css/AddTravelerForm.css";
import { ClientContext } from "../context/clientContext";
import { postAdditionalPeople } from "../api/client.api"

const AddTravelerForm = ({setOpen}) => {

    

    const { client } = useContext(ClientContext)

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
        const body = {
            "id_client": client.id_client,
            "id_document_type": Number(data.id_document_type),
            "document_number": data.document_number_additional_people,
            "name": data.name_additional_people,
            "health_information": {
                "id_rh": Number(data.health_info.rh),
                "id_eps": Number(data.health_info.eps),
                "health_card": "",
                "health_diseases": data.health_info.health_diseases,
                "health_details": data.health_info.health_details
            }
        }
        console.log(body)
        try {
            postAdditionalPeople(body)
        } catch (error) {
            console.log(error);
        }
        setOpen()
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
                        <select name="" id="" {...register("health_info.rh", { required: true })}>
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
                        <select name="" id="" {...register("health_info.eps")}>
                            <option value="">select Eps</option>
                            {
                                epsList.map((eps) => (
                                    <option key={eps.id_eps} value={eps.id_eps}>{eps.name_eps}</option>
                                ))
                            }
                        </select>
                       
                    </div>
                    <div className="Ap_formGroup">
                        <label htmlFor="">health diseases?</label>
                        <input type="checkbox" {...register("health_info.health_diseases")} />
                    </div>
                    
                    <div className="Ap_formGroup">
                        <label htmlFor="">health details</label>
                        <input type="text" {...register("health_info.health_details")} />
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