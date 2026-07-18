import { createFileRoute } from "@tanstack/react-router";
import { SceneLayout, PageTitle, SceneCard, Reveal } from "@/components/SceneLayout";
import { PhotoHero, PhotoFrame } from "@/components/Photo";
import { photos } from "@/lib/photos";

export const Route = createFileRoute("/beginning")({
  head: () => ({ meta: [{ title: "Where It All Started ❤ — For Iqra" }] }),
  component: () => (
    <SceneLayout particles="petals">
      <PageTitle kicker="age 12" title="Where it all started" subtitle="Two cousins by blood. Two best friends by heart." />
      <div className="max-w-4xl mx-auto space-y-8">
        <PhotoHero src={photos.cafe} alt="Us together at the cafe" caption="the very first us ✨" />
        <SceneCard title="The first spark" quote="A shy hello. A small smile. A friendship that would outlast everything." emoji="🌸" />
        <div className="flex flex-wrap gap-6 justify-center my-8">
          <PhotoFrame src={photos.hands} alt="Holding hands" rotate={-3} caption="hand in hand" className="w-64" />
          <PhotoFrame src={photos.field} alt="Walking together" rotate={3} caption="side by side" className="w-64" />
        </div>
        <SceneCard title="From that day on" quote="We never spent a family gathering apart." emoji="💫" />
      </div>
    </SceneLayout>
  ),
});
