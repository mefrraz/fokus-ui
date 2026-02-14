import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import mockDb from "../mock_db.json";

interface User {
    id: number;
    email: string;
    name: string;
    purchases: any[];
    feedback: any[];
}

interface AuthContextType {
    user: User | null;
    isLoading: boolean;
    login: (email: string, password: string) => Promise<boolean>;
    register: (data: any) => Promise<boolean>;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    // Load user from localStorage on mount (simple persistence simulation)
    useEffect(() => {
        const storedUser = localStorage.getItem("fokus_user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
        setIsLoading(false);
    }, []);

    const login = async (email: string, password: string) => {
        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 500));

        const foundUser = mockDb.users.find(
            (u) => u.email === email && u.password === password
        );

        if (foundUser) {
            const { password, ...safeUser } = foundUser;
            setUser(safeUser);
            localStorage.setItem("fokus_user", JSON.stringify(safeUser));
            return true;
        }
        return false;
    };

    const register = async (data: any) => {
        await new Promise((resolve) => setTimeout(resolve, 500));

        // Create a new mock user
        const newUser = {
            id: Math.floor(Math.random() * 1000),
            email: data.email,
            name: data.name,
            purchases: [],
            feedback: []
        };

        setUser(newUser);
        localStorage.setItem("fokus_user", JSON.stringify(newUser));
        return true;
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("fokus_user");
    };

    return (
        <AuthContext.Provider value={{ user, isLoading, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}
