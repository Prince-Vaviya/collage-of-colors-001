import { motion } from "motion/react";
import { ArrowRight, Menu, MessageCircle } from "lucide-react";
import { Button } from "./components/ui/button";
import { cn } from "./lib/utils";

const heroCards = [
  {
    title: "Brand Kits",
    label: "Identity",
    colors: "from-studio-cyan via-sky-300 to-white",
    rotate: -12,
    y: 10,
  },
  {
    title: "Wedding Cards",
    label: "Occasions",
    colors: "from-studio-magenta via-rose-300 to-orange-100",
    rotate: -6,
    y: -12,
  },
  {
    title: "Photo Prints",
    label: "Memories",
    colors: "from-studio-yellow via-amber-200 to-white",
    rotate: 0,
    y: 4,
  },
  {
    title: "Packaging",
    label: "Products",
    colors: "from-studio-blue via-cyan-300 to-white",
    rotate: 7,
    y: -16,
  },
  {
    title: "Banners",
    label: "Promotion",
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
  return (
    <div
      id="gallery"
      className="relative flex h-full w-full max-w-5xl items-center justify-center"
    >
      {cards.map((card, index) => {
        const centerOffset = index - (cards.length - 1) / 2;
        const x = `calc(${centerOffset} * clamp(5.25rem, 12vw, 9.6rem))`;

        return (
          <motion.div
            key={card.title}
            className="absolute"
            initial={{ opacity: 0, x: 0, y: 0, scale: 0.78, rotate: 0 }}
            animate={{
              opacity: 1,
              x,
              y: card.y,
              scale: 1,
              rotate: card.rotate,
            }}
            transition={{
              delay: 0.5 + index * 0.08,
              type: "spring",
              stiffness: 180,
              damping: 14,
              mass: 0.85,
            }}
          >
            <PrintCard {...card} />
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
        <span key={`${word}-${wordIndex}`} className="mr-[0.22em] inline-block overflow-hidden">
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

function PrintCard({
  title,
  label,
  colors,
  featured = false,
}: {
  title: string;
  label: string;
  colors: string;
  featured?: boolean;
}) {
  return (
    <div
      data-print-card="true"
      className={cn(
        "group relative h-44 w-32 overflow-hidden rounded-[1.2rem] border border-white/80 bg-white p-2 shadow-[0_28px_80px_rgba(31,37,40,0.18)] sm:h-52 sm:w-36 lg:h-56 lg:w-40",
        featured && "h-52 w-36 sm:h-60 sm:w-44 lg:h-64 lg:w-48",
      )}
    >
      <div className={cn("absolute inset-0 bg-gradient-to-br opacity-85", colors)} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_10%,rgba(255,255,255,0.95),transparent_34%),radial-gradient(circle_at_78%_70%,rgba(255,255,255,0.55),transparent_30%)]" />
      <div className="relative flex h-full flex-col justify-between rounded-[1rem] border border-white/65 bg-white/30 p-3 backdrop-blur-[2px] sm:rounded-[1.2rem] sm:p-3.5">
        <div>
          <p className="text-[10px] font-black uppercase tracking-[0.24em] text-studio-ink/58">
            {label}
          </p>
          <h3 className="mt-2 max-w-32 text-lg font-black leading-none text-studio-ink sm:text-xl lg:text-2xl">
            {title}
          </h3>
        </div>
        <div className="space-y-3">
          <div className="h-12 rounded-2xl bg-studio-ink/90 shadow-inner sm:h-16 lg:h-20" />
          <div className="space-y-2">
            <span className="block h-2.5 rounded-full bg-white/78" />
            <span className="block h-2.5 w-2/3 rounded-full bg-white/55" />
          </div>
        </div>
      </div>
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
