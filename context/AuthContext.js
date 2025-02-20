"use client";

import React, { createContext, useState, useContext, useEffect } from 'react';
import Cookies from 'universal-cookie';

const AuthContext = createContext();
const cookies = new Cookies();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);

  // Retrieve token and user from cookies on component mount (if available)
  useEffect(() => {
    const savedToken = cookies.get('authToken');
    const savedUser = cookies.get('user');
    if (savedToken) {
      setToken(savedToken);
    }
    if (savedUser) {
      try {
        setUser(savedUser);
      } catch (error) {
        console.error('Error parsing user data from cookies:', error);
      }
    }
  }, []);

  const login = ( userData) => {
    setUser(userData);
    cookies.set('user', JSON.stringify(userData), { path: '/', expires: new Date(Date.now() + 24 * 3600 * 1000) }); // Set the user with expiry (1 day)
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    cookies.remove('authToken', { path: '/' });
    cookies.remove('user', { path: '/' });
  };

  return (
    <AuthContext.Provider value={{ token, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
