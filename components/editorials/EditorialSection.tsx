import { ArrowUpRight } from "lucide-react";
import { editorials } from "@/data/editorials";

export function EditorialSection() {
  const featured = editorials[0];
  const remaining = editorials.slice(1);

  return (
    <section className="section section-border">
      <div className="mb-9">
        <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.2em] text-[var(--red)]">
          Opinion & Ideas
        </p>

        <h2 className="font-serif text-3xl font-bold leading-none tracking-[-0.02em] sm:text-4xl">
          Columns & Editorials
        </h2>
      </div>

      <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-14">
        {/* Featured editorial */}
        <article className="group border-t-2 border-[var(--navy)] pt-5">
          <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-[var(--red)]">
            {featured.category}
          </span>

          <h3 className="mt-4 max-w-2xl font-serif text-3xl font-bold leading-[1.05] tracking-[-0.02em] sm:text-4xl lg:text-[42px]">
            {featured.title}
          </h3>

          <p className="mt-5 max-w-xl text-sm leading-6 text-[var(--muted)]">
            A thoughtful perspective on the ideas, systems, and decisions
            shaping the future.
          </p>

          <div className="mt-7 flex items-center justify-between border-t border-[var(--border)] pt-4">
            <div>
              <p className="text-xs font-bold">{featured.author}</p>

              <p className="mt-1 text-[10px] text-[var(--muted)]">
                {featured.time}
              </p>
            </div>

            <button
              type="button"
              aria-label={`Read ${featured.title}`}
              className="rounded-full border border-[var(--border)] p-2 transition-colors hover:bg-[var(--navy)] hover:text-white"
            >
              <ArrowUpRight size={17} />
            </button>
          </div>
        </article>

        {/* Editorial list */}
        <div className="border-t border-[var(--border)]">
          {remaining.map((editorial) => (
            <article
              key={editorial.id}
              className="border-b border-[var(--border)] py-5 last:border-b-0"
            >
              <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-[var(--red)]">
                {editorial.category}
              </span>

              <h3 className="mt-2 font-serif text-xl font-bold leading-[1.08] tracking-[-0.01em] transition-colors hover:text-[var(--red)]">
                {editorial.title}
              </h3>

              <div className="mt-3 flex items-center gap-2 text-[10px] text-[var(--muted)]">
                <span>{editorial.author}</span>
                <span>•</span>
                <span>{editorial.time}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
