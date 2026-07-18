import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SceneLayout, PageTitle, Reveal } from "@/components/SceneLayout";
import { photos, ALL_PHOTOS } from "@/lib/photos";

export const Route = createFileRoute("/memory-universe")({
  head: () => ({ meta: [{ title: "Our World — Memory Universe ✨" }] }),
  component: Universe,
});

const MEMORIES = [
  "Laughing till we cried",
  "Sleepovers at Nana's",
  "Stolen kitchen snacks",
  "Pillow fight champions",
  "Late night confessions",
  "Birthday surprises",
  "Pinky promises",
  "Photo dumps",
  "Sharing the same blanket",
  "Crying together",
  "Inside jokes",
  "Dancing in the room",
  "Holding hands in crowds",
  "Family weddings",
  "Eid mornings together",
  "Whispered secrets",
  "Long phone calls",
  "First failures, first wins",
  "You braiding my hair",
  "Me ruining your selfies",
];

function Universe() {
  const [picked, setPicked] = useState<string | null>(null);
  return (
    <SceneLayout particles="stars">
      <PageTitle kicker="ten years, infinite emotions" title="Our World ✨" subtitle="Every star is a memory. Tap one to remember." />
      <div className="relative max-w-5xl mx-auto h-[560px] glass-rose rounded-3xl overflow-hidden">
        <img src={photos.stars} alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/60" />
        {MEMORIES.map((m, i) => {
          const top = (i * 37) % 90 + 5;
          const left = (i * 53) % 90 + 5;
          return (
            <motion.button
              key={m}
              onClick={() => setPicked(m)}
              whileHover={{ scale: 1.4 }}
              animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.15, 1] }}
              transition={{ duration: 3 + (i % 5), repeat: Infinity, delay: i * 0.2 }}
              className="absolute text-2xl"
              style={{ top: `${top}%`, left: `${left}%`, filter: "drop-shadow(0 0 12px oklch(0.88 0.13 80))" }}
            >
              ✦
            </motion.button>
          );
        })}
        <AnimatePresence>
          {picked && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-xl cursor-pointer"
              onClick={() => setPicked(null)}
            >
              <div className="glass-rose rounded-3xl p-10 max-w-md text-center">
                <p className="text-5xl mb-4">💖</p>
                <p className="font-script text-3xl text-gradient-rose">{picked}</p>
                <p className="text-xs text-muted-foreground mt-6">tap anywhere to close</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <Reveal>
        <p className="text-center font-script text-3xl text-gradient-rose mt-12 max-w-2xl mx-auto">
          "Ten years of memories… infinite emotions…"
        </p>
      </Reveal>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-5xl mx-auto mt-12">
        {ALL_PHOTOS.map((src, i) => (
          <div key={i} className="relative aspect-square overflow-hidden rounded-2xl group">
            <img src={src} alt="memory" loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
          </div>
        ))}
      </div>
    </SceneLayout>
  );
}
