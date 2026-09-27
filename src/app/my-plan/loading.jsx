export default function Loading() {
  return (
    <div className="flex min-h-[400px] items-center justify-center">
      <div className="text-center">
        <span className="loading loading-spinner loading-lg"></span>

        <p className="mt-3 font-semibold">
          Loading workouts…
        </p>
      </div>
    </div>
  );
}