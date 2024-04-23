import { onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../../services/firebaseConnection";

interface UserContextProps {
  currentUser: any;
  setCurrentUser: React.Dispatch<any>;
}

const UserContext = createContext({} as UserContextProps);

export function useAuth() {
  return useContext(UserContext);
}

export function UserProvider({ children }: any) {
  const [currentUser, setCurrentUser] = useState({}); // Inicializado como um objeto vazio
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, initializeUser);
    return unsubscribe;
  }, []);

  async function initializeUser(user: any) {
    if (user) {
      setCurrentUser({ ...user });
    } else {
      setCurrentUser({}); // Definindo como objeto vazio quando o usuário não estiver autenticado
    }

    setLoading(false);
  }

  const value = {
    currentUser,
    setCurrentUser,
  };

  return (
    <UserContext.Provider value={value}>
      {!loading && children}
    </UserContext.Provider>
  );
}

export function useUser(): UserContextProps {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}
