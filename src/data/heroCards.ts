import cutoutsImage from "../assets/cutouts.png";
import greetingImage from "../assets/greeting.png";
import identityImage from "../assets/identity.png";
import spiralImage from "../assets/spiral.png";
import spiralTwoImage from "../assets/spiral-2.png";

export const heroCards = [
  {
    title: "Brand Kits",
    label: "Identity",
    image: identityImage,
    colors: "from-studio-cyan via-sky-300 to-white",
    rotate: -12,
    y: 10,
  },
  {
    title: "Wedding Cards",
    label: "Occasions",
    image: greetingImage,
    colors: "from-studio-magenta via-rose-300 to-orange-100",
    rotate: -6,
    y: -12,
  },
  {
    title: "Photo Prints",
    label: "Memories",
    image: cutoutsImage,
    colors: "from-studio-yellow via-amber-200 to-white",
    rotate: 0,
    y: 4,
  },
  {
    title: "Packaging",
    label: "Products",
    image: spiralImage,
    colors: "from-studio-blue via-cyan-300 to-white",
    rotate: 7,
    y: -16,
  },
  {
    title: "Banners",
    label: "Promotion",
    image: spiralTwoImage,
    colors: "from-emerald-400 via-teal-200 to-white",
    rotate: 13,
    y: 8,
  },
];

export type HeroCard = (typeof heroCards)[number];
