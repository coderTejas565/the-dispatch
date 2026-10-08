import { ArrowUpRight } from "lucide-react";
import { heroArticle } from "@/data/news";

export function HeroSection() {
  return (
    <section className="section">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(300px,0.9fr)]">
        <article className="group">
          <div className="relative aspect-[16/9] overflow-hidden bg-gray-200">
            <img
              src={heroArticle.image}
              alt={heroArticle.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />

            <div className="absolute left-4 top-4 bg-[var(--red)] px-3 py-1.5">
              <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-white">
                {heroArticle.category}
              </span>
            </div>
          </div>

          <div className="pt-6">
            <div className="mb-3 flex items-center gap-3 text-[10px] uppercase tracking-[0.1em] text-[var(--muted)]">
              <span>{heroArticle.time}</span>
              <span>•</span>
              <span>{heroArticle.readTime}</span>
            </div>

            <h2 className="max-w-4xl font-serif text-4xl font-bold leading-[0.98] tracking-[-0.02em] sm:text-5xl lg:text-6xl">
              {heroArticle.title}
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-6 text-[var(--muted)] sm:text-base sm:leading-7">
              {heroArticle.description}
            </p>

            <button
              type="button"
              className="mt-6 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] transition-colors hover:text-[var(--red)]"
            >
              Read the story
              <ArrowUpRight size={15} />
            </button>
          </div>
        </article>

        {/* Big Read */}
        <aside className="border-t-2 border-[var(--navy)] pt-5 lg:border-l lg:border-t-0 lg:pl-7 lg:pt-0">
          <div className="mb-7 flex items-center justify-between">
            <h3 className="font-serif text-2xl font-bold">The Big Read</h3>

            <span className="text-[9px] font-medium uppercase tracking-[0.15em] text-[var(--muted)]">
              Featured
            </span>
          </div>

          <div>
            <article className="border-b border-[var(--border)] pb-6">
              <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-[var(--red)]">
                Analysis
              </span>

              <h4 className="mt-2 font-serif text-xl font-bold leading-[1.08]">
                The systems quietly changing how the modern world works
              </h4>

              <p className="mt-3 text-xs leading-5 text-[var(--muted)]">
                A closer look at the ideas and technologies behind the biggest
                shifts of the moment.
              </p>

              <p className="mt-3 text-[10px] text-[var(--muted)]">8 min read</p>
            </article>

            <article className="border-b border-[var(--border)] py-6">
              <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-[var(--red)]">
                Technology
              </span>

              <h4 className="mt-2 font-serif text-xl font-bold leading-[1.08]">
                Why intelligence is becoming infrastructure
              </h4>

              <p className="mt-3 text-[10px] text-[var(--muted)]">6 min read</p>
            </article>

            <article className="pt-6">
              <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-[var(--red)]">
                Ideas
              </span>

              <h4 className="mt-2 font-serif text-xl font-bold leading-[1.08]">
                What comes after the age of automation?
              </h4>

              <p className="mt-3 text-[10px] text-[var(--muted)]">5 min read</p>
            </article>
          </div>
        </aside>
      </div>
    </section>
  );
}
