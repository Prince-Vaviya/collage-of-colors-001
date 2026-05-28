import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Menu,
  Search,
  Send,
} from "lucide-react";
import { AnimatedSection } from "./components/AnimatedSection";
import { Button } from "./components/ui/button";
import { Card } from "./components/ui/card";
import { Input } from "./components/ui/input";
import { Textarea } from "./components/ui/textarea";
import {
  blogPosts,
  brandLogos,
  categories,
  navLinks,
  reasons,
  topSelling,
} from "./data/site";
import { cn } from "./lib/utils";

type ContactPreference = "whatsapp" | "phone" | "email";

const toSectionId = (label: string) => label.toLowerCase().replace(/\s+/g, "-");

function App() {
  const [selectedDesign, setSelectedDesign] = useState("Custom print request");
  const [contactPreference, setContactPreference] =
    useState<ContactPreference>("whatsapp");

  return (
    <main className="min-h-screen overflow-hidden bg-[#f5f6fb] text-foreground">
      <TopBar />
      <Header />
      <div className="pt-[73px]">
        <Hero />
      </div>
      <CategoryGrid onSelect={setSelectedDesign} />
      <Reasons />
      <SampleBanner />
      <TopSelling onSelect={setSelectedDesign} />
      <Testimonials />
      <BlogPosts />
      <QuoteForm
        selectedDesign={selectedDesign}
        contactPreference={contactPreference}
        setContactPreference={setContactPreference}
      />
      <Newsletter />
      <Footer />
    </main>
  );
}

function TopBar() {
  return (
    <div className="bg-cyan-100 px-5 py-2 text-center text-xs font-bold text-studio-ink">
      Free metro delivery on print orders above ₹300. Ask for a quote before you print.
    </div>
  );
}

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-200 bg-white/92 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 lg:px-8">
        <nav className="hidden items-center gap-7 text-xs font-black uppercase tracking-[0.12em] text-zinc-700 lg:flex">
          {navLinks.map((link) => (
            <a key={link} href={link === "Home" ? "#" : `#${toSectionId(link)}`}>
              {link}
            </a>
          ))}
        </nav>
        <a href="#" className="flex items-center gap-2">
          <LogoMark />
          <span className="font-display text-xl font-black tracking-tight">
            Collage of Colours<span className="text-studio-blue">.</span>
          </span>
        </a>
        <div className="hidden flex-1 items-center justify-end gap-4 lg:flex">
          <div className="flex w-64 items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-4 py-3">
            <input
              className="w-full bg-transparent text-xs font-semibold outline-none placeholder:text-zinc-400"
              placeholder="Search products..."
            />
            <Search className="size-4 text-zinc-500" />
          </div>
        </div>
        <Button className="lg:hidden" variant="outline" size="sm" aria-label="Open menu">
          <Menu className="size-4" />
        </Button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative bg-[#eeeeef] px-5 py-16 lg:px-8 lg:py-20">
      <div className="absolute inset-0 opacity-70 paper-grid" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, x: -28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="mb-4 text-xs font-black uppercase tracking-[0.26em] text-studio-ink">
            Printing services
          </p>
          <h1 className="max-w-xl font-display text-5xl font-black leading-[0.95] tracking-tight text-studio-ink lg:text-7xl">
            Collage of Colours
          </h1>
          <p className="max-w-sm font-display text-xl font-black leading-[0.1] tracking-tight text-studio-ink sm:text-2xl">
            Bringing Brands, Occasions & Emotions together
          </p>
          <p className="mt-6 max-w-md text-sm font-semibold leading-7 text-zinc-600">
            Turn your ideas into premium products that leave a lasting impression,
            from business cards to banners, gifts, binding, and wedding stationery.
          </p>
          <Button asChild className="mt-8" size="lg">
            <a href="#shop">
              Shop Now
              <ArrowRight className="size-4" />
            </a>
          </Button>
        </motion.div>
        <HeroCatalogue />
      </div>
    </section>
  );
}

function HeroCatalogue() {
  return (
    <motion.div
      className="relative mx-auto h-[26rem] w-full max-w-[40rem]"
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.15, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="absolute left-10 top-6 size-80 rounded-full bg-studio-yellow" />
      <div className="absolute right-4 top-0 h-80 w-56 rotate-[-12deg] rounded-[1.25rem] bg-white p-5 shadow-card">
        <PrintSheet number="01" tone="cyan" />
      </div>
      <div className="absolute right-28 top-8 h-80 w-56 rotate-[10deg] rounded-[1.25rem] bg-white p-5 shadow-card">
        <PrintSheet number="02" tone="magenta" />
      </div>
      <div className="absolute bottom-2 left-12 h-72 w-64 rotate-[5deg] rounded-[1.5rem] bg-white p-5 shadow-card">
        <PrintSheet number="03" tone="blue" />
      </div>
    </motion.div>
  );
}

