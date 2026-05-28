import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";
import { AnimatedSection } from "./components/AnimatedSection";
import { Button } from "./components/ui/button";
import { Card } from "./components/ui/card";
import { Input } from "./components/ui/input";
import { Textarea } from "./components/ui/textarea";
import {
  advantages,
  audiences,
  customerIcon,
  featuredDesigns,
  footerLinks,
  processSteps,
  services,
  trustHighlights,
} from "./data/site";
import { cn } from "./lib/utils";

type ContactPreference = "whatsapp" | "phone" | "email";

const toSectionId = (label: string) => label.toLowerCase().replace(/\s+/g, "-");

function App() {
  const [selectedDesign, setSelectedDesign] = useState("Custom print request");
  const [contactPreference, setContactPreference] =
    useState<ContactPreference>("whatsapp");

  const CustomerIcon = customerIcon;

  return (
    <main className="min-h-screen overflow-hidden paper-grid">
      <Header />
      <Hero />
      <TrustStrip />
      <Services onSelect={setSelectedDesign} />
      <FeaturedDesigns onSelect={setSelectedDesign} />
      <HowItWorks />
      <WhyChooseUs />
      <Audience CustomerIcon={CustomerIcon} />
      <QuoteForm
        selectedDesign={selectedDesign}
        contactPreference={contactPreference}
        setContactPreference={setContactPreference}
      />
      <ContactSection />
      <Footer />
    </main>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/82 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#" className="group flex items-center gap-3">
          <span className="grid size-11 place-items-center rounded-2xl bg-studio-ink text-sm font-black text-white">
            C
          </span>
          <span>
            <span className="block font-display text-xl font-bold leading-none">
              Collage of Colours
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground">
              Print Studio
            </span>
          </span>
        </a>
        <nav className="hidden items-center gap-8 text-sm font-bold text-muted-foreground md:flex">
          {footerLinks.map((link) => (
            <a
              key={link}
              href={`#${toSectionId(link)}`}
              className="transition hover:text-foreground"
            >
              {link}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <Button asChild variant="whatsapp">
            <a href="#contact">
              <MessageCircle className="size-4" />
              WhatsApp Quote
            </a>
          </Button>
        </div>
        <Button className="md:hidden" variant="outline" size="sm" aria-label="Open menu">
          <Menu className="size-4" />
        </Button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative px-5 pb-20 pt-16 lg:px-8 lg:pb-28 lg:pt-24">
      <div className="absolute left-1/2 top-12 -z-10 size-[34rem] -translate-x-1/2 rounded-full bg-studio-cyan/20 blur-3xl" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-white/70 px-4 py-2 text-sm font-bold text-muted-foreground shadow-sm">
            <span className="size-2 rounded-full bg-studio-cyan" />
            Premium printing, design, and binding
          </div>
          <h1 className="max-w-4xl font-display text-5xl font-black leading-[0.95] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Collage of Colours — Bringing Brands, Occasions, and Emotions Together
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground">
            Premium printing, creative design, and reliable binding services for
            businesses, events, weddings, schools, creators, and everyday moments.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <a href="#services">
                Explore Services
                <ArrowRight className="size-5" />
              </a>
            </Button>
            <Button asChild size="lg" variant="whatsapp">
              <a href="#contact">
                <MessageCircle className="size-5" />
                WhatsApp for Quote
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#contact">
                <Mail className="size-5" />
                Email for Quote
              </a>
            </Button>
          </div>
        </motion.div>
        <HeroArtwork />
      </div>
    </section>
  );
}

function HeroArtwork() {
  const sheets = [
    "bg-studio-cyan",
    "bg-studio-magenta",
    "bg-studio-yellow",
    "bg-studio-blue",
  ];

  return (
    <motion.div
      className="relative mx-auto aspect-square w-full max-w-[34rem]"
      initial={{ opacity: 0, scale: 0.92, rotate: -2 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ delay: 0.15, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="absolute inset-8 rounded-[2.5rem] bg-white shadow-glow" />
      {sheets.map((color, index) => (
        <motion.div
          key={color}
          className={cn(
            "absolute left-1/2 top-1/2 h-72 w-56 rounded-[2rem] border border-white/70 p-5 shadow-card",
            color,
          )}
          style={{
            rotate: `${-18 + index * 12}deg`,
            x: "-50%",
            y: "-50%",
            zIndex: index,
          }}
          animate={{ y: ["-50%", "-54%", "-50%"] }}
          transition={{
            duration: 4 + index,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="h-full rounded-[1.5rem] bg-white/82 p-4">
            <div className="mb-5 h-24 rounded-2xl bg-studio-ink/90" />
            <div className="space-y-3">
              <div className="h-3 rounded-full bg-studio-ink/30" />
              <div className="h-3 w-3/4 rounded-full bg-studio-ink/20" />
              <div className="h-3 w-1/2 rounded-full bg-studio-ink/20" />
            </div>
          </div>
        </motion.div>
      ))}
      <div className="absolute bottom-5 right-4 z-10 rounded-3xl border border-border bg-white p-5 shadow-card">
        <p className="text-sm font-black">From idea to print</p>
        <p className="mt-1 text-xs font-semibold text-muted-foreground">
          Choose. Enquire. Confirm.
        </p>
      </div>
    </motion.div>
  );
}

function TrustStrip() {
  return (
    <AnimatedSection className="px-5 pb-16 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-3 rounded-[2rem] border border-border bg-white/75 p-3 shadow-card sm:grid-cols-2 lg:grid-cols-4">
        {trustHighlights.map(({ label, icon: Icon }) => (
          <div key={label} className="flex items-center gap-3 rounded-[1.35rem] px-4 py-4">
            <span className="grid size-11 place-items-center rounded-2xl bg-muted">
              <Icon className="size-5 text-studio-blue" />
            </span>
            <span className="font-bold">{label}</span>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
}

function Services({ onSelect }: { onSelect: (design: string) => void }) {
  return (
    <AnimatedSection id="services" className="px-5 py-20 lg:px-8">
      <SectionHeading
        eyebrow="Services"
        title="Everything you need to print, present, promote, gift, and preserve."
        body="Choose a category, share your requirement, and we will guide you through the right format, finish, and quote."
      />
      <div className="mx-auto mt-12 grid max-w-7xl gap-5 md:grid-cols-2 xl:grid-cols-4">
        {services.map(({ title, description, icon: Icon, accent }) => (
          <Card key={title} className="group p-6 transition hover:-translate-y-1 hover:shadow-glow">
            <div className="flex items-start justify-between gap-4">
              <span className={cn("grid size-13 place-items-center rounded-2xl", accent)}>
                <Icon className="size-6 text-white" />
              </span>
              <span className="rounded-full bg-muted px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-muted-foreground">
                Print
              </span>
            </div>
            <h3 className="mt-7 text-xl font-black">{title}</h3>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">{description}</p>
            <Button
              className="mt-6 w-full justify-between"
              variant="outline"
              onClick={() => onSelect(title)}
            >
              Enquire category
              <ArrowRight className="size-4" />
            </Button>
          </Card>
        ))}
      </div>
    </AnimatedSection>
  );
}

function FeaturedDesigns({ onSelect }: { onSelect: (design: string) => void }) {
  return (
    <AnimatedSection id="designs" className="px-5 py-20 lg:px-8">
      <SectionHeading
        eyebrow="Featured designs"
        title="Start from a design direction and ask for a quote instantly."
        body="These sample cards show how the live catalogue can work once real product photos and design previews are added."
      />
      <div className="mx-auto mt-12 grid max-w-7xl gap-6 lg:grid-cols-4">
        {featuredDesigns.map((design) => (
          <Card key={design.name} className="overflow-hidden p-4">
            <div className={cn("relative h-56 rounded-[1.25rem] bg-gradient-to-br", design.gradient)}>
              <div className="absolute inset-5 rounded-2xl border border-white/50 bg-white/72 p-4 backdrop-blur">
                <div className="h-20 rounded-xl bg-studio-ink" />
                <div className="mt-5 h-3 rounded-full bg-studio-ink/30" />
                <div className="mt-3 h-3 w-2/3 rounded-full bg-studio-ink/20" />
              </div>
            </div>
            <p className="mt-5 text-xs font-black uppercase tracking-[0.2em] text-muted-foreground">
              {design.category}
            </p>
            <h3 className="mt-2 text-lg font-black">{design.name}</h3>
            <Button
              className="mt-5 w-full"
              variant="blue"
              onClick={() => onSelect(design.name)}
            >
              Enquire for this Design
            </Button>
          </Card>
        ))}
      </div>
    </AnimatedSection>
  );
}

function HowItWorks() {
  return (
    <AnimatedSection id="how-it-works" className="px-5 py-20 lg:px-8">
      <SectionHeading
        eyebrow="How it works"
        title="A guided quote flow that keeps printing simple."
        body="Customers do not need to understand every material and finishing option before contacting the shop."
      />
      <div className="mx-auto mt-12 grid max-w-6xl gap-5 md:grid-cols-4">
        {processSteps.map((step, index) => (
          <Card key={step} className="relative p-6">
            <span className="font-display text-5xl font-black text-studio-cyan/35">
              0{index + 1}
            </span>
            <h3 className="mt-8 text-lg font-black">{step}</h3>
          </Card>
        ))}
      </div>
    </AnimatedSection>
  );
}

function WhyChooseUs() {
  return (
    <AnimatedSection className="px-5 py-20 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 rounded-[2.5rem] bg-studio-ink p-8 text-white shadow-card lg:grid-cols-[0.85fr_1.15fr] lg:p-12">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.24em] text-studio-yellow">
            Why Collage of Colours
          </p>
          <h2 className="mt-5 font-display text-4xl font-black leading-tight lg:text-5xl">
            Premium enough for brands. Friendly enough for everyday printing.
          </h2>
        </div>
        <div className="grid gap-4">
          {advantages.map((advantage) => (
            <div
              key={advantage}
              className="rounded-3xl border border-white/10 bg-white/8 p-5 text-sm font-semibold leading-7 text-white/82"
            >
              {advantage}
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

function Audience({ CustomerIcon }: { CustomerIcon: typeof customerIcon }) {
  return (
    <AnimatedSection className="px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            align="left"
            eyebrow="For every customer"
            title="Built for brands, schools, weddings, events, and daily print needs."
            body="The service range is broad, but the experience should stay calm and easy to navigate."
          />
          <span className="grid size-16 place-items-center rounded-3xl bg-white shadow-card">
            <CustomerIcon className="size-7 text-studio-magenta" />
          </span>
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          {audiences.map((audience) => (
            <span
              key={audience}
              className="rounded-full border border-border bg-white px-5 py-3 text-sm font-bold shadow-sm"
            >
              {audience}
            </span>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

function QuoteForm({
  selectedDesign,
  contactPreference,
  setContactPreference,
}: {
  selectedDesign: string;
  contactPreference: ContactPreference;
  setContactPreference: (preference: ContactPreference) => void;
}) {
  return (
    <AnimatedSection id="contact" className="px-5 py-20 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="rounded-[2.5rem] bg-white p-8 shadow-card lg:p-10">
          <p className="text-sm font-black uppercase tracking-[0.24em] text-studio-blue">
            Request quote
          </p>
          <h2 className="mt-5 font-display text-4xl font-black leading-tight">
            Have a design, idea, or printing requirement?
          </h2>
          <p className="mt-5 leading-8 text-muted-foreground">
            Send your details and our team will contact you with the best available
            options. The selected service or design is carried into the enquiry.
          </p>
          <div className="mt-8 rounded-3xl bg-muted p-5">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-muted-foreground">
              Selected enquiry
            </p>
            <p className="mt-2 text-lg font-black">{selectedDesign}</p>
          </div>
        </div>
        <Card className="p-6 lg:p-8">
          <form className="grid gap-5">
            <div className="grid gap-2">
              <label className="text-sm font-black">Contact preference</label>
              <div className="grid gap-3 sm:grid-cols-3">
                {(["whatsapp", "phone", "email"] as ContactPreference[]).map((preference) => (
                  <button
                    key={preference}
                    type="button"
                    onClick={() => setContactPreference(preference)}
                    className={cn(
                      "rounded-2xl border px-4 py-3 text-sm font-black capitalize transition",
                      contactPreference === preference
                        ? "border-studio-blue bg-studio-blue text-white"
                        : "border-border bg-white hover:border-studio-blue",
                    )}
                  >
                    {preference}
                  </button>
                ))}
              </div>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              <Field label="Name" placeholder="Your full name" />
              <Field label="Service / selected design" value={selectedDesign} readOnly />
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {(contactPreference === "whatsapp" || contactPreference === "phone") && (
                <Field label="Phone number" placeholder="+91 98765 43210" />
              )}
              {contactPreference === "email" && (
                <Field label="Email address" placeholder="you@example.com" type="email" />
              )}
              <Field label="Quantity" placeholder="Example: 100 pieces" />
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              <Field label="Size / format" placeholder="Example: A4, 3x2 inch, custom" />
              <Field label="Deadline" placeholder="Example: This Friday" />
            </div>
            <div className="grid gap-2">
              <label className="text-sm font-black">Message / special requirement</label>
              <Textarea placeholder="Tell us about material, finishing, colors, upload needs, or delivery expectations." />
            </div>
            <Button type="button" size="lg" variant="blue" className="w-full">
              <Send className="size-5" />
              Request Quote
            </Button>
          </form>
        </Card>
      </div>
    </AnimatedSection>
  );
}

function ContactSection() {
  return (
    <AnimatedSection className="px-5 py-20 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
        <ContactCard icon={MessageCircle} title="WhatsApp" detail="Quick quotes and follow-ups" />
        <ContactCard icon={Mail} title="Email" detail="Send design files and bulk requirements" />
        <ContactCard icon={MapPin} title="Visit Shop" detail="Location, hours, and map can be added here" />
      </div>
    </AnimatedSection>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-white/70 px-5 py-10 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 md:flex-row md:items-center">
        <div>
          <p className="font-display text-2xl font-black">Collage of Colours</p>
          <p className="mt-2 text-sm font-semibold text-muted-foreground">
            Bringing brands, occasions, and emotions together.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm font-bold text-muted-foreground">
          {footerLinks.map((link) => (
            <a key={link} href={`#${toSectionId(link)}`}>
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

function SectionHeading({
  eyebrow,
  title,
  body,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  body: string;
  align?: "center" | "left";
}) {
  return (
    <div
      className={cn(
        "mx-auto max-w-3xl",
        align === "center" ? "text-center" : "mx-0 text-left",
      )}
    >
      <p className="text-sm font-black uppercase tracking-[0.24em] text-studio-magenta">
        {eyebrow}
      </p>
      <h2 className="mt-4 font-display text-4xl font-black leading-tight lg:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-8 text-muted-foreground">{body}</p>
    </div>
  );
}

function Field({
  label,
  ...props
}: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="grid gap-2">
      <label className="text-sm font-black">{label}</label>
      <Input {...props} />
    </div>
  );
}

function ContactCard({
  icon: Icon,
  title,
  detail,
}: {
  icon: typeof Phone;
  title: string;
  detail: string;
}) {
  return (
    <Card className="p-7">
      <span className="grid size-12 place-items-center rounded-2xl bg-muted">
        <Icon className="size-5 text-studio-blue" />
      </span>
      <h3 className="mt-6 text-xl font-black">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">{detail}</p>
    </Card>
  );
}

export default App;
