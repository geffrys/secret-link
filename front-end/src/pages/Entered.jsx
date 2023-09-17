import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Entered.css";


function EnteredClient() {
    const navigate = useNavigate();



    return (
        <div className="entered_container">
            <div className="entered_main_content">
                <h1>UserName</h1>
                <div>
                    <h1>
                        current reservations
                    </h1>
                    <div>
                        <button>
                            New reservation
                        </button>
                        <input type="text" placeholder="search" />
                    </div>

                </div>
            </div>
            <div className="entered_metada">
                <b>Con nosotros desde:</b>
                <p></p>
            </div>
        </div>
    )
}

export default EnteredClient;