/* eslint-disable react/prop-types */
import { createContext, useContext } from "react";

const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const BASE_URL = "http://localhost:4000";

  return (
    <StateContext.Provider value={{ BASE_URL }}>
      {children}
    </StateContext.Provider>
  );
};
// eslint-disable-next-line react-refresh/only-export-components
export const useStateManage = () => useContext(StateContext);
