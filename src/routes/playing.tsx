import { createFileRoute } from "@tanstack/react-router";
import { SceneLayout, PageTitle, SceneCard } from "@/components/SceneLayout";
import { PhotoHero, PhotoFrame } from "@/components/Photo";
import { photos } from "@/lib/photos";

export const Route = createFileRoute("/playing")({
  head: () => ({ meta: [{ title: "Playing & Laughing 😂 — Iqra" }] }),
  component: () => (
    <SceneLayout particles="sparkles">
      <PageTitle kicker="laughing till we cried" title="We built happiness together" subtitle="Pillow fights. Silly games. Inside jokes only we understood." />
      <div className="max-w-4xl mx-auto space-y-6">
        <PhotoHero src={photos.beachTwirl} alt="Twirling on the beach" caption="dancing through life" />
        {[
          { e: "🛏️", t: "Pillow fights", q: "We never declared a winner — only laughed until we collapsed." },
          { e: "😂", t: "Laughing for no reason", q: "One look. One word. Tears of laughter." },
          { e: "🎲", t: "Inventing our own games", q: "Rules nobody else understood. Joy only we shared." },
          { e: "🤫", t: "Inside jokes", q: "A whole secret language between us." },
          { e: "🤸‍♀️", t: "Falling while laughing", q: "Even our clumsiness became a memory." },
        ].map((s, i) => (
          <SceneCard key={i} title={s.t} quote={s.q} emoji={s.e} />
        ))}
        <div className="flex justify-center pt-6">
          <PhotoFrame src={photos.beachDance} alt="Beach dance" rotate={-3} caption="us, always" className="w-80" />
        </div>
      </div>
    </SceneLayout>
  ),
});
