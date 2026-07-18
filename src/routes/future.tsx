import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SceneLayout, PageTitle, SceneCard, Reveal } from "@/components/SceneLayout";
import { PhotoHero, PhotoFrame } from "@/components/Photo";
import { photos } from "@/lib/photos";

export const Route = createFileRoute("/future")({
  head: () => ({ meta: [{ title: "Our Future 🌟 — Forever Connected" }] }),
  component: () => (
    <SceneLayout particles="hearts">
      <PageTitle kicker="even if life separates us" title="Our Future 🌟" subtitle="Two paths. One heart. Forever connected." />
      <div className="max-w-4xl mx-auto">
        <PhotoHero src={photos.sunset} alt="Sunset together" caption="every sunset, still us" />
        <Reveal>
          <div className="glass-rose rounded-3xl p-10 md:p-14 my-8 relative overflow-hidden">
            <div className="flex justify-between items-center relative h-32">
              <motion.div animate={{ x: [0, -40, 0] }} transition={{ duration: 6, repeat: Infinity }} className="text-6xl">👩🏻</motion.div>
              <motion.div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl"
                animate={{ scale: [1, 1.25, 1] }}
                transition={{ duration: 1.4, repeat: Infinity }}
                style={{ filter: "drop-shadow(0 0 30px oklch(0.78 0.17 12))" }}
              >
                💗
              </motion.div>
              <motion.div animate={{ x: [0, 40, 0] }} transition={{ duration: 6, repeat: Infinity }} className="text-6xl">👩🏽</motion.div>
              <div className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-rose to-transparent" />
            </div>
            <p className="font-script text-3xl md:text-4xl text-gradient-rose text-center mt-8">
              "Even if life separates us… our hearts will always stay connected."
            </p>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center my-8">
          <PhotoFrame src={photos.beachDance} alt="dancing at sunset" rotate={-3} caption="dancing into forever" className="w-full" />
          <PhotoFrame src={photos.beachTwirl} alt="beach silhouettes" rotate={3} caption="wherever, whenever" className="w-full" />
        </div>
        <SceneCard title="Different roads" quote="Careers, cities, dreams. New chapters we'll each write." emoji="🛤️" />
        <SceneCard title="One unbreakable thread" quote="Distance cannot break what the heart has built." emoji="🪡" />
        <SceneCard title="A promise" quote="No matter where we go — I'm only ever a heartbeat away." emoji="🤞" />
      </div>
    </SceneLayout>
  ),
});
