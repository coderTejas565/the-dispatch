import { Play } from "lucide-react";

export function VideoFeature() {
  return (
    <section className="section section-border">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--red)]">
            Watch
          </p>

          <h2 className="font-serif text-3xl font-bold sm:text-4xl">
            Dispatch Video
          </h2>
        </div>

        <button
          type="button"
          className="hidden text-xs font-bold uppercase tracking-[0.15em] sm:block"
        >
          View all
        </button>
      </div>

      <article className="grid gap-8 lg:grid-cols-[1.5fr_1fr]">
        <div className="group relative aspect-video overflow-hidden bg-black">
          <img
            src="/images/news-6.jpg"
            alt="Inside the technologies shaping the next decade"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />

          <button
            type="button"
            aria-label="Play documentary"
            className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white p-5 shadow-lg transition-transform duration-300 group-hover:scale-110"
          >
            <Play
              size={22}
              fill="currentColor"
              className="ml-0.5"
            />
          </button>
        </div>

        <div className="flex flex-col justify-center">
          <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[var(--red)]">
            Documentary
          </span>

          <h3 className="mt-3 font-serif text-3xl font-bold leading-tight sm:text-4xl">
            Inside the technologies shaping the next decade
          </h3>

          <p className="mt-4 text-sm leading-6 text-[var(--muted)]">
            A visual exploration of the people, ideas, and technologies
            changing how we understand the future.
          </p>

          <p className="mt-5 text-xs text-[var(--muted)]">
            15 sec preview
          </p>
        </div>
      </article>
    </section>
  );
}