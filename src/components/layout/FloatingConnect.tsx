import { Instagram, Linkedin, MessageCircle } from "lucide-react";
import { cn } from "../../lib/utils";

const connectLinks = [
  {
    label: "Connect on WhatsApp",
    href: "https://wa.me/918879239384?text=Hi%20Collage%20of%20Colours%2C%20I%20would%20like%20to%20connect.",
    icon: MessageCircle,
    className: "bg-[#1FAF62] text-white hover:bg-[#188d50]",
  },
  {
    label: "Follow on Instagram",
    href: "https://www.instagram.com/collage_of_colours_/",
    icon: Instagram,
    className: "bg-[#E83E7C] text-white hover:bg-[#c92f68]",
  },
  {
    label: "Connect on LinkedIn",
    href: "https://www.linkedin.com/in/viren-jatrara-7b4760a6/",
    icon: Linkedin,
    className: "bg-[#0A66C2] text-white hover:bg-[#084f96]",
  },
];

export function FloatingConnect() {
  return (
    <div className="fixed inset-x-0 bottom-3 z-40 flex justify-center gap-3 px-4 sm:inset-x-auto sm:bottom-5 sm:right-5 sm:flex-col sm:px-0">
      {connectLinks.map((link) => {
        const Icon = link.icon;

        return (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            aria-label={link.label}
            title={link.label}
            className={cn(
              "grid size-10 place-items-center rounded-full shadow-[0_18px_50px_rgba(31,37,40,0.18)] transition duration-300 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-studio-blue focus-visible:ring-offset-2 sm:size-12",
              link.className,
            )}
          >
            <Icon className="size-4 sm:size-5" />
          </a>
        );
      })}
    </div>
  );
}
