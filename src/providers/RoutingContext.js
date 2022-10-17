import React, { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { PrivateRoutes } from "../routes/PrivateRoutes";

const defaultValues = {
  routeAddUser: () => {},
  routeHome: () => {},
  routeProfile: () => {},
  routeOverview: () => {},
};

export const RoutingContext = createContext(defaultValues);

export const RoutingProvider = ({ children }) => {
  const navigate = useNavigate();

  const routeAddUser = () => {
    navigate(`${PrivateRoutes.PARAM_ADD_USER}`);
  };

  const routeHome = () => {
    navigate(`${PrivateRoutes.PARAM_HOME}`);
  };

  // Currently using overview route
  const routeProfile = () => {
    navigate(`${PrivateRoutes.PARAM_OVERVIEW}`);
  };

  const routeOverview = () => {
    navigate(`${PrivateRoutes.PARAM_OVERVIEW}`);
  };

  return (
    <RoutingContext.Provider
      value={{
        routeAddUser,
        routeHome,
        routeProfile,
        routeOverview,
      }}
    >
      {children}
    </RoutingContext.Provider>
  );
};
