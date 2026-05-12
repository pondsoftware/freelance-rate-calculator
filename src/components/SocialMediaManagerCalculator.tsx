"use client";

import { useState } from "react";

function fmt(n: number): string {
  return n.toLocaleString("en-US", { maximumFractionDigits: 0 });
}

type ServiceLevel = "basic" | "content" | "fullservice" | "strategy" | "paidads";

const serviceLevelData: Record<ServiceLevel, {
  name: string;
  hourly: { low: number; mid: number; high: number };
  monthly: { low: number; mid: number; high: number };
  description: string;
}> = {
  basic: {
    name: "Basic Management (1-2 platforms)",
    hourly: { low: 25, mid: 45, high: 75 },
    monthly: { low: 500, mid: 1200, high: 2000 },
    description: "Posting, scheduling, community engagement on 1-2 channels. ~3-5 posts/week.",
  },
  content: {
    name: "Content Creation + Management",
    hourly: { low: 45, mid: 75, high: 125 },
    monthly: { low: 1500, mid: 3000, high: 5000 },
    description: "Graphics, short-form video, captions, scheduling, and community across 2-3 platforms.",
  },
  fullservice: {
    name: "Full-Service (3+ platforms, video)",
    hourly: { low: 65, mid: 100, high: 175 },
    monthly: { low: 3000, mid: 5500, high: 9000 },
    description: "Multi-platform strategy, content production (incl. short-form video), engagement, monthly reporting.",
  },
  strategy: {
    name: "Strategy / Consulting",
    hourly: { low: 100, mid: 175, high: 300 },
    monthly: { low: 3000, mid: 6000, high: 12000 },
    description: "Brand voice, audience research, campaign planning, analytics. Not execution.",
  },
  paidads: {
    name: "Paid Social Ads (Meta, TikTok, LinkedIn)",
    hourly: { low: 75, mid: 125, high: 250 },
    monthly: { low: 1500, mid: 3500, high: 8000 },
    description: "Ad creative, audience targeting, campaign management. Often billed as % of ad spend (10-20%).",
  },
};

const experienceMultipliers = {
  junior: { label: "Junior (0-2 yrs)", value: 0.75 },
  mid: { label: "Mid (3-5 yrs)", value: 1.0 },
  senior: { label: "Senior (6+ yrs)", value: 1.4 },
};

const platforms = ["Instagram", "TikTok", "LinkedIn", "Facebook", "X / Twitter", "YouTube", "Pinterest", "Threads"];

export default function SocialMediaManagerCalculator() {
  const [serviceLevel, setServiceLevel] = useState<ServiceLevel>("content");
  const [experience, setExperience] = useState<keyof typeof experienceMultipliers>("mid");
  const [platformCount, setPlatformCount] = useState(2);
  const [pricingModel, setPricingModel] = useState<"hourly" | "monthly">("monthly");

  const data = serviceLevelData[serviceLevel];
  const expMult = experienceMultipliers[experience].value;
  // Each additional platform beyond 1 adds 25% to monthly
  const platformMult = 1 + (platformCount - 1) * 0.25;

  const adjustedHourly = {
    low: Math.round(data.hourly.low * expMult),
    mid: Math.round(data.hourly.mid * expMult),
    high: Math.round(data.hourly.high * expMult),
  };

  const adjustedMonthly = {
    low: Math.round(data.monthly.low * expMult * platformMult),
    mid: Math.round(data.monthly.mid * expMult * platformMult),
    high: Math.round(data.monthly.high * expMult * platformMult),
  };

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Calculate Your Rate</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="serviceLevel" className="block text-sm font-medium text-gray-700 mb-2">
              Service Level
            </label>
            <select
              id="serviceLevel"
              value={serviceLevel}
              onChange={(e) => setServiceLevel(e.target.value as ServiceLevel)}
              className="w-full rounded-lg border border-gray-300 py-3 px-4 text-lg focus:border-violet-500 focus:ring-2 focus:ring-violet-200 outline-none transition"
            >
              {Object.entries(serviceLevelData).map(([key, { name }]) => (
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
              onChange={(e) => setPricingModel(e.target.value as "hourly" | "monthly")}
              className="w-full rounded-lg border border-gray-300 py-3 px-4 text-lg focus:border-violet-500 focus:ring-2 focus:ring-violet-200 outline-none transition"
            >
              <option value="monthly">Monthly Retainer</option>
              <option value="hourly">Hourly</option>
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
          <div>
            <label htmlFor="platformCount" className="block text-sm font-medium text-gray-700 mb-2">
              Number of platforms: {platformCount}
            </label>
            <input
              id="platformCount"
              type="range"
              min={1}
              max={5}
              step={1}
              value={platformCount}
              onChange={(e) => setPlatformCount(Number(e.target.value))}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>1</span>
              <span>5+</span>
            </div>
            {platformCount > 1 && pricingModel === "monthly" && (
              <p className="text-xs text-green-600 mt-1">+{Math.round((platformMult - 1) * 100)}% for {platformCount} platforms</p>
            )}
          </div>
        </div>
      </div>

      <div className="bg-green-600 rounded-xl p-6 text-white text-center">
        {pricingModel === "hourly" ? (
          <>
            <p className="text-green-100 text-sm mb-1">Recommended hourly rate</p>
            <p className="text-5xl font-bold mb-1">${adjustedHourly.low} — ${adjustedHourly.high}/hr</p>
            <p className="text-green-200 text-sm">
              Midpoint: ${adjustedHourly.mid}/hr | {data.name}
            </p>
          </>
        ) : (
          <>
            <p className="text-green-100 text-sm mb-1">Recommended monthly retainer</p>
            <p className="text-5xl font-bold mb-1">${fmt(adjustedMonthly.low)} — ${fmt(adjustedMonthly.high)}/mo</p>
            <p className="text-green-200 text-sm">
              Midpoint: ${fmt(adjustedMonthly.mid)}/mo | {platformCount} platform{platformCount > 1 ? "s" : ""}
            </p>
          </>
        )}
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="font-semibold text-gray-900 mb-4">Rates by Service Level (US, mid-level, single platform)</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-2 px-3 font-medium text-gray-700">Service Level</th>
                <th className="text-left py-2 px-3 font-medium text-gray-700">Hourly</th>
                <th className="text-left py-2 px-3 font-medium text-gray-700">Monthly Retainer</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(serviceLevelData).map(([key, d]) => (
                <tr key={key} className={`border-b border-gray-100 ${key === serviceLevel ? "bg-violet-50" : ""}`}>
                  <td className="py-2 px-3 font-medium">{d.name}</td>
                  <td className="py-2 px-3">${d.hourly.low}-${d.hourly.high}/hr</td>
                  <td className="py-2 px-3 text-gray-500">${fmt(d.monthly.low)}-${fmt(d.monthly.high)}/mo</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-500 mt-3">
          Add ~25% per additional platform. Paid ads sometimes billed as % of ad spend (10-20%).
        </p>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
        <h3 className="font-semibold text-amber-900 mb-3">Platforms You Could Manage</h3>
        <div className="flex flex-wrap gap-2">
          {platforms.map((p) => (
            <span key={p} className="inline-block bg-white border border-amber-200 rounded-full px-3 py-1 text-sm text-amber-900">
              {p}
            </span>
          ))}
        </div>
        <p className="text-sm text-amber-800 mt-3">
          More platforms ≠ more revenue. Two platforms done well outperforms five done poorly. Specialize in the platforms where your client&apos;s audience actually lives.
        </p>
      </div>
    </div>
  );
}
