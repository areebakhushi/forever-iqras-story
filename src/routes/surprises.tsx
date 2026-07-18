import { createFileRoute } from "@tanstack/react-router";
import { SceneLayout, PageTitle, SceneCard } from "@/components/SceneLayout";
import { PhotoFrame } from "@/components/Photo";
import { photos } from "@/lib/photos";

export const Route = createFileRoute("/surprises")({
  head: () => ({ meta: [{ title: "Surprises 🎁 — For Iqra" }] }),
  component: () => (
    <SceneLayout particles="hearts">
      <PageTitle kicker="for your smile" title="Surprises For Each Other 🎁" subtitle="Handmade gifts. Secret plans. Decorated rooms. All for one smile." />
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex justify-center my-8">
          <PhotoFrame src={photos.sunset} alt="lantern lights" rotate={-2} caption="the little magic" className="w-full max-w-lg" />
        </div>
        {[
          { e: "🤫", t: "Secret planning", q: "Days of plotting. Hours of giggling. One perfect moment." },
          { e: "💌", t: "Handwritten notes", q: "Some words only paper could hold." },
          { e: "🎀", t: "Decorated rooms", q: "Balloons. Fairy lights. A little magic just for you." },
          { e: "🥹", t: "Your reaction", q: "Worth every late night, every secret, every effort." },
        ].map((s, i) => (
          <SceneCard key={i} title={s.t} quote={s.q} emoji={s.e} />
        ))}
      </div>
    </SceneLayout>
  ),
});
