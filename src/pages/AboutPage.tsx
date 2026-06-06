import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  Check,
  Clock3,
  HeartHandshake,
  Layers3,
  Linkedin,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import cutoutsImage from "../assets/cutouts.png";
import greetingImage from "../assets/greeting.png";
import identityImage from "../assets/identity.png";
import spiralImage from "../assets/spiral.png";
import { HeroBackground } from "../components/home/HeroBackground";
import { Button } from "../components/ui/button";
import { services } from "../data/services";
import { cn } from "../lib/utils";

const trustStats = [
  { value: 1, pad: 2, suffix: "", label: "studio for design, print, packaging and gifting" },
  { value: 6, pad: 2, suffix: "", label: "core service verticals under one roof" },
  {
    value: 151,
    pad: 0,
    suffix: "+",
    label: "clients served with sharper brand presence and better print performance",
  },
  { value: 100, pad: 0, suffix: "%", label: "focus on finish, clarity and practical delivery" },
];

const values = [
  {
    icon: BadgeCheck,
    title: "Premium Quality",
    text: "We treat every visiting card, label, box, board and brochure like a brand touchpoint, not just a print order.",
    color: "#1D4ED8",
  },
  {
    icon: Clock3,
    title: "On-Time Production",
    text: "From urgent campaigns to bulk print runs, the work is planned around clear timelines and dependable handover.",
    color: "#18A8C8",
  },
  {
    icon: HeartHandshake,
    title: "Helpful Partnership",
    text: "Clients come with ideas, rough references, or ready artwork. The goal is to guide them to a cleaner final output.",
    color: "#E83E7C",
  },
];

const studioSteps = [
  "Understand the requirement",
  "Suggest the right material or format",
  "Design or refine the artwork",
  "Print, finish and check output",
  "Deliver brand-ready work",
];

const teams = [
  {
    title: "Design Desk",
    text: "Builds identities, layouts, packaging graphics and communication pieces that make the business easier to understand.",
  },
  {
    title: "Print Production",
    text: "Handles digital, offset and large-format work with attention to color, size, paper, material and quantity.",
  },
  {
    title: "Finishing & Delivery",
    text: "Brings the final polish through cutting, lamination, binding, packing, signage preparation and handover checks.",
  },
];

const managementDetails = [
  {
    name: "Viren Jatrara",
    role: "Management & Client Relations",
    text: "Keeps client requirements, project priorities and delivery expectations clear from the first discussion.",
    icon: HeartHandshake,
    color: "#0A66C2",
    href: "https://www.linkedin.com/in/viren-jatrara-7b4760a6/",
  },
  {
    name: "Pankaj Jatrara",
    role: "Design, print and material planning",
    text: "Aligns artwork, print methods, materials and finishing choices so the final output feels intentional.",
    icon: Layers3,
    color: "#E83E7C",
  },
  {
    name: "Dipesh Jatrara",
    role: "Quality checks and handover",
    text: "Oversees finishing, packing, dispatch coordination and readiness checks before work reaches the client.",
    icon: BadgeCheck,
    color: "#10B981",
    href: "https://www.linkedin.com/in/dipeshjatrara/",
  },
];

export function AboutPage() {
  return (
    <section className="relative overflow-hidden px-5 pb-20 pt-36 font-['Inter_Tight',ui-sans-serif,system-ui,sans-serif]">
      <HeroBackground />
      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <AboutHero />
        <TrustStrip />
        <QualitySection />
        <VisionMissionSection />
        <ServicesSection />
        <TeamSection />
        <ManagementSection />
        <FinalCta />
      </div>
    </section>
  );
}

