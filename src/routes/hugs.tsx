import { createFileRoute } from "@tanstack/react-router";
import { SceneLayout, PageTitle, SceneCard, Reveal } from "@/components/SceneLayout";
import { motion } from "framer-motion";

export const Route = createFileRoute("/hugs")({
  head: () => ({ meta: [{ title: "Hug Scenes 🤍 — For Iqra" }] }),
  component: () => (
    <SceneLayout particles="hearts">
      <PageTitle kicker="no words needed" title="Just a hug was enough 🤍" />
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <div className="glass-rose rounded-3xl p-12 text-center relative overflow-hidden mb-8">
            <div className="flex justify-center items-center gap-2 mb-8">
              <motion.div initial={{ x: -80 }} whileInView={{ x: -8 }} transition={{ duration: 1.8, ease: "easeOut" }} className="text-7xl">🧍‍♀️</motion.div>
              <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 1.8 }} className="text-5xl">💗</motion.div>
              <motion.div initial={{ x: 80 }} whileInView={{ x: 8 }} transition={{ duration: 1.8, ease: "easeOut" }} className="text-7xl">🧍‍♀️</motion.div>
            </div>
            <p className="font-script text-3xl md:text-4xl text-gradient-rose italic">"We never needed words… just a hug was enough."</p>
          </div>
        </Reveal>
        <SceneCard title="When I was sad" quote="You appeared. Without asking. Without judging." emoji="🤍" />
        <SceneCard title="When you were sad" quote="I held on as tight as I could — because that's what we do." emoji="💗" />
        <SceneCard title="Our slow-motion hug" quote="Hearts floating. Time stopped. Everything still." emoji="✨" />
      </div>
    </SceneLayout>
  ),
});
