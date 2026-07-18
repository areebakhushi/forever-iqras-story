import { motion } from "framer-motion";

export function PhotoFrame({
  src,
  alt,
  caption,
  rotate = 0,
  className = "",
}: {
  src: string;
  alt: string;
  caption?: string;
  rotate?: number;
  className?: string;
}) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 40, rotate: rotate - 4 }}
      whileInView={{ opacity: 1, y: 0, rotate }}
      whileHover={{ scale: 1.03, rotate: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className={`relative inline-block ${className}`}
    >
      <div
        className="p-3 md:p-4 pb-10 md:pb-14 bg-gradient-to-br from-white/95 to-white/80 rounded-sm shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6),0_0_40px_-10px_oklch(0.82_0.14_350/0.4)]"
      >
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="block w-full h-full object-cover max-w-full"
          style={{ filter: "saturate(1.05)" }}
        />
        {caption && (
          <figcaption className="absolute bottom-2 md:bottom-3 left-0 right-0 text-center font-script text-lg md:text-2xl text-neutral-800">
            {caption}
          </figcaption>
        )}
      </div>
    </motion.figure>
  );
}

export function PhotoBackdrop({
  src,
  opacity = 0.28,
  className = "",
}: {
  src: string;
  opacity?: number;
  className?: string;
}) {
  return (
    <div className={`absolute inset-0 -z-0 overflow-hidden ${className}`}>
      <img src={src} alt="" aria-hidden className="w-full h-full object-cover" style={{ opacity }} />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
    </div>
  );
}

export function PhotoHero({ src, alt, caption }: { src: string; alt: string; caption?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.05 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative rounded-3xl overflow-hidden my-10 shadow-[0_40px_100px_-30px_oklch(0.15_0.04_320)]"
    >
      <img src={src} alt={alt} className="w-full h-[380px] md:h-[520px] object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
      {caption && (
        <div className="absolute bottom-6 left-0 right-0 text-center">
          <p className="font-script text-3xl md:text-5xl text-gradient-rose drop-shadow-lg">{caption}</p>
        </div>
      )}
    </motion.div>
  );
}
