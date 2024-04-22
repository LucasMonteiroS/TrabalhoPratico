import React, { createContext, useContext, useState, ReactNode } from "react";

interface UserContextType {
  user: any;
  updateUser: (userData: any) => void;
}

const UserContext = createContext<UserContextType>({
  user: null,
  updateUser: (userData: any) => {}
});

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<any>(null);

  const updateUser = (userData: any) => {
    setUser(userData);
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
