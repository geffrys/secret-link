import "../css/Entered.css";
import { useContext, useState } from "react";
import { ClientContext } from "../context/ClientContext.jsx";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { OperationContext } from "../context/operationContext.jsx";
import { getOperationHistory } from "../api/operations.api";

function EnteredClient() {
  const [activeReservations, setActiveReservations] = useState([]);
  const [pastReservations, setPastReservations] = useState([]);

  const navigate = useNavigate();
  const { client, isClientValidated, logOut } = useContext(ClientContext);
  const { setOperation } = useContext(OperationContext);

  const onClickNewReservation = () => {
    navigate("/newreservation");
  };

  const operationHistory = async () => {
    try {
      const res = await getOperationHistory(client.id_client);
      if (!res.data) {
        console.log("error");
        throw new Error("there's no data");
      }
      const currentDate = new Date().toISOString().substring(0, 10);
      const active = res.data
        .filter((reservation) => reservation.operation_start_date > currentDate)
        .map((reservation) => {
          return {
            id: reservation.id_operation,
            status_: reservation.operation_status_name,
            initial_date: reservation.operation_start_date,
            payment:
              reservation.operation_status_name == "In progress"
                ? "pending"
                : "paid",
            reservation_number: reservation.id_operation,
            people: reservation.operation_travelers_count
              ? Number(reservation.operation_travelers_count)
              : 1,
            headquarter: reservation.address_headquarter,
            totalcost: reservation.operation_price,
          };
        });

      const past = res.data
        .filter((reservation) => reservation.operation_start_date < currentDate)
        .map((reservation) => {
          return {
            id: reservation.id_operation,
            status_: reservation.operation_status_name,
            initial_date: reservation.operation_start_date,
            payment:
              reservation.operation_status_name == "In progress"
                ? "pending"
                : "paid",
            reservation_number: reservation.id_operation,
            people: reservation.operation_travelers_count
              ? Number(reservation.operation_travelers_count)
              : 1,
            headquarter: reservation.address_headquarter,
            totalcost: reservation.operation_price,
          };
        });
      setActiveReservations(active);
      setPastReservations(past);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    operationHistory();
  }, [client.id]);

  useEffect(() => {
    if (!isClientValidated) {
      navigate("/client");
    }
  }, [isClientValidated, navigate]);

  return (
    <div className="entered_container">
      <div className="entered_main_content">
        {/* client name from context */}
        <div className="entered_user_title_container">
          <h1 className="entered_user_title">
            <b>
              {`${client.client_name} ${client.client_middle_name ? client.client_middle_name : ""} ${client.client_lastname}`}
            </b>
          </h1>
        </div>

        {/* current reservations */}

        <div className="section_reservations">
          <div className="section_header">
            <div className="section_title_container">
              <h1>current reservations</h1>
            </div>
            <br />
            <button
              className="new_reservation_btn"
              onClick={onClickNewReservation}
            >
              New reservation
            </button>
            <div className="section_actions">
              <div>
                <input type="text" placeholder="search" />
              </div>
            </div>
          </div>

          <div>
            <br />
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
                  {activeReservations.map((reservation) => {
                    return (
                      <tr key={reservation.id}>
                        <td>{reservation.status_}</td>
                        <td>{reservation.initial_date}</td>
                        <td>{reservation.payment}</td>
                        <td>{reservation.reservation_number}</td>
                        <td>{reservation.people}</td>
                        <td>{reservation.headquarter}</td>
                        <td>{reservation.totalcost}</td>
                      </tr>
                    );
                  })}
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
              <h1>past reservations</h1>
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
            <br />
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
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {pastReservations.map((reservation) => {
                  return (
                    <tr key={reservation.id}>
                      <td>{reservation.status_}</td>
                      <td>{reservation.initial_date}</td>
                      <td>{reservation.payment}</td>
                      <td>{reservation.reservation_number}</td>
                      <td>{reservation.people}</td>
                      <td>{reservation.headquarter}</td>
                      <td>{reservation.totalcost}</td>
                      <td>
                        <span
                          className="action_details"
                          onClick={() => {
                            setOperation(reservation.id);
                            navigate("/currentreservation", {
                              state: { reservation: reservation.id },
                            });
                          }}
                        >
                          ✔️
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="entered_metadata">
        <h1>
          <b>Con nosotros desde:</b>
        </h1>
        <p>{client.created_at.substring(0, 10)}</p>
        <br />
        <center>
          <button
            onClick={() => {
              logOut();

              //

              navigate("/client");
            }}
            className="endSesionEntered"
          >
            End sesion
          </button>
        </center>
      </div>
    </div>
  );
}

export default EnteredClient;
