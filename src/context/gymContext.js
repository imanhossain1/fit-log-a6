"use client";

import { createContext, useState } from "react";

export const GymContext = createContext();

export const GymProvider = ({ children }) => {
  const [plan, setPlan] = useState([]);
  const [saved, setSaved] = useState([]);

  return (
    <GymContext.Provider value={{ plan, setPlan, saved, setSaved }}>
      {children}
    </GymContext.Provider>
  );
};