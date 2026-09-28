
import Link from "next/link";

export default function Banner() {
  return (
    <section className="bg-base-100">
      <div className="mx-auto grid min-h-[600px] max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-20">

        {/* Left Content */}
        <div className="max-w-2xl">

          {/* Eyebrow */}
          <p className="mb-4 text-sm font-bold tracking-[0.25em] text-[#ccff00]">
            WORKOUT LIBRARY
          </p>

          {/* Heading */}
          <h1 className="text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
            TRAIN WITH INTENT.
            <br />
            LOG EVERY SET.
          </h1>

          {/* Subtitle */}
          <p className="mt-6 max-w-xl text-base leading-7 text-base-content/60 sm:text-lg">
            FitLog is a dark, no-nonsense gym companion: pick a lift,
            lock it into today&apos;s plan, and watch the week&apos;s work
            add up.
          </p>

          {/* CTA */}
          <Link
            href="/workouts"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#ccff00] px-6 py-3 font-bold text-black transition hover:scale-105 hover:bg-[#bfff00]"
          >
            BROWSE WORKOUTS

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </Link>
        </div>

        {/* Hero Image */}
        <div className="flex justify-center lg:justify-end">
          <div className="w-full max-w-xl overflow-hidden rounded-3xl">
            <img
              src="/banner.png"
              alt="FitLog workout"
              className="h-auto w-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
