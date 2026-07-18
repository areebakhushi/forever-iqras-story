import { createFileRoute } from "@tanstack/react-router";
import { SceneLayout, PageTitle, SceneCard, Reveal } from "@/components/SceneLayout";
import { PhotoFrame } from "@/components/Photo";
import { photos } from "@/lib/photos";
import { motion } from "framer-motion";

export const Route = createFileRoute("/birthdays")({
  head: () => ({ meta: [{ title: "Birthday Moments 🎂 — Iqra" }] }),
  component: () => (
    <SceneLayout particles="mixed">
      <PageTitle kicker="every year, together" title="Birthday Moments 🎂" subtitle="We celebrated every birthday like it was our own." />
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {["🎂", "🎈", "🕯️", "🎁", "🎉", "🍰", "🎀", "✨"].map((e, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.1, rotate: [-2, 2, 0] }}
                animate={{ y: [0, -8, 0] }}
                transition={{ y: { duration: 2 + i * 0.2, repeat: Infinity } }}
                className="glass rounded-2xl aspect-square flex items-center justify-center text-6xl"
              >
                {e}
              </motion.div>
            ))}
          </div>
        </Reveal>
        <div className="flex flex-wrap gap-6 justify-center my-10">
          <PhotoFrame src={photos.cafe} alt="birthday together" rotate={-4} caption="your day, our joy" className="w-72" />
          <PhotoFrame src={photos.sunset} alt="celebration" rotate={3} caption="22 — my favourite number" className="w-72" />
        </div>
        <SceneCard title="Cakes & candles" quote="Every wish I made — somehow you were already in it." emoji="🕯️" />
        <SceneCard title="Surprise faces" quote="Your reactions were the gift I kept rewatching in my head." emoji="🎁" />
        <SceneCard title="Today, your 22nd" quote="Happy birthday meri jaan. The world is luckier with you in it." emoji="💖" />
      </div>
    </SceneLayout>
  ),
});
