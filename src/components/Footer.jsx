
const Footer = () => {
  return (
    <footer className="bg-neutral text-neutral-content">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 sm:px-6 md:flex-row lg:px-8">

        {/* Brand */}
        <div className="flex items-center gap-2">
          <div className="grid h-9 w-9 place-items-center rounded-full bg-[#ccff00] text-sm font-black text-black">
            F
          </div>

          <span className="text-xl font-black tracking-tight">
            FITLOG
          </span>
        </div>

        {/* Copyright */}
        <p className="text-center text-xs text-neutral-content/70 sm:text-sm md:text-right">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>

      </div>
    </footer>
  );
};

export default Footer;
