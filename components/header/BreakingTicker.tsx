export function BreakingTicker() {
  return (
    <div className="bg-[var(--red)] text-white">
      <div className="container flex h-10 items-center gap-4 overflow-hidden">
        <span className="shrink-0 text-[10px] font-bold uppercase tracking-[0.2em]">
          Breaking
        </span>

        <span className="h-4 w-px bg-white/40" />

        <p className="truncate text-xs font-medium sm:text-sm">
          The latest developments shaping technology, policy, and the world.
        </p>
      </div>
    </div>
  );
}
