import { createContext } from "react";
import { loginUserData } from "../types/types";

// Create UserContext
interface UserContextType {
    user: loginUserData;
    loginUser: (user: loginUserData) => void;
    logoutUser: () => void;
}

export const UserContext = createContext<UserContextType>({
    user: {} as loginUserData,
    loginUser: () => { },
    logoutUser: () => { }
});
