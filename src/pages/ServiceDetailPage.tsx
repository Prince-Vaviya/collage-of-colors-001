import { motion } from "motion/react";
import type { ReactNode } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronDown,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import { HeroBackground } from "../components/home/HeroBackground";
import { Button } from "../components/ui/button";
import { servicePageContent } from "../data/servicePageContent";
import type { Service } from "../data/services";

type ServiceDetailPageProps = {
  service: Service;
};

export function ServiceDetailPage({ service }: ServiceDetailPageProps) {
  const content = servicePageContent[service.slug];

  if (!content) {
    return null;
  }

  return (
    <section className="relative overflow-hidden px-5 pb-20 pt-36 font-['Inter_Tight',ui-sans-serif,system-ui,sans-serif]">
      <HeroBackground />
      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <Button asChild variant="outline" size="sm" className="mb-8">
          <a href="#/services">
            <ArrowLeft className="size-4" />
            Back to Services
          </a>
        </Button>

        <ServiceHero service={service} content={content} />
        <ChallengesSection challenges={content.challenges} color={service.color} />
        <SolutionsSection solutions={content.solutions} color={service.color} />
        <ProcessSection steps={content.process} color={service.color} />
        <FaqSection faqs={content.faqs} />
        <FinalCta title={content.finalTitle} button={content.finalButton} />
      </div>
    </section>
  );
}

