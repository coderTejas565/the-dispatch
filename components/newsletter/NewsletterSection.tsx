export function NewsletterSection() {
  return (
    <section className="section">
      <div className="bg-[var(--navy)] px-6 py-11 text-white sm:px-10 sm:py-14 lg:px-16 lg:py-16">
        <div className="grid items-center gap-9 lg:grid-cols-[1fr_minmax(360px,0.8fr)] lg:gap-16">
          <div className="max-w-2xl">
            <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.22em] text-white/55">
              The Dispatch Newsletter
            </p>

            <h2 className="font-serif text-3xl font-bold leading-[1.05] tracking-[-0.02em] sm:text-4xl lg:text-5xl">
              The stories worth knowing, delivered to your inbox.
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-6 text-white/60 sm:text-base sm:leading-7">
              A concise briefing of the biggest ideas, developments, and stories
              shaping the world.
            </p>
          </div>

          <div className="flex w-full flex-col gap-3 sm:flex-row">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>

            <input
              id="newsletter-email"
              type="email"
              placeholder="Your email address"
              className="min-w-0 flex-1 border border-white/20 bg-white/10 px-4 py-3.5 text-sm text-white outline-none placeholder:text-white/40 transition-colors focus:border-white/50"
            />

            <button
              type="button"
              className="shrink-0 bg-[var(--red)] px-7 py-3.5 text-[10px] font-bold uppercase tracking-[0.16em] text-white transition-opacity hover:opacity-90"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
