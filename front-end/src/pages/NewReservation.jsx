import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import "../css/NewReservation.css";

const NewReservation = () => {
    const navigate = useNavigate();

    return (
        <div className="main_content_newReservation">
            <div className="content">
                <h1>Make a reservation</h1>
                <div className="content_section">
                    <div className="content_Title">
                        <h2>Available plans</h2>
                    </div>

                    <div className="content_actions">
                        <div className="content_actions_date">
                            <p> Desde </p>
                            <input type="date" name="" id="" />
                            <p> Hasta </p>
                            <input type="date" name="" id="" />
                        </div>
                        <input type="text"  placeholder="Buscar"/>
                    </div>

                    <div className="content_table">
                        <table>
                            <thead>
                                <tr>
                                    <th>Destination</th>
                                    <th>Date</th>
                                    <th>Availability</th>
                                    <th>Price</th>
                                    <th>👁️</th>
                                </tr>
                            </thead>
                        </table>
                    </div>



                </div>
                
            </div>
            <div className="Container_btn_back_currReservation">
                <button className="btn_back_currReservation" onClick={() => navigate('/dashboardclient')}>Back</button>
            </div>
        </div>
    )
};

export default NewReservation;