function PrintSheet({ number, tone }: { number: string; tone: "cyan" | "magenta" | "blue" }) {
  const color = {
    cyan: "bg-studio-cyan",
    magenta: "bg-studio-magenta",
    blue: "bg-studio-blue",
  }[tone];

  return (
    <div className="h-full rounded-2xl border border-zinc-100 bg-zinc-50 p-4">
      <div className="flex items-start justify-between">
        <div className="space-y-2">
          <div className="h-2 w-20 rounded-full bg-zinc-300" />
          <div className="h-2 w-14 rounded-full bg-zinc-200" />
        </div>
        <span className="font-display text-4xl font-black text-studio-yellow">{number}</span>
      </div>
      <div className={cn("mt-5 h-28 rounded-2xl", color)} />
      <div className="mt-5 space-y-3">
        <div className="h-3 rounded-full bg-zinc-300" />
        <div className="h-3 w-3/4 rounded-full bg-zinc-200" />
        <div className="h-3 w-1/2 rounded-full bg-zinc-200" />
      </div>
    </div>
  );
}

function CategoryGrid({ onSelect }: { onSelect: (design: string) => void }) {
  return (
    <AnimatedSection id="shop" className="px-5 py-14 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 xl:grid-cols-4">
        {categories.map(({ title, description, icon: Icon, accent }) => (
          <Card
            key={title}
            className="group min-h-72 overflow-hidden rounded-3xl border-0 bg-white p-6 transition hover:-translate-y-1 hover:shadow-glow"
          >
            <p className="text-xs font-black uppercase tracking-[0.16em]">{title}</p>
            <div className={cn("mt-7 grid h-32 place-items-center rounded-3xl bg-gradient-to-br", accent)}>
              <div className="grid size-20 place-items-center rounded-3xl bg-white/86 shadow-card">
                <Icon className="size-9 text-studio-ink" />
              </div>
            </div>
            <p className="mt-5 text-sm leading-6 text-zinc-500">{description}</p>
            <button
              className="mt-4 inline-flex items-center gap-2 text-sm font-black text-studio-blue"
              onClick={() => onSelect(title)}
            >
              Enquire now
              <ArrowRight className="size-4" />
            </button>
          </Card>
        ))}
      </div>
    </AnimatedSection>
  );
}