function AboutHero() {
  return (
    <motion.div
      className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end"
      initial={{ opacity: 0, y: 26 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.68, ease: [0.16, 1, 0.3, 1] }}
    >
      <div>
        <p className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/80 px-4 py-2 text-sm font-extrabold text-studio-blue shadow-[0_18px_50px_rgba(31,37,40,0.08)] backdrop-blur">
          <Sparkles className="size-4" />
          About Collage of Colours
        </p>
        <h1 className="mt-6 max-w-5xl text-4xl font-extrabold leading-[0.92] text-studio-ink sm:text-7xl lg:text-[5.4rem]">
          Your one-stop studio for print-ready brand moments.
        </h1>
      </div>
      <div className="max-w-xl lg:justify-self-end">
        <p className="text-xl font-semibold leading-8 text-zinc-600">
          Collage of Colours brings design, printing, signage, packaging and gifting together
          so businesses can move from rough idea to finished brand asset with less friction.
        </p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <Button asChild>
            <a href="#/services">
              Explore Services
              <ArrowRight className="size-4" />
            </a>
          </Button>
          <Button asChild variant="outline">
            <a href="#/work-gallery">View Work Gallery</a>
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

function TrustStrip() {
  const statsRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(statsRef, { once: true, margin: "-80px" });

  return (
    <div
      ref={statsRef}
      className="mt-12 grid overflow-hidden rounded-[1.6rem] border border-white/80 bg-white/78 shadow-[0_26px_90px_rgba(31,37,40,0.08)] backdrop-blur-xl sm:grid-cols-2 lg:grid-cols-4"
    >
      {trustStats.map((stat, index) => (
        <motion.div
          key={stat.label}
          className={cn(
            "p-6 sm:p-7",
            index > 0 && "border-t border-studio-ink/10 sm:border-l sm:border-t-0",
          )}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: index * 0.08, duration: 0.45 }}
        >
          <AnimatedNumber
            value={stat.value}
            pad={stat.pad}
            suffix={stat.suffix}
            isActive={isInView}
            className="text-5xl font-extrabold text-studio-ink"
          />
          <p className="mt-3 text-base font-bold leading-6 text-zinc-600">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  );
}

function AnimatedNumber({
  value,
  pad,
  suffix,
  isActive,
  className,
}: {
  value: number;
  pad: number;
  suffix: string;
  isActive: boolean;
  className?: string;
}) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isActive) {
      return;
    }

    let frameId = 0;
    const duration = 1400;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(Math.round(value * eased));

      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      }
    };

    frameId = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frameId);
  }, [isActive, value]);

  const formattedValue = String(displayValue).padStart(pad, "0");

  return (
    <p className={className}>
      {formattedValue}
      {suffix}
    </p>
  );
}

