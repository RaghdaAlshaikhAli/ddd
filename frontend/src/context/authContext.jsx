import useAuth from "../hooks/useAuth";
import { createContext, useContext } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const auth = useAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

export const useAuthContext = () => {
  return useContext(AuthContext);
};
