import { latestNews } from "@/data/news";
import { NewsCard } from "./NewsCard";

export function LatestNews() {
  return (
    <section className="section section-border">
      <div className="mb-9 flex items-end justify-between gap-4">
        <div>
          <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.2em] text-[var(--red)]">
            The latest
          </p>

          <h2 className="font-serif text-3xl font-bold leading-none tracking-[-0.02em] sm:text-4xl">
            Latest News & Reports
          </h2>
        </div>

        <button
          type="button"
          className="hidden text-[10px] font-bold uppercase tracking-[0.15em] transition-colors hover:text-[var(--red)] sm:block"
        >
          View all
        </button>
      </div>

      <div className="grid gap-x-6 gap-y-11 sm:grid-cols-2 lg:grid-cols-3">
        {latestNews.map((article) => (
          <NewsCard key={article.id} article={article} />
        ))}
      </div>

      <button
        type="button"
        className="mt-9 text-[10px] font-bold uppercase tracking-[0.15em] transition-colors hover:text-[var(--red)] sm:hidden"
      >
        View all
      </button>
    </section>
  );
}
