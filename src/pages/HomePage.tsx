import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { BounceCards } from "../components/home/BounceCards";
import { HeroBackground } from "../components/home/HeroBackground";
import { SplitText } from "../components/home/SplitText";
import { Button } from "../components/ui/button";
import { heroCards } from "../data/heroCards";

export function HomePage() {
  return (
    <section className="relative flex min-h-screen items-start justify-start px-5 pb-24 pt-32 sm:pt-30 lg:items-center lg:justify-center lg:pb-10 lg:pt-28">
      <HeroBackground showPrintLabels />
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center">
        <div className="text-center">
          <SplitText
            text="Collage of Colours"
            className="block text-balance font-display text-[2.9rem] font-black leading-[0.9] tracking-tight sm:text-6xl lg:text-[4.8rem] xl:text-[5.6rem]"
          />
          <SplitText
            text="Bringing Brands, Occasions & Emotions Together."
            delay={0.45}
            className="mx-auto mt-4 block max-w-4xl text-balance text-[1.65rem] font-black leading-tight tracking-tight text-zinc-700 sm:text-4xl lg:text-[2.65rem]"
          />
        </div>

        <div className="relative mt-3 flex h-[12.75rem] w-full items-center justify-center overflow-visible sm:mt-3 sm:h-[16rem] lg:h-[17rem]">
          <BounceCards cards={heroCards} />
        </div>

        <motion.div
          className="-mt-01 flex flex-col items-center justify-center gap-3 sm:flex-row"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          <Button asChild>
            <a href="#/services">
              Explore Services
              <ArrowRight className="size-7" />
            </a>
          </Button>
          <Button asChild variant="outline">
            <a href="#/get-your-job-details">Request Quote</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
