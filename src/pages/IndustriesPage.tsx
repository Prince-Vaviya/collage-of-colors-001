import { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Check, Sparkles, X } from "lucide-react";
import { HeroBackground } from "../components/home/HeroBackground";
import { Button } from "../components/ui/button";
import { industries, type Industry } from "../data/industries";
import { cn } from "../lib/utils";

export function IndustriesPage() {
  const [selectedIndustry, setSelectedIndustry] = useState<Industry>(
    industries.find((industry) => industry.id === "pharma") ?? industries[0],
  );

  return (
    <section className="relative overflow-hidden px-5 pb-20 pt-36 font-['Inter_Tight',ui-sans-serif,system-ui,sans-serif]">
      <HeroBackground />
      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/80 px-4 py-2 text-sm font-extrabold text-studio-blue shadow-[0_18px_50px_rgba(31,37,40,0.08)] backdrop-blur">
              <Sparkles className="size-4" />
              Choose your industry
            </p>
            <h1
              className="mt-6 max-w-[74rem] text-4xl font-extrabold leading-[0.92] text-studio-ink sm:text-7xl lg:text-[5.6rem] xl:text-[6.2rem]"
              aria-label="Industry-ready design, print, and packaging."
            >
              <span aria-hidden="true" className="block sm:whitespace-nowrap">
                Industry-ready design,
              </span>
              <span aria-hidden="true" className="block sm:whitespace-nowrap">
                print, and packaging.
              </span>
            </h1>
          </div>
          <p className="max-w-4xl text-xl font-semibold leading-8 text-zinc-600">
            Select your business type to see common branding problems, practical print solutions,
            and relevant services Collage of Colours can support.
          </p>
        </motion.div>

        <IndustrySelector
          selectedIndustry={selectedIndustry}
          onSelectIndustry={setSelectedIndustry}
        />
        <IndustryDetail industry={selectedIndustry} />
      </div>
    </section>
  );
}

function IndustrySelector({
  selectedIndustry,
  onSelectIndustry,
}: {
  selectedIndustry: Industry;
  onSelectIndustry: (industry: Industry) => void;
}) {
  return (
    <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-4 lg:grid-cols-5">
      {industries.map((industry, index) => {
        const isSelected = selectedIndustry.id === industry.id;

        return (
          <IndustryCard
            key={industry.id}
            industry={industry}
            index={index}
            isSelected={isSelected}
            onSelect={() => onSelectIndustry(industry)}
          />
        );
      })}
    </div>
  );
}

function IndustryCard({
  industry,
  index,
  isSelected,
  onSelect,
}: {
  industry: Industry;
  index: number;
  isSelected: boolean;
  onSelect: () => void;
}) {
  return (
    <motion.button
      type="button"
      onClick={onSelect}
      className={cn(
        "group relative min-h-28 overflow-hidden rounded-[1.2rem] border border-white/80 bg-white/76 p-4 text-left shadow-[0_18px_60px_rgba(31,37,40,0.07)] backdrop-blur transition-[border-color,background-color,box-shadow] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] sm:min-h-32 lg:min-h-40 lg:rounded-[1.4rem] lg:p-5",
        isSelected && "border-studio-ink bg-studio-ink text-white",
      )}
      initial={{ opacity: 0, y: 22 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.035, duration: 0.45 }}
      whileHover={{
        y: -7,
        rotate: index % 2 === 0 ? -1 : 1,
        transition: { type: "spring", stiffness: 180, damping: 18, mass: 0.65 },
      }}
      whileTap={{ scale: 0.98 }}
    >
      <span
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute -inset-y-12 -left-1/2 w-1/3 -translate-x-[120%] rotate-12 opacity-0 transition-[transform,opacity] duration-[1250ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-[520%] group-hover:opacity-100",
          isSelected ? "mix-blend-screen" : "mix-blend-multiply",
        )}
        style={{
          background: isSelected
            ? "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.58), transparent)"
            : "linear-gradient(90deg, transparent, rgba(113, 113, 122, 0.2), transparent)",
        }}
      />
      <span className="relative z-10 text-3xl lg:text-4xl" aria-hidden="true">
        {industry.icon}
      </span>
      <span className="relative z-10 mt-4 block text-xl font-extrabold leading-none lg:mt-5 lg:text-2xl">
        {industry.label}
      </span>
      <span
        className={cn(
          "relative z-10 mt-3 block h-1 w-9 rounded-full bg-studio-magenta transition-[width,background-color] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-14 lg:mt-4 lg:w-10 lg:group-hover:w-16",
          isSelected && "bg-white",
        )}
      />
    </motion.button>
  );
}

function IndustryDetail({ industry }: { industry: Industry }) {
  return (
    <motion.div
      key={industry.id}
      className="mt-12 overflow-hidden rounded-[2rem] border border-white/80 bg-white/76 shadow-[0_28px_90px_rgba(31,37,40,0.09)] backdrop-blur-xl"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[0.88fr_1.12fr] lg:p-10">
        <div>
          <p className="text-sm font-extrabold text-zinc-400">Selected Industry</p>
          <h2 className="mt-3 text-3xl font-extrabold leading-none text-studio-ink sm:text-6xl">
            {industry.title}
          </h2>
          <p className="mt-5 text-xl font-bold leading-8 text-zinc-600 sm:text-2xl sm:leading-9">
            {industry.statement}
          </p>
          <Button asChild className="mt-8">
            <a href="#/contact-us?section=enquiry-form">
              Discuss Requirement
              <ArrowRight className="size-4" />
            </a>
          </Button>
        </div>

        <div className="grid gap-6">
          <InfoList
            title="Common Challenges"
            tone="danger"
            items={industry.challenges}
          />
          <InfoList
            title="How Collage of Colours Helps"
            tone="success"
            items={industry.helps}
          />
        </div>
      </div>

      <div className="border-t border-studio-ink/10 bg-[#f8f8f4]/70 p-6 sm:p-8 lg:p-10">
        <h3 className="text-3xl font-extrabold text-studio-ink">
          Services for {industry.title}
        </h3>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {industry.services.map((service, index) => (
            <motion.div
              key={service}
              className="rounded-[1rem] border border-white/80 bg-white/84 px-5 py-4 text-base font-extrabold text-studio-ink shadow-[0_14px_40px_rgba(31,37,40,0.05)]"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.04, duration: 0.36 }}
            >
              {service}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function InfoList({
  title,
  items,
  tone,
}: {
  title: string;
  items: string[];
  tone: "danger" | "success";
}) {
  const isDanger = tone === "danger";

  return (
    <div className="rounded-[1.4rem] border border-studio-ink/10 bg-[#f8f8f4] p-5">
      <h3 className="text-2xl font-extrabold text-studio-ink">{title}</h3>
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-lg font-bold leading-7 text-zinc-700">
            <span
              className={cn(
                "mt-1 grid size-6 shrink-0 place-items-center rounded-full text-white",
                isDanger ? "bg-rose-500" : "bg-emerald-500",
              )}
            >
              {isDanger ? <X className="size-4" /> : <Check className="size-4" />}
            </span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
