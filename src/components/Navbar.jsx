
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Workout", href: "/workouts" },
  { name: "My Plan", href: "/my-plan" },
];

export default function Navbar() {
  const pathname = usePathname();

  const planCount = 3;
  const savedCount = 5;

  return (
    <header className="sticky top-0 z-50 bg-base-100/95 backdrop-blur border-b border-base-200">
      <div className="navbar mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <div className="navbar-start">
          <Link href="/" className="flex items-center">
            <img
              src="/logo.png"
              alt="Fit Log"
              className="h-9 w-auto sm:h-10"
            />
          </Link>
        </div>

        {/* Navigation */}
        <nav className="navbar-center hidden md:block">
          <ul className="flex items-center gap-1 rounded-full bg-base-200 p-1">
            {navItems.map(({ name, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`block rounded-full px-5 py-2 text-sm font-semibold transition ${
                    pathname === href
                      ? "bg-base-content text-base-100"
                      : "text-base-content/60 hover:bg-base-300 hover:text-base-content"
                  }`}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop Counters */}
        <div className="navbar-end hidden items-center gap-2 md:flex">
          <Link href="/my-plan" className="rounded-full bg-[#ccff00] px-4 py-2 text-sm font-bold text-black">
            Plan {planCount}
          </Link>

          <Link  href="/my-plan" className="rounded-full border border-base-content px-4 py-2 text-sm font-bold">
            Saved {savedCount}
          </Link>
        </div>

        {/* Mobile */}
        <div className="navbar-end md:hidden">
          <div className="dropdown dropdown-end">
            <button
              tabIndex={0}
              className="btn btn-circle btn-ghost"
              aria-label="Open menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            <ul
              tabIndex={0}
              className="menu dropdown-content mt-3 w-64 rounded-2xl border border-base-200 bg-base-100 p-3 shadow-xl"
            >
              {navItems.map(({ name, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={
                      pathname === href
                        ? "bg-base-content text-base-100"
                        : ""
                    }
                  >
                    {name}
                  </Link>
                </li>
              ))}

              <li className="mt-2 border-t border-base-200 pt-3">
                <div className="flex gap-2">
                  <Link href="/my-plan" className="rounded-full bg-[#ccff00] px-3 py-2 text-xs font-bold text-black">
                    Plan {planCount}
                  </Link >

                  <Link href="/workout" className="rounded-full border border-base-content px-3 py-2 text-xs font-bold">
                    Saved {savedCount}
                  </Link >
                </div>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </header>
  );
}
