import {
  BadgeCheck,
  BookOpen,
  Boxes,
  BriefcaseBusiness,
  CalendarDays,
  Gift,
  Image,
  Megaphone,
  Paintbrush,
  PackageCheck,
  Palette,
  PenTool,
  Shirt,
  Sparkles,
  Store,
  Tags,
  Truck,
  UsersRound,
} from "lucide-react";

export const navLinks = ["Home", "Shop", "Prints", "Blog", "Pages", "Contact Us"];

export const categories = [
  {
    title: "Business Cards",
    description: "Premium matte, textured, glossy, and custom finish cards.",
    icon: BriefcaseBusiness,
    accent: "from-studio-cyan to-teal-300",
  },
  {
    title: "Marketing Materials",
    description: "Flyers, brochures, pamphlets, menus, and campaign handouts.",
    icon: Megaphone,
    accent: "from-studio-yellow to-orange-300",
  },
  {
    title: "Signs & Posters",
    description: "Banners, posters, standees, boards, and event signage.",
    icon: Image,
    accent: "from-studio-blue to-sky-300",
  },
  {
    title: "Clothing & Bags",
    description: "T-shirts, apparel prints, totes, and branded merchandise.",
    icon: Shirt,
    accent: "from-studio-magenta to-rose-300",
  },
  {
    title: "Design Services",
    description: "Print-ready design support for brands, weddings, and events.",
    icon: PenTool,
    accent: "from-indigo-500 to-studio-cyan",
  },
  {
    title: "Invitations & Stationery",
    description: "Wedding cards, invites, letterheads, envelopes, and diaries.",
    icon: Sparkles,
    accent: "from-studio-magenta to-studio-yellow",
  },
  {
    title: "Labels & Stickers",
    description: "Product labels, stickers, tags, seals, and packaging extras.",
    icon: Tags,
    accent: "from-emerald-400 to-studio-cyan",
  },
  {
    title: "Photo Gifts & Calendars",
    description: "Photo prints, albums, calendars, gifts, and keepsakes.",
    icon: Gift,
    accent: "from-studio-blue to-studio-magenta",
  },
];

export const reasons = [
  {
    title: "Connect your idea",
    description: "Tell us what you need, upload or share your design, and we guide the format.",
    icon: Palette,
  },
  {
    title: "Customize the order",
    description: "Choose size, quantity, paper, finish, binding, and delivery preference.",
    icon: Paintbrush,
  },
  {
    title: "We fulfil the print",
    description: "Your file moves through quality checks, production, finishing, and packing.",
    icon: PackageCheck,
  },
  {
    title: "Collect or ship",
    description: "Pick up from the shop or request delivery once the order is ready.",
    icon: Truck,
  },
];

export const topSelling = [
  {
    name: "Mini Desk Calendar",
    price: "Request quote",
    badge: "18% off",
    gradient: "from-lime-200 to-emerald-400",
  },
  {
    name: "Custom Mug Print",
    price: "From budget range",
    gradient: "from-teal-100 to-studio-cyan",
  },
  {
    name: "Flyer Pack",
    price: "Bulk pricing",
    gradient: "from-orange-100 to-studio-yellow",
  },
  {
    name: "Single Color Paper Bags",
    price: "Brand-ready",
    gradient: "from-white to-studio-magenta/50",
  },
  {
    name: "Printed Box & Cap Set",
    price: "Custom finish",
    gradient: "from-zinc-200 to-zinc-500",
  },
];

export const blogPosts = [
  {
    title: "Tips to Find the Best Print Finish for Your Brand",
    category: "Print Guide",
    date: "06 May",
    gradient: "from-violet-600 to-lime-300",
  },
  {
    title: "How to Prepare Designs Before Sending Them to Print",
    category: "Design Help",
    date: "06 May",
    gradient: "from-sky-400 to-zinc-900",
  },
  {
    title: "Wedding Card Ideas That Feel Personal and Premium",
    category: "Occasions",
    date: "06 May",
    gradient: "from-emerald-200 to-amber-100",
  },
];

export const brandLogos = ["Creative", "Tringle", "Sletter", "Athexa", "Printmate"];

export const services = categories;

export const trustHighlights = [
  { label: "Premium Prints", icon: BadgeCheck },
  { label: "Fast Turnaround", icon: CalendarDays },
  { label: "Design Support", icon: Paintbrush },
  { label: "All-in-One Services", icon: Store },
];

export const audiences = [
  "Small businesses",
  "Corporate clients",
  "Schools & colleges",
  "Wedding customers",
  "Event organisers",
  "Designers & creators",
  "Restaurants & retailers",
  "Local customers",
];

export const advantages = [
  "All-in-one printing and binding services for personal, business, and event needs.",
  "Premium finishing with sharp colors, reliable materials, and clean detailing.",
  "Fast and affordable support for urgent jobs, planned orders, and bulk printing.",
  "Creative design help when you need to turn an idea into a print-ready file.",
  "Simple enquiry process built around WhatsApp, phone, and email preferences.",
];

export const processSteps = reasons.map((reason) => reason.title);

export const footerLinks = ["Services", "Designs", "How It Works", "Contact"];

export const customerIcon = UsersRound;
export const bindingIcon = BookOpen;
export const packagingIcon = Boxes;
