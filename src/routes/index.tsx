import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Particles } from "@/components/Particles";
import { Nav } from "@/components/SceneLayout";
import { Link } from "@tanstack/react-router";
import { photos } from "@/lib/photos";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "10 Years of Best Friendship — For Iqra" },
      { name: "description", content: "A decade of us. A cinematic love letter — for Iqra, my cousin, my best friend, my forever person." },
    ],
  }),
  component: Home,
});

function Burst() {
  const items = Array.from({ length: 70 }, (_, i) => i);
  return (
    <div className="pointer-events-none fixed inset-0 z-30 flex items-center justify-center">
      {items.map((i) => {
        const angle = (i / items.length) * Math.PI * 2;
        const dist = 200 + Math.random() * 500;
        const syms = ["❤", "🌸", "✿", "❀", "🦋", "💗", "🌹"];
        return (
          <motion.span
            key={i}
            initial={{ x: 0, y: 0, opacity: 1, scale: 0.5 }}
            animate={{
              x: Math.cos(angle) * dist,
              y: Math.sin(angle) * dist,
              opacity: 0,
              scale: 1.4,
              rotate: Math.random() * 720,
            }}
            transition={{ duration: 2 + Math.random(), ease: "easeOut" }}
            className="absolute text-2xl"
            style={{ color: "#c45c7c" }}
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
    <div className="relative min-h-screen overflow-hidden bg-[color:var(--cream)]">
      {/* Full-bleed sweaters photo as home background */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <img
          src={photos.sweaters}
          alt=""
          aria-hidden
          className="w-full h-full object-cover object-[center_25%] scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[color:var(--cream)]/10 via-transparent to-[color:var(--cream)]/40" />
      </div>

      <Particles variant="petals" count={16} />
      <Nav />

      <AnimatePresence>{opened && <Burst key="burst" />}</AnimatePresence>

      <main className="relative z-10 pt-36 md:pt-40 pb-20 px-4 md:px-8">
        <div className="mx-auto max-w-6xl">
          <AnimatePresence mode="wait">
            {!opened ? (
              <motion.section
                key="gift"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 1 }}
                className="paper rounded-sm overflow-hidden grid md:grid-cols-2"
              >
                {/* Editorial photo panel */}
                <div className="relative aspect-[4/5] md:aspect-auto md:min-h-[620px] overflow-hidden">
                  <img
                    src={photos.sparklerHug}
                    alt="Ten years of us"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--plum)]/60 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <p className="kicker text-white/90 mb-2">Cover Story</p>
                    <p className="font-editorial text-xl md:text-2xl leading-tight">
                      "A single soul dwelling in two bodies."
                    </p>
                  </div>
                  {/* floating polaroid */}
                  <motion.div
                    animate={{ y: [0, -8, 0], rotate: [6, 4, 6] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="hidden md:block absolute top-8 right-8 w-28 bg-white p-2 pb-6 shadow-2xl rotate-6"
                  >
                    <img src={photos.cherryTouch} alt="" className="w-full aspect-square object-cover" />
                    <p className="text-center text-[10px] mt-1 font-editorial text-[color:var(--plum)]">always</p>
                  </motion.div>
                </div>

                {/* Editorial text panel */}
                <div className="p-8 md:p-14 flex flex-col justify-center">
                  <p className="kicker mb-6">A decade of devotion · Est. 2014</p>
                  <h1 className="font-display text-5xl md:text-7xl leading-[0.9] text-[color:var(--plum)] mb-6">
                    10 Years<br />
                    <span className="italic text-[color:var(--rose)]">of Best Friendship</span>
                  </h1>
                  <div className="hairline w-16 mb-6" />
                  <p className="font-editorial text-lg md:text-xl text-[color:var(--ink)]/75 leading-relaxed mb-10">
                    A curated anthology of whispered secrets, quiet Tuesdays, and every laugh in between — ten beautiful years, opened by you.
                  </p>

                  <motion.button
                    onClick={() => setOpened(true)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group self-start relative"
                  >
                    <span className="inline-flex items-center gap-4 px-8 py-4 bg-[color:var(--plum)] text-white text-[11px] tracking-[0.3em] uppercase font-semibold hover:bg-[color:var(--rose)] transition-colors">
                      Tap to open your gift
                      <span className="w-6 h-px bg-white group-hover:w-10 transition-all" />
                    </span>
                  </motion.button>

                  <p className="kicker mt-10 opacity-60">Meri jaan · My forever person</p>
                </div>
              </motion.section>
            ) : (
              <motion.section
                key="reveal"
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.3 }}
                className="paper rounded-sm p-8 md:p-16 relative overflow-hidden"
              >
                <div className="absolute inset-0 -z-0">
                  <img src={photos.sweatersPoke} alt="" aria-hidden className="w-full h-full object-cover object-top" />
                  <div className="absolute inset-0 bg-[color:var(--cream)]/30" />
                  <div className="absolute inset-0 bg-gradient-to-b from-[color:var(--cream)]/20 via-transparent to-[color:var(--cream)]/55" />
                </div>
                <div className="relative z-10">
                <div className="text-center max-w-3xl mx-auto">
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="kicker mb-8"
                  >
                    Ten years · 2014 — 2024
                  </motion.p>
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="font-display text-6xl md:text-9xl leading-[0.9] text-[color:var(--plum)] tracking-tight"
                  >
                    10 Years<br />
                    <span className="italic text-[color:var(--rose)]">of Best Friendship</span>
                  </motion.h1>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "4rem" }}
                    transition={{ delay: 1.6, duration: 0.8 }}
                    className="h-px bg-[color:var(--plum)] mx-auto my-10"
                  />
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.8, duration: 1 }}
                    className="font-editorial text-2xl md:text-3xl text-[color:var(--ink)]/80 leading-relaxed"
                  >
                    for you, Iqra — meri jaan, my forever.
                  </motion.p>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.4, duration: 1 }}
                  className="mt-16 grid grid-cols-3 gap-4 md:gap-8 max-w-3xl mx-auto"
                >
                  {[
                    { src: photos.sparklers, r: -4 },
                    { src: photos.pinkpair, r: 2 },
                    { src: photos.cherryTouch, r: -2 },
                  ].map((p, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.04, rotate: 0 }}
                      style={{ rotate: `${p.r}deg` }}
                      className="p-2 pb-6 bg-white shadow-xl border border-[color:var(--blush)]/40"
                    >
                      <img src={p.src} alt="us" className="w-full aspect-[3/4] object-cover" />
                    </motion.div>
                  ))}
                </motion.div>

                <motion.blockquote
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.8, duration: 1 }}
                  className="mt-16 max-w-2xl mx-auto text-center border-t border-b border-[color:var(--blush)]/70 py-10"
                >
                  <p className="font-editorial text-xl md:text-2xl text-[color:var(--ink)]/85 leading-relaxed">
                    "Ten years. A thousand memories, a million laughs, and one forever bond."
                  </p>
                </motion.blockquote>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 3.2, duration: 1 }}
                  className="mt-12 flex flex-wrap gap-3 justify-center"
                >
                  <Link
                    to="/story"
                    className="px-8 py-4 bg-[color:var(--plum)] text-white text-[11px] tracking-[0.3em] uppercase font-semibold hover:bg-[color:var(--rose)] transition-colors"
                  >
                    Begin Our Story
                  </Link>
                  <Link
                    to="/proposal"
                    className="px-8 py-4 border border-[color:var(--plum)] text-[color:var(--plum)] text-[11px] tracking-[0.3em] uppercase font-semibold hover:bg-[color:var(--plum)] hover:text-white transition-colors"
                  >
                    Friendship Proposal
                  </Link>
                </motion.div>
                </div>
              </motion.section>
            )}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
