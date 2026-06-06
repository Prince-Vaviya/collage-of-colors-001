import { motion } from "motion/react";
import type { ReactNode } from "react";
import {
  ArrowRight,
  Mail,
  Building2,
  Check,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
  Send,
  Sparkles,
} from "lucide-react";
import { HeroBackground } from "../components/home/HeroBackground";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";

const address =
  "Shop No 3, Krishna Govind Complex, Sector 24, Turbhe, Navi Mumbai, Maharashtra 400703";

const phoneNumbers = ["+91 88792 39384", "+91 75065 56080"];
const emails = ["prints@collageofcolours.com", "accounts@collageofcolours.com"];
const whatsappHref =
  "https://wa.me/918879239384?text=Hi%20Collage%20of%20Colours%2C%20I%20would%20like%20to%20discuss%20a%20print%20or%20design%20requirement.";
const mapsHref =
  "https://www.google.com/maps/search/?api=1&query=Shop%20No%203%2C%20Krishna%20Govind%20Complex%2C%20Sector%2024%2C%20Turbhe%2C%20Navi%20Mumbai%2C%20Maharashtra%20400703";
const mapEmbedSrc =
  "https://www.google.com/maps?q=Shop%20No%203%2C%20Krishna%20Govind%20Complex%2C%20Sector%2024%2C%20Turbhe%2C%20Navi%20Mumbai%2C%20Maharashtra%20400703&output=embed";

const contactCards = [
  {
    title: "Visit the studio",
    text: address,
    icon: MapPin,
    color: "#1D4ED8",
    href: mapsHref,
    action: "Open Map",
  },
  {
    title: "Call the team",
    text: phoneNumbers.join(" / "),
    icon: Phone,
    color: "#10B981",
    href: "tel:+918879239384",
    action: "Call Now",
  },
  {
    title: "Email requirements",
    text: emails.join(" / "),
    icon: Mail,
    color: "#E83E7C",
    href: "mailto:prints@collageofcolours.com",
    action: "Send Email",
  },
];

const serviceOptions = [
  "Graphic Designing",
  "Digital Printing",
  "Signage Boards",
  "Offset Printing",
  "Packaging Solutions",
  "Corporate Gifting",
  "Multiple services",
];

const responseNotes = [
  "Share size, quantity, material and deadline if available.",
  "Send existing artwork or reference images on WhatsApp.",
  "Mention whether you need design, print, finishing or delivery support.",
];

export function ContactPage() {
  return (
    <section className="relative overflow-hidden px-5 pb-20 pt-36 font-['Inter_Tight',ui-sans-serif,system-ui,sans-serif]">
      <HeroBackground />
      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <ContactHero />
        <ContactCards />
        <ContactDetails />
      </div>
    </section>
  );
}

