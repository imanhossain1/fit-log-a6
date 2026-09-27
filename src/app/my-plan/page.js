"use client";

import React, { useContext, useMemo, useState } from "react";
import Link from "next/link";
import { GymContext } from "../../context/gymContext";

function MyPlanPage() {
  const { plan, setPlan, saved, setSaved } = useContext(GymContext);

  const [activeTab, setActiveTab] = useState("plan");
  const [loading, setLoading] = useState(false);

  const currentWorkouts = activeTab === "plan" ? plan : saved;

  // Today's Plan-এর মোট minutes
  const totalMinutes = useMemo(() => {
    return plan.reduce((total, workout) => {
      return total + Number(workout.duration || 0);
    }, 0);
  }, [plan]);

  // Today's Plan-এর মোট calories
  const totalCalories = useMemo(() => {
    return plan.reduce((total, workout) => {
      return total + Number(workout.calories || 0);
    }, 0);
  }, [plan]);

  // Plan থেকে workout remove
  const handleRemoveFromPlan = (id) => {
    setPlan((previousPlan) =>
      previousPlan.filter((workout) => workout.id !== id)
    );
  };

  // Saved থেকে workout remove
  const handleRemoveFromSaved = (id) => {
    setSaved((previousSaved) =>
      previousSaved.filter((workout) => workout.id !== id)
    );
  };

  // Done করলে Today's Plan থেকে remove
  const handleMarkAsDone = (id) => {
    setPlan((previousPlan) =>
      previousPlan.filter((workout) => workout.id !== id)
    );
  };

  // Requirement অনুযায়ী loading state
  const handleTabChange = (tab) => {
    setLoading(true);
    setActiveTab(tab);

    setTimeout(() => {
      setLoading(false);
    }, 300);
  };

  return (
    <main className="min-h-screen bg-black px-4 py-10 text-white md:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-10">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-lime-400">
            Your workout log
          </p>

          <h1 className="text-4xl font-black tracking-tight md:text-6xl">
            MY PLAN
          </h1>

          <p className="mt-3 max-w-2xl text-zinc-400">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        {/* Metrics */}
        <section className="mb-10 grid gap-4 sm:grid-cols-3">

          <div className="rounded-2xl border border-white/10 bg-zinc-900 p-6">
            <p className="text-sm uppercase tracking-wider text-zinc-500">
              Exercises
            </p>

            <h2 className="mt-2 text-4xl font-black">
              {plan.length}
            </h2>
          </div>

          <div className="rounded-2xl border border-white/10 bg-zinc-900 p-6">
            <p className="text-sm uppercase tracking-wider text-zinc-500">
              Minutes
            </p>

            <h2 className="mt-2 text-4xl font-black">
              {totalMinutes}
            </h2>
          </div>

          <div className="rounded-2xl border border-white/10 bg-zinc-900 p-6">
            <p className="text-sm uppercase tracking-wider text-zinc-500">
              Calories
            </p>

            <h2 className="mt-2 text-4xl font-black">
              {totalCalories}
            </h2>
          </div>

        </section>

        {/* Tabs */}
        <div className="mb-8 flex gap-3 border-b border-white/10 pb-3">

          <button
            onClick={() => handleTabChange("plan")}
            className={`rounded-lg px-5 py-3 text-sm font-bold transition ${
              activeTab === "plan"
                ? "bg-lime-400 text-black"
                : "bg-zinc-900 text-zinc-400 hover:text-white"
            }`}
          >
            Today's Plan
            <span className="ml-2">
              ({plan.length})
            </span>
          </button>

          <button
            onClick={() => handleTabChange("saved")}
            className={`rounded-lg px-5 py-3 text-sm font-bold transition ${
              activeTab === "saved"
                ? "bg-lime-400 text-black"
                : "bg-zinc-900 text-zinc-400 hover:text-white"
            }`}
          >
            Saved
            <span className="ml-2">
              ({saved.length})
            </span>
          </button>

        </div>

        {/* Loading */}
        {loading ? (
          <div className="flex min-h-60 items-center justify-center">
            <p className="animate-pulse text-zinc-400">
              Loading workouts…
            </p>
          </div>
        ) : currentWorkouts.length === 0 ? (

          /* Empty State */
          <section className="rounded-3xl border border-dashed border-white/10 bg-zinc-950 px-6 py-20 text-center">

            <p className="text-3xl font-black tracking-tight">
              NOTHING HERE YET
            </p>

            <p className="mx-auto mt-3 max-w-md text-zinc-500">
              Browse the library and add a lift to get today moving.
            </p>

            <Link
              href="/"
              className="mt-7 inline-flex rounded-xl bg-lime-400 px-6 py-3 font-bold text-black transition hover:bg-lime-300"
            >
              Go to workouts
            </Link>

          </section>

        ) : (

          /* Workout List */
          <section className="grid gap-5">

            {currentWorkouts.map((workout) => (

              <div
                key={workout.id}
                className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-900"
              >

                <div className="flex flex-col md:flex-row">

                  {/* Image */}
                  <div className="h-56 w-full shrink-0 md:h-auto md:w-64">
                    <img
                      src={workout.image}
                      alt={workout.name}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col justify-between p-6">

                    <div>
                      <p className="mb-2 text-xs font-bold uppercase tracking-widest text-lime-400">
                        {workout.equipment || "Equipment"}
                      </p>

                      <h2 className="text-2xl font-black uppercase">
                        {workout.name}
                      </h2>

                      {/* Stats */}
                      <div className="mt-5 flex flex-wrap gap-5 text-sm text-zinc-400">

                        <span>
                          ⏱ {workout.duration || 0} min
                        </span>

                        <span>
                          🔥 {workout.calories || 0} cal
                        </span>

                        <span>
                          ⭐ {workout.rating || "N/A"}
                        </span>

                      </div>
                    </div>

                    {/* Buttons */}
                    <div className="mt-6 flex flex-wrap gap-3">

                      <Link
                        href={`/workouts/${workout.id}`}
                        className="rounded-lg border border-white/10 px-4 py-2 text-sm font-semibold transition hover:border-lime-400 hover:text-lime-400"
                      >
                        View Details
                      </Link>

                      {activeTab === "plan" && (
                        <button
                          onClick={() => handleMarkAsDone(workout.id)}
                          className="rounded-lg bg-lime-400 px-4 py-2 text-sm font-bold text-black transition hover:bg-lime-300"
                        >
                          Mark as Done
                        </button>
                      )}

                      <button
                        onClick={() =>
                          activeTab === "plan"
                            ? handleRemoveFromPlan(workout.id)
                            : handleRemoveFromSaved(workout.id)
                        }
                        className="rounded-lg border border-red-500/30 px-4 py-2 text-sm font-semibold text-red-400 transition hover:bg-red-500/10"
                      >
                        ✕ Remove
                      </button>

                    </div>

                  </div>

                </div>

              </div>

            ))}

          </section>

        )}

      </div>
    </main>
  );
}

export default MyPlanPage;