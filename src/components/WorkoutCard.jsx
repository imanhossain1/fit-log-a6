import Link from "next/link";

const WorkoutCard = ({ workout }) => {
  return (
    <Link href={`/workouts/${workout.id}`}>
      <article className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 transition hover:-translate-y-1 hover:border-lime-400">
        
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
          <h2 className="text-xl font-bold">
            {workout.name}
          </h2>

          {/* Equipment */}
          <p className="mt-2 text-sm text-gray-400">
            {workout.equipment}
          </p>

          {/* Stats */}
          <div className="mt-5 grid grid-cols-3 gap-2 border-t border-white/10 pt-4 text-center">

            <div>
              <p className="text-md font-bold">
                {workout.duration}
              </p>
              <p className="text-xs text-gray-500">
                MIN
              </p>
            </div>

            <div>
              <p className="text-md font-bold">
                {workout.caloriesBurned}
              </p>
              <p className="text-xs text-gray-500">
                KCAL
              </p>
            </div>

            <div>
              <p className="text-md font-bold">
                {workout.rating}
              </p>
              <p className="text-xs text-gray-500">
                RATING
              </p>
            </div>

          </div>
        </div>
      </article>
    </Link>
  );
};

export default WorkoutCard;