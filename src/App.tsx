import { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Menu, MessageCircle } from "lucide-react";
import cutoutsImage from "./assets/cutouts.png";
import greetingImage from "./assets/greeting.png";
import identityImage from "./assets/identity.png";
import spiralImage from "./assets/spiral.png";
import spiralTwoImage from "./assets/spiral-2.png";
import { Button } from "./components/ui/button";
import { cn } from "./lib/utils";

const heroCards = [
  {
    title: "Brand Kits",
    label: "Identity",
    image: identityImage,
    colors: "from-studio-cyan via-sky-300 to-white",
    rotate: -12,
    y: 10,
  },
  {
    title: "Wedding Cards",
    label: "Occasions",
    image: greetingImage,
    colors: "from-studio-magenta via-rose-300 to-orange-100",
    rotate: -6,
    y: -12,
  },
  {
    title: "Photo Prints",
    label: "Memories",
    image: cutoutsImage,
    colors: "from-studio-yellow via-amber-200 to-white",
    rotate: 0,
    y: 4,
  },
  {
    title: "Packaging",
    label: "Products",
    image: spiralImage,
    colors: "from-studio-blue via-cyan-300 to-white",
    rotate: 7,
    y: -16,
  },
  {
    title: "Banners",
    label: "Promotion",
    image: spiralTwoImage,
    colors: "from-emerald-400 via-teal-200 to-white",
    rotate: 13,
    y: 8,
  },
];

function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f8f8f4] text-studio-ink">
      <Header />
      <HeroExperience />
    </main>
  );
}

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-5 py-5">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/70 bg-white/72 px-5 py-3 shadow-[0_18px_60px_rgba(31,37,40,0.08)] backdrop-blur-2xl">
        <a href="#" className="flex items-center gap-3">
          <LogoMark />
          <span className="text-sm font-black tracking-tight sm:text-base">
            Collage of Colours
          </span>
        </a>
        <nav className="hidden items-center gap-8 text-xs font-black uppercase tracking-[0.16em] text-zinc-500 lg:flex">
          <a href="#services" className="transition hover:text-studio-ink">
            Services
          </a>
          <a href="#gallery" className="transition hover:text-studio-ink">
            Work Gallery
          </a>
          <a href="#quote" className="transition hover:text-studio-ink">
            Quote
          </a>
          <a href="#visit" className="transition hover:text-studio-ink">
            Visit
          </a>
        </nav>
        <div className="hidden items-center gap-3 sm:flex">
          <Button asChild variant="outline" size="sm">
            <a href="#quote">Enquire</a>
          </Button>
          <Button asChild size="sm">
            <a href="#quote">
              WhatsApp
              <MessageCircle className="size-4" />
            </a>
          </Button>
        </div>
        <Button className="sm:hidden" variant="outline" size="sm" aria-label="Open menu">
          <Menu className="size-4" />
        </Button>
      </div>
    </header>
  );
}

function HeroExperience() {
  return (
    <section className="relative flex min-h-screen items-center justify-center px-5 pb-8 pt-28 sm:pt-30 lg:pb-10 lg:pt-28">
      <HeroAtmosphere />
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center">

        <div className="text-center">
          <SplitText
            text="Collage of Colours"
            className="block text-balance font-display text-[3.25rem] font-black leading-[0.9] tracking-tight sm:text-6xl lg:text-[4.8rem] xl:text-[5.6rem]"
          />
          <SplitText
            text="Bringing Brands, Occasions & Emotions Together."
            delay={0.45}
            className="mx-auto mt-4 block max-w-4xl text-balance text-2xl font-black leading-tight tracking-tight text-zinc-700 sm:text-4xl lg:text-[2.65rem]"
          />
        </div>

        <div className="relative mt-2 flex h-[14.5rem] w-full items-center justify-center overflow-visible sm:mt-3 sm:h-[16rem] lg:h-[17rem]">
          <BounceCards cards={heroCards} />
        </div>

        <motion.div
          className="-mt-01 flex flex-col items-center justify-center gap-3 sm:flex-row"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          <Button asChild>
            <a href="#services">
              Explore Services
              <ArrowRight className="size-7" />
            </a>
          </Button>
          <Button asChild variant="outline">
            <a href="#quote">Request Quote</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

function BounceCards({
  cards,
}: {
  cards: typeof heroCards;
}) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      id="gallery"
      className="relative flex h-full w-full max-w-5xl items-center justify-center"
    >
      {cards.map((card, index) => {
        const centerOffset = index - (cards.length - 1) / 2;
        const x = `calc(${centerOffset} * clamp(5.25rem, 12vw, 9.6rem))`;
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
            transition={{
              delay: hoveredIndex === null ? 0.1 + index * 0.01 : 0,
              type: "spring",
              stiffness: 500,
              damping: 21,
              mass: 0.45,
            }}
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

function SplitText({
  text,
  className,
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
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

function PrintCard({ image, title }: { image: string; title: string }) {
  const [glareKey, setGlareKey] = useState(0);

  return (
    <div
      data-print-card="true"
      onPointerEnter={() => setGlareKey((key) => key + 1)}
      className={cn(
        "group relative h-44 w-32 cursor-pointer overflow-hidden rounded-[1.2rem] bg-white shadow-[0_28px_80px_rgba(31,37,40,0.18)] sm:h-52 sm:w-36 lg:h-48 lg:w-64",
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

function HeroAtmosphere() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.85),rgba(248,248,244,0.58)),radial-gradient(circle_at_50%_35%,rgba(24,168,200,0.18),transparent_34%),radial-gradient(circle_at_80%_30%,rgba(232,62,124,0.14),transparent_25%),radial-gradient(circle_at_20%_70%,rgba(246,201,69,0.22),transparent_28%)]" />
      <div className="absolute inset-0 opacity-45 paper-grid" />
      <motion.div
        className="absolute left-[14%] top-[28%] rounded-full border border-studio-blue/25 bg-studio-blue/8 px-5 py-3 text-sm font-black text-studio-blue backdrop-blur"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: [0, -10, 0] }}
        transition={{ opacity: { delay: 2.4 }, y: { delay: 2.4, duration: 4, repeat: Infinity } }}
      >
        CMYK ready
      </motion.div>
      <motion.div
        className="absolute right-[12%] top-[35%] rounded-full border border-emerald-500/25 bg-emerald-500/8 px-5 py-3 text-sm font-black text-emerald-700 backdrop-blur"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: [0, 12, 0] }}
        transition={{ opacity: { delay: 2.55 }, y: { delay: 2.55, duration: 4.5, repeat: Infinity } }}
      >
        Custom finish
      </motion.div>
    </div>
  );
}

function LogoMark() {
  return (
    <span className="relative grid size-9 place-items-center">
      <span className="absolute left-0 top-1 size-4 rounded bg-studio-cyan" />
      <span className="absolute right-0 top-1 size-4 rounded bg-studio-magenta" />
      <span className="absolute bottom-0 left-2 size-4 rounded bg-studio-yellow" />
      <span className="relative size-3 rounded bg-studio-blue" />
    </span>
  );
}

export default App;
