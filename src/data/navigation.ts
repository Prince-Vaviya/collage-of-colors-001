export const navItems = [
  { label: "Home", slug: "home" },
  { label: "Services", slug: "services" },
  { label: "Industries", slug: "industries" },
  { label: "Work Gallery", slug: "work-gallery" },
  { label: "About Us", slug: "about-us" },
  { label: "Careers", slug: "careers" },
  { label: "Contact Us", slug: "contact-us" },
  { label: "Get Your Job Details", slug: "get-your-job-details" },
];

export type PageSlug = (typeof navItems)[number]["slug"];

export function getPageFromHash(): PageSlug {
  const slug = window.location.hash.replace(/^#\/?/, "") || "home";
  return navItems.some((item) => item.slug === slug) ? (slug as PageSlug) : "home";
}