function Reasons() {
  return (
    <AnimatedSection id="prints" className="px-5 py-20 text-center lg:px-8">
      <p className="text-xs font-black uppercase tracking-[0.24em] text-studio-magenta">
        Let’s get printing
      </p>
      <h2 className="mx-auto mt-5 max-w-xl text-4xl font-black tracking-tight lg:text-5xl">
        Reasons to get <span className="text-studio-blue">printing started</span> with us
      </h2>
      <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-zinc-500">
        Our team makes it easy to create a unique design, choose the right materials,
        and print without feeling lost in technical details.
      </p>
      <div className="mx-auto mt-14 grid max-w-6xl gap-8 md:grid-cols-4">
        {reasons.map(({ title, description, icon: Icon }) => (
          <div key={title} className="relative">
            <span className="mx-auto grid size-16 place-items-center rounded-[1.35rem] bg-white shadow-card">
              <Icon className="size-7 text-studio-blue" />
            </span>
            <h3 className="mt-6 text-base font-black">{title}</h3>
            <p className="mt-3 text-xs leading-6 text-zinc-500">{description}</p>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
}

function SampleBanner() {
  return (
    <AnimatedSection className="px-5 py-10 lg:px-8">
      <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-r from-zinc-950 to-zinc-700 text-white shadow-card lg:grid-cols-[0.8fr_1.2fr]">
        <div className="p-8 lg:p-12">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-white/60">
            Sample packs
          </p>
          <h2 className="mt-5 max-w-md text-4xl font-black leading-tight">
            Discover our bestselling print products
          </h2>
          <Button asChild className="mt-8 bg-white text-studio-ink hover:bg-white/90" variant="outline">
            <a href="#top-selling">
              Order yours now
              <ArrowRight className="size-4" />
            </a>
          </Button>
        </div>
        <div className="relative min-h-80">
          <div className="absolute left-10 top-12 h-56 w-48 rotate-[-10deg] rounded-3xl bg-white p-5 shadow-card">
            <PrintMini label="Brand Kit" />
          </div>
          <div className="absolute left-48 top-10 h-56 w-48 rotate-[8deg] rounded-3xl bg-white p-5 shadow-card">
            <PrintMini label="Stationery" />
          </div>
          <div className="absolute right-10 top-16 h-48 w-56 rounded-3xl bg-zinc-900 p-5 shadow-card">
            <PrintMini label="Packaging" dark />
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

function PrintMini({ label, dark = false }: { label: string; dark?: boolean }) {
  return (
    <div className={cn("h-full rounded-2xl p-4", dark ? "bg-zinc-800" : "bg-zinc-50")}>
      <p className={cn("text-xs font-black", dark ? "text-white" : "text-studio-blue")}>{label}</p>
      <div className={cn("mt-6 h-3 rounded-full", dark ? "bg-white/40" : "bg-zinc-300")} />
      <div className={cn("mt-3 h-3 w-3/4 rounded-full", dark ? "bg-white/25" : "bg-zinc-200")} />
      <div className="mt-8 grid grid-cols-2 gap-2">
        <span className="h-14 rounded-xl bg-studio-cyan" />
        <span className="h-14 rounded-xl bg-studio-yellow" />
      </div>
    </div>
  );
}

function TopSelling({ onSelect }: { onSelect: (design: string) => void }) {
  return (
    <AnimatedSection id="top-selling" className="px-5 py-20 text-center lg:px-8">
      <h2 className="text-4xl font-black tracking-tight">
        <span className="text-studio-blue">Top Selling</span> Items
      </h2>
      <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-zinc-500">
        Popular formats customers request most often for promotions, gifting,
        branding, and events.
      </p>
      <div className="mx-auto mt-12 grid max-w-7xl gap-6 md:grid-cols-3 xl:grid-cols-5">
        {topSelling.map((item) => (
          <button
            key={item.name}
            className="group text-left"
            onClick={() => onSelect(item.name)}
          >
            <div className="relative overflow-hidden rounded-3xl bg-white p-4 shadow-card transition group-hover:-translate-y-1">
              {item.badge && (
                <span className="absolute left-4 top-4 z-10 rounded-full bg-rose-500 px-3 py-1 text-[10px] font-black uppercase text-white">
                  {item.badge}
                </span>
              )}
              <div className={cn("grid h-40 place-items-center rounded-2xl bg-gradient-to-br", item.gradient)}>
                <div className="h-24 w-24 rotate-[-10deg] rounded-2xl bg-white/90 shadow-card" />
              </div>
            </div>
            <p className="mt-4 text-center text-sm font-black">{item.name}</p>
            <p className="mt-1 text-center text-xs font-bold text-zinc-500">{item.price}</p>
          </button>
        ))}
      </div>
    </AnimatedSection>
  );
}

function Testimonials() {
  return (
    <AnimatedSection className="bg-[#eceff5] px-5 py-24 text-center lg:px-8">
      <blockquote className="mx-auto max-w-3xl text-xl font-semibold leading-9 text-studio-ink">
        “With clean guidance, fast responses, and polished finishing, Collage of Colours
        helps customers print confidently without extra confusion.”
      </blockquote>
      <div className="mx-auto mt-12 flex max-w-3xl flex-wrap items-center justify-center gap-8">
        {brandLogos.map((logo) => (
          <span key={logo} className="text-sm font-black text-zinc-500">
            {logo}
          </span>
        ))}
      </div>
    </AnimatedSection>
  );
}

function BlogPosts() {
  return (
    <AnimatedSection id="blog" className="px-5 py-20 lg:px-8">
      <div className="text-center">
        <p className="text-xs font-black uppercase tracking-[0.24em] text-studio-magenta">
          Most recent news
        </p>
        <h2 className="mt-5 text-4xl font-black tracking-tight">
          Read our <span className="text-studio-blue">latest blog posts</span>
        </h2>
      </div>
      <div className="mx-auto mt-12 grid max-w-7xl gap-7 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <article key={post.title}>
            <div className={cn("relative h-64 overflow-hidden rounded-3xl bg-gradient-to-br p-5 shadow-card", post.gradient)}>
              <span className="grid size-14 place-items-center rounded-full bg-emerald-500 text-center text-xs font-black uppercase leading-tight text-white">
                {post.date}
              </span>
              <div className="absolute bottom-5 right-5 h-28 w-40 rotate-[-8deg] rounded-2xl bg-white/85 shadow-card" />
            </div>
            <p className="mt-6 text-xs font-black text-studio-blue">{post.category}</p>
            <h3 className="mt-2 text-lg font-black leading-7">{post.title}</h3>
            <a className="mt-4 inline-flex items-center gap-2 text-sm font-black" href="#contact">
              Read more
              <ArrowRight className="size-4" />
            </a>
          </article>
        ))}
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
    <AnimatedSection id="contact-us" className="px-5 py-20 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="rounded-[2rem] bg-white p-8 shadow-card lg:p-10">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-studio-blue">
            Request quote
          </p>
          <h2 className="mt-5 text-4xl font-black leading-tight">
            Have a design, idea, or printing requirement?
          </h2>
          <p className="mt-5 leading-8 text-zinc-500">
            Send your details and our team will contact you with options, pricing,
            and next steps. The selected service is carried into the enquiry.
          </p>
          <div className="mt-8 rounded-3xl bg-[#f3f0ea] p-5">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-zinc-500">
              Selected enquiry
            </p>
            <p className="mt-2 text-lg font-black">{selectedDesign}</p>
          </div>
        </div>
        <Card className="border-0 p-6 lg:p-8">
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
                        : "border-zinc-200 bg-white hover:border-studio-blue",
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

function Newsletter() {
  return (
    <AnimatedSection className="px-5 py-14 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-8 overflow-hidden rounded-[2rem] bg-gradient-to-r from-rose-200 via-studio-blue to-cyan-400 p-8 text-white lg:grid-cols-[0.9fr_1.1fr] lg:p-12">
        <div>
          <p className="text-4xl font-black leading-tight">
            Sign up for exclusive offers from us
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold text-white/82">
            Sign up to receive print offers, new service updates, and seasonal design ideas.
          </p>
          <div className="mt-6 flex flex-col gap-3 rounded-full bg-white p-2 sm:flex-row">
            <input
              className="min-h-12 flex-1 rounded-full px-5 text-sm font-semibold text-studio-ink outline-none"
              placeholder="Your email..."
            />
            <Button variant="blue" type="button">
              Subscribe
              <ArrowRight className="size-4" />
            </Button>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

function Footer() {
  const columns = [
    ["Get in Touch", "Collage of Colours", "support@example.com", "+91 98765 43210"],
    ["Information", "Help Center", "Shipping", "Returns", "Policies"],
    ["Useful Links", "My Account", "Order Tracking", "All Services", "Service Detail"],
    ["About Us", "Our Story", "Contact", "Careers", "Referral Program"],
  ];

  return (
    <footer className="bg-white px-5 pb-8 pt-16 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_repeat(4,1fr)]">
        <div>
          <a href="#" className="flex items-center gap-2">
            <LogoMark />
            <span className="font-display text-2xl font-black tracking-tight">
              Collage<span className="text-studio-blue">.</span>
            </span>
          </a>
          <p className="mt-5 max-w-xs text-sm leading-7 text-zinc-500">
            Premium printing, binding, gifts, packaging, wedding cards, and everyday
            print support under one clean, guided studio experience.
          </p>
          <div className="mt-6 flex gap-3">
            {["f", "x", "in", "ig"].map((item) => (
              <span key={item} className="grid size-8 place-items-center rounded-full bg-zinc-100 text-xs font-black">
                {item}
              </span>
            ))}
          </div>
        </div>
        {columns.map(([heading, ...links]) => (
          <div key={heading}>
            <h3 className="text-sm font-black">{heading}</h3>
            <div className="mt-5 grid gap-3 text-sm font-semibold text-zinc-500">
              {links.map((link) => (
                <a key={link} href="#contact-us">
                  {link}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mx-auto mt-12 flex max-w-7xl flex-col justify-between gap-4 border-t border-zinc-200 pt-6 text-xs font-bold text-zinc-500 md:flex-row">
        <p>Copyright © 2026 Collage of Colours. All rights reserved.</p>
        <a href="#">Back to top</a>
      </div>
    </footer>
  );
}

function LogoMark() {
  return (
    <span className="relative grid size-8 place-items-center">
      <span className="absolute left-0 top-1 size-4 rounded bg-studio-cyan" />
      <span className="absolute right-0 top-1 size-4 rounded bg-studio-magenta" />
      <span className="absolute bottom-0 left-2 size-4 rounded bg-studio-yellow" />
      <span className="relative size-3 rounded bg-studio-blue" />
    </span>
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

export default App;
