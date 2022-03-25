import { createContext, useContext, useReducer } from "react";

export const StateContext = createContext();

export const useStateContext = () => useContext(StateContext);

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);
