import { motion } from "motion/react";
import { ArrowLeft, Clock3, MessageCircle } from "lucide-react";
import { HeroBackground } from "../components/home/HeroBackground";
import { Button } from "../components/ui/button";

type ComingSoonPageProps = {
  title: string;
};

export function ComingSoonPage({ title }: ComingSoonPageProps) {
  return (
    <section className="relative flex min-h-screen items-center px-5 pb-14 pt-36">
      <HeroBackground />
      <motion.div
        className="relative z-10 mx-auto grid w-full max-w-4xl place-items-center text-center"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/80 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-zinc-500 shadow-[0_18px_50px_rgba(31,37,40,0.08)] backdrop-blur">
          <Clock3 className="size-4 text-studio-cyan" />
          Coming Soon
        </div>
        <h1 className="text-4xl font-black leading-[0.95] tracking-tight sm:text-7xl">
          {title}
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-balance text-lg font-semibold leading-8 text-zinc-600">
          This page is being prepared for Collage of Colours. Soon it will carry the right details,
          visuals, and enquiry flow for this section.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild variant="outline">
            <a href="#/home">
              <ArrowLeft className="size-4" />
              Back Home
            </a>
          </Button>
          <Button asChild>
            <a href="#/contact-us">
              Contact Us
              <MessageCircle className="size-4" />
            </a>
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
