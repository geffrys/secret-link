import { useAuth } from "../context/AuthContext.jsx";
import "../css/Footer.css";
function Footer() {
  const { isAuthenticated } = useAuth();

  return (
    <section className="footer">
      <section className="footer__linea">
        <p>En línea</p>
        {isAuthenticated ? (
          <div className="footer__green" />
        ) : (
          <div className="footer__red" />
        )}
      </section>
      <p>© 2023 Vuelo Secreto / All rights reserved</p>
    </section>
  );
}

export default Footer;