function QualitySection() {
  return (
    <section className="mt-16 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
      <motion.div
        className="relative min-h-[30rem] overflow-hidden rounded-[1.8rem] shadow-[0_28px_90px_rgba(31,37,40,0.12)]"
        initial={{ opacity: 0, x: -32 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.68, ease: [0.16, 1, 0.3, 1] }}
      >
        <img
          src={identityImage}
          alt="Brand stationery and print identity samples"
          className="h-full min-h-[30rem] w-full object-cover"
          draggable={false}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-studio-ink/10 via-transparent to-white/28" />
        <div className="absolute bottom-5 left-5 right-5 rounded-[1.2rem] bg-white/84 p-5 backdrop-blur">
          <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-zinc-400">
            Built for output
          </p>
          <p className="mt-2 text-2xl font-extrabold leading-8 text-studio-ink">
            Good design is only complete when it survives paper, material, scale and finish.
          </p>
        </div>
      </motion.div>

      <div className="grid gap-5">
        {values.map((value, index) => {
          const Icon = value.icon;

          return (
            <motion.article
              key={value.title}
              className="group relative overflow-hidden rounded-[1.5rem] border border-white/80 bg-white/78 p-6 shadow-[0_20px_70px_rgba(31,37,40,0.07)] backdrop-blur-xl"
              initial={{ opacity: 0, x: 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.08, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4 }}
            >
              <span
                className="grid size-13 place-items-center rounded-2xl text-white shadow-[0_18px_50px_rgba(31,37,40,0.14)]"
                style={{ backgroundColor: value.color }}
              >
                <Icon className="size-6" />
              </span>
              <h2 className="mt-5 text-3xl font-extrabold text-studio-ink">{value.title}</h2>
              <p className="mt-3 max-w-2xl text-lg font-semibold leading-7 text-zinc-600">
                {value.text}
              </p>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}

function VisionMissionSection() {
  return (
    <section className="mt-16 grid gap-6 lg:grid-cols-2">
      <StatementBlock
        icon={Target}
        eyebrow="Our Vision"
        title="Make every business look ready before the world sees it."
        text="We want businesses to feel confident about how they appear across cards, catalogues, packaging, signage, events and gifting."
        color="#1D4ED8"
      />
      <StatementBlock
        icon={Layers3}
        eyebrow="Our Mission"
        title="Keep design, print and finish working as one process."
        text="The mission is simple: understand the need, suggest the right format, produce with care, and deliver work that helps the client communicate better."
        color="#E83E7C"
      />
    </section>
  );
}

function StatementBlock({
  icon: Icon,
  eyebrow,
  title,
  text,
  color,
}: {
  icon: typeof Target;
  eyebrow: string;
  title: string;
  text: string;
  color: string;
}) {
  return (
    <motion.article
      className="relative overflow-hidden rounded-[1.8rem] border border-white/80 bg-white/78 p-7 shadow-[0_26px_90px_rgba(31,37,40,0.08)] backdrop-blur-xl sm:p-8"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.58, ease: [0.16, 1, 0.3, 1] }}
    >
      <div
        className="absolute -right-20 -top-20 size-52 rounded-full opacity-15 blur-3xl"
        style={{ backgroundColor: color }}
      />
      <span
        className="relative grid size-13 place-items-center rounded-2xl text-white"
        style={{ backgroundColor: color }}
      >
        <Icon className="size-6" />
      </span>
      <p className="relative mt-6 text-sm font-extrabold uppercase tracking-[0.18em] text-zinc-400">
        {eyebrow}
      </p>
      <h2 className="relative mt-3 text-4xl font-extrabold leading-[0.98] text-studio-ink">
        {title}
      </h2>
      <p className="relative mt-5 text-lg font-semibold leading-8 text-zinc-600">{text}</p>
    </motion.article>
  );
}

function ServicesSection() {
  return (
    <section className="mt-16">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-zinc-400">
            What we bring together
          </p>
          <h2 className="mt-3 max-w-3xl text-4xl font-extrabold leading-none text-studio-ink sm:text-6xl">
            Design, print, visibility, packaging and recall.
          </h2>
        </div>
        <Button asChild variant="outline">
          <a href="#/services">
            All Services
            <ArrowRight className="size-4" />
          </a>
        </Button>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <motion.a
            key={service.slug}
            href={service.href}
            className="group relative overflow-hidden rounded-[1.4rem] border border-white/80 bg-white/78 p-6 shadow-[0_18px_60px_rgba(31,37,40,0.06)] backdrop-blur-xl"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: index * 0.04, duration: 0.45 }}
            whileHover={{ y: -5 }}
          >
            <span
              className="absolute inset-x-0 top-0 h-1 transition duration-500 group-hover:h-1.5"
              style={{ backgroundColor: service.color }}
            />
            <h3 className="text-2xl font-extrabold text-studio-ink">{service.title}</h3>
            <p className="mt-3 text-base font-semibold leading-6 text-zinc-600">{service.proof}</p>
            <span className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-studio-ink">
              View service
              <ArrowRight className="size-4 transition group-hover:translate-x-1" />
            </span>
          </motion.a>
        ))}
      </div>
    </section>
  );
}

