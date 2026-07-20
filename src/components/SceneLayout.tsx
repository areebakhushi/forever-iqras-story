import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { type ReactNode } from "react";
import { Particles, Stars } from "./Particles";
import { Heart } from "lucide-react";

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
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center gap-2 overflow-x-auto">
        <Link to="/" className="flex items-center gap-2 shrink-0 mr-3">
          <Heart className="w-5 h-5 fill-current text-rose animate-heartbeat" />
          <span className="font-script text-xl text-gradient-rose">For Iqra</span>
        </Link>
        <div className="flex gap-1 items-center">
          {TABS.map((t) => (
            <Link
              key={t.to}
              to={t.to}
              className="px-3 py-1.5 rounded-full text-xs whitespace-nowrap text-muted-foreground hover:text-foreground transition-colors hover:bg-white/10"
              activeProps={{ className: "px-3 py-1.5 rounded-full text-xs whitespace-nowrap bg-aurora text-primary-foreground font-medium" }}
            >
              {t.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export function SceneLayout({
  children,
  particles = "mixed",
  showStars = true,
  bg,
  bgOpacity = 0.35,
}: {
  children: ReactNode;
  particles?: "hearts" | "petals" | "stars" | "butterflies" | "sparkles" | "mixed" | "none";
  showStars?: boolean;
  bg?: string;
  bgOpacity?: number;
}) {
  return (
    <div className="relative min-h-screen w-full">
      {bg && (
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
          <img
            src={bg}
            alt=""
            aria-hidden
            className="w-full h-full object-cover scale-110 blur-[2px]"
            style={{ opacity: bgOpacity }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/55 to-background/85" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,oklch(0.15_0.04_320/0.4)_100%)]" />
        </div>
      )}
      {showStars && <Stars count={100} />}
      {particles !== "none" && <Particles variant={particles} count={28} />}
      <Nav />
      <main className="relative z-10 pt-24 pb-32 px-4">
        <div className="mx-auto max-w-7xl">
          <div className="glass rounded-[2rem] px-4 md:px-8 py-8 md:py-12 border border-white/10 shadow-[0_40px_120px_-30px_oklch(0.15_0.04_320/0.8)]">
            {children}
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
      <div className="glass-rose rounded-3xl p-8 md:p-12 my-8 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-aurora opacity-30 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-aurora opacity-20 blur-3xl" />
        <div className="relative">
          {emoji && <div className="text-5xl mb-4">{emoji}</div>}
          <h3 className="font-display text-3xl md:text-4xl text-gradient-rose mb-4">{title}</h3>
          <p className="font-script text-2xl md:text-3xl text-foreground/90 leading-relaxed italic">{quote}</p>
          {children}
        </div>
      </div>
    </Reveal>
  );
}

export function PageTitle({ kicker, title, subtitle }: { kicker?: string; title: string; subtitle?: string }) {
  return (
    <div className="text-center max-w-4xl mx-auto pt-8 pb-12">
      {kicker && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-script text-2xl text-gradient-rose mb-3"
        >
          {kicker}
        </motion.p>
      )}
      <motion.h1
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="font-display text-5xl md:text-7xl font-bold text-gradient leading-tight"
      >
        {title}
      </motion.h1>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
