import { createContext } from "react";
import { IUserContext, IUserProvider } from "./types";

export const UserContext = createContext({} as IUserContext);

function UserProvider({ children }: IUserProvider) {

  return (
    <UserContext.Provider value={{}}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
