export interface Profession {
  name: string;
  slug: string;
  typicalRate: { low: number; mid: number; high: number };
  typicalIncome: number;
  healthInsurance: number;
  description: string;
}

export const PROFESSIONS: Profession[] = [
  { name: "Web Developer", slug: "web-developer", typicalRate: { low: 50, mid: 100, high: 175 }, typicalIncome: 85000, healthInsurance: 6000, description: "Frontend, backend, and full-stack web development" },
  { name: "Graphic Designer", slug: "graphic-designer", typicalRate: { low: 35, mid: 65, high: 120 }, typicalIncome: 55000, healthInsurance: 6000, description: "Branding, UI/UX, marketing materials" },
  { name: "Copywriter", slug: "copywriter", typicalRate: { low: 40, mid: 80, high: 150 }, typicalIncome: 60000, healthInsurance: 6000, description: "Marketing copy, content writing, SEO content" },
  { name: "Consultant", slug: "consultant", typicalRate: { low: 75, mid: 150, high: 300 }, typicalIncome: 100000, healthInsurance: 8000, description: "Management, strategy, and business consulting" },
  { name: "Photographer", slug: "photographer", typicalRate: { low: 50, mid: 100, high: 250 }, typicalIncome: 50000, healthInsurance: 6000, description: "Portrait, event, product, and commercial photography" },
  { name: "Video Editor", slug: "video-editor", typicalRate: { low: 35, mid: 75, high: 150 }, typicalIncome: 55000, healthInsurance: 6000, description: "Video editing, motion graphics, post-production" },
  { name: "Mobile App Developer", slug: "mobile-developer", typicalRate: { low: 60, mid: 125, high: 200 }, typicalIncome: 95000, healthInsurance: 6000, description: "iOS, Android, and cross-platform mobile development" },
  { name: "Data Analyst", slug: "data-analyst", typicalRate: { low: 45, mid: 90, high: 160 }, typicalIncome: 75000, healthInsurance: 6000, description: "Data analysis, visualization, and reporting" },
  { name: "Marketing Consultant", slug: "marketing-consultant", typicalRate: { low: 50, mid: 100, high: 200 }, typicalIncome: 70000, healthInsurance: 6000, description: "Digital marketing, social media, and campaign strategy" },
  { name: "Bookkeeper/Accountant", slug: "bookkeeper", typicalRate: { low: 30, mid: 60, high: 100 }, typicalIncome: 50000, healthInsurance: 6000, description: "Bookkeeping, tax preparation, financial management" },
];
