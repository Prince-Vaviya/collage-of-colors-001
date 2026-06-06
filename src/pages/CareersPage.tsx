import { motion } from "motion/react";
import type { ReactNode } from "react";
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  FileUp,
  Layers3,
  Palette,
  Sparkles,
  Users,
} from "lucide-react";
import { HeroBackground } from "../components/home/HeroBackground";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";

const openRoles = [
  {
    title: "Graphic Designer",
    type: "Creative",
    text: "For people who can turn brand ideas into logos, brochures, catalogues, social creatives and packaging graphics.",
    icon: Palette,
    color: "#E83E7C",
  },
  {
    title: "Digital Printing Operator",
    type: "Production",
    text: "For print-focused minds who understand color, paper, machine handling, finishing and delivery timelines.",
    icon: Layers3,
    color: "#18A8C8",
  },
  {
    title: "Signage Production Technician",
    type: "Installation",
    text: "For makers who can support ACP, acrylic, LED, vinyl, board preparation and installation-ready output.",
    icon: BriefcaseBusiness,
    color: "#1D4ED8",
  },
  {
    title: "Offset Printing Specialist",
    type: "Bulk Printing",
    text: "For detail-oriented production talent who can manage consistency across books, labels, packaging and corporate material.",
    icon: BadgeCheck,
    color: "#F6C945",
  },
  {
    title: "Packaging Designer",
    type: "Product",
    text: "For designers who think about shelf impact, labels, box structures, product variants and first impressions.",
    icon: FileUp,
    color: "#10B981",
  },
  {
    title: "Client Servicing Coordinator",
    type: "Customer",
    text: "For organized communicators who can understand requirements, coordinate timelines and keep clients updated.",
    icon: Users,
    color: "#1F2528",
  },
];

const positionOptions = [
  "Graphic Designer",
  "Digital Printing Operator",
  "Offset Printing Specialist",
  "Packaging Designer",
  "Signage Production Technician",
  "Client Servicing Coordinator",
  "Finishing & Binding Assistant",
  "Other",
];

const careerWhatsappHref =
  "https://wa.me/918879239384?text=Hi%20Collage%20of%20Colours%2C%20I%20want%20to%20apply%20for%20a%20career%20opportunity.";

export function CareersPage() {
  return (
    <section className="relative overflow-hidden px-5 pb-20 pt-36 font-['Inter_Tight',ui-sans-serif,system-ui,sans-serif]">
      <HeroBackground />
      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <CareerHero />
        <OpenRoles />
        <ApplicationSection />
      </div>
    </section>
  );
}

function CareerHero() {
  return (
    <motion.div
      className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end"
      initial={{ opacity: 0, y: 26 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.68, ease: [0.16, 1, 0.3, 1] }}
    >
      <div>
        <p className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/80 px-4 py-2 text-sm font-extrabold text-studio-blue shadow-[0_18px_50px_rgba(31,37,40,0.08)] backdrop-blur">
          <Sparkles className="size-4" />
          Careers at Collage of Colours
        </p>
        <h1 className="mt-6 max-w-5xl text-4xl font-extrabold leading-[0.92] text-studio-ink sm:text-7xl lg:text-[5.4rem]">
          Join the team that turns ideas into finished brand assets.
        </h1>
      </div>
      <div className="max-w-xl lg:justify-self-end">
        <p className="text-xl font-semibold leading-8 text-zinc-600">
          We are looking for people who enjoy practical creativity: designing, printing,
          finishing, coordinating and delivering work that clients can proudly put in the world.
        </p>
        <Button asChild className="mt-7">
          <a href="#career-application">
            Apply Now
            <ArrowRight className="size-4" />
          </a>
        </Button>
      </div>
    </motion.div>
  );
}

