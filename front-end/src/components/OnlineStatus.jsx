import React, { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

function OnlineStatus() {
  const ToastRes = () => {
    toast.success("Connection Reestablished", {
      position: "bottom-center",
      duration: 4000,
    });
  };
  const ToastLost = () => {
    toast.error("Connection Lost", {
      position: "bottom-center",
      duration: 6000,
    });
  };

  useEffect(() => {
    const handleOnlineStatus = () => {
      if (navigator.onLine) {
        ToastRes();
      } else {
        ToastLost();
      }
    };

    window.addEventListener("online", handleOnlineStatus);
    window.addEventListener("offline", handleOnlineStatus);

    return () => {
      window.removeEventListener("online", handleOnlineStatus);
      window.removeEventListener("offline", handleOnlineStatus);
    };
  }, []);
  return <Toaster />;
}

export default OnlineStatus;
