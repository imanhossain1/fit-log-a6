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

const WorkoutPage = async () => {
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
        {workouts.map((workout) => (
          <article
            key={workout.id}
            className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-900"
          >
            {/* Image */}
            <div className="aspect-video overflow-hidden">
              <img
                src={workout.image}
                alt={workout.name}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Card Content */}
            <div className="p-5">
              {/* Muscle Groups */}
              <div className="mb-3 flex flex-wrap gap-2">
                {workout.muscleGroups.map((muscleGroup) => (
                  <span
                    key={muscleGroup}
                    className="rounded-full bg-lime-400 px-3 py-1 text-xs font-bold text-black"
                  >
                    {muscleGroup}
                  </span>
                ))}
              </div>

              {/* Workout Name */}
              <h2 className="text-xl font-bold">{workout.name}</h2>

              {/* Equipment */}
              <p className="mt-2 text-sm text-gray-400">
                {workout.equipment}
              </p>

              {/* Stats */}
              <div className="mt-5 grid grid-cols-3 gap-2 border-t border-white/10 pt-4 text-center">
                <div>
                  <p className="text-md font-bold">{workout.duration}</p>
                  <p className="text-xs text-gray-500">MIN</p>
                </div>

                <div>
                  <p className="text-md font-bold">
                    {workout.caloriesBurned}
                  </p>
                  <p className="text-xs text-gray-500">KCAL</p>
                </div>

                <div>
                  <p className="text-md font-bold">{workout.rating}</p>
                  <p className="text-xs text-gray-500">RATING</p>
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
};

export default WorkoutPage;