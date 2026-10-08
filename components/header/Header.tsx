import { Menu, Search, UserRound } from "lucide-react";

export function Header() {
  return (
    <header className="border-b border-[var(--border)] bg-white">
      {/* Top utility bar */}
      <div className="border-b border-[var(--border)]">
        <div className="container flex h-8 items-center justify-between text-[10px] text-[var(--muted)]">
          <span>Independent journalism for an informed world</span>

          <div className="hidden gap-4 sm:flex">
            <span>About</span>
            <span>Contact</span>
            <span>Advertise</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container flex min-h-24 items-center justify-between gap-6 py-4">
        <button type="button" aria-label="Open menu" className="lg:hidden">
          <Menu size={22} />
        </button>

        <div className="flex-1 lg:flex-none">
          <h1 className="font-serif text-3xl font-bold tracking-[-0.03em] sm:text-4xl">
            THE DISPATCH
          </h1>

          <p className="hidden text-[10px] uppercase tracking-[0.25em] text-[var(--muted)] sm:block">
            News · Ideas · Analysis
          </p>
        </div>

        <nav className="hidden items-center gap-7 text-xs font-medium lg:flex">
          <a href="#">Politics</a>
          <a href="#">Technology</a>
          <a href="#">Science</a>
          <a href="#">Business</a>
          <a href="#">Culture</a>
          <a href="#">World</a>
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="Search"
            className="rounded-full p-2 transition-colors hover:bg-gray-100"
          >
            <Search size={20} />
          </button>

          <button
            type="button"
            aria-label="Account"
            className="hidden rounded-full p-2 transition-colors hover:bg-gray-100 sm:block"
          >
            <UserRound size={20} />
          </button>

          <button
            type="button"
            className="hidden bg-[var(--red)] px-4 py-2 text-xs font-bold uppercase tracking-wide text-white transition-opacity hover:opacity-90 sm:block"
          >
            Subscribe
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      <div className="border-t border-[var(--border)] lg:hidden">
        <nav className="container flex gap-5 overflow-x-auto py-3 text-xs font-medium whitespace-nowrap">
          <a href="#">Politics</a>
          <a href="#">Technology</a>
          <a href="#">Science</a>
          <a href="#">Business</a>
          <a href="#">Culture</a>
          <a href="#">World</a>
        </nav>
      </div>
    </header>
  );
}