function ContactHero() {
  return (
    <motion.div
      className="grid gap-10 lg:grid-cols-[1fr_0.86fr] lg:items-end"
      initial={{ opacity: 0, y: 26 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.68, ease: [0.16, 1, 0.3, 1] }}
    >
      <div>
        <p className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/80 px-4 py-2 text-sm font-extrabold text-studio-blue shadow-[0_18px_50px_rgba(31,37,40,0.08)] backdrop-blur">
          <Sparkles className="size-4" />
          Contact Collage of Colours
        </p>
        <h1 className="mt-6 max-w-5xl text-4xl font-extrabold leading-[0.92] text-studio-ink sm:text-7xl lg:text-[5.4rem]">
          Let’s discuss your next design, print or packaging job.
        </h1>
      </div>
      <div className="max-w-xl lg:justify-self-end">
        <p className="text-xl font-semibold leading-8 text-zinc-600">
          Send your requirement, visit the studio, or connect directly on WhatsApp.
          We’ll help you choose the right format, finish and next step.
        </p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <Button asChild variant="whatsapp">
            <a href={whatsappHref} target="_blank" rel="noreferrer">
              WhatsApp Us
              <MessageCircle className="size-4" />
            </a>
          </Button>
          <Button asChild variant="outline">
            <a href="tel:+918879239384">
              Call Now
              <Phone className="size-4" />
            </a>
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

function ContactCards() {
  return (
    <div className="mt-12 grid gap-4 lg:grid-cols-3">
      {contactCards.map((card, index) => {
        const Icon = card.icon;

        return (
          <motion.a
            key={card.title}
            href={card.href}
            target={card.href.startsWith("http") ? "_blank" : undefined}
            rel={card.href.startsWith("http") ? "noreferrer" : undefined}
            className="group relative block overflow-hidden rounded-[1.5rem] border border-white/80 bg-white/80 p-6 shadow-[0_20px_70px_rgba(31,37,40,0.07)] backdrop-blur-xl transition duration-500 hover:-translate-y-1"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-90px" }}
            transition={{ delay: index * 0.07, duration: 0.48 }}
          >
            <span
              className="grid size-13 place-items-center rounded-2xl text-white shadow-[0_18px_50px_rgba(31,37,40,0.14)]"
              style={{ backgroundColor: card.color }}
            >
              <Icon className="size-6" />
            </span>
            <h2 className="mt-6 text-3xl font-extrabold text-studio-ink">{card.title}</h2>
            <p className="mt-3 min-h-20 text-lg font-semibold leading-7 text-zinc-600">
              {card.text}
            </p>
            <span className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-studio-ink">
              {card.action}
              <ArrowRight className="size-4 transition group-hover:translate-x-1" />
            </span>
          </motion.a>
        );
      })}
    </div>
  );
}

function ContactDetails() {
  return (
    <section className="mt-16">
      <div className="grid gap-8 lg:grid-cols-[1.04fr_0.96fr] lg:items-start">
        <motion.form
          id="enquiry-form"
          className="scroll-mt-36 rounded-[1.8rem] border border-white/80 bg-white/80 p-6 shadow-[0_26px_90px_rgba(31,37,40,0.08)] backdrop-blur-xl sm:p-8"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.58, ease: [0.16, 1, 0.3, 1] }}
          onSubmit={(event) => event.preventDefault()}
        >
          <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-zinc-400">
            Enquiry form
          </p>
          <h2 className="mt-3 text-4xl font-extrabold leading-none text-studio-ink sm:text-5xl">
            Tell us what you need.
          </h2>
          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            <LabeledField label="Full Name">
              <Input name="name" placeholder="Your name" />
            </LabeledField>
            <LabeledField label="Phone Number">
              <Input name="phone" type="tel" placeholder="+91" />
            </LabeledField>
            <LabeledField label="Email Address">
              <Input name="email" type="email" placeholder="you@example.com" />
            </LabeledField>
            <LabeledField label="Company / Business">
              <Input name="company" placeholder="Business name" />
            </LabeledField>
            <LabeledField label="Service Interested In">
              <select
                name="service"
                className="flex h-12 w-full rounded-2xl border border-input bg-white px-4 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                defaultValue=""
              >
                <option value="" disabled>
                  Select a service
                </option>
                {serviceOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </LabeledField>
            <LabeledField label="Required Timeline">
              <Input name="timeline" placeholder="Today / This week / Planned" />
            </LabeledField>
          </div>
          <LabeledField label="Requirement Details" className="mt-4">
            <Textarea
              name="message"
              placeholder="Tell us about size, quantity, paper or material, artwork status, finish and delivery needs..."
            />
          </LabeledField>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Button type="submit">
              Submit Requirement
              <Send className="size-4" />
            </Button>
            <Button asChild variant="outline">
              <a href={whatsappHref} target="_blank" rel="noreferrer">
                Send on WhatsApp
                <MessageCircle className="size-4" />
              </a>
            </Button>
          </div>
        </motion.form>

        <motion.div
          className="overflow-hidden rounded-[1.8rem] border border-white/80 bg-white/80 shadow-[0_26px_90px_rgba(31,37,40,0.08)] backdrop-blur-xl lg:sticky lg:top-32"
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.58, ease: [0.16, 1, 0.3, 1] }}
        >
          <iframe
            title="Collage of Colours Turbhe location"
            src={mapEmbedSrc}
            className="h-80 w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="p-6">
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-zinc-400">
              Studio address
            </p>
            <p className="mt-3 text-xl font-extrabold leading-8 text-studio-ink">{address}</p>
            <Button asChild variant="outline" className="mt-5">
              <a href={mapsHref} target="_blank" rel="noreferrer">
                Get Directions
                <Navigation className="size-4" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>

      <FastResponseCard />
    </section>
  );
}

function FastResponseCard() {
  return (
    <motion.div
      className="mt-11 overflow-hidden rounded-[1.8rem] border border-white/80 bg-studio-ink p-7 text-white shadow-[0_26px_90px_rgba(31,37,40,0.14)] sm:p-14"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.58, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
        <div>
          <span className="grid size-12 place-items-center rounded-2xl bg-white text-studio-ink sm:size-14">
            <Building2 className="size-6" />
          </span>
          <p className="mt-6 text-sm font-extrabold uppercase tracking-[0.18em] text-white/55">
            Faster response
          </p>
          <h3 className="mt-3 max-w-xl text-4xl font-extrabold leading-[0.95] sm:text-5xl">
            Send job details for a quicker quote.
          </h3>
        </div>

        <div className="grid gap-7 xl:grid-cols-[1.08fr_0.92fr] xl:items-start">
          <div className="grid gap-3">
            {responseNotes.map((note) => (
              <div key={note} className="flex gap-3 text-base font-semibold leading-6 text-white/80">
                <span className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-full bg-emerald-500 text-white">
                  <Check className="size-4" />
                </span>
                {note}
              </div>
            ))}
          </div>

          <div className="grid gap-3 text-base font-bold text-white/88 sm:grid-cols-2 xl:grid-cols-1">
            <a href="tel:+918879239384" className="inline-flex items-center gap-3">
              <span className="grid size-6 shrink-0 place-items-center rounded-full bg-emerald-400/15 text-emerald-300">
                <Phone className="size-4" />
              </span>
              {phoneNumbers[0]}
            </a>
            <a href="tel:+917506556080" className="inline-flex items-center gap-3">
              <span className="grid size-6 shrink-0 place-items-center rounded-full bg-emerald-400/15 text-emerald-300">
                <Phone className="size-4" />
              </span>
              {phoneNumbers[1]}
            </a>
            <a href="mailto:prints@collageofcolours.com" className="inline-flex items-center gap-3">
              <span className="grid size-6 shrink-0 place-items-center rounded-full bg-emerald-400/15 text-emerald-300">
                <Mail className="size-4" />
              </span>
              {emails[0]}
            </a>
            <a href="mailto:accounts@collageofcolours.com" className="inline-flex items-center gap-3">
              <span className="grid size-6 shrink-0 place-items-center rounded-full bg-emerald-400/15 text-emerald-300">
                <Mail className="size-4" />
              </span>
              {emails[1]}
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function LabeledField({
  label,
  children,
  className = "",
}: {
  label: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <label className={`grid gap-2 text-sm font-extrabold text-zinc-600 ${className}`}>
      {label}
      {children}
    </label>
  );
}
