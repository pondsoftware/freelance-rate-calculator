"use client";

import { useState } from "react";

function fmt(n: number): string {
  return n.toLocaleString("en-US", { maximumFractionDigits: 0 });
}

type ContentType = "blog" | "landing-page" | "email" | "social" | "technical" | "seo" | "sales-copy";
type PricingModel = "per-word" | "per-project" | "hourly";

const contentTypeData: Record<ContentType, {
  name: string;
  perWord: { low: number; mid: number; high: number };
  hourlyRate: { low: number; mid: number; high: number };
  typicalProject: string;
  typicalPrice: string;
}> = {
  blog: {
    name: "Blog Posts/Articles",
    perWord: { low: 0.08, mid: 0.15, high: 0.40 },
    hourlyRate: { low: 40, mid: 75, high: 150 },
    typicalProject: "1,000-2,000 word article",
    typicalPrice: "$150-$800",
  },
  "landing-page": {
    name: "Landing Page Copy",
    perWord: { low: 0.15, mid: 0.30, high: 0.75 },
    hourlyRate: { low: 60, mid: 100, high: 200 },
    typicalProject: "Single landing page (500-1,000 words)",
    typicalPrice: "$500-$3,000",
  },
  email: {
    name: "Email Sequences",
    perWord: { low: 0.10, mid: 0.25, high: 0.50 },
    hourlyRate: { low: 50, mid: 90, high: 175 },
    typicalProject: "5-email nurture sequence",
    typicalPrice: "$500-$2,500",
  },
  social: {
    name: "Social Media Copy",
    perWord: { low: 0.10, mid: 0.20, high: 0.50 },
    hourlyRate: { low: 35, mid: 65, high: 125 },
    typicalProject: "30 posts/month",
    typicalPrice: "$500-$2,000/month",
  },
  technical: {
    name: "Technical Writing",
    perWord: { low: 0.10, mid: 0.25, high: 0.60 },
    hourlyRate: { low: 55, mid: 100, high: 200 },
    typicalProject: "Documentation/white paper (3,000-5,000 words)",
    typicalPrice: "$750-$5,000",
  },
  seo: {
    name: "SEO Content",
    perWord: { low: 0.08, mid: 0.20, high: 0.45 },
    hourlyRate: { low: 45, mid: 80, high: 150 },
    typicalProject: "SEO-optimized article (1,500-2,500 words)",
    typicalPrice: "$200-$1,000",
  },
  "sales-copy": {
    name: "Sales/Direct Response Copy",
    perWord: { low: 0.20, mid: 0.50, high: 1.50 },
    hourlyRate: { low: 75, mid: 150, high: 300 },
    typicalProject: "Sales page or VSL script",
    typicalPrice: "$2,000-$15,000+",
  },
};

