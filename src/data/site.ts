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
  Sparkles,
  Store,
  UsersRound,
} from "lucide-react";

export const services = [
  {
    title: "Business & Stationery",
    description: "Business cards, letterheads, envelopes, ID cards, forms, and bill books.",
    icon: BriefcaseBusiness,
    accent: "bg-studio-cyan",
  },
  {
    title: "Marketing Prints",
    description: "Flyers, brochures, posters, banners, standees, menus, and pamphlets.",
    icon: Megaphone,
    accent: "bg-studio-magenta",
  },
  {
    title: "Events & Weddings",
    description: "Wedding cards, invitations, event passes, welcome boards, and thank-you cards.",
    icon: Sparkles,
    accent: "bg-studio-yellow",
  },
  {
    title: "Packaging & Labels",
    description: "Product packaging, stickers, labels, tags, boxes, and brand materials.",
    icon: Boxes,
    accent: "bg-studio-blue",
  },
  {
    title: "Apparel & Gifts",
    description: "T-shirt printing, custom apparel, mugs, gifts, frames, and keepsakes.",
    icon: Gift,
    accent: "bg-studio-cyan",
  },
  {
    title: "Photo & Calendar",
    description: "Photo prints, albums, calendars, canvas prints, and memory collections.",
    icon: Image,
    accent: "bg-studio-magenta",
  },
  {
    title: "Binding & Diaries",
    description: "Spiral, perfect, hard, and soft binding with diaries, notebooks, and reports.",
    icon: BookOpen,
    accent: "bg-studio-yellow",
  },
  {
    title: "Custom Print Requests",
    description: "Share your size, finish, quantity, and deadline. We will guide the rest.",
    icon: Paintbrush,
    accent: "bg-studio-blue",
  },
];

export const featuredDesigns = [
  {
    name: "Premium Business Card Set",
    category: "Business & Stationery",
    gradient: "from-studio-cyan/80 to-studio-blue/80",
  },
  {
    name: "Elegant Wedding Invitation",
    category: "Events & Weddings",
    gradient: "from-studio-magenta/80 to-studio-yellow/80",
  },
  {
    name: "Retail Packaging Label Kit",
    category: "Packaging & Labels",
    gradient: "from-studio-yellow/90 to-studio-cyan/80",
  },
  {
    name: "Event Banner & Poster Combo",
    category: "Marketing Prints",
    gradient: "from-studio-blue/80 to-studio-magenta/80",
  },
];

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

export const processSteps = [
  "Choose your service or design",
  "Share size, quantity, finish, and deadline",
  "Get a quote through your preferred channel",
  "Print with confidence after confirmation",
];

export const footerLinks = ["Services", "Designs", "How It Works", "Contact"];

export const customerIcon = UsersRound;
