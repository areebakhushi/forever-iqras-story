import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SceneLayout, PageTitle, SceneCard, Reveal } from "@/components/SceneLayout";
import { PhotoHero, PhotoFrame } from "@/components/Photo";
import { photos } from "@/lib/photos";

export const Route = createFileRoute("/growing-up")({
  head: () => ({ meta: [{ title: "Growing Up Together ⏳" }] }),
  component: () => (
    <SceneLayout particles="sparkles" bg={photos.hands}>
      <PageTitle kicker="time passed" title="Growing Up Together ⏳" subtitle="12 to 22 — our bond only got stronger." />
      <div className="max-w-4xl mx-auto">
        <PhotoHero src={photos.field} alt="Walking through the field" caption="two paths, one journey" />
        <Reveal>
          <div className="flex flex-wrap gap-3 justify-center my-12">
            {Array.from({ length: 11 }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
              >
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full glass-rose flex items-center justify-center font-display text-2xl text-gradient">
                  {12 + i}
                </div>
              </motion.div>
            ))}
          </div>
        </Reveal>
        <SceneCard title="Childhood → Teen → Adult" quote="Same hearts. Same hands. Bigger world." emoji="🌱" />
        <div className="flex justify-center my-8">
          <PhotoFrame src={photos.hands} alt="Holding hands" rotate={2} caption="never letting go" className="w-96" />
        </div>
        <SceneCard title="Time passing" quote="Years moved fast. Our friendship moved with us, never away." emoji="⏳" />
        <SceneCard title="Stronger than ever" quote="We grew older — and somehow only closer." emoji="💞" />
      </div>
    </SceneLayout>
  ),
});
