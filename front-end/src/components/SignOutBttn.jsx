import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
function SignOutBtn() {
  const navigate = useNavigate();
  const { signOut } = useAuth();
  const handleSignOut = () => {
    signOut();
    navigate("/");
  };
  return (
    <button className="navbar__boton" onClick={handleSignOut}>
      Sign Out
    </button>
  );
}

export default SignOutBtn;
