import { useAuth } from "../context/AuthContext";

function SignOutBtn() {
  const { signOut } = useAuth();
  return (
    <button className="navbar__boton" onClick={signOut}>
      Sign Out
    </button>
  );
}

export default SignOutBtn;
