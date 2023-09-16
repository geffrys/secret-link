import { useNavigate } from "react-router-dom";

function RegisterAgentsBttn() {
  const navigate = useNavigate();
  const onNavigate = () => {
    navigate("/registeragents");
  }
  return (
    <button className="registeragents_boton" onClick={onNavigate}>
      Register Agents
    </button>
  );
}

export default RegisterAgentsBttn;
