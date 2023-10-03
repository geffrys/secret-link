import { useNavigate } from "react-router-dom";

function MetricsBttn() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/metrics");
  };
  return (
    <button className="seeplans_boton" onClick={handleClick}>
      Metrics
    </button>
  );
}

export default MetricsBttn;
