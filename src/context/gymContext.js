"use client";

import { createContext, useState } from "react";

export const GymContext = createContext();

export const GymProvider = ({ children }) => {
  const [plan, setPlan] = useState([]);
  const [saved, setSaved] = useState([]);
  const [workouts, setWorkouts] = useState([]);

  return (
    <GymContext.Provider value={{ plan, setPlan, saved, setSaved, workouts, setWorkouts }}>
      {children}
    </GymContext.Provider>
  );
};