import React, { createContext, useState, useEffect } from 'react';
import api from '../services/api';

const Context = createContext();

function AuthProvider({ children }) {

  const [user, setUser] = useState(null);
  useEffect(() => {
    setUser({
      "name": "Tester",
      "id": 3,
      "email": "user3@gmail.com",
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJ1c2VyM0BnbWFpbC5jb20iLCJpYXQiOjE2MDI4MTY5MjIsImV4cCI6MTYwODg2NDkyMn0.kCxyWj2-sjaBCp1-1YPkzVubLnu4V3eS-6IuytGMamo"
    });
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJ1c2VyM0BnbWFpbC5jb20iLCJpYXQiOjE2MDI4MTY5MjIsImV4cCI6MTYwODg2NDkyMn0.kCxyWj2-sjaBCp1-1YPkzVubLnu4V3eS-6IuytGMamo";
    api.defaults.headers.Authorization = `Bearer ${token}`;

  },[]);

  return (
    <Context.Provider value={{authenticated: !!user, user}}>
      {children}
    </Context.Provider>
  )
}

export { Context, AuthProvider };
