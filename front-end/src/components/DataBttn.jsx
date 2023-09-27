import { useNavigate } from "react-router-dom";

function DataBttn() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/datapage");
  };
  return (
    <button className="seeplans_boton" onClick={handleClick}>
      CRM Data
    </button>
  );
}

export default DataBttn;
