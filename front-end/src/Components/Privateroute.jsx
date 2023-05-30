import { Navigate, Outlet } from "react-router-dom";
import React, { useEffect, useState } from "react";
function Privateroute() {
  const [loggedIn, setLoggedIn] = useState("True");
  const [isAdmin, setIsAdmin] = useState("Admin");

  // useEffect(() => {
  //   const data = localStorage.getItem("loggedIn");
  //   setLoggedIn(data);

  //   const admin = localStorage.getItem("isAdmin");
  //   setIsAdmin(admin);
  // }, []);
  if (loggedIn) {
    if (isAdmin == "Admin") {
      return <Outlet />;
    } else {
      return <h1>User only supports in Mobile mode.</h1>
    }
  } else {
    return (
      <>
        <Navigate to={"/signin"} />
      </>
    );
  }
}

export default Privateroute;
