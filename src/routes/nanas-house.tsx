import { createFileRoute } from "@tanstack/react-router";
import { SceneLayout, PageTitle, SceneCard, Reveal } from "@/components/SceneLayout";
import { motion } from "framer-motion";

export const Route = createFileRoute("/nanas-house")({
  head: () => ({ meta: [{ title: "Nana's House — Our Universe 🏡" }] }),
  component: () => (
    <SceneLayout particles="hearts">
      <PageTitle kicker="our entire universe" title="Nana's House 🏡" subtitle="Not just a place — the whole world we grew up in." />
      <div className="max-w-4xl mx-auto space-y-6">
        <Reveal>
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="glass-rose rounded-3xl p-12 text-center relative overflow-hidden"
          >
            <div className="text-8xl mb-6 animate-drift">🏡</div>
            <p className="font-script text-3xl md:text-4xl text-gradient-rose">"Nana's house wasn't just a place… it was our entire universe."</p>
          </motion.div>
        </Reveal>
        {[
          { e: "🏃‍♀️", t: "Running through every room", q: "Like the house belonged to only us." },
          { e: "🛏️", t: "Sleepovers that never ended", q: "Talking till the sun rose, then talking some more." },
          { e: "🍪", t: "Snacks stolen from Nana's kitchen", q: "Our biggest crime. Our best memory." },
          { e: "👨‍👩‍👧‍👦", t: "Family gatherings", q: "Everyone else faded — there was only us." },
          { e: "📸", t: "Photo after photo", q: "Same poses. Same smiles. Different years." },
        ].map((s, i) => (
          <SceneCard key={i} title={s.t} quote={s.q} emoji={s.e} />
        ))}
      </div>
    </SceneLayout>
  ),
});
