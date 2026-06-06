import { serviceDetailSlugs } from "./services";

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

const navSlugs = navItems.map((item) => item.slug);

export type PageSlug =
  | (typeof navItems)[number]["slug"]
  | (typeof serviceDetailSlugs)[number];

export function getPageFromHash(): PageSlug {
  const slug = (window.location.hash.replace(/^#\/?/, "") || "home").split("?")[0];
  const isNavRoute = navSlugs.includes(slug);
  const isServiceRoute = serviceDetailSlugs.includes(slug as (typeof serviceDetailSlugs)[number]);

  return isNavRoute || isServiceRoute ? (slug as PageSlug) : "home";
}
