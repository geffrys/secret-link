import "../css/Entered.css";
import { useContext } from "react";
import { ClientContext } from "../context/ClientContext.jsx";
import { useEffect } from "react";
import { navigate } from "@reach/router";

function EnteredClient() {

    const { client, isClientValidated } = useContext(ClientContext);

    useEffect(() => {
        if (!isClientValidated) {
          navigate("/client");
        }
      }, [isClientValidated]);

    return (
        <div className="entered_container">

            <div className="entered_main_content">
                {/* client name from context */}
                <div className="entered_user_title_container">
                    <h1 className="entered_user_title">
                        <b>
                            { `${client.client_name} ${client.client_middle_name} ${client.client_lastname}` }
                        </b>
                    </h1>
                </div>


                {/* current reservations */}

                <div className="section_reservations">

                    <div className="section_header">
                        <div className="section_title_container">
                            <h1>
                                current reservations
                            </h1>
                        </div>
                        <div className="section_actions">
                            <button className="new_reservation_btn">
                                New reservation
                            </button>
                            <div>
                                <input type="text" placeholder="search" />
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="section_content">
                            <table>

                                <thead>
                                    <tr>
                                        <th>Status</th>
                                        <th>Initial Date</th>
                                        <th>Payment</th>
                                        <th># Reservation</th>
                                        <th># people</th>
                                        <th>Headquarter</th>
                                        <th>Total cost</th>
                                    </tr>
                                </thead>

                                <tbody>
                                </tbody>
                            </table>
                        </div>
                    </div>


                </div>

                <br />
                {/* previous reservations */}


                <div className="section_reservations">


                    <div className="section_header">
                        <div className="section_title_container">
                            <h1>
                                past reservations
                            </h1>
                        </div>
                        <div className="section_actions">
                            
                            <div className="date_actions">
                                <p>desde</p>
                                <input type="date" />
                                <p>hasta</p>
                                <input type="date" />
                            </div>
                            <div>
                                <input type="text" placeholder="search" />
                            </div>
                        </div>
                    </div>


                    <div className="section_content">
                        <table>
                            <thead>
                                <tr>
                                    <th>Status</th>
                                    <th>Initial Date</th>
                                    <th>Payment</th>
                                    <th># Reservation</th>
                                    <th># people</th>
                                    <th>Headquarter</th>
                                    <th>Total cost</th>
                                </tr>
                            </thead>
                        </table>
                    </div>

                </div>


            </div>

            <div className="entered_metadata">
                <h1>
                    <b>Con nosotros desde:</b>
                </h1>
                <p>x fecha</p>
            </div>


        </div>
    )
}

export default EnteredClient;