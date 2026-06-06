import { useState } from "react";
import { motion } from "motion/react";
import { cn } from "../../lib/utils";

type PrintCardProps = {
  image: string;
  title: string;
};

export function PrintCard({ image, title }: PrintCardProps) {
  const [glareKey, setGlareKey] = useState(0);

  return (
    <div
      data-print-card="true"
      onPointerEnter={() => setGlareKey((key) => key + 1)}
      className={cn(
        "group relative h-40 w-28 cursor-pointer overflow-hidden rounded-[1.2rem] bg-white shadow-[0_28px_80px_rgba(31,37,40,0.18)] sm:h-52 sm:w-36 lg:h-48 lg:w-64",
      )}
    >
      <img
        src={image}
        alt={title}
        className="h-full w-full object-cover"
        draggable={false}
      />
      <motion.div
        key={glareKey}
        className="pointer-events-none absolute -inset-y-10 -left-1/2 w-1/2 rotate-12 bg-gradient-to-r from-transparent via-white/80 to-transparent mix-blend-screen"
        initial={{ x: "-120%", opacity: 0 }}
        animate={{ x: "420%", opacity: [0, 1, 0] }}
        transition={{ duration: 4, ease: [0.16, 1, 0.3, 1] }}
      />
    </div>
  );
}
