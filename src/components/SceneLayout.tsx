import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { type ReactNode } from "react";
import { Particles } from "./Particles";

const TABS = [
  { to: "/", label: "Home" },
  { to: "/story", label: "Our Story" },
  { to: "/beginning", label: "Beginning" },
  { to: "/nanas-house", label: "Nana's House" },
  { to: "/playing", label: "Laughs" },
  { to: "/birthdays", label: "10 Years" },
  { to: "/surprises", label: "Surprises" },
  { to: "/hugs", label: "Hugs" },
  { to: "/proposal", label: "Proposal" },
  { to: "/memory-universe", label: "Our World" },
  { to: "/growing-up", label: "Growing Up" },
  { to: "/future", label: "Forever" },
  { to: "/finale", label: "Finale" },
] as const;

export function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[color:var(--cream)]/85 backdrop-blur-xl border-b border-[color:var(--blush)]/60">
      <div className="mx-auto max-w-7xl px-6 py-4">
        {/* Masthead */}
        <div className="flex items-end justify-between border-b border-[color:var(--blush)]/60 pb-3 mb-3">
          <span className="kicker hidden md:inline">Vol. X · Issue 01</span>
          <Link to="/" className="font-display italic text-2xl md:text-3xl text-[color:var(--plum)] tracking-tight leading-none">
            For Iqra
          </Link>
          <span className="kicker hidden md:inline">Friendship Edition</span>
        </div>
        {/* Index tabs */}
        <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-[10px] md:text-[11px] tracking-[0.22em] uppercase font-semibold text-[color:var(--rose)] overflow-x-auto">
          {TABS.map((t, i) => (
            <li key={t.to} className="whitespace-nowrap flex items-center gap-1.5">
              <span className="text-[9px] opacity-50">{String(i + 1).padStart(2, "0")}</span>
              <Link
                to={t.to}
                className="hover:text-[color:var(--plum)] transition-colors"
                activeProps={{ className: "text-[color:var(--plum)] border-b border-[color:var(--plum)] pb-0.5" }}
              >
                {t.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export function SceneLayout({
  children,
  particles = "mixed",
  showStars: _showStars = true,
  bg,
  bgOpacity = 0.95,
  paperOpacity = 0.85,
}: {
  children: ReactNode;
  particles?: "hearts" | "petals" | "stars" | "butterflies" | "sparkles" | "mixed" | "none";
  showStars?: boolean;
  bg?: string;
  bgOpacity?: number;
  paperOpacity?: number;
}) {
  return (
    <div className="relative min-h-screen w-full bg-[color:var(--cream)]">
      {bg && (
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
          <img
            src={bg}
            alt=""
            aria-hidden
            className="w-full h-full object-cover scale-105"
            style={{ opacity: bgOpacity }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[color:var(--cream)]/25 via-transparent to-[color:var(--cream)]/55" />
        </div>
      )}
      {particles !== "none" && <Particles variant={particles} count={18} />}
      <Nav />
      <main className="relative z-10 pt-36 md:pt-40 pb-32 px-4 md:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="paper rounded-sm px-6 md:px-14 py-10 md:py-16 backdrop-blur-md shadow-2xl" style={{ backgroundColor: `color-mix(in srgb, var(--cream) ${paperOpacity * 100}%, transparent)` }}>
            {children}
          </div>
          <div className="mt-8 text-center kicker opacity-80 text-[color:var(--cream)] drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">
            A Decade of Shared Memories · 2014 — 2024
          </div>
        </div>
      </main>
    </div>
  );
}


export function Reveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SceneCard({
  title,
  quote,
  emoji,
  children,
}: {
  title: string;
  quote: string;
  emoji?: string;
  children?: ReactNode;
}) {
  return (
    <Reveal>
      <div className="my-10 grid md:grid-cols-[auto_1fr] gap-6 md:gap-10 items-start border-t border-[color:var(--blush)]/70 pt-10">
        <div className="flex items-center gap-3">
          {emoji && <div className="text-3xl">{emoji}</div>}
          <span className="kicker">Chapter</span>
        </div>
        <div>
          <h3 className="font-display text-3xl md:text-5xl text-[color:var(--plum)] leading-tight mb-4">
            {title}
          </h3>
          <p className="font-editorial text-xl md:text-2xl text-[color:var(--ink)]/80 leading-relaxed">
            "{quote}"
          </p>
          {children}
        </div>
      </div>
    </Reveal>
  );
}

export function PageTitle({ kicker, title, subtitle }: { kicker?: string; title: string; subtitle?: string }) {
  return (
    <div className="text-center max-w-4xl mx-auto pt-4 pb-14 border-b border-[color:var(--blush)]/70">
      {kicker && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="kicker mb-6"
        >
          {kicker}
        </motion.p>
      )}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="font-display text-6xl md:text-8xl text-[color:var(--plum)] leading-[0.95] tracking-tight"
      >
        {title}
      </motion.h1>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="mt-6 font-editorial text-xl md:text-2xl text-[color:var(--ink)]/70 max-w-2xl mx-auto"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
