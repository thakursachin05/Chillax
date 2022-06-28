import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducers";

const INITIAL_STATE = {
  user: null,
  isFetching: false,
  erroe: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  return (
  <AuthContext.Provider
    value={{
      user: state.user,
      isFetching: state.isFetching,
      error: state.error,
      dispatch
    }}
  >
    {children}
  </AuthContext.Provider>
  )
};
