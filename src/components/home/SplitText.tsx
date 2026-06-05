import { motion } from "motion/react";
import { cn } from "../../lib/utils";

type SplitTextProps = {
  text: string;
  className?: string;
  delay?: number;
};

export function SplitText({ text, className, delay = 0 }: SplitTextProps) {
  return (
    <span className={cn("inline-block", className)} aria-label={text}>
      {text.split(" ").map((word, wordIndex) => (
        <span
          key={`${word}-${wordIndex}`}
          className="mr-[0.22em] inline-block overflow-visible pb-[0.16em]"
        >
          {Array.from(word).map((char, charIndex) => (
            <motion.span
              key={`${char}-${wordIndex}-${charIndex}`}
              aria-hidden="true"
              className="inline-block"
              initial={{ y: "115%", opacity: 0, rotateX: -70 }}
              animate={{ y: "0%", opacity: 1, rotateX: 0 }}
              transition={{
                delay: delay + wordIndex * 0.08 + charIndex * 0.018,
                duration: 0.62,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </span>
  );
}
