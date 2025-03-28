import React, { createContext, useState, ReactNode } from 'react';

// Define the shape of the authentication context
interface AuthContextType {
    user: string | null; // You can replace `string` with a more detailed user object
    login: (username: string) => void;
    logout: () => void;
}

// Create the context with a default value
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// AuthProvider to wrap the app and provide the auth context
export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<string | null>(null);

    const login = (username: string) => {
        setUser(username); // Store the user's data
        localStorage.setItem('user', username); // Persist user data in localStorage
    };

    const logout = () => {
        setUser(null); // Clear the user data
        localStorage.removeItem('user'); // Remove data from localStorage
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Remove the custom hook from here

export { AuthContext }; // Export AuthContext if needed
