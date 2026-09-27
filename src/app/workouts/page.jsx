import WorkoutCard from "../../components/WorkoutCard";

const PROGRAMMING_API_URL =
  "https://api.api-store.workers.dev/api/fitlog";

const getWorkouts = async () => {
  const response = await fetch(PROGRAMMING_API_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch workout data");
  }

  const data = await response.json();

  return data;
};

const WorkoutPages = async () => {
  const workouts = await getWorkouts();

  return (
    <main className="min-h-screen bg-black px-4 py-12 text-white md:px-8 lg:px-12">
      {/* Page Header */}
      <section className="mx-auto mb-10 max-w-7xl">
        <p className="mb-2 text-sm font-semibold tracking-[0.3em] text-lime-400">
          WORKOUT LIBRARY 
        </p>

        <h1 className="text-4xl font-bold md:text-5xl">
          ALL WORKOUTS
        </h1>

        <p className="mt-3 text-gray-400">
          Explore workouts and choose the right lift for your plan.
        </p>
      </section>

      {/* Workout Cards */}
      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {workouts.map((workout) => <WorkoutCard key={workout.id} workout={workout}></WorkoutCard>)}
      </section>
    </main>
  );
};

export default WorkoutPages;