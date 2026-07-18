import { createFileRoute } from "@tanstack/react-router";
import { SceneLayout, PageTitle, SceneCard, Reveal } from "@/components/SceneLayout";
import { PhotoHero, PhotoFrame } from "@/components/Photo";
import { photos } from "@/lib/photos";

export const Route = createFileRoute("/hugs")({
  head: () => ({ meta: [{ title: "Hug Scenes 🤍 — For Iqra" }] }),
  component: () => (
    <SceneLayout particles="hearts">
      <PageTitle kicker="no words needed" title="Just a hug was enough 🤍" />
      <div className="max-w-4xl mx-auto">
        <PhotoHero src={photos.hug} alt="Us hugging" caption="my safe place 🤍" />
        <Reveal>
          <p className="text-center font-script text-3xl md:text-4xl text-gradient-rose italic my-10">
            "We never needed words… just a hug was enough."
          </p>
        </Reveal>
        <SceneCard title="When I was sad" quote="You appeared. Without asking. Without judging." emoji="🤍" />
        <div className="flex justify-center my-10">
          <PhotoFrame src={photos.cafe} alt="Together" rotate={-2} caption="always here" className="w-80" />
        </div>
        <SceneCard title="When you were sad" quote="I held on as tight as I could — because that's what we do." emoji="💗" />
        <SceneCard title="Our slow-motion hug" quote="Hearts floating. Time stopped. Everything still." emoji="✨" />
      </div>
    </SceneLayout>
  ),
});
