import React, { createContext, useState, useEffect } from 'react';
import api from '../services/api';

const Context = createContext();

function AuthProvider({ children }) {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const userls = localStorage.getItem('@AuAUser');
    setUser(userls);
    const token = localStorage.getItem('@AuAToken');
    if (token) {
        api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
    }
    setLoading(false);
  },[]);

  const signout = () => {
    setUser(null);
    localStorage.clear();
  }

  const signup = async(d) => {
    setLoading(true);
    var tmp = []
    for(let x in d){
      tmp.push(d[x])
    }
    var data = {
      "name": tmp[0],
      "email": tmp[1],
      "whatsapp": tmp[2],
      "password": tmp[3]
    };
    const res = await api.post('/', data);
    setLoading(false)
    return res;
  }

  const signin = async(d) => {
    setLoading(true);
    var tmp = []
    for(let x in d){
      tmp.push(d[x])
    }
    var data = {
      "email": tmp[0],
      "password": tmp[1]
    };
    const res = await api.post('/login', data);
    const token = res.data.token;
    await localStorage.setItem('@AuAUser', JSON.stringify(res.data));
    await localStorage.setItem('@AuAToken', JSON.stringify(token));
    api.defaults.headers.Authorization = `Bearer ${token}`;
    setUser(res.data);
    setLoading(false);
    return res;
  }

  return (
    <Context.Provider value={{authenticated: !!user, user, signin, signup, signout, loading}}>
      {children}
    </Context.Provider>
  )
}

export { Context, AuthProvider };
