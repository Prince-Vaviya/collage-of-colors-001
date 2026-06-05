import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { LogoMark } from "../brand/LogoMark";
import { Button } from "../ui/button";
import { navItems, type PageSlug } from "../../data/navigation";
import { cn } from "../../lib/utils";

type NavbarProps = {
  currentPage: PageSlug;
};

export function Navbar({ currentPage }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const primaryNavItems = navItems.filter((item) => item.slug !== "get-your-job-details");
  const isActive = (slug: string) =>
    currentPage === slug || (slug === "services" && currentPage.startsWith("services/"));

  useEffect(() => {
    setMenuOpen(false);
  }, [currentPage]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-5 py-5">
      <div className="mx-auto max-w-[92rem] rounded-[1.4rem] border border-white/70 bg-white/82 px-4 py-3 shadow-[0_18px_60px_rgba(31,37,40,0.08)] backdrop-blur-2xl lg:rounded-full lg:px-5">
        <div className="flex items-center justify-between gap-4">
          <a href="#/home" className="flex shrink-0 items-center gap-3">
            <LogoMark />
            <span className="text-sm font-black tracking-tight sm:text-base">
              Collage of Colours
            </span>
          </a>
          <nav className="hidden flex-1 items-center justify-center gap-1 text-sm font-extrabold text-zinc-500 lg:flex">
            {primaryNavItems.map((item) => (
              <a
                key={item.slug}
                href={`#/${item.slug}`}
                aria-current={isActive(item.slug) ? "page" : undefined}
                className={cn(
                  "whitespace-nowrap rounded-full px-3 py-2 transition hover:bg-zinc-100 hover:text-studio-ink xl:px-4",
                  isActive(item.slug) && "bg-studio-ink text-white hover:bg-studio-ink hover:text-white",
                )}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="hidden shrink-0 items-center lg:flex">
            <Button asChild size="sm">
              <a href="#/get-your-job-details">
                Get Your Job Details
                <ArrowRight className="size-4" />
              </a>
            </Button>
          </div>
          <Button
            className="lg:hidden"
            variant="outline"
            size="sm"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X className="size-4" /> : <Menu className="size-4" />}
          </Button>
        </div>
        {menuOpen && (
          <nav className="grid gap-2 pt-4 text-sm font-black text-zinc-600 lg:hidden">
            {navItems.map((item) => (
              <a
                key={item.slug}
                href={`#/${item.slug}`}
                aria-current={isActive(item.slug) ? "page" : undefined}
                className={cn(
                  "rounded-2xl px-4 py-3 transition hover:bg-zinc-100 hover:text-studio-ink",
                  isActive(item.slug) && "bg-studio-ink text-white hover:bg-studio-ink hover:text-white",
                )}
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
