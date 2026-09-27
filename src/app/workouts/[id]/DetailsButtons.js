
"use client";

import { toast } from "react-toastify";
import React, { useContext } from "react";
import { useRouter } from "next/navigation";
import { GymContext } from "@/context/gymContext";

function DetailsButtons({ workout }) {
  const { plan, setPlan, saved, setSaved } = useContext(GymContext);

  const router = useRouter();

  const handleAddToPlan = () => {
    const alreadyAdded = plan.some(
      (item) => item.id === workout.id
    );

    if (alreadyAdded) {
      toast.error("This workout is already in today's plan!");
      return;
    }

    setPlan([...plan, workout]);

    toast.success("Added to today's plan!");

    router.push("/my-plan");
  };

  const handleSaveForLater = () => {
    const alreadySaved = saved.some(
      (item) => item.id === workout.id
    );

    if (alreadySaved) {
      toast.error("This workout is already saved!");
      return;
    }

    setSaved([...saved, workout]);

    toast.success("Workout saved for later!");

    router.push("/my-plan");
  };

  return (
    <div className="flex flex-col gap-3 pt-2 sm:flex-row">
      <button
        onClick={handleAddToPlan}
        className="btn btn-primary flex-1"
      >
        ➕ Add to today's plan
      </button>

      <button
        onClick={handleSaveForLater}
        className="btn btn-outline flex-1"
      >
        🔖 Save for later
      </button>
    </div>
  );
}

export default DetailsButtons;