export default function CopywriterCalculator() {
  const [contentType, setContentType] = useState<ContentType>("blog");
  const [pricingModel, setPricingModel] = useState<PricingModel>("per-project");
  const [wordCount, setWordCount] = useState(1500);
  const [experienceYears, setExperienceYears] = useState(3);
  const [niche, setNiche] = useState<"general" | "specialized">("general");

  const data = contentTypeData[contentType];
  const experienceMultiplier = experienceYears <= 1 ? 0.7 : experienceYears <= 3 ? 1.0 : experienceYears <= 7 ? 1.3 : 1.6;
  const nicheMultiplier = niche === "specialized" ? 1.25 : 1.0;

  // Per-word calculation
  const adjustedPerWord = {
    low: +(data.perWord.low * experienceMultiplier * nicheMultiplier).toFixed(2),
    mid: +(data.perWord.mid * experienceMultiplier * nicheMultiplier).toFixed(2),
    high: +(data.perWord.high * experienceMultiplier * nicheMultiplier).toFixed(2),
  };

  const projectPriceLow = Math.round(adjustedPerWord.low * wordCount);
  const projectPriceMid = Math.round(adjustedPerWord.mid * wordCount);
  const projectPriceHigh = Math.round(adjustedPerWord.high * wordCount);

  // Hourly calculation
  const adjustedHourly = {
    low: Math.round(data.hourlyRate.low * experienceMultiplier * nicheMultiplier),
    mid: Math.round(data.hourlyRate.mid * experienceMultiplier * nicheMultiplier),
    high: Math.round(data.hourlyRate.high * experienceMultiplier * nicheMultiplier),
  };

  // Estimate hours for the word count
  const wordsPerHour = experienceYears <= 1 ? 250 : experienceYears <= 3 ? 400 : experienceYears <= 7 ? 500 : 600;
  const estimatedHours = Math.ceil(wordCount / wordsPerHour * 1.5); // 1.5x for research/editing

  return (
    <div className="space-y-8">
      {/* Calculator */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Calculate Your Rate</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="contentType" className="block text-sm font-medium text-gray-700 mb-2">
              Content Type
            </label>
            <select
              id="contentType"
              value={contentType}
              onChange={(e) => setContentType(e.target.value as ContentType)}
              className="w-full rounded-lg border border-gray-300 py-3 px-4 text-lg focus:border-violet-500 focus:ring-2 focus:ring-violet-200 outline-none transition"
            >
              {Object.entries(contentTypeData).map(([key, { name }]) => (
                <option key={key} value={key}>{name}</option>
              ))}
            </select>
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
              <option value="per-word">Per Word</option>
              <option value="per-project">Per Project</option>
              <option value="hourly">Hourly</option>
            </select>
          </div>
          <div>
            <label htmlFor="wordCount" className="block text-sm font-medium text-gray-700 mb-2">
              Word count
            </label>
            <div className="relative">
              <input
                id="wordCount"
                type="number"
                value={wordCount}
                onChange={(e) => setWordCount(Number(e.target.value))}
                className="w-full rounded-lg border border-gray-300 py-3 pl-4 pr-16 text-lg focus:border-violet-500 focus:ring-2 focus:ring-violet-200 outline-none transition"
                min={100}
                step={100}
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm">words</span>
            </div>
          </div>
          <div>
            <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
              Years of experience: {experienceYears}
            </label>
            <input
              id="experience"
              type="range"
              min={0}
              max={15}
              step={1}
              value={experienceYears}
              onChange={(e) => setExperienceYears(Number(e.target.value))}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>Beginner</span>
              <span>Expert</span>
            </div>
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">Niche</label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="niche"
                  value="general"
                  checked={niche === "general"}
                  onChange={() => setNiche("general")}
                  className="w-4 h-4 text-violet-600 focus:ring-violet-500"
                />
                <span className="text-sm text-gray-700">General/Multiple industries</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="niche"
                  value="specialized"
                  checked={niche === "specialized"}
                  onChange={() => setNiche("specialized")}
                  className="w-4 h-4 text-violet-600 focus:ring-violet-500"
                />
                <span className="text-sm text-gray-700">Specialized (finance, tech, medical, legal)</span>
              </label>
            </div>
            {niche === "specialized" && (
              <p className="text-xs text-green-600 mt-1">+25% premium for specialized industry knowledge</p>
            )}
          </div>
        </div>
      </div>

      {/* Rate Result */}
      <div className="bg-green-600 rounded-xl p-6 text-white text-center">
        {pricingModel === "per-word" && (
          <>
            <p className="text-green-100 text-sm mb-1">Recommended per-word rate</p>
            <p className="text-5xl font-bold mb-1">${adjustedPerWord.low} — ${adjustedPerWord.high}</p>
            <p className="text-green-200 text-sm">
              Per word | {fmt(wordCount)} words = ${fmt(projectPriceLow)}-${fmt(projectPriceHigh)}
            </p>
          </>
        )}
        {pricingModel === "per-project" && (
          <>
            <p className="text-green-100 text-sm mb-1">Recommended project price ({fmt(wordCount)} words)</p>
            <p className="text-5xl font-bold mb-1">${fmt(projectPriceLow)} — ${fmt(projectPriceHigh)}</p>
            <p className="text-green-200 text-sm">
              Midpoint: ${fmt(projectPriceMid)} | {contentTypeData[contentType].name}
            </p>
          </>
        )}
        {pricingModel === "hourly" && (
          <>
            <p className="text-green-100 text-sm mb-1">Recommended hourly rate</p>
            <p className="text-5xl font-bold mb-1">${adjustedHourly.low} — ${adjustedHourly.high}/hr</p>
            <p className="text-green-200 text-sm">
              Est. {estimatedHours} hours for {fmt(wordCount)} words = ${fmt(adjustedHourly.mid * estimatedHours)} at midpoint
            </p>
          </>
        )}
      </div>

      {/* Content Type Comparison */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="font-semibold text-gray-900 mb-4">Rates by Content Type</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-2 px-3 font-medium text-gray-700">Content Type</th>
                <th className="text-left py-2 px-3 font-medium text-gray-700">Per Word</th>
                <th className="text-left py-2 px-3 font-medium text-gray-700">Hourly</th>
                <th className="text-left py-2 px-3 font-medium text-gray-700">Typical Project</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(contentTypeData).map(([key, data]) => (
                <tr key={key} className={`border-b border-gray-100 ${key === contentType ? "bg-violet-50" : ""}`}>
                  <td className="py-2 px-3 font-medium">{data.name}</td>
                  <td className="py-2 px-3">${data.perWord.low}-${data.perWord.high}</td>
                  <td className="py-2 px-3">${data.hourlyRate.low}-${data.hourlyRate.high}/hr</td>
                  <td className="py-2 px-3 text-gray-500">{data.typicalPrice}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-500 mt-3">
          US market rates for mid-level copywriters. Specialized niches (finance, medical, legal) command 25-50% premiums.
        </p>
      </div>

      {/* Per-Word vs Project vs Hourly */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
        <h3 className="font-semibold text-amber-900 mb-3">Which Pricing Model Should You Use?</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <p className="font-medium text-amber-900 mb-1">Per Word</p>
            <p className="text-sm text-amber-800">
              Best for: Blog posts, articles, long-form content. Transparent for clients.
              Downside: Penalizes concise writing.
            </p>
          </div>
          <div>
            <p className="font-medium text-amber-900 mb-1">Per Project</p>
            <p className="text-sm text-amber-800">
              Best for: Defined deliverables (landing pages, email sequences). Rewards speed.
              Downside: Scope creep risk without clear contracts.
            </p>
          </div>
          <div>
            <p className="font-medium text-amber-900 mb-1">Hourly</p>
            <p className="text-sm text-amber-800">
              Best for: Retainers, unclear scope, ongoing work. Fair for both sides.
              Downside: Caps earning potential as you get faster.
            </p>
          </div>
        </div>
      </div>

      {/* Monthly Income Table */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="font-semibold text-gray-900 mb-4">Monthly Income Scenarios</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-2 px-3 font-medium text-gray-700">Scenario</th>
                <th className="text-left py-2 px-3 font-medium text-gray-700">Volume</th>
                <th className="text-left py-2 px-3 font-medium text-gray-700">Rate</th>
                <th className="text-left py-2 px-3 font-medium text-gray-700">Monthly</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100">
                <td className="py-2 px-3 font-medium">Blog writer (entry)</td>
                <td className="py-2 px-3">20 posts x 1,000 words</td>
                <td className="py-2 px-3">$0.10/word</td>
                <td className="py-2 px-3">$2,000</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-2 px-3 font-medium">Content writer (mid)</td>
                <td className="py-2 px-3">12 posts x 1,500 words</td>
                <td className="py-2 px-3">$0.20/word</td>
                <td className="py-2 px-3">$3,600</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-2 px-3 font-medium">Copywriter (experienced)</td>
                <td className="py-2 px-3">8 projects</td>
                <td className="py-2 px-3">$750/project avg</td>
                <td className="py-2 px-3">$6,000</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-2 px-3 font-medium">Conversion copywriter</td>
                <td className="py-2 px-3">3-4 landing pages</td>
                <td className="py-2 px-3">$2,000/page</td>
                <td className="py-2 px-3">$7,000</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-2 px-3 font-medium">Sales copywriter (senior)</td>
                <td className="py-2 px-3">2 sales pages + emails</td>
                <td className="py-2 px-3">$5,000/project</td>
                <td className="py-2 px-3">$10,000+</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
