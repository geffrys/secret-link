import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext.jsx";

import "../css/Footer.css";
function Footer() {
  const [online, setOnline] = useState(true);
  const { isAuthenticated } = useAuth();
  const actualYear = new Date().getFullYear();
  useEffect(() => {
    const handleOnlineStatus = () => {
      if (navigator.onLine) {
        setOnline(true);
      } else {
        setOnline(false);
      }
    };

    window.addEventListener("online", handleOnlineStatus);
    window.addEventListener("offline", handleOnlineStatus);

    return () => {
      window.removeEventListener("online", handleOnlineStatus);
      window.removeEventListener("offline", handleOnlineStatus);
    };
  }, []);

  return (
    <section className="footer">
      <section className="footer__linea">
        {isAuthenticated && online ? (
          <>
            <p>Online</p>
            <div className="footer__green" />
          </>
        ) : (
          <>
            <p>Offline</p>
            <div className="footer__red" />
          </>
        )}
      </section>
      <p>© {actualYear} Vuelo Secreto / All rights reserved</p>
    </section>
  );
}

export default Footer;
