import React from "react";
import { useAuthUser } from "react-auth-kit";
import { Navigate, useLocation } from "react-router-dom";

const Authorization = ({ permissions, children, deny, forAuth = true }) => {
  const auth = useAuthUser();

  const location = useLocation();
  if (forAuth === false) {
    return auth()?.role == "user" ? (
      <Navigate to="/userProfile" state={{ path: location.pathname }} replace />
    ) : auth()?.role === "shop" ? (
      <Navigate to="/shopOwner" state={{ path: location.pathname }} replace />
    ) : (
      children
    );
  }
  if (deny !== undefined) {
    return auth()?.role == deny ? (
      <Navigate to="/" state={{ path: location.pathname }} replace />
    ) : (
      children
    );
  } else if (auth()?.role === permissions) return children;

  return auth()?.role == "user" ? (
    <Navigate to="/userProfile" state={{ path: location.pathname }} replace />
  ) : (
    <Navigate to="/shopOwner" state={{ path: location.pathname }} replace />
  );
};

export default Authorization;
