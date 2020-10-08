import React, { createContext, useState } from 'react';

const Context = createContext();

function AuthProvider({ children }) {

  const [user, setUser] = useState(null);

  return (
    <Context.Provider value={{authenticated: !!user}}>
      {children}
    </Context.Provider>
  )
}

export { Context, AuthProvider };
