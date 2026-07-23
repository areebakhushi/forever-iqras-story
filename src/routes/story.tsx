import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SceneLayout, PageTitle, SceneCard, Reveal } from "@/components/SceneLayout";
import { PhotoFrame } from "@/components/Photo";
import { photos, ALL_PHOTOS } from "@/lib/photos";

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
    <SceneLayout particles="petals">
      {/* Upper section hero with the cherry-touch image as background */}
      <div className="relative -mx-6 md:-mx-14 -mt-10 md:-mt-16 mb-12 min-h-[58vh] md:min-h-[62vh] flex items-center justify-center overflow-hidden rounded-sm">
        <img
          src={photos.cherryTouch}
          alt="Two friends under cherry blossoms"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[color:var(--cream)]/20 via-[color:var(--cream)]/40 to-[color:var(--cream)]" />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="kicker mb-4 text-[color:var(--plum)]"
          >
            our friendship story
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="font-display text-6xl md:text-8xl text-[color:var(--plum)] leading-[0.95] tracking-tight drop-shadow-sm"
          >
            From 12 to 22
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="mt-6 font-editorial text-xl md:text-2xl text-[color:var(--ink)]/80 max-w-2xl mx-auto"
          >
            A decade of laughter, love, late-night talks, and a thousand little memories we built together.
          </motion.p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto">
        <AgeCounter />
        <div className="space-y-6">
          {YEARS.map((y, i) => (
            <Reveal key={y.age} delay={i * 0.05}>
              <div className="flex gap-4 md:gap-6 items-center glass rounded-2xl p-4 md:p-6 hover:scale-[1.02] transition-transform">
                <div className="shrink-0">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-aurora flex items-center justify-center font-display text-2xl md:text-3xl font-bold text-primary-foreground shadow-lg">
                    {y.age}
                  </div>
                </div>
                <p className="font-script text-xl md:text-3xl text-foreground/90 italic flex-1">{y.moment}</p>
                <img
                  src={ALL_PHOTOS[i % ALL_PHOTOS.length]}
                  alt="us"
                  loading="lazy"
                  className="hidden md:block w-24 h-24 object-cover rounded-xl shadow-lg shrink-0"
                  style={{ transform: i % 2 === 0 ? "rotate(-3deg)" : "rotate(3deg)" }}
                />
              </div>
            </Reveal>
          ))}
        </div>
        <div className="flex flex-wrap gap-6 justify-center my-12">
          <PhotoFrame src={photos.cafe} alt="us" rotate={-4} caption="12" className="w-56" />
          <PhotoFrame src={photos.field} alt="us" rotate={3} caption="17" className="w-56" />
          <PhotoFrame src={photos.sunset} alt="us" rotate={-2} caption="22" className="w-56" />
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
