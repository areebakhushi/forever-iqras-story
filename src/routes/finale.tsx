import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SceneLayout, PageTitle, Reveal } from "@/components/SceneLayout";
import { Heart } from "lucide-react";
import { photos } from "@/lib/photos";

export const Route = createFileRoute("/finale")({
  head: () => ({ meta: [{ title: "Forever Us ❤ — A Final Letter For Iqra" }] }),
  component: Finale,
});

function StarName() {
  const letters = "IQRA".split("");
  return (
    <div className="flex gap-4 md:gap-8 justify-center my-12">
      {letters.map((l, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 40, scale: 0.5 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: i * 0.3, duration: 1.2, type: "spring" }}
          className="font-display text-7xl md:text-[10rem] font-bold text-gradient"
          style={{ textShadow: "0 0 80px oklch(0.88 0.13 80 / 0.8), 0 0 160px oklch(0.82 0.14 350 / 0.6)" }}
        >
          {l}
        </motion.span>
      ))}
    </div>
  );
}

function Finale() {
  return (
    <SceneLayout particles="mixed" bg={photos.stars} bgOpacity={0.55}>
      <PageTitle kicker="our final scene" title="Forever Us ❤" subtitle="Night sky. Soft piano. A letter that never ends." />
      <div className="max-w-3xl mx-auto">
        <StarName />
        <Reveal>
          <div className="glass-rose rounded-3xl p-10 md:p-14 text-center relative overflow-hidden">
            <Heart className="w-12 h-12 mx-auto fill-current animate-heartbeat mb-6" style={{ color: "oklch(0.78 0.17 12)" }} />
            <div className="space-y-6 font-display italic text-lg md:text-2xl leading-relaxed text-foreground/95">
              <p>From 12 to 22…<br />10 years of laughter, love, memories.</p>
              <p>You are my cousin,<br />my best friend,<br />my forever person.</p>
              <p>We may grow older…<br />but our hearts will always stay the same.</p>
              <p className="font-script text-3xl md:text-5xl text-gradient-rose pt-4">Forever us. ❤</p>
            </div>
            <div className="mt-10 flex justify-center gap-4 text-3xl">
              {["🦋", "✨", "🌸", "💖", "🌟"].map((e, i) => (
                <motion.span
                  key={i}
                  animate={{ y: [0, -12, 0], rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 3 + i * 0.3, repeat: Infinity }}
                >
                  {e}
                </motion.span>
              ))}
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.4}>
          <p className="text-center mt-12 font-script text-2xl text-muted-foreground">
            I love you, my sweetee. Always & forever — your bestee.
          </p>
        </Reveal>
      </div>
    </SceneLayout>
  );
}
