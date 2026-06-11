import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SceneLayout, PageTitle, SceneCard, Reveal } from "@/components/SceneLayout";

export const Route = createFileRoute("/beginning")({
  head: () => ({ meta: [{ title: "Where It All Started ❤ — For Iqra" }] }),
  component: () => (
    <SceneLayout particles="petals">
      <PageTitle kicker="age 12" title="Where it all started" subtitle="Two cousins by blood. Two best friends by heart." />
      <div className="max-w-4xl mx-auto space-y-8">
        <Reveal>
          <div className="glass-rose rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
            <div className="flex justify-center gap-12 md:gap-20 mb-8">
              <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity }} className="text-7xl">👧🏻</motion.div>
              <motion.div animate={{ scale: [1, 1.4, 1], opacity: [0.6, 1, 0.6] }} transition={{ duration: 2, repeat: Infinity }} className="text-6xl self-center">✨</motion.div>
              <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity, delay: 0.5 }} className="text-7xl">👧🏽</motion.div>
            </div>
            <p className="font-script text-3xl md:text-4xl text-gradient-rose italic">"We were cousins by relation… but best friends by heart."</p>
          </div>
        </Reveal>
        <SceneCard title="The first spark" quote="A shy hello. A small smile. A friendship that would outlast everything." emoji="🌸" />
        <SceneCard title="From that day on" quote="We never spent a family gathering apart." emoji="💫" />
      </div>
    </SceneLayout>
  ),
});
