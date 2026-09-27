"use client"
import React, { useContext } from "react";

import { GymContext } from "../../context/gymContext"; 

 

function MyPlanPage() {
     const { plan, setPlan, saved, setSaved } = useContext(GymContext)


  return (
    <div>
      <h1>  plan selecta data   {plan.length}</h1>
      <h1>  save selecta data   {saved.length}</h1>
    </div>
  )
}

export default MyPlanPage