function ServiceHero({
  service,
  content,
}: {
  service: Service;
  content: (typeof servicePageContent)[string];
}) {
  return (
    <motion.div
      className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-center"
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1] }}
    >
      <div>
        <p
          className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/80 px-4 py-2 text-sm font-extrabold shadow-[0_18px_50px_rgba(31,37,40,0.08)] backdrop-blur"
          style={{ color: service.color }}
        >
          <Sparkles className="size-4" />
          {content.badge}
        </p>
        <h1 className="mt-6 max-w-3xl text-4xl font-extrabold leading-[0.94] text-studio-ink sm:text-7xl lg:text-[5rem]">
          {content.heroTitle}
        </h1>
        <p className="mt-6 max-w-2xl text-2xl font-bold leading-9 text-zinc-600">
          {content.heroSubtitle}
        </p>
        <Button asChild className="mt-8">
          <a href="#/get-your-job-details">
            Discuss Your Requirement
            <MessageCircle className="size-4" />
          </a>
        </Button>
      </div>

      <motion.div
        className="relative min-h-[24rem] overflow-hidden rounded-[2rem] border border-white/80 bg-white/70 p-4 shadow-[0_28px_90px_rgba(31,37,40,0.12)] backdrop-blur-xl"
        initial={{ opacity: 0, rotate: 2, scale: 0.96 }}
        animate={{ opacity: 1, rotate: 0, scale: 1 }}
        transition={{ delay: 0.18, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at 20% 20%, ${service.color}24, transparent 32%), radial-gradient(circle at 82% 68%, rgba(24,168,200,0.14), transparent 28%)`,
          }}
        />
        <img
          src={content.heroImage}
          alt={content.heroImageAlt}
          className="relative h-full min-h-[22rem] w-full rounded-[1.5rem] object-cover"
          draggable={false}
        />
      </motion.div>
    </motion.div>
  );
}

function ChallengesSection({
  challenges,
  color,
}: {
  challenges: Array<{ title: string; description: string }>;
  color: string;
}) {
  return (
    <SectionShell eyebrow="Common Challenges Businesses Face" className="mt-20">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {challenges.map((challenge, index) => (
          <motion.article
            key={challenge.title}
            className="min-h-56 rounded-[1.5rem] border border-white/80 bg-white/76 p-6 shadow-[0_20px_70px_rgba(31,37,40,0.08)] backdrop-blur"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: index * 0.06, duration: 0.55 }}
            whileHover={{ y: -6 }}
          >
            <span
              className="grid size-11 place-items-center rounded-2xl text-white"
              style={{ backgroundColor: color }}
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-7 text-2xl font-extrabold leading-tight text-studio-ink">
              {challenge.title}
            </h3>
            <p className="mt-4 text-base font-semibold leading-7 text-zinc-600">
              {challenge.description}
            </p>
          </motion.article>
        ))}
      </div>
    </SectionShell>
  );
}

function SolutionsSection({
  solutions,
  color,
}: {
  solutions: Array<{ title: string; description: string }>;
  color: string;
}) {
  return (
    <SectionShell eyebrow="How Collage of Colours Helps" className="mt-20">
      <div className="grid gap-5 lg:grid-cols-2">
        {solutions.map((solution, index) => (
          <motion.article
            key={solution.title}
            className="group flex min-h-40 gap-5 rounded-[1.5rem] border border-studio-ink/10 bg-white/72 p-6 shadow-[0_18px_60px_rgba(31,37,40,0.07)] backdrop-blur"
            initial={{ opacity: 0, x: index % 2 === 0 ? -32 : 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          >
            <span
              className="mt-1 grid size-9 shrink-0 place-items-center rounded-full text-white"
              style={{ backgroundColor: color }}
            >
              <Check className="size-4" />
            </span>
            <div>
              <h3 className="text-2xl font-extrabold text-studio-ink">{solution.title}</h3>
              <p className="mt-3 text-lg font-semibold leading-8 text-zinc-600">
                {solution.description}
              </p>
            </div>
          </motion.article>
        ))}
      </div>
    </SectionShell>
  );
}

function ProcessSection({ steps, color }: { steps: string[]; color: string }) {
  return (
    <SectionShell eyebrow="Our Process" className="mt-20">
      <div className="rounded-[2rem] border border-white/80 bg-white/74 p-5 shadow-[0_24px_80px_rgba(31,37,40,0.08)] backdrop-blur-xl md:p-8 lg:p-10">
        <ol className="grid gap-6 md:grid-cols-5 md:items-start lg:gap-8">
          {steps.map((step, index) => (
            <ProcessStep
              key={step}
              step={step}
              index={index}
              isLast={index === steps.length - 1}
              color={color}
            />
          ))}
        </ol>
      </div>
    </SectionShell>
  );
}

function ProcessStep({
  step,
  index,
  isLast,
  color,
}: {
  step: string;
  index: number;
  isLast: boolean;
  color: string;
}) {
  const stepDelay = index * 0.72;
  const doneColor = color === "#F6C945" ? "#10B981" : color;

  return (
    <li className="relative flex flex-col items-center md:block">
      <motion.div
        className="relative z-10 w-full rounded-[1rem] border border-studio-ink/10 bg-[#f8f8f4] px-4 py-5 text-center shadow-[0_14px_38px_rgba(31,37,40,0.04)]"
        initial={{ opacity: 0, y: 24, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ delay: stepDelay, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.span
          className="relative mx-auto grid size-10 place-items-center rounded-full text-xs font-extrabold text-white"
          initial={{ backgroundColor: "#1F2528" }}
          whileInView={{ backgroundColor: doneColor }}
          viewport={{ once: true }}
          transition={{ delay: stepDelay + 0.34, duration: 0.26 }}
        >
          <motion.span
            initial={{ opacity: 1, scale: 1 }}
            whileInView={{ opacity: 0, scale: 0.72 }}
            viewport={{ once: true }}
            transition={{ delay: stepDelay + 0.34, duration: 0.18 }}
          >
            {String(index + 1).padStart(2, "0")}
          </motion.span>
          <motion.span
            className="absolute inset-0 grid place-items-center"
            initial={{ opacity: 0, scale: 0.45, rotate: -18 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ delay: stepDelay + 0.5, duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
          >
            <Check className="size-4" />
          </motion.span>
        </motion.span>
        <p className="mt-4 min-h-12 text-base font-extrabold leading-6 text-studio-ink lg:text-lg lg:leading-7">
          {step}
        </p>
      </motion.div>

      {!isLast && (
        <>
          <span className="block h-14 w-1 overflow-hidden rounded-full bg-studio-ink/15 md:hidden">
            <motion.span
              className="block h-full w-full origin-top rounded-full"
              style={{ backgroundColor: doneColor }}
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ delay: stepDelay + 0.62, duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
            />
          </span>
          <span className="pointer-events-none absolute left-[calc(100%+0.35rem)] top-[4.8rem] z-20 hidden h-1 w-7 overflow-hidden rounded-full bg-studio-ink/15 md:block lg:left-[calc(100%+0.4rem)] lg:w-8">
            <motion.span
              className="block h-full w-full origin-left rounded-full"
              style={{ backgroundColor: doneColor }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ delay: stepDelay + 0.62, duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
            />
          </span>
        </>
      )}
    </li>
  );
}

function FaqSection({
  faqs,
}: {
  faqs: Array<{ question: string; answer: string }>;
}) {
  return (
    <SectionShell eyebrow="FAQ" className="mt-20">
      <div className="mx-auto max-w-4xl space-y-3">
        {faqs.map((faq) => (
          <details
            key={faq.question}
            className="group rounded-[1.25rem] border border-white/80 bg-white/78 p-5 shadow-[0_18px_60px_rgba(31,37,40,0.07)] backdrop-blur"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-xl font-extrabold text-studio-ink">
              {faq.question}
              <ChevronDown className="size-5 shrink-0 transition group-open:rotate-180" />
            </summary>
            <p className="mt-4 text-lg font-semibold leading-8 text-zinc-600">{faq.answer}</p>
          </details>
        ))}
      </div>
    </SectionShell>
  );
}

function FinalCta({ title, button }: { title: string; button: string }) {
  return (
    <motion.div
      className="mt-20 rounded-[2rem] bg-studio-ink px-6 py-12 text-center text-white shadow-[0_30px_90px_rgba(31,37,40,0.18)] sm:px-10"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.62 }}
    >
      <h2 className="text-5xl font-extrabold leading-none sm:text-6xl">{title}</h2>
      <Button asChild className="mt-8 bg-white text-studio-ink hover:bg-white/90">
        <a href="#/contact-us">
          {button}
          <ArrowRight className="size-4" />
        </a>
      </Button>
    </motion.div>
  );
}

function SectionShell({
  eyebrow,
  className,
  children,
}: {
  eyebrow: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section className={className}>
      <motion.h2
        className="mb-8 text-4xl font-extrabold leading-none text-studio-ink sm:text-5xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
      >
        {eyebrow}
      </motion.h2>
      {children}
    </section>
  );
}
