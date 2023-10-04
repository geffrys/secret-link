import { useContext, useState } from "react";
import { getDocTypes } from "../api/doctypes.api";
import { getRh } from "../api/rh.api";
import { getEps } from "../api/eps.api";
import "../css/AddTravelerForm.css";
import { ClientContext } from "../context/clientContext";
import { postAdditionalPeople } from "../api/client.api"

const AddTravelerForm = ({ setOpen }) => {





    return (
        <div className="formAp_container">
            <div className="addtravelers_form_title">
                <h1>Update Operation status</h1>
            </div>
            <div>
                <p>
                    does the customer payed the operation?
                </p>
            </div>
            <div className="actiones_buttons">
                <button>Yes</button>
                <button>No</button>
            </div>
        </div>

    )
}

export default AddTravelerForm