import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SceneLayout, PageTitle, Reveal } from "@/components/SceneLayout";
import { Heart } from "lucide-react";
import { PhotoHero } from "@/components/Photo";
import { photos } from "@/lib/photos";

export const Route = createFileRoute("/proposal")({
  head: () => ({ meta: [{ title: "Friendship Proposal 💖 — For Iqra" }] }),
  component: Proposal,
});

function Fireworks() {
  return (
    <div className="pointer-events-none fixed inset-0 z-30">
      {Array.from({ length: 120 }).map((_, i) => {
        const a = (i / 120) * Math.PI * 2;
        const d = 200 + Math.random() * 600;
        return (
          <motion.span
            key={i}
            className="absolute left-1/2 top-1/2 text-2xl"
            initial={{ x: 0, y: 0, opacity: 1 }}
            animate={{ x: Math.cos(a) * d, y: Math.sin(a) * d, opacity: 0, rotate: 360 }}
            transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 0.5, delay: Math.random() }}
          >
            {["❤", "🌹", "🦋", "✨", "💖"][i % 5]}
          </motion.span>
        );
      })}
    </div>
  );
}

function Proposal() {
  const [said, setSaid] = useState(false);

  return (
    <SceneLayout particles="butterflies" bg={photos.rosePropose}>
      <PageTitle kicker="my dearest" title="Friendship Proposal 💖" subtitle="Will you stay my forever person?" />
      <div className="max-w-3xl mx-auto">
        <PhotoHero src={photos.rosePropose} alt="Proposing with a rose" caption="a rose, on one knee, for you" />
        <Reveal>
          <div className="glass-rose rounded-3xl p-10 md:p-14 relative overflow-hidden">
            <div className="flex justify-center mb-8">
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 2.4, repeat: Infinity }}
                className="text-6xl"
                style={{ filter: "drop-shadow(0 0 20px oklch(0.78 0.17 12 / 0.6))" }}
              >
                🌹
              </motion.div>
            </div>

            <div className="space-y-4 font-display text-lg md:text-xl italic text-foreground/95 leading-relaxed">
              <p>My dearest Iqra,</p>
              <p>Life gave me many people, but only a few became unforgettable.</p>
              <p>For ten years you stood beside me — through happiness, sadness, success, failure, and everything in between.</p>
              <p>You listened when nobody understood. You stayed when others left.</p>
              <p>You became more than a best friend. You became family.</p>
              <p className="font-script text-2xl md:text-3xl text-gradient-rose pt-4">
                And today, on your birthday, I have one important question…
              </p>
            </div>

            <div className="text-center mt-12">
              <Heart className="w-16 h-16 mx-auto fill-current animate-heartbeat" style={{ color: "oklch(0.78 0.17 12)" }} />
              <h2 className="font-display text-4xl md:text-6xl text-gradient mt-6">
                Will you stay my forever best friend?
              </h2>

              {!said ? (
                <div className="mt-10 flex flex-wrap gap-4 justify-center">
                  <motion.button
                    whileHover={{ scale: 1.06 }}
                    whileTap={{ scale: 0.96 }}
                    onClick={() => setSaid(true)}
                    className="px-8 py-4 rounded-full bg-aurora text-primary-foreground font-semibold text-lg shadow-lg animate-glow-pulse"
                  >
                    YES FOREVER ❤
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.06 }}
                    whileTap={{ scale: 0.96 }}
                    onClick={() => setSaid(true)}
                    className="px-8 py-4 rounded-full glass text-foreground font-semibold text-lg hover:bg-white/15"
                  >
                    ABSOLUTELY YES ❤
                  </motion.button>
                </div>
              ) : (
                <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="mt-10">
                  <p className="font-script text-4xl md:text-5xl text-gradient-rose mb-4">YAYYY! 🎉</p>
                  <p className="font-display italic text-xl md:text-2xl leading-relaxed">
                    Thank you for being my person. Thank you for ten unforgettable years.<br />
                    I choose our friendship today, tomorrow, and forever.
                  </p>
                </motion.div>
              )}
            </div>
          </div>
        </Reveal>
      </div>
      <AnimatePresence>{said && <Fireworks key="fw" />}</AnimatePresence>
    </SceneLayout>
  );
}
