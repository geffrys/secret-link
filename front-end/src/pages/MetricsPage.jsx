import React from "react";
import TravelsChart from "../components/TravelsChart.jsx";
import "../css/Metrics.css";
import { useNavigate } from "react-router-dom";

function MetricsPage() {
  const navigate = useNavigate();
  const onNavigate = () => {
    navigate("/client");
  }
  return (
    <section className="metrics">
      <h1 className="metrics__title">Reserve Metrics</h1>
      <section>
        <TravelsChart />
      </section>
      <button onClick={onNavigate} className="btncancel">
        Back
      </button>
    </section>
  );
}

export default MetricsPage;