function OpenRoles() {
  return (
    <section className="mt-14">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-zinc-400">
            Positions
          </p>
        </div>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {openRoles.map((role, index) => {
          const Icon = role.icon;

          return (
            <motion.article
              key={role.title}
              className="group relative overflow-hidden rounded-[1.4rem] border border-white/80 bg-white/80 p-6 shadow-[0_18px_60px_rgba(31,37,40,0.06)] backdrop-blur-xl"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: index * 0.04, duration: 0.48 }}
              whileHover={{ y: -5 }}
            >
              <span
                className="absolute inset-x-0 top-0 h-1 transition duration-500 group-hover:h-1.5"
                style={{ backgroundColor: role.color }}
              />
              <span
                className="grid size-12 place-items-center rounded-2xl text-white shadow-[0_18px_50px_rgba(31,37,40,0.14)]"
                style={{ backgroundColor: role.color }}
              >
                <Icon className="size-5" />
              </span>
              <p className="mt-5 text-xs font-extrabold uppercase tracking-[0.16em] text-zinc-400">
                {role.type}
              </p>
              <h3 className="mt-2 text-2xl font-extrabold text-studio-ink">{role.title}</h3>
              <p className="mt-3 text-base font-semibold leading-6 text-zinc-600">{role.text}</p>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
function ApplicationSection() {
  return (
    <section
      id="career-application"
      className="mt-16 grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start"
    >
      <motion.div
        className="rounded-[1.8rem] border border-white/80 bg-white/80 p-7 shadow-[0_26px_90px_rgba(31,37,40,0.08)] backdrop-blur-xl sm:p-8 lg:sticky lg:top-32"
        initial={{ opacity: 0, x: -24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.58, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-zinc-400">
          Application
        </p>
        <h2 className="mt-3 text-4xl font-extrabold leading-none text-studio-ink sm:text-5xl">
          Share your details and we’ll connect.
        </h2>
        <p className="mt-5 text-lg font-semibold leading-7 text-zinc-600">
          Fill the form or reach us directly on WhatsApp. If your work fits our current needs,
          the team will get back with the next step.
        </p>
        <Button asChild variant="whatsapp" className="mt-7">
          <a href={careerWhatsappHref} target="_blank" rel="noreferrer">
            Apply on WhatsApp
            <ArrowRight className="size-4" />
          </a>
        </Button>
      </motion.div>

      <motion.form
        className="rounded-[1.8rem] border border-white/80 bg-white/80 p-6 shadow-[0_26px_90px_rgba(31,37,40,0.08)] backdrop-blur-xl sm:p-8"
        initial={{ opacity: 0, x: 24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.58, ease: [0.16, 1, 0.3, 1] }}
        onSubmit={(event) => event.preventDefault()}
      >
        <div>
          <h3 className="text-3xl font-extrabold text-studio-ink">Personal Information</h3>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <LabeledField label="Full Name">
              <Input name="name" placeholder="Your name" />
            </LabeledField>
            <LabeledField label="Phone Number">
              <Input name="phone" type="tel" placeholder="+91" />
            </LabeledField>
            <LabeledField label="Email Address">
              <Input name="email" type="email" placeholder="you@example.com" />
            </LabeledField>
            <LabeledField label="City">
              <Input name="city" placeholder="Mumbai / Your city" />
            </LabeledField>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-3xl font-extrabold text-studio-ink">Position</h3>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <LabeledField label="Position Applied For">
              <select
                name="position"
                className="flex h-12 w-full rounded-2xl border border-input bg-white px-4 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                defaultValue=""
              >
                <option value="" disabled>
                  Select a position
                </option>
                {positionOptions.map((position) => (
                  <option key={position} value={position}>
                    {position}
                  </option>
                ))}
              </select>
            </LabeledField>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-3xl font-extrabold text-studio-ink">Experience & Skills</h3>
          <div className="mt-5 grid gap-4">
            <LabeledField label="Previous Job Title">
              <Input name="portfolio" placeholder="Enter Your Previous Job Title..." />
            </LabeledField>
            <LabeledField label="Tell us about your skills">
              <Textarea
                name="skills"
                placeholder="Software, machines handled, production experience, client coordination, finishing work..."
              />
            </LabeledField>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-3xl font-extrabold text-studio-ink">Upload CV</h3>
          <label className="mt-5 flex cursor-pointer flex-col items-center justify-center rounded-[1.4rem] border border-dashed border-studio-ink/20 bg-[#f8f8f4] px-6 py-8 text-center transition hover:bg-white">
            <FileUp className="size-8 text-studio-blue" />
            <span className="mt-3 text-base font-extrabold text-studio-ink">
              Upload CV or resume
            </span>
            <span className="mt-1 text-sm font-semibold text-zinc-500">
              PDF, DOC or DOCX preferred
            </span>
            <input type="file" name="cv" className="sr-only" accept=".pdf,.doc,.docx" />
          </label>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button type="submit">
            Submit Application
            <ArrowRight className="size-4" />
          </Button>
          <Button asChild variant="outline">
            <a href="#/contact-us">Contact First</a>
          </Button>
        </div>
      </motion.form>
    </section>
  );
}

function LabeledField({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <label className="grid gap-2 text-sm font-extrabold text-zinc-600">
      {label}
      {children}
    </label>
  );
}
