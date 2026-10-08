import type { NewsArticle } from "@/data/news";

type NewsCardProps = {
  article: NewsArticle;
};

export function NewsCard({ article }: NewsCardProps) {
  return (
    <article className="group">
      <div className="aspect-[4/3] overflow-hidden bg-gray-200">
        <img
          src={article.image}
          alt={article.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>

      <div className="pt-4">
        <div className="flex flex-wrap items-center gap-2 text-[9px] font-bold uppercase tracking-[0.13em]">
          <span className="text-[var(--red)]">{article.category}</span>

          <span className="text-[var(--muted)]">•</span>

          <span className="font-normal tracking-[0.03em] text-[var(--muted)]">
            {article.time}
          </span>
        </div>

        <h3 className="mt-2 font-serif text-xl font-bold leading-[1.08] tracking-[-0.01em] transition-colors group-hover:text-[var(--red)]">
          {article.title}
        </h3>

        {article.readTime && (
          <p className="mt-3 text-[10px] text-[var(--muted)]">
            {article.readTime}
          </p>
        )}
      </div>
    </article>
  );
}
