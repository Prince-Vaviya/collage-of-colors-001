import { motion } from "motion/react";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { HeroBackground } from "../components/home/HeroBackground";
import { Button } from "../components/ui/button";
import { services, type Service } from "../data/services";
import { cn } from "../lib/utils";

const serviceWords = ["Identity", "Visibility", "Trust", "Packaging", "Retention"];

export function ServicesPage() {
  return (
    <section className="relative overflow-hidden px-5 pb-20 pt-36 font-['Inter_Tight',ui-sans-serif,system-ui,sans-serif]">
      <HeroBackground />
      <ServiceMarquee />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <motion.div
          className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end"
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/75 px-4 py-2 text-sm font-extrabold text-studio-blue shadow-[0_18px_50px_rgba(31,37,40,0.08)] backdrop-blur">
              <Sparkles className="size-4" />
              Services that make brands look ready
            </p>
            <h1 className="mt-6 max-w-4xl font-['Inter_Tight',ui-sans-serif,system-ui,sans-serif] text-4xl font-extrabold leading-[0.95] text-studio-ink sm:text-7xl lg:text-[4.9rem]">
              From Idea To Finished Brand Asset.
            </h1>
            <p className="mt-6 max-w-2xl text-xl font-semibold leading-8 text-zinc-600">
              Design, print and package everything your business needs to look launch-ready.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="outline">
                <a href="#/work-gallery">
                  View Work Gallery
                  <ArrowRight className="size-4" />
                </a>
              </Button>
            </div>
          </div>

          <div className="max-w-xl lg:justify-self-end">
            <AnimatedWords words={serviceWords} />
            <p className="mt-6 text-xl font-semibold leading-8 text-zinc-600">
              One studio for identity, visibility, trust, packaging, and Retention.
            </p>
          </div>
        </motion.div>

        <div className="mt-14 space-y-6">
          {services.map((service, index) => (
            <ServiceBand key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceBand({ service, index }: { service: Service; index: number }) {
  const isReversed = index % 2 === 1;

  return (
    <motion.article
      className="group relative min-h-[28rem] overflow-hidden rounded-[2rem] border border-white/80 bg-white/72 px-6 py-7 shadow-[0_28px_90px_rgba(31,37,40,0.08)] backdrop-blur-xl sm:px-8 lg:grid lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-10 lg:px-10 lg:py-10"
      initial={{ opacity: 0, x: isReversed ? 70 : -70, rotate: isReversed ? 1.5 : -1.5 }}
      whileInView={{ opacity: 1, x: 0, rotate: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4 }}
    >
      <div
        className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(circle at 82% 18%, ${service.color}22, transparent 34%)`,
        }}
      />
      <motion.div
        className="absolute -right-16 -top-16 size-48 rounded-full opacity-15 blur-3xl"
        style={{ backgroundColor: service.color }}
        animate={{ scale: [1, 1.18, 1], x: [0, -16, 0], y: [0, 18, 0] }}
        transition={{ duration: 7 + index, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className={cn("relative z-10", isReversed && "lg:order-2")}>
        <div className="grid gap-5 sm:grid-cols-[auto_1fr] sm:items-center">
          <span
            className="grid size-14 place-items-center rounded-2xl text-xl font-extrabold text-white shadow-[0_18px_50px_rgba(31,37,40,0.18)]"
            style={{ backgroundColor: service.color }}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <h2 className="max-w-2xl font-['Inter_Tight',ui-sans-serif,system-ui,sans-serif] text-4xl font-extrabold leading-[0.96] text-studio-ink sm:text-6xl">
            {service.title}
          </h2>
        </div>
        <span className="mt-6 block h-px w-full bg-studio-ink/15" />

        <p className="mt-6 max-w-xl text-xl font-bold leading-8 text-zinc-600">
          {service.description}
        </p>
        <p className="mt-4 max-w-xl text-base font-semibold leading-7 text-zinc-500">
          {service.proof}
        </p>

        {service.buttonLabel && (
          <motion.div
            className="mt-7 inline-flex"
            whileHover={{ x: 5, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button asChild>
              <a href={service.href}>
                {service.buttonLabel}
                <ArrowRight className="size-4" />
              </a>
            </Button>
          </motion.div>
        )}
      </div>

      <div className="relative z-10 mt-10 lg:mt-0 lg:self-start lg:pt-24">
        <ul className="space-y-4">
          {service.items.map((item, itemIndex) => (
            <motion.li
              key={item}
              className="flex items-center gap-4 border-b border-studio-ink/10 pb-4 text-xl font-extrabold text-studio-ink"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: itemIndex * 0.08, duration: 0.45 }}
            >
              <span
                className="grid size-8 shrink-0 place-items-center rounded-full text-white"
                style={{ backgroundColor: service.color }}
              >
                <Check className="size-4" />
              </span>
              {item}
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}

function AnimatedWords({ words }: { words: string[] }) {
  return (
    <div className="flex flex-wrap gap-3">
      {words.map((word, index) => (
        <motion.span
          key={word}
          className="rounded-full border border-studio-ink/10 bg-white/80 px-4 py-2 text-base font-extrabold text-studio-ink shadow-[0_14px_38px_rgba(31,37,40,0.06)] backdrop-blur"
          initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 0.28 + index * 0.08, duration: 0.5 }}
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
}

function ServiceMarquee() {
  return (
    <div className="pointer-events-none absolute left-0 right-0 top-28 z-0 overflow-hidden opacity-[0.08]">
      <motion.div
        className="flex w-max gap-10 whitespace-nowrap font-['Inter_Tight',ui-sans-serif,system-ui,sans-serif] text-[7rem] font-extrabold leading-none text-studio-ink"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
      >
        {[0, 1].map((loop) => (
          <span key={loop}>
            DESIGN / PRINT / SIGNAGE / PACKAGING / GIFTING /&nbsp;
          </span>
        ))}
      </motion.div>
    </div>
  );
}
