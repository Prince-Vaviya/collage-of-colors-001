import cutoutsImage from "../assets/cutouts.png";
import greetingImage from "../assets/greeting.png";
import identityImage from "../assets/identity.png";
import spiralImage from "../assets/spiral.png";
import spiralTwoImage from "../assets/spiral-2.png";

export type ServicePageContent = {
  badge: string;
  heroTitle: string;
  heroSubtitle: string;
  heroImage: string;
  heroImageAlt: string;
  challenges: Array<{
    title: string;
    description: string;
  }>;
  solutions: Array<{
    title: string;
    description: string;
  }>;
  process: string[];
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  finalTitle: string;
  finalButton: string;
};

export const servicePageContent: Record<string, ServicePageContent> = {
  "services/digital-printing": {
    badge: "Print that looks sharp in hand",
    heroTitle: "Digital Printing Services",
    heroSubtitle:
      "Fast, vibrant, high-quality prints for campaigns, events, launches, and daily business needs.",
    heroImage: cutoutsImage,
    heroImageAlt: "Digital printing samples and promotional print products",
    challenges: [
      {
        title: "Dull Color Output",
        description: "Prints look flat and fail to match the design intent.",
      },
      {
        title: "Wrong Paper Choice",
        description: "The finish does not match the purpose or audience.",
      },
      {
        title: "Urgent Campaigns",
        description: "Last-minute promotions still need clean, reliable output.",
      },
      {
        title: "Print-Ready Issues",
        description: "Files arrive with size, bleed, resolution, or color problems.",
      },
    ],
    solutions: [
      {
        title: "Flyers & Leaflets",
        description: "Short-run and campaign-ready prints for offers, launches, and events.",
      },
      {
        title: "Posters & Banners",
        description: "Large-format visuals with strong color and readable messaging.",
      },
      {
        title: "Stickers & Labels",
        description: "Crisp adhesive prints for packaging, branding, and promotions.",
      },
      {
        title: "Marketing Material",
        description: "Consistent print sets that support sales teams and brand campaigns.",
      },
    ],
    process: [
      "File Check",
      "Paper & Finish Selection",
      "Color Proofing",
      "Digital Printing",
      "Finishing & Dispatch",
    ],
    faqs: [
      {
        question: "Can you print small quantities?",
        answer:
          "Yes. Digital printing is ideal for short runs, quick batches, trials, and urgent marketing needs.",
      },
      {
        question: "Which paper and finishes are available?",
        answer:
          "We can guide you through paper thickness, matte, gloss, textured, lamination, and other finish options.",
      },
      {
        question: "Can you fix my file before printing?",
        answer:
          "Yes. We can check alignment, bleed, resolution, and basic print-readiness before production.",
      },
      {
        question: "Do you handle urgent print jobs?",
        answer:
          "Urgent jobs can be handled based on quantity, material availability, and finishing requirements.",
      },
    ],
    finalTitle: "Print It Brilliantly",
    finalButton: "Start Printing",
  },
  "services/signage-boards": {
    badge: "Visibility built for real locations",
    heroTitle: "Signage Boards Services",
    heroSubtitle:
      "Make your storefront, office, event, or counter instantly visible with clean signage execution.",
    heroImage: spiralTwoImage,
    heroImageAlt: "Signage materials and color samples",
    challenges: [
      {
        title: "Low Storefront Visibility",
        description: "People pass by without noticing your shop or office.",
      },
      {
        title: "Unreadable From Distance",
        description: "Signage loses impact when typography, contrast, or scale is wrong.",
      },
      {
        title: "Poor Material Durability",
        description: "Outdoor signs fade, bend, or look old too quickly.",
      },
      {
        title: "Weak Installation Finish",
        description: "Even a good design looks unfinished when installation is not clean.",
      },
    ],
    solutions: [
      {
        title: "ACP Boards",
        description: "Durable, professional panels for shops, offices, and exterior branding.",
      },
      {
        title: "LED Signage",
        description: "Illuminated signs that keep your brand visible after dark.",
      },
      {
        title: "Acrylic Letters",
        description: "Dimensional lettering for receptions, showrooms, and premium interiors.",
      },
      {
        title: "Glow Sign Boards",
        description: "Bright, high-visibility signage for commercial and retail spaces.",
      },
    ],
    process: [
      "Site & Size Study",
      "Material Selection",
      "Design Preview",
      "Fabrication",
      "Installation Support",
    ],
    faqs: [
      {
        question: "Do you help decide the signage size?",
        answer:
          "Yes. We consider viewing distance, location, space, and business visibility before recommending size.",
      },
      {
        question: "Which signage material should I choose?",
        answer:
          "It depends on location, weather exposure, budget, and the type of visibility you need.",
      },
      {
        question: "Can you make illuminated signage?",
        answer:
          "Yes. LED and glow sign options can be planned based on your brand and location.",
      },
      {
        question: "Do you support installation?",
        answer:
          "Installation support can be planned depending on site conditions and signage type.",
      },
    ],
    finalTitle: "Make Your Business Seen",
    finalButton: "Plan My Signage",
  },
  "services/offset-printing": {
    badge: "Bulk print with consistent finish",
    heroTitle: "Offset Printing Services",
    heroSubtitle:
      "Reliable high-volume printing for books, labels, packaging, and corporate communication.",
    heroImage: spiralImage,
    heroImageAlt: "Offset printing paper and production samples",
    challenges: [
      {
        title: "Inconsistent Bulk Output",
        description: "Large quantities lose color consistency from batch to batch.",
      },
      {
        title: "High Per-Unit Cost",
        description: "Bulk requirements become expensive without the right print method.",
      },
      {
        title: "Material Mismatch",
        description: "Colour variation, Paper quality inconsistency and Quantity mismatch",
      },
      {
        title: "Production Delays",
        description: "Business print material arrives late and disrupts campaigns.",
      },
    ],
    solutions: [
      {
        title: "Books & Booklets",
        description: "Clean page output, binding-ready formats, and volume-friendly production.",
      },
      {
        title: "Packaging Prints",
        description: "Consistent print runs for boxes, sleeves, tags, and product material.",
      },
      {
        title: "High Output Material Matching",
        description: "No colour variations, no quantity shortfalls, no paper quality inconsistencies.",
      },
      {
        title: "Corporate Material",
        description: "Professional office and marketing prints for repeated business use.",
      },
    ],
    process: [
      "Quantity Planning",
      "Artwork Prepress",
      "Paper & Plate Setup",
      "Offset Production",
      "Finishing & Packing",
    ],
    faqs: [
      {
        question: "When should I choose offset printing?",
        answer:
          "Offset printing is best for larger quantities where consistency and per-unit value matter.",
      },
      {
        question: "Can you help with prepress setup?",
        answer:
          "Yes. We can check artwork, margins, color mode, and print-readiness before production.",
      },
      {
        question: "What quantities are suitable?",
        answer:
          "The ideal quantity depends on material, size, finish, and project type. We can guide you after the brief.",
      },
      {
        question: "Can offset prints be finished or packed?",
        answer:
          "Yes. Finishing such as cutting, folding, binding, lamination, and packing can be planned.",
      },
    ],
    finalTitle: "Print Bulk Without Compromise",
    finalButton: "Discuss Bulk Printing",
  },
  "services/packaging-solutions": {
    badge: "Packaging that earns attention",
    heroTitle: "Packaging Solutions",
    heroSubtitle:
      "Custom packaging, labels, and product presentation that make first impressions stronger.",
    heroImage: identityImage,
    heroImageAlt: "Product packaging and brand presentation samples",
    challenges: [
      {
        title: "Weak Shelf Presence",
        description: "Products do not stand out when placed beside competitors.",
      },
      {
        title: "Unclear Product Information",
        description: "Labels fail to communicate benefits, usage, or trust details.",
      },
      {
        title: "Generic Box Design",
        description: "Packaging looks common and does not support brand recall.",
      },
      {
        title: "Mismatch With Brand",
        description: "Colors, typography, and finish do not align with the business identity.",
      },
    ],
    solutions: [
      {
        title: "Product Boxes",
        description: "Custom box concepts that protect the product and strengthen presentation.",
      },
      {
        title: "Labels",
        description: "Clear, attractive label systems for product recognition and trust.",
      },
      {
        title: "Custom Packaging",
        description: "Packaging formats designed around product size, use, and brand personality.",
      },
      {
        title: "Print Finishes",
        description: "Finishing choices that make products feel more premium and memorable.",
      },
    ],
    process: [
      "Product Study",
      "Structure & Size",
      "Visual Design",
      "Print & Finish",
      "Final Packaging",
    ],
    faqs: [
      {
        question: "Can you design packaging from scratch?",
        answer:
          "Yes. We can help with structure direction, visual design, label layout, and print-ready output.",
      },
      {
        question: "Do you make labels too?",
        answer:
          "Yes. Product labels can be designed and printed based on material, finish, and usage.",
      },
      {
        question: "Can packaging match my existing brand?",
        answer:
          "Yes. We can align packaging colors, typography, and graphic language with your current brand.",
      },
      {
        question: "Do you support small product batches?",
        answer:
          "Small batches may be possible depending on packaging format, material, and finish requirements.",
      },
    ],
    finalTitle: "Package Products With Confidence",
    finalButton: "Plan Packaging",
  },
  "services/gifting": {
    badge: "Brand recall through useful gifts",
    heroTitle: "Corporate Gifting Services",
    heroSubtitle:
      "Customized gifts and promotional products that make clients, employees, and events feel remembered.",
    heroImage: greetingImage,
    heroImageAlt: "Corporate gifting and customized product samples",
    challenges: [
      {
        title: "Forgettable Giveaways",
        description: "Generic gifts get ignored and fail to build brand memory.",
      },
      {
        title: "Poor Product Relevance",
        description: "Gift choices do not match the audience, event, or business relationship.",
      },
      {
        title: "Weak Branding Quality",
        description: "Logos and messages look low-quality on the final product.",
      },
      {
        title: "Last-Minute Planning",
        description: "Festival, employee, or client gifting becomes rushed and inconsistent.",
      },
    ],
    solutions: [
      {
        title: "Customized Gifts",
        description: "Personalized products that feel useful, thoughtful, and brand-aligned.",
      },
      {
        title: "Promotional Products",
        description: "Giveaways designed for events, launches, campaigns, and customer recall.",
      },
      {
        title: "Employee Gifts",
        description: "Team gifting for milestones, festivals, onboarding, and appreciation.",
      },
      {
        title: "Client Gift Sets",
        description: "Branded combinations that make professional relationships feel valued.",
      },
    ],
    process: [
      "Audience Planning",
      "Gift Selection",
      "Brand Customization",
      "Sample Approval",
      "Packing & Delivery",
    ],
    faqs: [
      {
        question: "Can you suggest gift ideas?",
        answer:
          "Yes. We can recommend options based on audience, occasion, budget, and brand personality.",
      },
      {
        question: "Can gifts be customized with logo and name?",
        answer:
          "Yes. Branding can be planned through printing, labels, packaging, or product-specific customization.",
      },
      {
        question: "Do you handle bulk gifting?",
        answer:
          "Bulk gifting can be planned depending on product availability, customization type, and timeline.",
      },
      {
        question: "Can you help with festive gifting?",
        answer:
          "Yes. Festive gift ideas, packaging, and branding can be planned in advance for cleaner execution.",
      },
    ],
    finalTitle: "Make Every Gift Remembered",
    finalButton: "Plan Gifting",
  },
};
