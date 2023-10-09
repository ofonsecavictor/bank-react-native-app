import React, {useContext, useMemo, useState} from 'react';

type Context = {
  setIsLogged: (item: boolean) => void;
  isLogged: boolean;
};

const AuthContext = React.createContext({} as Context);

export function AuthProvider({children}: any) {
  const [isLogged, setIsLogged] = useState(false);

  const value = useMemo(
    () => ({isLogged, setIsLogged}),
    [isLogged, setIsLogged],
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('Context must be used within a Provider');
  }
  return context;
}
