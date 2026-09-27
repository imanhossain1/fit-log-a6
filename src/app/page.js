import Banner from "../components/Banner";
import WorkoutCard from "../components/WorkoutCard";

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

const HomePage = async () => {
  const workouts = await getWorkouts();

  return (
    <div>
      <Banner />

      <section
        id="library"
        className="mx-auto max-w-7xl px-4 py-12"
      >
        <h2 className="mb-8 text-3xl font-black">
          THE LIBRARY
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {workouts.slice(0, 6).map((workout) => (
            <WorkoutCard
              key={workout.id}
              workout={workout}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;