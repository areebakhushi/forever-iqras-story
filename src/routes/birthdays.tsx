import { createFileRoute } from "@tanstack/react-router";
import { SceneLayout, PageTitle, SceneCard, Reveal } from "@/components/SceneLayout";
import { PhotoFrame } from "@/components/Photo";
import { photos } from "@/lib/photos";
import { motion } from "framer-motion";

export const Route = createFileRoute("/birthdays")({
  head: () => ({ meta: [{ title: "10 Years of Best Friendship — Iqra" }] }),
  component: TenYears,
});

const GALLERY = [
  { src: photos.sparklers, cap: "sparkler nights", r: -4 },
  { src: photos.pinkpair, cap: "school days", r: 3 },
  { src: photos.sparklerHug, cap: "lit up by you", r: -2 },
  { src: photos.cherryTouch, cap: "soft as spring", r: 2 },
  { src: photos.coathug, cap: "warm hugs", r: -3 },
  { src: photos.bluehug, cap: "hold me", r: 4 },
  { src: photos.umbrellaKneel, cap: "rain & you", r: -2 },
  { src: photos.blueSky, cap: "you & me vs world", r: 3 },
  { src: photos.rosePropose, cap: "a rose for you", r: -4 },
];

function TenYears() {
  return (
    <SceneLayout particles="hearts" bg={photos.sparklerHug}>
      {/* Hero background */}
      <div className="absolute inset-0 -z-0 overflow-hidden">
        <img src={photos.cherry} alt="" aria-hidden className="w-full h-[85vh] object-cover" style={{ opacity: 0.35 }} />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background" />
      </div>

      <PageTitle
        kicker="a whole decade of us"
        title="10 Years of Best Friendship"
        subtitle="Ten years. A thousand memories. One forever person — you, Iqra."
      />

      <div className="max-w-5xl mx-auto">
        <Reveal>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="glass-rose rounded-3xl p-10 text-center my-8"
          >
            <p className="font-script text-3xl md:text-5xl text-gradient-rose">
              "10 years ago I met you — and life was never the same."
            </p>
          </motion.div>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 my-12 justify-items-center">
          {GALLERY.map((p, i) => (
            <PhotoFrame key={i} src={p.src} alt="us" rotate={p.r} caption={p.cap} className="w-full max-w-xs" />
          ))}
        </div>

        <SceneCard title="Year 1 — the spark" quote="A shy hello turned into a forever." emoji="✨" />
        <SceneCard title="Years of laughter" quote="We laughed until we cried, and cried until we laughed again." emoji="💗" />
        <SceneCard title="Every storm, together" quote="You never left. Not once. Not ever." emoji="☔" />
        <SceneCard title="10 years later" quote="Still my person. Still my safe place. Still my Iqra." emoji="🤍" />

        <div className="flex justify-center my-10">
          <PhotoFrame src={photos.rose} alt="a rose for you" rotate={-2} caption="here's to ten more" className="w-full max-w-md" />
        </div>
      </div>
    </SceneLayout>
  );
}
