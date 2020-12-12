import React, { createContext, useContext, useReducer } from "react";
import reducer, { initialState, actionTypes } from "./reducer";

export const StateContext = createContext(null);
export const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setUser = user => {
    dispatch({ type: actionTypes.SET_USER, user: user });
  };
  return (
    <StateContext.Provider value={{ state, dispatch, setUser }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateValue = () => useContext(StateContext);
