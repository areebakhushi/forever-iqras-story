import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SceneLayout, PageTitle, SceneCard, Reveal } from "@/components/SceneLayout";

export const Route = createFileRoute("/story")({
  head: () => ({
    meta: [
      { title: "Our Friendship Story — From 12 to 22" },
      { name: "description", content: "A decade of memories. A lifetime of friendship." },
    ],
  }),
  component: Story,
});

const YEARS = [
  { age: 12, moment: "Two cousins. One spark. Shy smiles that became a forever." },
  { age: 13, moment: "Endless laughs at Nana's house. Inside jokes were born." },
  { age: 14, moment: "Whispered secrets under the same blanket." },
  { age: 15, moment: "Birthday cakes. Candles. Wishes only we understood." },
  { age: 16, moment: "Pillow fights, sleepovers, midnight snacks." },
  { age: 17, moment: "Through every storm — you were my umbrella." },
  { age: 18, moment: "We grew up. The world changed. We didn't." },
  { age: 19, moment: "Late night talks until the sun came up." },
  { age: 20, moment: "Different cities. Same heart." },
  { age: 21, moment: "Surprises planned in secret. Tears of happiness." },
  { age: 22, moment: "Ten years later — still my favorite person on earth." },
];

function AgeCounter() {
  const [age, setAge] = useState(12);
  useEffect(() => {
    if (age >= 22) return;
    const t = setTimeout(() => setAge((a) => a + 1), 380);
    return () => clearTimeout(t);
  }, [age]);
  return (
    <Reveal>
      <div className="text-center my-16">
        <p className="font-script text-2xl text-muted-foreground mb-2">our age, growing together</p>
        <motion.div
          key={age}
          initial={{ scale: 0.6, opacity: 0, rotate: -10 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="font-display text-[10rem] md:text-[14rem] leading-none text-gradient font-bold"
          style={{ textShadow: "0 0 80px oklch(0.82 0.14 350 / 0.6)" }}
        >
          {age}
        </motion.div>
      </div>
    </Reveal>
  );
}

function Story() {
  return (
    <SceneLayout particles="mixed">
      <PageTitle
        kicker="our friendship story"
        title="From 12 to 22"
        subtitle="A decade of laughter, love, late-night talks, and a thousand little memories we built together."
      />
      <div className="max-w-4xl mx-auto">
        <AgeCounter />
        <div className="space-y-6">
          {YEARS.map((y, i) => (
            <Reveal key={y.age} delay={i * 0.05}>
              <div className="flex gap-6 items-center glass rounded-2xl p-6 hover:scale-[1.02] transition-transform">
                <div className="shrink-0">
                  <div className="w-20 h-20 rounded-full bg-aurora flex items-center justify-center font-display text-3xl font-bold text-primary-foreground shadow-lg">
                    {y.age}
                  </div>
                </div>
                <p className="font-script text-2xl md:text-3xl text-foreground/90 italic">{y.moment}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <SceneCard
          title="We grew up together"
          quote="…but never grew apart."
          emoji="🌟"
        />
      </div>
    </SceneLayout>
  );
}
