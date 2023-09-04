import { AuthUserType } from "./AuthUserType";

// Define the type for your auth context
export interface AuthContextType {
  auth: AuthUserType | {};
  setAuth: (auth: AuthUserType) => void;
}
