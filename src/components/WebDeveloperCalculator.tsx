"use client";

import { useState } from "react";

function fmt(n: number): string {
  return n.toLocaleString("en-US", { maximumFractionDigits: 0 });
}

type ExperienceLevel = "junior" | "mid" | "senior" | "lead";
type TechStack = "html-css" | "wordpress" | "react" | "fullstack" | "devops" | "ai-ml";

const experienceRates: Record<ExperienceLevel, { low: number; mid: number; high: number }> = {
  junior: { low: 35, mid: 55, high: 75 },
  mid: { low: 65, mid: 100, high: 135 },
  senior: { low: 100, mid: 150, high: 200 },
  lead: { low: 150, mid: 200, high: 300 },
};

const techStackMultipliers: Record<TechStack, { name: string; multiplier: number }> = {
  "html-css": { name: "HTML/CSS/Basic JS", multiplier: 0.8 },
  "wordpress": { name: "WordPress/CMS", multiplier: 0.9 },
  "react": { name: "React/Vue/Angular", multiplier: 1.0 },
  "fullstack": { name: "Full-Stack (Node, Rails, etc.)", multiplier: 1.1 },
  "devops": { name: "DevOps/Cloud Architecture", multiplier: 1.2 },
  "ai-ml": { name: "AI/ML Integration", multiplier: 1.4 },
};

const projectTypes = [
  { name: "Landing page", hours: "8-20", priceRange: "$800-$3,000" },
  { name: "Business website (5-10 pages)", hours: "40-80", priceRange: "$4,000-$12,000" },
  { name: "E-commerce store", hours: "80-200", priceRange: "$8,000-$30,000" },
  { name: "Custom web application", hours: "200-500+", priceRange: "$20,000-$75,000+" },
  { name: "SaaS MVP", hours: "300-600+", priceRange: "$30,000-$100,000+" },
  { name: "API development", hours: "40-120", priceRange: "$4,000-$18,000" },
];

