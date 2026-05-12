"use client";

import { useState } from "react";

function fmt(n: number): string {
  return n.toLocaleString("en-US", { maximumFractionDigits: 0 });
}

type EngagementType = "audit" | "technical" | "content" | "linkbuilding" | "local" | "fullservice" | "consulting";
type PricingModel = "hourly" | "project" | "monthly";

const engagementData: Record<EngagementType, {
  name: string;
  hourly: { low: number; mid: number; high: number };
  monthly: { low: number; mid: number; high: number };
  project: { low: number; mid: number; high: number };
  description: string;
}> = {
  audit: {
    name: "SEO Audit (one-time)",
    hourly: { low: 100, mid: 175, high: 300 },
    monthly: { low: 0, mid: 0, high: 0 },
    project: { low: 1500, mid: 3500, high: 8000 },
    description: "Comprehensive technical, on-page, and competitive analysis. Deliverable: written report + roadmap.",
  },
  technical: {
    name: "Technical SEO",
    hourly: { low: 100, mid: 175, high: 300 },
    monthly: { low: 1500, mid: 3500, high: 7500 },
    project: { low: 2500, mid: 5000, high: 12000 },
    description: "Site architecture, crawl optimization, Core Web Vitals, schema, log analysis.",
  },
  content: {
    name: "Content SEO",
    hourly: { low: 75, mid: 125, high: 200 },
    monthly: { low: 2000, mid: 4500, high: 9000 },
    project: { low: 1500, mid: 4000, high: 10000 },
    description: "Keyword research, content briefs, on-page optimization, internal linking strategy.",
  },
  linkbuilding: {
    name: "Link Building / Digital PR",
    hourly: { low: 75, mid: 125, high: 200 },
    monthly: { low: 2000, mid: 5000, high: 12000 },
    project: { low: 1500, mid: 5000, high: 15000 },
    description: "Outreach, guest posting, digital PR campaigns. Often billed per acquired link ($100-$1,000/link).",
  },
  local: {
    name: "Local SEO",
    hourly: { low: 65, mid: 110, high: 175 },
    monthly: { low: 750, mid: 1800, high: 4000 },
    project: { low: 1000, mid: 2500, high: 6000 },
    description: "Google Business Profile, local citations, review management, geo-targeted content.",
  },
  fullservice: {
    name: "Full-Service Retainer",
    hourly: { low: 100, mid: 175, high: 300 },
    monthly: { low: 3000, mid: 7500, high: 18000 },
    project: { low: 0, mid: 0, high: 0 },
    description: "End-to-end SEO ownership: technical, content, links, reporting. Usually 6-12 month commitments.",
  },
  consulting: {
    name: "Strategy Consulting",
    hourly: { low: 150, mid: 275, high: 500 },
    monthly: { low: 2500, mid: 5000, high: 10000 },
    project: { low: 3000, mid: 7500, high: 20000 },
    description: "Advisory only — strategy, in-house team coaching, vendor selection. No execution.",
  },
};

const experienceMultipliers = {
  junior: { label: "Junior (1-3 yrs)", value: 0.65 },
  mid: { label: "Mid (4-6 yrs)", value: 1.0 },
  senior: { label: "Senior (7+ yrs)", value: 1.5 },
};

