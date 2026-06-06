import { motion } from "motion/react";

type HeroBackgroundProps = {
  showPrintLabels?: boolean;
};

export function HeroBackground({ showPrintLabels = false }: HeroBackgroundProps) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.85),rgba(248,248,244,0.58)),radial-gradient(circle_at_50%_35%,rgba(24,168,200,0.18),transparent_34%),radial-gradient(circle_at_80%_30%,rgba(232,62,124,0.14),transparent_25%),radial-gradient(circle_at_20%_70%,rgba(246,201,69,0.22),transparent_28%)]" />
      <div className="absolute inset-0 opacity-45 paper-grid" />
      {showPrintLabels && (
        <>
          <motion.div
            className="absolute left-[14%] top-[28%] hidden rounded-full border border-studio-blue/25 bg-studio-blue/8 px-5 py-3 text-sm font-black text-studio-blue backdrop-blur sm:block"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: [0, -10, 0] }}
            transition={{
              opacity: { delay: 2.4 },
              y: { delay: 2.4, duration: 4, repeat: Infinity },
            }}
          >
            CMYK ready
          </motion.div>
          <motion.div
            className="absolute right-[12%] top-[35%] hidden rounded-full border border-emerald-500/25 bg-emerald-500/8 px-5 py-3 text-sm font-black text-emerald-700 backdrop-blur sm:block"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: [0, 12, 0] }}
            transition={{
              opacity: { delay: 2.55 },
              y: { delay: 2.55, duration: 4.5, repeat: Infinity },
            }}
          >
            Custom finish
          </motion.div>
        </>
      )}
    </div>
  );
}
