import { useMemo } from "react";

type Variant = "hearts" | "petals" | "stars" | "butterflies" | "sparkles" | "mixed";

const SYMBOLS: Record<Variant, string[]> = {
  hearts: ["❤", "♥", "💗", "💖"],
  petals: ["🌸", "🌷", "🌹", "💮"],
  stars: ["✦", "✧", "⋆", "✨"],
  butterflies: ["🦋"],
  sparkles: ["✨", "✦", "⋆"],
  mixed: ["❤", "🌸", "✨", "🦋", "✦", "💖"],
};

export function Particles({ variant = "mixed", count = 30 }: { variant?: Variant; count?: number }) {
  const items = useMemo(() => {
    const syms = SYMBOLS[variant];
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      sym: syms[i % syms.length],
      left: Math.random() * 100,
      delay: Math.random() * 20,
      duration: 14 + Math.random() * 18,
      size: 12 + Math.random() * 22,
      opacity: 0.4 + Math.random() * 0.6,
    }));
  }, [variant, count]);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {items.map((p) => (
        <span
          key={p.id}
          className="absolute"
          style={{
            left: `${p.left}%`,
            fontSize: `${p.size}px`,
            opacity: p.opacity * 0.55,
            color: "#c45c7c",
            animation: `float-up ${p.duration}s linear ${p.delay}s infinite`,
          }}
        >
          {p.sym}
        </span>
      ))}
    </div>
  );
}

export function Stars({ count = 80 }: { count?: number }) {
  const stars = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        delay: Math.random() * 4,
        size: 1 + Math.random() * 3,
      })),
    [count],
  );
  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      {stars.map((s) => (
        <span
          key={s.id}
          className="absolute rounded-full animate-twinkle"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            animationDelay: `${s.delay}s`,
            background: "#e88aab",
            boxShadow: "0 0 6px rgba(232, 138, 171, 0.6)",
          }}
        />
      ))}
    </div>
  );
}
