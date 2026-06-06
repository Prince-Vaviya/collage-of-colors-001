import { useMemo, useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Check, Play, Sparkles } from "lucide-react";
import { HeroBackground } from "../components/home/HeroBackground";
import { Button } from "../components/ui/button";
import {
  galleryCategories,
  workGalleryItems,
  type GalleryCategory,
  type GalleryItem,
} from "../data/workGallery";
import { cn } from "../lib/utils";

export function WorkGalleryPage() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("All");
  const filteredItems = useMemo(
    () =>
      activeCategory === "All"
        ? workGalleryItems
        : workGalleryItems.filter((item) => item.category === activeCategory),
    [activeCategory],
  );

  return (
    <section className="relative overflow-hidden px-5 pb-20 pt-36 font-['Inter_Tight',ui-sans-serif,system-ui,sans-serif]">
      <HeroBackground />
      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <motion.div
          className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end"
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.68, ease: [0.16, 1, 0.3, 1] }}
        >
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/80 px-4 py-2 text-sm font-extrabold text-studio-blue shadow-[0_18px_50px_rgba(31,37,40,0.08)] backdrop-blur">
              <Sparkles className="size-4" />
              Work Gallery
            </p>
            <h1 className="mt-6 max-w-5xl text-4xl font-extrabold leading-[0.92] text-studio-ink sm:text-7xl lg:text-[5.4rem]">
              Visual proof that the final output matters.
            </h1>
          </div>
          <div className="max-w-xl lg:justify-self-end">
            <p className="text-xl font-semibold leading-8 text-zinc-600">
              Browse design, print, signage, packaging, gifting and video-style work stories:
              what the customer wanted, and what Collage of Colours delivered.
            </p>
            <Button asChild className="mt-7">
              <a href="#/get-your-job-details">
                Start Your Project
                <ArrowRight className="size-4" />
              </a>
            </Button>
          </div>
        </motion.div>

        <CategoryFilter
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
        />

        <motion.div
          key={activeCategory}
          className="mt-10 space-y-7"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        >
          {filteredItems.map((item, index) => (
            <WorkShowcaseRow key={item.id} item={item} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function CategoryFilter({
  activeCategory,
  onSelectCategory,
}: {
  activeCategory: GalleryCategory;
  onSelectCategory: (category: GalleryCategory) => void;
}) {
  return (
    <div className="mt-12 flex flex-wrap gap-3">
      {galleryCategories.map((category) => {
        const isActive = activeCategory === category;

        return (
          <button
            key={category}
            type="button"
            onClick={() => onSelectCategory(category)}
            className={cn(
              "rounded-full border px-5 py-3 text-sm font-extrabold shadow-[0_14px_40px_rgba(31,37,40,0.05)] transition duration-300",
              isActive
                ? "border-studio-ink bg-studio-ink text-white"
                : "border-white/80 bg-white/78 text-zinc-600 hover:-translate-y-0.5 hover:bg-white hover:text-studio-ink",
            )}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}

function WorkShowcaseRow({ item, index }: { item: GalleryItem; index: number }) {
  const isReversed = index % 2 === 1;

  return (
    <motion.article
      className="group relative overflow-hidden rounded-[1.35rem] border border-white/80 bg-white/80 p-3 shadow-[0_26px_90px_rgba(31,37,40,0.08)] backdrop-blur-xl sm:rounded-[1.6rem] sm:p-5 lg:p-6"
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay: index * 0.035, duration: 0.58, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{
        y: -5,
        transition: { type: "spring", stiffness: 190, damping: 20, mass: 0.7 },
      }}
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-1 opacity-80 transition duration-500 group-hover:h-1.5"
        style={{ backgroundColor: item.accent }}
      />
      <div
        className="pointer-events-none absolute -right-24 -top-24 size-64 rounded-full opacity-0 blur-3xl transition duration-700 group-hover:opacity-20"
        style={{ backgroundColor: item.accent }}
      />
      <div className="grid gap-0 overflow-hidden rounded-[1.25rem] lg:grid-cols-2 lg:items-stretch">
        <div className={cn("min-h-full", isReversed && "lg:order-2")}>
          <GalleryMedia item={item} />
        </div>
        <div
          className={cn(
            "flex min-h-full flex-col justify-between bg-[#f8f8f4]/80 p-5 sm:p-8 lg:p-10",
            isReversed && "lg:order-1",
          )}
        >
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-zinc-400">
              {item.category}
            </p>
            <h2 className="mt-3 max-w-xl text-3xl font-extrabold leading-[0.94] text-studio-ink sm:text-5xl">
              {item.title}
            </h2>
            <div className="mt-5 grid gap-4 sm:mt-6">
              <StoryLine label="What customer wanted" text={item.wanted} />
              <div className="flex items-center gap-3 text-sm font-extrabold text-zinc-400">
                <span className="h-px flex-1 bg-studio-ink/12" />
                <ArrowRight className="size-4" />
                <span className="h-px flex-1 bg-studio-ink/12" />
              </div>
              <StoryLine label="What we delivered" text={item.delivered} tone="success" />
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-2 sm:mt-8">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white bg-white/80 px-3 py-1 text-xs font-extrabold text-zinc-500 shadow-[0_10px_24px_rgba(31,37,40,0.04)]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function GalleryMedia({ item }: { item: GalleryItem }) {
  if (item.type === "before-after") {
    return <BeforeAfterMedia item={item} />;
  }

  if (item.type === "video") {
    return <YoutubeMedia item={item} />;
  }

  return (
    <div className="relative h-full min-h-[16rem] overflow-hidden bg-white sm:min-h-[22rem]">
      <img
        src={item.image}
        alt={item.title}
        className="h-full min-h-[16rem] w-full object-cover transition duration-700 group-hover:scale-105 sm:min-h-[22rem]"
        draggable={false}
      />
      <MediaShade accent={item.accent} />
    </div>
  );
}

function BeforeAfterMedia({ item }: { item: GalleryItem }) {
  const [sliderValue, setSliderValue] = useState(54);

  return (
    <div className="relative h-full min-h-[16rem] overflow-hidden bg-white sm:min-h-[22rem]">
      <img
        src={item.image}
        alt={`${item.title} after`}
        className="h-full min-h-[16rem] w-full object-cover sm:min-h-[22rem]"
        draggable={false}
      />
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderValue}% 0 0)` }}
      >
        <img
          src={item.image}
          alt={`${item.title} before`}
          className="h-full w-full scale-105 object-cover grayscale contrast-75 saturate-50"
          draggable={false}
        />
        <div className="absolute inset-0 bg-white/28" />
      </div>
      <div
        className="absolute inset-y-0 w-0.5 bg-white shadow-[0_0_24px_rgba(31,37,40,0.35)]"
        style={{ left: `${sliderValue}%` }}
      >
        <span className="absolute left-1/2 top-1/2 grid size-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-studio-ink shadow-[0_14px_40px_rgba(31,37,40,0.18)]">
          <ArrowRight className="size-4" />
        </span>
      </div>
      <div className="absolute left-4 top-4 rounded-full bg-studio-ink/80 px-3 py-1 text-xs font-extrabold text-white backdrop-blur">
        Before
      </div>
      <div className="absolute right-4 top-4 rounded-full bg-white/85 px-3 py-1 text-xs font-extrabold text-studio-ink backdrop-blur">
        After
      </div>
      <input
        aria-label={`Compare before and after for ${item.title}`}
        type="range"
        min="18"
        max="82"
        value={sliderValue}
        onChange={(event) => setSliderValue(Number(event.target.value))}
        className="absolute inset-x-5 bottom-5 h-1 cursor-ew-resize accent-studio-ink"
      />
    </div>
  );
}

function YoutubeMedia({ item }: { item: GalleryItem }) {
  const embedUrl = item.youtubeEmbedUrl ?? "https://www.youtube.com/embed?listType=search&list=printing%20branding%20process";
  const src = embedUrl.includes("?")
    ? `${embedUrl}&rel=0&modestbranding=1`
    : `${embedUrl}?rel=0&modestbranding=1`;
  const videoId = getYoutubeVideoId(embedUrl);
  const watchUrl = videoId ? `https://www.youtube.com/watch?v=${videoId}` : "https://www.youtube.com";
  const thumbnailUrl = videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : item.image;

  return (
    <div className="relative h-full min-h-[16rem] overflow-hidden bg-white sm:min-h-[22rem]">
      <a
        href={watchUrl}
        target="_blank"
        rel="noreferrer"
        className="group/video relative flex h-full min-h-[16rem] items-center justify-center overflow-hidden sm:hidden"
        aria-label={`Watch ${item.title} on YouTube`}
      >
        <img
          src={thumbnailUrl}
          alt={`${item.title} video preview`}
          className="absolute inset-0 h-full w-full object-cover"
          draggable={false}
        />
        <span className="absolute inset-0 bg-studio-ink/42" />
        <span className="relative grid size-16 place-items-center rounded-full bg-white text-studio-ink shadow-[0_18px_50px_rgba(31,37,40,0.22)] transition group-hover/video:scale-105">
          <Play className="ml-1 size-7 fill-current" />
        </span>
      </a>
      <iframe
        title={item.title}
        src={src}
        className="hidden h-full min-h-[16rem] w-full sm:block sm:min-h-[22rem]"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </div>
  );
}

function getYoutubeVideoId(url: string) {
  const match = url.match(/(?:embed\/|v=)([A-Za-z0-9_-]{6,})/);
  return match?.[1];
}

function MediaShade({ accent }: { accent: string }) {
  return (
    <div
      className="pointer-events-none absolute inset-0 opacity-0 mix-blend-multiply transition duration-700 group-hover:opacity-100"
      style={{
        background: `linear-gradient(135deg, transparent 20%, ${accent}2e 100%)`,
      }}
    />
  );
}

function StoryLine({
  label,
  text,
  tone = "neutral",
}: {
  label: string;
  text: string;
  tone?: "neutral" | "success";
}) {
  return (
    <div>
      <p className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.16em] text-zinc-400">
        {tone === "success" && (
          <span className="grid size-5 place-items-center rounded-full bg-emerald-500 text-white">
            <Check className="size-3" />
          </span>
        )}
        {label}
      </p>
      <p className="mt-2 text-base font-bold leading-7 text-zinc-700 sm:text-lg">{text}</p>
    </div>
  );
}