export default function SEOConsultantCalculator() {
  const [engagement, setEngagement] = useState<EngagementType>("audit");
  const [pricingModel, setPricingModel] = useState<PricingModel>("project");
  const [experience, setExperience] = useState<keyof typeof experienceMultipliers>("mid");

  const data = engagementData[engagement];
  const expMult = experienceMultipliers[experience].value;

  const adjustedHourly = {
    low: Math.round(data.hourly.low * expMult),
    mid: Math.round(data.hourly.mid * expMult),
    high: Math.round(data.hourly.high * expMult),
  };

  const adjustedMonthly = {
    low: Math.round(data.monthly.low * expMult),
    mid: Math.round(data.monthly.mid * expMult),
    high: Math.round(data.monthly.high * expMult),
  };

  const adjustedProject = {
    low: Math.round(data.project.low * expMult),
    mid: Math.round(data.project.mid * expMult),
    high: Math.round(data.project.high * expMult),
  };

  // Engagement-specific model availability
  const monthlyAvailable = data.monthly.mid > 0;
  const projectAvailable = data.project.mid > 0;
  const effectiveModel: PricingModel =
    pricingModel === "monthly" && !monthlyAvailable ? "hourly" :
    pricingModel === "project" && !projectAvailable ? "monthly" :
    pricingModel;

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Calculate Your Rate</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="engagement" className="block text-sm font-medium text-gray-700 mb-2">
              Engagement Type
            </label>
            <select
              id="engagement"
              value={engagement}
              onChange={(e) => setEngagement(e.target.value as EngagementType)}
              className="w-full rounded-lg border border-gray-300 py-3 px-4 text-lg focus:border-violet-500 focus:ring-2 focus:ring-violet-200 outline-none transition"
            >
              {Object.entries(engagementData).map(([key, { name }]) => (
                <option key={key} value={key}>{name}</option>
              ))}
            </select>
            <p className="text-xs text-gray-500 mt-2">{data.description}</p>
          </div>
          <div>
            <label htmlFor="pricingModel" className="block text-sm font-medium text-gray-700 mb-2">
              Pricing Model
            </label>
            <select
              id="pricingModel"
              value={pricingModel}
              onChange={(e) => setPricingModel(e.target.value as PricingModel)}
              className="w-full rounded-lg border border-gray-300 py-3 px-4 text-lg focus:border-violet-500 focus:ring-2 focus:ring-violet-200 outline-none transition"
            >
              <option value="hourly">Hourly</option>
              {projectAvailable && <option value="project">Per Project</option>}
              {monthlyAvailable && <option value="monthly">Monthly Retainer</option>}
            </select>
          </div>
          <div>
            <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
              Experience Level
            </label>
            <select
              id="experience"
              value={experience}
              onChange={(e) => setExperience(e.target.value as keyof typeof experienceMultipliers)}
              className="w-full rounded-lg border border-gray-300 py-3 px-4 text-lg focus:border-violet-500 focus:ring-2 focus:ring-violet-200 outline-none transition"
            >
              {Object.entries(experienceMultipliers).map(([key, { label }]) => (
                <option key={key} value={key}>{label}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="bg-green-600 rounded-xl p-6 text-white text-center">
        {effectiveModel === "hourly" && (
          <>
            <p className="text-green-100 text-sm mb-1">Recommended hourly rate</p>
            <p className="text-5xl font-bold mb-1">${adjustedHourly.low} — ${adjustedHourly.high}/hr</p>
            <p className="text-green-200 text-sm">
              Midpoint: ${adjustedHourly.mid}/hr | {data.name}
            </p>
          </>
        )}
        {effectiveModel === "project" && (
          <>
            <p className="text-green-100 text-sm mb-1">Recommended project price</p>
            <p className="text-5xl font-bold mb-1">${fmt(adjustedProject.low)} — ${fmt(adjustedProject.high)}</p>
            <p className="text-green-200 text-sm">
              Midpoint: ${fmt(adjustedProject.mid)} | {data.name}
            </p>
          </>
        )}
        {effectiveModel === "monthly" && (
          <>
            <p className="text-green-100 text-sm mb-1">Recommended monthly retainer</p>
            <p className="text-5xl font-bold mb-1">${fmt(adjustedMonthly.low)} — ${fmt(adjustedMonthly.high)}/mo</p>
            <p className="text-green-200 text-sm">
              Midpoint: ${fmt(adjustedMonthly.mid)}/mo | {data.name}
            </p>
          </>
        )}
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="font-semibold text-gray-900 mb-4">Rates by Engagement Type (US, mid-level)</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-2 px-3 font-medium text-gray-700">Engagement</th>
                <th className="text-left py-2 px-3 font-medium text-gray-700">Hourly</th>
                <th className="text-left py-2 px-3 font-medium text-gray-700">Project</th>
                <th className="text-left py-2 px-3 font-medium text-gray-700">Monthly</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(engagementData).map(([key, d]) => (
                <tr key={key} className={`border-b border-gray-100 ${key === engagement ? "bg-violet-50" : ""}`}>
                  <td className="py-2 px-3 font-medium">{d.name}</td>
                  <td className="py-2 px-3">${d.hourly.low}-${d.hourly.high}/hr</td>
                  <td className="py-2 px-3 text-gray-500">{d.project.mid > 0 ? `$${fmt(d.project.low)}-$${fmt(d.project.high)}` : "—"}</td>
                  <td className="py-2 px-3 text-gray-500">{d.monthly.mid > 0 ? `$${fmt(d.monthly.low)}-$${fmt(d.monthly.high)}/mo` : "—"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-500 mt-3">
          Strategy consulting commands the highest rates. Local SEO is the lowest-priced specialty because budgets are smaller.
        </p>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
        <h3 className="font-semibold text-amber-900 mb-3">Hourly vs Project vs Retainer</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <p className="font-medium text-amber-900 mb-1">Hourly</p>
            <p className="text-sm text-amber-800">
              Best for: ad-hoc consulting, unclear scope, one-off advisory calls. Caps your earning ceiling on long engagements.
            </p>
          </div>
          <div>
            <p className="font-medium text-amber-900 mb-1">Per Project</p>
            <p className="text-sm text-amber-800">
              Best for: audits, technical fixes, defined deliverables. Define scope sharply or revisions will eat margin.
            </p>
          </div>
          <div>
            <p className="font-medium text-amber-900 mb-1">Monthly Retainer</p>
            <p className="text-sm text-amber-800">
              Best for: ongoing content, links, full-service SEO. The only model that lets SEO results compound for the client.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
