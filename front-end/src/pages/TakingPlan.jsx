
import { useParams } from 'react-router-dom'
import Popup from '../components/PopUpAddPeople.jsx'
import AddTravelerForm from '../components/AddTravelerForm.jsx'
import { useState, useEffect } from 'react'
import {getPackage } from '../api/packages.api'
import { ClientContext } from "../context/clientContext";
import { useContext } from "react";
import { AuthContext } from '../context/AuthContext.jsx'
import {getClientAdditionalPeople} from '../api/client.api'
import '../css/TakingPlan.css'
import {postOperation} from '../api/operations.api.js'


const TakingPlan = () => {
    const { id } = useParams();
    const { client } = useContext(ClientContext)
    const { user } = useContext(AuthContext)
    const [isOpened, setIsOpen] = useState(false)
    const [travelers, setTravelers] = useState([])
    const [ plan, setPlan ] = useState({})

    let index = 1; // to count the number of travelers


    const createOperation = async () => {
        const operation = {
            id_agent: user.id_agent,
            id_client: client.id_client,
            id_travel_pack: id
        }
        try {
            const response = await postOperation(operation)
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }

    }

    useEffect(() => {
        async function callPlan() {
            try {
                const response = await getPackage(id)
                console.log(response.data);
                setPlan(response.data)
            }catch(error) {
                console.log(error);
            }
        }
        async function callTravelers() {
            try {
                const response = await getClientAdditionalPeople(client.id_client);
                console.log(response.data);
                
                let today = new Date();
                let filtered = response.data.filter((traveler) => {
                    // Convertir la cadena de fecha en un objeto Date
                    let creationDate = new Date(traveler.created_at);
                    
                    // Comparar año, mes y día
                    return (
                        creationDate.getFullYear() === today.getFullYear() &&
                        creationDate.getMonth() === today.getMonth() &&
                        creationDate.getDate() === today.getDate()
                    );
                });
        
                console.log(filtered);
                setTravelers(filtered);
            } catch (error) {
                console.log(error);
            }
        }
        
        callTravelers()
        callPlan()

    }, [isOpened])

    return (

        <>

        <div className='takingplan_container'>
            <h1>{plan.travelpack_description}</h1>


            <div className='takingplan_container_content'>

                

                <div className='travelers_list'>
                    
                    
                    <table>
                        <thead>
                            <tr>
                                <th>Number</th>
                                <th>Travelers</th>
                                <th>Price <button onClick={() => {
                        setIsOpen(true)
                    }}> AddTraveler</button></th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{1}</td>
                                <td>{client.client_name}</td>
                                <td>{plan.travelpack_price}</td>
                            </tr>
                            {
                                travelers.map((traveler) => {
                                    return (
                                        <tr key={index}>
                                            <td>{index+=1}</td>
                                            <td>{traveler.name_additional_people}</td>
                                            <td>{plan.travelpack_price}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>

                <div className='package_info'>
                    <table>
                        <thead>
                            <tr>
                                <th>Concept</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>TotalPrice</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>travel</td>
                                <td>{travelers.length+1}</td>
                                <td>{plan.travelpack_price}</td>
                                <td>{plan.travelpack_price*(travelers.length+1)}</td>
                            </tr>
                            <tr>
                                <td>transport: {plan.transport_name}</td>
                                <td>{travelers.length+1}</td>
                                <td>{plan.transport_price}</td>
                                <td>{plan.transport_price*(travelers.length+1)}</td>
                            </tr>
                            <tr>
                                <td>food: {plan.food_name}</td>
                                <td>{travelers.length+1}</td>
                                <td>{plan.food_price}</td>
                                <td>{plan.food_price*(travelers.length+1)}</td>
                            </tr>
                            <tr style={
                                {borderTop: '1px solid black'}
                            }>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td style={{
                                    backgroundColor: 'var(--primary-color)',
                                    color: 'white',
                                }}>total {
                                    plan.food_price*(travelers.length+1)+
                                    plan.food_price*(travelers.length+1)+
                                    plan.transport_price*(travelers.length+1)+
                                    plan.travelpack_price*(travelers.length+1)
                                }</td>
                            </tr>
                        </tbody>
                    </table>
                    
                    <div className='action'>
                        <button onClick={createOperation}>Confirm</button>
                    </div>

                </div>

                <div>
                    
                </div>

            </div>
        </div>
            


            <Popup isOpen={isOpened} onClose={() => {
                setIsOpen(!isOpened)
            }}>
                <AddTravelerForm setOpen={() => {
                    setIsOpen(!isOpened)
                }} addTravelers={
                    (travelers) => {
                        setTravelers(travelers)
                    }
                } />
            </Popup>

        </>
    )
}

export default TakingPlan