function TeamSection() {
  return (
    <section className="mt-16 overflow-hidden rounded-[1.8rem] border border-white/80 bg-white/78 shadow-[0_26px_90px_rgba(31,37,40,0.08)] backdrop-blur-xl">
      <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative min-h-[24rem] overflow-hidden">
          <img
            src={spiralImage}
            alt="Printing material and production samples"
            className="h-full min-h-[24rem] w-full object-cover"
            draggable={false}
          />
          <img
            src={greetingImage}
            alt="Custom print and gifting samples"
            className="absolute bottom-6 right-6 h-44 w-36 rotate-6 rounded-[1rem] object-cover shadow-[0_24px_70px_rgba(31,37,40,0.22)]"
            draggable={false}
          />
          <img
            src={cutoutsImage}
            alt="Marketing print samples"
            className="absolute left-6 top-6 h-36 w-44 -rotate-6 rounded-[1rem] object-cover shadow-[0_24px_70px_rgba(31,37,40,0.18)]"
            draggable={false}
          />
        </div>

        <div className="p-6 sm:p-8 lg:p-10">
          <p className="inline-flex items-center gap-2 rounded-full bg-studio-ink px-4 py-2 text-sm font-extrabold text-white">
            <Users className="size-4" />
            The team behind the output
          </p>
          <h2 className="mt-6 text-4xl font-extrabold leading-none text-studio-ink sm:text-6xl">
            Different hands, one standard.
          </h2>
          <div className="mt-8 grid gap-4">
            {teams.map((team) => (
              <div key={team.title} className="flex gap-4">
                <span className="mt-1 grid size-7 shrink-0 place-items-center rounded-full bg-emerald-500 text-white">
                  <Check className="size-4" />
                </span>
                <div>
                  <h3 className="text-xl font-extrabold text-studio-ink">{team.title}</h3>
                  <p className="mt-1 text-base font-semibold leading-7 text-zinc-600">
                    {team.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-9 rounded-[1.2rem] border border-studio-ink/10 bg-[#f8f8f4] p-5">
            <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-zinc-400">
              How a project moves
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {studioSteps.map((step, index) => (
                <span
                  key={step}
                  className="rounded-full bg-white px-3 py-2 text-sm font-extrabold text-zinc-600 shadow-[0_10px_24px_rgba(31,37,40,0.04)]"
                >
                  {index + 1}. {step}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ManagementSection() {
  return (
    <section className="mt-16">
      <motion.div
        className="grid gap-6 lg:grid-cols-[0.78fr_1.22fr] lg:items-end"
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.58, ease: [0.16, 1, 0.3, 1] }}
      >
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/80 px-4 py-2 text-sm font-extrabold text-studio-blue shadow-[0_18px_50px_rgba(31,37,40,0.08)] backdrop-blur">
            <Users className="size-4" />
            Management Team
          </p>
          <h2 className="mt-5 max-w-3xl text-4xl font-extrabold leading-none text-studio-ink sm:text-6xl">
            The people keeping every job accountable.
          </h2>
        </div>
        <p className="max-w-2xl text-lg font-semibold leading-8 text-zinc-600 lg:justify-self-end">
          From client briefing to final delivery, management keeps design, production, finishing
          and communication moving in one practical direction.
        </p>
      </motion.div>

      <div className="mt-8 grid gap-5 lg:grid-cols-3">
        {managementDetails.map((member, index) => {
          const Icon = member.icon;
          const content = (
            <>
              <span
                className="grid size-13 place-items-center rounded-2xl text-white shadow-[0_18px_50px_rgba(31,37,40,0.14)]"
                style={{ backgroundColor: member.color }}
              >
                <Icon className="size-6" />
              </span>
              <p className="mt-6 text-xs font-extrabold uppercase tracking-[0.16em] text-zinc-400">
                {member.role}
              </p>
              <h3 className="mt-2 text-3xl font-extrabold leading-tight text-studio-ink">
                {member.name}
              </h3>
              <p className="mt-4 text-base font-semibold leading-7 text-zinc-600">{member.text}</p>
              {member.href && (
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-[#0A66C2]">
                  Connect on LinkedIn
                  <Linkedin className="size-4" />
                </span>
              )}
            </>
          );

          const className =
            "block group relative min-h-full overflow-hidden rounded-[1.5rem] border border-white/80 bg-white/80 p-6 shadow-[0_20px_70px_rgba(31,37,40,0.07)] backdrop-blur-xl transition duration-500 hover:-translate-y-1";

          return (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              {member.href ? (
                <a href={member.href} target="_blank" rel="noreferrer" className={className}>
                  {content}
                </a>
              ) : (
                <article className={className}>{content}</article>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="mt-16 overflow-hidden rounded-[1.8rem] bg-studio-ink p-7 text-white shadow-[0_30px_90px_rgba(31,37,40,0.18)] sm:p-9 lg:p-10">
      <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-white/52">
            Ready when your brand is
          </p>
          <h2 className="mt-3 max-w-3xl text-4xl font-extrabold leading-none sm:text-6xl">
            Let’s make your next print decision feel simpler.
          </h2>
        </div>
        <Button asChild variant="outline" className="border-white/20 bg-white text-studio-ink hover:bg-white">
          <a href="#/get-your-job-details">
            Get Your Job Details
            <ArrowRight className="size-4" />
          </a>
        </Button>
      </div>
    </section>
  );
}
