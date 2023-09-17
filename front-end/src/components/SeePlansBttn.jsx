import { useNavigate } from "react-router-dom";

function SeePlansBttn() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/packages");
  };
  return (
    <button className="seeplans_boton" onClick={handleClick}>
      See Avalaible Packages
    </button>
  );
}

export default SeePlansBttn;
