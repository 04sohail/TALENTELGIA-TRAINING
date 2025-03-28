import { useState } from "react";
import { UserContext } from "./userContextDefinition";
import { ReactNode } from "react";
import { loginUserData } from "../types/types";

export const UserProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<loginUserData>({} as loginUserData); // User is initially null

    const loginUser = (user: loginUserData) => {
        
        setUser(user); 
        console.log("From Context: ", user);
    };

    const logoutUser = () => {
        setUser({} as loginUserData); // Clear user data on logout
    };

    return (
        <UserContext.Provider value={{ user, loginUser, logoutUser }}>
            {children}
        </UserContext.Provider>
    );
};
