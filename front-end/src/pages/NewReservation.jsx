import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import "../css/NewReservation.css";
import { getPackages } from "../api/packages.api.js";

const NewReservation = () => {
    const navigate = useNavigate();

    const [packages, setPackages] = React.useState([]);


    

    useEffect (() => {
        const callPackages = async () => {
            try {
                let res = await getPackages();
                if(!res.data) throw new Error("Error while fetching packages");
                setPackages(res.data);
            } catch (error) {
                console.log(error); 
            }
        }
        callPackages()
    });

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
                                    <th>Availability</th>
                                    <th>Price</th>
                                    <th>👁️‍🗨️</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                
                                packages.map((packageItem) => {
                                    
                                    return (<tr key={packageItem.id_travel_pack}>
                                        <td>{packageItem.destination_name}</td>
                                        <td>{packageItem.travelpack_status == 1 ? "✔️" : "❌" }</td>
                                        <td>{packageItem.travelpack_price}</td>
                                        <td><button className="btn_view_package"
                                        onClick={
                                            () => navigate(`/reservation/${packageItem.id_travel_pack}`)
                                        }>Details</button></td>
                                    </tr>)
                                })}
                            </tbody>
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