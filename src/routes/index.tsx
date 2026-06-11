import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Gift, Heart, Sparkles } from "lucide-react";
import { Particles, Stars } from "@/components/Particles";
import { Nav } from "@/components/SceneLayout";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Happy 22nd Birthday Iqra ❤" },
      { name: "description", content: "A surprise gift, a love letter in motion — for my cousin, my best friend, my forever person." },
    ],
  }),
  component: Home,
});

function Burst() {
  const items = Array.from({ length: 80 }, (_, i) => i);
  return (
    <div className="pointer-events-none fixed inset-0 z-30 flex items-center justify-center">
      {items.map((i) => {
        const angle = (i / items.length) * Math.PI * 2;
        const dist = 200 + Math.random() * 500;
        const syms = ["❤", "🌸", "✨", "🎉", "🦋", "💖", "🌹"];
        return (
          <motion.span
            key={i}
            initial={{ x: 0, y: 0, opacity: 1, scale: 0.5 }}
            animate={{
              x: Math.cos(angle) * dist,
              y: Math.sin(angle) * dist,
              opacity: 0,
              scale: 1.5,
              rotate: Math.random() * 720,
            }}
            transition={{ duration: 2 + Math.random(), ease: "easeOut" }}
            className="absolute text-3xl"
            style={{ filter: "drop-shadow(0 0 8px rgba(255,180,220,0.9))" }}
          >
            {syms[i % syms.length]}
          </motion.span>
        );
      })}
    </div>
  );
}

function Home() {
  const [opened, setOpened] = useState(false);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <Stars count={140} />
      <Particles variant="mixed" count={36} />
      <Nav />

      <AnimatePresence>{opened && <Burst key="burst" />}</AnimatePresence>

      <main className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 pt-28 pb-20">
        <AnimatePresence mode="wait">
          {!opened ? (
            <motion.div
              key="gift"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1.3 }}
              transition={{ duration: 1 }}
              className="text-center"
            >
              <motion.p
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="font-script text-3xl md:text-4xl text-gradient-rose mb-8"
              >
                Someone Special Has a Surprise…
              </motion.p>

              <motion.button
                onClick={() => setOpened(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                animate={{ y: [0, -12, 0] }}
                transition={{ y: { duration: 2.5, repeat: Infinity, ease: "easeInOut" } }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-aurora blur-3xl opacity-60 rounded-full animate-glow-pulse" />
                <div className="relative glass-rose rounded-3xl p-16 md:p-20">
                  <Gift className="w-32 h-32 md:w-44 md:h-44 text-gradient-rose mx-auto" strokeWidth={1.2} style={{ color: "oklch(0.85 0.14 12)" }} />
                </div>
                <div className="mt-8 inline-flex items-center gap-2 px-8 py-3 rounded-full bg-aurora text-primary-foreground font-medium shadow-lg">
                  <Sparkles className="w-4 h-4" />
                  Tap to open your gift
                  <Sparkles className="w-4 h-4" />
                </div>
              </motion.button>
            </motion.div>
          ) : (
            <motion.div
              key="reveal"
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, delay: 0.4 }}
              className="text-center max-w-4xl"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.6, type: "spring", stiffness: 80 }}
                className="text-6xl md:text-8xl mb-4"
              >
                🎂
              </motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="font-script text-2xl md:text-3xl text-gradient-rose mb-3"
              >
                Happy 22nd Birthday
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3, duration: 1 }}
                className="font-display text-7xl md:text-[10rem] font-bold text-gradient leading-none mb-6"
              >
                IQRA
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8, duration: 1 }}
                className="font-script text-2xl md:text-4xl text-foreground/90 italic leading-relaxed"
              >
                meri jaan, my love, my bestee ❤
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.4, duration: 1 }}
                className="glass-rose rounded-3xl p-8 md:p-10 mt-12 max-w-2xl mx-auto"
              >
                <Heart className="w-8 h-8 mx-auto mb-4 fill-current animate-heartbeat" style={{ color: "oklch(0.78 0.17 12)" }} />
                <p className="font-display text-xl md:text-2xl italic leading-relaxed text-foreground/95">
                  "You are not just a person in my life…<br />
                  You are my memory, my comfort, my childhood,<br />
                  my forever."
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3, duration: 1 }}
                className="mt-12 flex flex-wrap gap-3 justify-center"
              >
                <Link to="/story" className="px-6 py-3 rounded-full bg-aurora text-primary-foreground font-medium shadow-lg hover:scale-105 transition-transform">
                  Begin Our Story →
                </Link>
                <Link to="/proposal" className="px-6 py-3 rounded-full glass hover:bg-white/15 transition-colors">
                  Friendship Proposal 💖
                </Link>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
