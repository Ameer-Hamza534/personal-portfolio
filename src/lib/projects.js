import cfc from "../assets/projects/mockups/cfc.png";
import pe from "../assets/projects/mockups/pe.png";
import ccd from "../assets/projects/mockups/ccd.png";
import og from "../assets/projects/mockups/og.png";
import sl from "../assets/projects/mockups/sl.png";

export const projects = [
  {
    name: "Cynthia Farren Consulting",
    slug: "Software-asset-management-company",
    description:
      "A professional business website developed using WordPress Elementor, featuring a responsive design, user-friendly interface, and tailored solutions for optimizing software and cloud investments.",
    features: [
      "Professional Design",
      "Service-Focused Pages",
      "Client-Centric Content",
      "Responsive and Accessible",
      "Custom Contact Forms",
      "Search Engine Optimized",
      "Secure Hosting and Performance",
      "Responsive and user-friendly design",
    ],
    techStack: [
      "Elementor Pro",
      "Yoast SEO",
      "Contact Form 7",
      "Google Analytics Integration",
    ],
    liveLink: "cynthiafarren.com/",
    image: cfc,
  },
  {
    name: "Cupcake Design Studio",
    slug: "graphic-design-agency-cupcake",
    description:
      "A creative graphic design website built using WordPress Elementor featuring a responsive design, detailed portfolio, and client-focused services for branding, marketing collateral, and digital design.",
    features: [
      "Professional Portfolio Display",
      "Client-Centric Services",
      "Responsive and Interactive",
      "Client Collaboration",
      "Contact and Budget Form",
      "Light and dark mode toggle for accessibility",
    ],
    techStack: [
      "Elementor Pro",
      "Yoast SEO",
      "Contact Form 7",
      "WP Rocket",
      "Image Optimization Plugins",
      "Custom Post Types",
      "Google Analytics Integration",
    ],
    liveLink: "cupcakedesign.com/",
    image: ccd,
  },
  {
    name: "Pakistan Expacts Management Service (PEMS)",
    slug: "estate-property-management",
    description:
      "A professional service website developed using WordPress Elementor, providing legal and estate management solutions for overseas Pakistanis, with features such as tailored services, online consultations, and transparent pricing.",
    features: [
      "Client-Focused Design",
      "Fully responsive for all devices",
      "Interactive Features",
      "Modern and Professional Aesthetic",
      "Contact and Accessibility",
    ],
    techStack: [
      "Elementor Pro",
      "Yoast SEO",
      "Contact Form 7",
      "WP Rocket",
      "Image Optimization Plugins",
      "Custom Post Types",
      "Security Plugins",
    ],
    liveLink: "pakexpats.com",
    image: pe,
  },
  {
    name: "Overnight Glasses",
    slug: "overnight-prescription-glasses",
    description:
      "An e-commerce website offering prescription glasses and lens replacement services with features like next-day delivery, interactive try-on tools, and premium eyewear collections.",
    features: [
      "Custom design tailored to overnight glasses branding",
      "Fully responsive across devices",
      "Interactive animations using Framer Motion",
      "Component-based structure developed in Wordpress",
      "Secure checkout with multiple payment options.",
    ],
    techStack: [
      "Elementor Pro",
      "Yoast SEO",
      "Contact Form 7",
      "WP Rocket",
      "TrustPilot/Review Integration",
      "Image Optimization Plugins",
      "Custom Post Types",
      "Security Plugins",
    ],
    liveLink: "overnightglasses.com/",
    image: og,
  },
  {
    name: "Shiplux transport service",
    slug: "premier-vehicle-shipping-service",
    description:
      "A professional vehicle transport service offering premier shipping solutions across the USA and internationally, with advanced features like a multi-service dashboard, global shipping, and 24/365 customer support. The design was created in Figma and developed into a fully functional and responsive website using Wordpress Elementor Pro",
    features: [
      "Global reach with an interactive shipping location map",
      "Integrated TrustPilot reviews for customer testimonials",
      "Streamlined 'Get a Quote' system for easy shipping requests",
      "24/365 multichannel customer support",
      "Transparent pricing with no hidden fees",
      "Premium vehicle handling with real-time updates",
      "Responsive design for desktop and mobile devices",
    ],
    techStack: [
      "TrustPilot",
      "Elementor Pro",
      "Yoast SEO",
      "Contact Form 7",
      "WP Rocket",
      "TrustPilot/Review Integration",
      "Image Optimization Plugins",
      "Custom Post Types",
      "Security Plugins",
      "Payment Gateways (Stripe, PayPal)",
      "Shipping APIs",
    ],
    liveLink: "shiplux.com/",
    image: sl,
  },
];
