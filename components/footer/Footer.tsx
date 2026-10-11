
const footerLinks = {
  Explore: ["Latest News", "Politics", "Technology", "Science", "Business"],
  About: ["Our Mission", "About Us", "Contact", "Advertise"],
  Follow: ["X / Twitter", "LinkedIn", "YouTube", "Instagram"],
};

export function Footer() {
  return (
    <footer className="mt-8 bg-[var(--navy)] text-white">
      <div className="container py-12 sm:py-14 lg:py-16">
        <div className="grid gap-10 border-b border-white/15 pb-10 md:grid-cols-[1.4fr_1fr_1fr_1fr] md:gap-8">
          {/* Brand */}
          <div>
            <a
              href="/"
              aria-label="The Dispatch home"
              className="inline-block rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            >
              <h2 className="font-serif text-3xl font-bold tracking-[-0.03em]">
                THE DISPATCH
              </h2>
            </a>

            <p className="mt-4 max-w-sm text-sm leading-6 text-white/60">
              Independent journalism, thoughtful analysis, and ideas for an
              informed world.
            </p>
          </div>

          {/* Link groups */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <nav key={title} aria-label={title}>
              <h3 className="text-[9px] font-bold uppercase tracking-[0.18em] text-white/80">
                {title}
              </h3>

              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="inline-block rounded-sm text-xs text-white/60 transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Copyright */}
        <div className="flex flex-col gap-3 pt-6 text-[10px] text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} The Dispatch. All rights reserved.
          </p>

          <nav aria-label="Legal links" className="flex gap-5">
            <a
              href="#"
              className="transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            >
              Privacy
            </a>

            <a
              href="#"
              className="transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            >
              Terms
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
