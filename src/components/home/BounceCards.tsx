import { useState } from "react";
import { motion } from "motion/react";
import type { HeroCard } from "../../data/heroCards";
import { PrintCard } from "./PrintCard";

type BounceCardsProps = {
  cards: HeroCard[];
};

export function BounceCards({ cards }: BounceCardsProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      id="gallery"
      className="relative flex h-full w-full max-w-5xl items-center justify-center"
    >
      {cards.map((card, index) => {
        const centerOffset = index - (cards.length - 1) / 2;
        const x = `calc(${centerOffset} * clamp(3rem, 12vw, 9.6rem))`;
        const hoverShift =
          hoveredIndex === null ? 0 : index < hoveredIndex ? -34 : index > hoveredIndex ? 34 : 0;

        return (
          <motion.div
            key={card.title}
            className="absolute"
            initial={{ opacity: 0, x: 0, y: 0, scale: 0.78, rotate: 0 }}
            animate={{
              opacity: 1,
              x,
              y: card.y,
              scale: hoveredIndex === index ? 1.04 : 1,
              rotate: card.rotate,
              translateX: hoverShift,
              zIndex: hoveredIndex === index ? 20 : index,
            }}
            transition={
              hoveredIndex !== null
                ? {
                    type: "spring",
                    stiffness: 500,
                    damping: 21,
                    mass: 0.45,
                  }
                : {
                    delay: 0.55 + index * 0.1,
                    type: "spring",
                    stiffness: 120,
                    damping: 18,
                    mass: 0.8,
                  }
            }
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
          >
            <PrintCard image={card.image} title={card.title} />
          </motion.div>
        );
      })}
    </div>
  );
}
