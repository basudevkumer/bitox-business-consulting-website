import { Lightbulb, Users, Search, ShieldCheck } from "lucide-react";
 
// =================================
// HomeOne - Hero Section Array Object
// =================================
export const heroSections = [
  {
    id: 1,
    title: "Financial Planning",
    slug: "financial-planning",
  },
  {
    id: 2,
    title: "Human Resource",
    slug: "human-resource",
  },
  {
    id: 3,
    title: "Organisations",
    slug: "organisations",
  },
  {
    id: 4,
    title: "Research & Analysis",
    slug: "research-analysis",
  },
  {
    id: 5,
    title: "Risk Management",
    slug: "risk-management",
  },
];

// ===============================================
// HomeOne - feature-round Section Array Object
// ===============================================

export const aboutSectionskills = [
  { label: "Analysis", value: 52 },
  { label: "User Experience", value: 82 },
  { label: "Development", value: 92 },
];

export const aboutStats = [
  {
    value: "68+",
    label: "Completed Projects",
    description: "Include a simple sentence about completed work.",
  },
  {
    value: "98+",
    label: "Satisfied Clients",
    description: "Include a simple sentence about satisfied clients.",
  },
];

// ===============================================
// HomeOne - Service Section Array Object
// ===============================================



const SHARED_DESCRIPTION =
  "We're a creative branding and communications company of creative thinkers, strategists, digital innovators.";

const SHARED_FEATURES = [
  "Strategic roadmapping",
  "Business model development",
  "Growth forecasting",
  "Competitive positioning",
];

export const serviceCards = [
  { 
    id: 1,
    icon: "/images/home01/services/service-icon1.png",
    title: "Strategy & Planning",
    description: SHARED_DESCRIPTION,
    features: SHARED_FEATURES,
    image: "/images/home01/services/services1.png",
    imageAlt: "Two professionals discussing strategy at a desk",
    href: "/services/strategy-planning",
    highlighted: true,
  },
  {
    id: 2,
    icon: "/images/home01/services/service-icon2.png",
    title: "Human Resource",
    description: SHARED_DESCRIPTION,
    features: SHARED_FEATURES,
    image: "/images/home01/services/services1.png",
    imageAlt: "Team members collaborating in a dark-themed office",
    href: "/services/human-resource",
    highlighted: false,
  },
  {
    id: 3,
     icon: "/images/home01/services/service-icon3.png",
    title: "Research & Analysis",
    description: SHARED_DESCRIPTION,
    features: SHARED_FEATURES,
    image: "/images/home01/services/services1.png",
    imageAlt: "Woman and man reviewing data on a laptop",
    href: "/services/research-analysis",
    highlighted: false,
  },
  {
    id: 4,
     icon: "/images/home01/services/service-icon4.png",
    title: "Risk Management",
    description: SHARED_DESCRIPTION,
    features: SHARED_FEATURES,
    image: "/images/home01/services/services1.png",
    imageAlt: "Professional standing in a well-lit corridor",
    href: "/services/risk-management",
    highlighted: false,
  },
];
