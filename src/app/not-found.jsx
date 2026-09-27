
export default function NotFound() {
  return (
    <main className="min-h-screen bg-base-100 flex items-center justify-center px-4">
      <div className="max-w-xl text-center">

        <div className="mb-6">
          <span className="text-8xl font-black tracking-tighter">
            404
          </span>
        </div>

        <p className="text-sm font-bold uppercase tracking-[0.3em] text-primary">
          Fit Log
        </p>

        <h1 className="mt-3 text-3xl font-black md:text-5xl">
          Page Not Found
        </h1>

        <p className="mx-auto mt-4 max-w-md text-base opacity-60">
          Looks like this workout page took a day off.
          The page you are looking for does not exist.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a href="/" className="btn btn-primary">
            Go to Home
          </a>

          <a href="/my-plan" className="btn btn-outline">
            My Plan
          </a>
        </div>

        <div className="mt-10 text-5xl">
          🏋️‍♂️
        </div>

      </div>
    </main>
  );
}

