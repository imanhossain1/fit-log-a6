"use client";

import React, { useContext } from "react";
import { useRouter } from "next/navigation";
import { GymContext } from "@/context/gymContext"; 

function DetailsButtons({ workout }) {
    const { plan, setPlan, saved, setSaved } = useContext(GymContext)

    const router = useRouter();

    const handleAddToPlan = () => {
        setPlan([...plan, workout]);
        router.push("/my-plan");
    };

    const handleSaveForLater = () => {
        setSaved([...saved, workout]);
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