export default function WebDeveloperCalculator() {
  const [experience, setExperience] = useState<ExperienceLevel>("mid");
  const [techStack, setTechStack] = useState<TechStack>("react");
  const [location, setLocation] = useState<"us" | "uk" | "western-eu" | "eastern-eu" | "asia">("us");
  const [projectHours, setProjectHours] = useState(80);

  const locationMultipliers: Record<string, number> = {
    "us": 1.0,
    "uk": 0.9,
    "western-eu": 0.85,
    "eastern-eu": 0.55,
    "asia": 0.45,
  };

  const baseRate = experienceRates[experience];
  const techMultiplier = techStackMultipliers[techStack].multiplier;
  const locMultiplier = locationMultipliers[location];

  const adjustedLow = Math.round(baseRate.low * techMultiplier * locMultiplier);
  const adjustedMid = Math.round(baseRate.mid * techMultiplier * locMultiplier);
  const adjustedHigh = Math.round(baseRate.high * techMultiplier * locMultiplier);

  const projectLow = adjustedLow * projectHours;
  const projectMid = adjustedMid * projectHours;
  const projectHigh = adjustedHigh * projectHours;

  return (
    <div className="space-y-8">
      {/* Calculator Inputs */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Calculate Your Rate</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
              Experience Level
            </label>
            <select
              id="experience"
              value={experience}
              onChange={(e) => setExperience(e.target.value as ExperienceLevel)}
              className="w-full rounded-lg border border-gray-300 py-3 px-4 text-lg focus:border-violet-500 focus:ring-2 focus:ring-violet-200 outline-none transition"
            >
              <option value="junior">Junior (0-2 years)</option>
              <option value="mid">Mid-Level (3-5 years)</option>
              <option value="senior">Senior (6-10 years)</option>
              <option value="lead">Lead/Architect (10+ years)</option>
            </select>
          </div>
          <div>
            <label htmlFor="techStack" className="block text-sm font-medium text-gray-700 mb-2">
              Primary Tech Stack
            </label>
            <select
              id="techStack"
              value={techStack}
              onChange={(e) => setTechStack(e.target.value as TechStack)}
              className="w-full rounded-lg border border-gray-300 py-3 px-4 text-lg focus:border-violet-500 focus:ring-2 focus:ring-violet-200 outline-none transition"
            >
              {Object.entries(techStackMultipliers).map(([key, { name }]) => (
                <option key={key} value={key}>{name}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
              Location
            </label>
            <select
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value as typeof location)}
              className="w-full rounded-lg border border-gray-300 py-3 px-4 text-lg focus:border-violet-500 focus:ring-2 focus:ring-violet-200 outline-none transition"
            >
              <option value="us">United States</option>
              <option value="uk">United Kingdom</option>
              <option value="western-eu">Western Europe</option>
              <option value="eastern-eu">Eastern Europe</option>
              <option value="asia">Asia</option>
            </select>
          </div>
          <div>
            <label htmlFor="projHours" className="block text-sm font-medium text-gray-700 mb-2">
              Estimated Project Hours
            </label>
            <div className="relative">
              <input
                id="projHours"
                type="number"
                value={projectHours}
                onChange={(e) => setProjectHours(Number(e.target.value))}
                className="w-full rounded-lg border border-gray-300 py-3 pl-4 pr-16 text-lg focus:border-violet-500 focus:ring-2 focus:ring-violet-200 outline-none transition"
                min={1}
                step={10}
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm">hours</span>
            </div>
          </div>
        </div>
      </div>

      {/* Rate Result */}
      <div className="bg-green-600 rounded-xl p-6 text-white text-center">
        <p className="text-green-100 text-sm mb-1">Recommended hourly rate range</p>
        <p className="text-5xl font-bold mb-1">${adjustedLow} — ${adjustedHigh}/hr</p>
        <p className="text-green-200 text-sm">
          Midpoint: ${adjustedMid}/hr | {techStackMultipliers[techStack].name}, {experience} level
        </p>
      </div>

      {/* Project Estimate */}
      <div className="bg-violet-50 border border-violet-200 rounded-xl p-6">
        <h3 className="font-semibold text-violet-900 mb-3">
          Project Estimate ({projectHours} hours)
        </h3>
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <p className="text-sm text-violet-600">Low</p>
            <p className="text-xl font-bold text-violet-900">${fmt(projectLow)}</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-violet-600">Mid</p>
            <p className="text-xl font-bold text-violet-900">${fmt(projectMid)}</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-violet-600">High</p>
            <p className="text-xl font-bold text-violet-900">${fmt(projectHigh)}</p>
          </div>
        </div>
      </div>

      {/* Rate Table by Experience */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="font-semibold text-gray-900 mb-4">Web Developer Rates by Experience</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-2 px-3 font-medium text-gray-700">Level</th>
                <th className="text-left py-2 px-3 font-medium text-gray-700">Low</th>
                <th className="text-left py-2 px-3 font-medium text-gray-700">Mid</th>
                <th className="text-left py-2 px-3 font-medium text-gray-700">High</th>
                <th className="text-left py-2 px-3 font-medium text-gray-700">Annual (mid)</th>
              </tr>
            </thead>
            <tbody>
              {(Object.entries(experienceRates) as [ExperienceLevel, typeof baseRate][]).map(([level, rates]) => (
                <tr key={level} className={`border-b border-gray-100 ${level === experience ? "bg-violet-50" : ""}`}>
                  <td className="py-2 px-3 font-medium capitalize">{level}</td>
                  <td className="py-2 px-3">${rates.low}/hr</td>
                  <td className="py-2 px-3">${rates.mid}/hr</td>
                  <td className="py-2 px-3">${rates.high}/hr</td>
                  <td className="py-2 px-3">${fmt(rates.mid * 1400)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-500 mt-3">
          Annual estimate based on ~1,400 billable hours/year (70% utilization). US market rates.
        </p>
      </div>

      {/* Tech Stack Premiums */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="font-semibold text-gray-900 mb-4">Tech Stack Rate Premiums</h3>
        <div className="space-y-3">
          {Object.entries(techStackMultipliers).map(([key, { name, multiplier }]) => (
            <div key={key} className="flex items-center justify-between">
              <span className="text-sm text-gray-700">{name}</span>
              <div className="flex items-center gap-3">
                <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-violet-500 rounded-full"
                    style={{ width: `${(multiplier / 1.4) * 100}%` }}
                  />
                </div>
                <span className={`text-sm font-medium ${multiplier > 1 ? "text-green-600" : multiplier < 1 ? "text-orange-600" : "text-gray-600"}`}>
                  {multiplier > 1 ? "+" : ""}{Math.round((multiplier - 1) * 100)}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Common Project Pricing */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="font-semibold text-gray-900 mb-4">Common Project Pricing (US Market)</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-2 px-3 font-medium text-gray-700">Project Type</th>
                <th className="text-left py-2 px-3 font-medium text-gray-700">Typical Hours</th>
                <th className="text-left py-2 px-3 font-medium text-gray-700">Price Range</th>
              </tr>
            </thead>
            <tbody>
              {projectTypes.map((project) => (
                <tr key={project.name} className="border-b border-gray-100">
                  <td className="py-2 px-3 font-medium">{project.name}</td>
                  <td className="py-2 px-3">{project.hours}</td>
                  <td className="py-2 px-3">{project.priceRange}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
