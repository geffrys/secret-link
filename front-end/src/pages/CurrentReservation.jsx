import { useContext } from "react";
import { ClientContext } from "../context/ClientContext.jsx";
import { useNavigate } from "react-router-dom";

import "../css/CurrentReservation.css";
const CurrentReservation = () => {


    const { isClientValidated, signIn } = useContext(ClientContext);

   


    const reservation = "Santa Marta (Air or autobus) - 23/08/2023"
    const travelers = [
        {
            id: 1,
            name: "Juan",
            middle_name: "Carlos",
            last_name: "Perez"
        },
        {
            id: 2,
            name: "Juan",
            middle_name: "Carlos",
            last_name: "Perez"
        }
    ];

    const summary = [
        {
            concept: "Travel",
            price: 400,
            quantity: 2,
            total: 400*2
        },
        {
            concept: "vehicle",
            price: 200,
            quantity: 2,
            total: 200*2
        },
        {
            concept: "touristic guide",
            price: 100,
            quantity: 2,
            total: 100*2
        }
    ]

    const included = {
        transport: "Airplane",
        bed_type: "Double",
        additionals: [
            'touristic guide',
            'food included PAM'
        ]
    }

    const details = [
        'tickets',
        'itinerary',
        'reservations'
    ]

    let totalAux = 0;
    let total = summary.forEach(element => {
        totalAux += element.total
    });


    return (
        <div className="main_container">
            <div className="main_content">
                <h1>{`Reservation ${reservation}`}</h1>
                <div className="content_reservation">
                    <div className="travelers">
                        <div>
                            <h2>Travelers</h2>
                        </div>
                        <div>
                        <table>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                </tr>
                            </thead>
                            <tbody>
                                {travelers.map((traveler) => (
                                    <tr key={traveler.id}>
                                        <td>{traveler.id}</td>
                                        <td>{traveler.name} {traveler.middle_name} {traveler.last_name}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        </div>
                        
                    </div>

                    <div className="included">
                        <div>
                            <h2>Included</h2>
                        </div>
                        <div>
                            <p>Transport: {included.transport ? included.transport : 'not included'}</p>
                            <p>Bed type: {included.bed_type ? included.bed_type : 'not included'}</p>
                            <p>Additionals: {included.additionals ? included.additionals: 'not included'}</p>
                        </div>

                    </div>

                    <div className="options">
                        <div>
                            <h2>Options</h2>
                        </div>
                        <div>
                            <ul>
                                {details.map((detail) => (
                                    <li key={detail.id}>{detail}</li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="summary">
                        <div>
                            <h2>Summary</h2>
                        </div>
                        <div>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Concept</th>
                                        <th>Quantity</th>
                                        <th>Price</th>
                                        <th>Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {summary.map((item) => (
                                        <tr key={item.id}>
                                            <td>{item.concept}</td>
                                            <td>{item.quantity}</td>
                                            <td>{item.price}</td>
                                            <td>{item.total}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <p>Total: {totalAux}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CurrentReservation;