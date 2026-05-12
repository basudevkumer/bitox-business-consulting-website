import allImages from "./imageProvider";

const {  processImage ,heroBanner} = allImages;


export const prcessStepsArr = [
  {
    id: "01",
    tab: "Discovery & Insights",
    stepLabel: "Step 1",
    title: "01. Understanding your business",
    titleTwo: " Understanding your business",
    description: "We dive deep into your business to uncover insights that drive growth.",
    bullets: [
      { id: "01-b1", text: "Analyze your goals, challenges, & long-term vision" },
      { id: "01-b2", text: "Review current operations and performance" },
      { id: "01-b3", text: "This helps us align our services with exact needs" },
    ],
    image: processImage,
  },
  {
    id: "02",
    tab: "Strategic Planning",
    stepLabel: "Step 2",
    title: "02. Building your growth roadmap",
    titleTwo: "Building your growth roadmap",
    description: "We craft a tailored strategy designed specifically for your business.",
    bullets: [
      { id: "02-b1", text: "Define clear milestones and measurable KPIs" },
      { id: "02-b2", text: "Identify the most impactful growth opportunities" },
      { id: "02-b3", text: "Create a prioritized action plan for quick wins" },
    ],
    image: heroBanner[1].img,
  },
  {
    id: "03",
    tab: "Execution & Optimization",
    stepLabel: "Step 3",
    title: "03. Delivering results at scale",
    titleTwo: "Delivering Results That Scale",
    description: "We execute the plan and continuously optimize for maximum performance.",
    bullets: [
      { id: "03-b1", text: "Implement strategies with precision and speed" },
      { id: "03-b2", text: "Monitor performance with real-time analytics" },
      { id: "03-b3", text: "Continuously refine to maximize ROI" },
    ],
    image: heroBanner[2].img,
  },
];