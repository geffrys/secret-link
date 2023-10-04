import { useParams } from "react-router-dom";
import Popup from "../components/PopUpAddPeople.jsx";
import AddTravelerForm from "../components/AddTravelerForm.jsx";
import { useState, useEffect } from "react";
import { getPackage } from "../api/packages.api";
import { ClientContext } from "../context/clientContext";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext.jsx";
import { getClientAdditionalPeople } from "../api/client.api";
import "../css/TakingPlan.css";
import { postOperation } from "../api/operations.api.js";
import { toast } from "react-hot-toast";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
// import { PayForm } from  '../components/PayForm.jsx'

const TakingPlan = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { client } = useContext(ClientContext);
  const { user } = useContext(AuthContext);
  const [isOpened, setIsOpen] = useState(false);
  const [travelers, setTravelers] = useState([]);
  const [plan, setPlan] = useState({});
  const [OpenPay, setOpenPay] = useState(false);
  const [confirmed, setConfirmed] = useState(false);

  let index = 1; // to count the number of travelers

  const onConfirm = () => {
    setTimeout(() => {
      navigate("/dashboard");
    }, 4000);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit((data) => {
    const operation = {
      id_agent: user.id,
      id_client: client.id_client,
      id_travel_pack: id,
      operation_start_date: data.startDate,
    };

    console.log(user);
    toast.promise(postOperation(operation), {
      loading: "Loading",
      success: (response) => {
        setTimeout(() => {}, 4000);
        console.log(response.data);
        setConfirmed(true);
        return "Operation created successfully";
      },
      error: "Error creating operation",
    });
  });

  useEffect(() => {
    async function callPlan() {
      try {
        const response = await getPackage(id);
        setPlan(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    async function callTravelers() {
      try {
        const response = await getClientAdditionalPeople(client.id_client);

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

        setTravelers(filtered);
      } catch (error) {
        console.log(error);
      }
    }

    callTravelers();
    callPlan();
  }, [setIsOpen]);

  return (
    <>
      <div className="takingplan_container">
        <h1>{plan.travelpack_description}</h1>

        <div className="takingplan_container_content">
          <div className="travelers_list">
            <table>
              <thead>
                <tr>
                  <th>Number</th>
                  <th>Travelers</th>
                  <th>
                    Price{" "}
                    <button
                      className="addtraveler_button"
                      onClick={() => {
                        setIsOpen(true);
                      }}
                    >
                      {" "}
                      AddTraveler
                    </button>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{1}</td>
                  <td>{client.client_name}</td>
                  <td>{plan.travelpack_price}</td>
                </tr>
                {travelers.map((traveler) => {
                  return (
                    <tr key={index}>
                      <td>{(index += 1)}</td>
                      <td>{traveler.name_additional_people}</td>
                      <td>{plan.travelpack_price}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="package_info">
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
                  <td>{travelers.length + 1}</td>
                  <td>{plan.travelpack_price}</td>
                  <td>{plan.travelpack_price * (travelers.length + 1)}</td>
                </tr>
                <tr>
                  <td>transport: {plan.transport_name}</td>
                  <td>{travelers.length + 1}</td>
                  <td>{plan.transport_price}</td>
                  <td>{plan.transport_price * (travelers.length + 1)}</td>
                </tr>
                <tr>
                  <td>food: {plan.food_name}</td>
                  <td>{travelers.length + 1}</td>
                  <td>{plan.food_price}</td>
                  <td>{plan.food_price * (travelers.length + 1)}</td>
                </tr>
                <tr style={{ borderTop: "1px solid black" }}>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td
                    style={{
                      backgroundColor: "var(--primary-color)",
                      color: "white",
                    }}
                  >
                    total{" "}
                    {plan.food_price * (travelers.length + 1) +
                      plan.food_price * (travelers.length + 1) +
                      plan.transport_price * (travelers.length + 1) +
                      plan.travelpack_price * (travelers.length + 1)}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="action">
            <form action="" onSubmit={onSubmit}>
              <div>
                <label htmlFor="">Start Date</label>
                <input
                  type="date"
                  {...register("startDate", { required: true })}
                />
                {errors.startDate?.type === "required" && (
                  <p>Start Date required</p>
                )}
              </div>
              <div className="action_button_container">
                <button
                  className="action_button"
                  type="submit"
                  onSubmit={onConfirm}
                >
                  Confirm
                </button>
                <button
                  className="action_button"
                  onClick={() => {
                    setOpenPay(true);
                  }}
                  type="button"
                  disabled={() => {
                    if (confirmed) {
                      return false;
                    } else {
                      return true;
                    }
                  }}
                >
                  Update pay
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Popup
        isOpen={isOpened}
        onClose={() => {
          setIsOpen(!isOpened);
        }}
      >
        <AddTravelerForm
          setOpen={() => {
            setIsOpen(!isOpened);
          }}
          addTravelers={(travelers) => {
            setTravelers(travelers);
          }}
        />
      </Popup>

      {/* <Popup isOpen={OpenPay} onClose={() => {
                setOpenPay(!OpenPay)
            }}>
                <PayForm setOpen={() => { }} />
            </Popup> */}
    </>
  );
};

export default TakingPlan;
