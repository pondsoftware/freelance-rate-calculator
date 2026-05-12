"use client";

import { useState } from "react";

function fmt(n: number): string {
  return n.toLocaleString("en-US", { maximumFractionDigits: 0 });
}

type ProjectType = "youtube-long" | "shorts" | "podcast" | "corporate" | "wedding" | "ad" | "documentary";
type PricingModel = "hourly" | "per-minute" | "per-project";

const projectTypeData: Record<ProjectType, {
  name: string;
  hourly: { low: number; mid: number; high: number };
  perFinishedMinute: { low: number; mid: number; high: number };
  typicalProject: string;
  typicalPrice: string;
  ratio: string;
}> = {
  "youtube-long": {
    name: "YouTube Long-Form (8-20 min)",
    hourly: { low: 35, mid: 65, high: 125 },
    perFinishedMinute: { low: 75, mid: 150, high: 300 },
    typicalProject: "12-minute YouTube video",
    typicalPrice: "$400-$2,500",
    ratio: "3-5 hours per finished minute",
  },
  shorts: {
    name: "Shorts / Reels / TikTok",
    hourly: { low: 35, mid: 65, high: 125 },
    perFinishedMinute: { low: 100, mid: 200, high: 450 },
    typicalProject: "Pack of 10 shorts",
    typicalPrice: "$500-$2,500",
    ratio: "1-2 hours per short",
  },
  podcast: {
    name: "Podcast Editing (audio + video)",
    hourly: { low: 30, mid: 55, high: 100 },
    perFinishedMinute: { low: 15, mid: 30, high: 65 },
    typicalProject: "60-min podcast episode (video)",
    typicalPrice: "$300-$1,500",
    ratio: "0.5-1.5x runtime",
  },
  corporate: {
    name: "Corporate / B2B Video",
    hourly: { low: 55, mid: 95, high: 175 },
    perFinishedMinute: { low: 250, mid: 500, high: 1200 },
    typicalProject: "2-3 minute corporate explainer",
    typicalPrice: "$1,500-$6,000",
    ratio: "8-15 hours per finished minute",
  },
  wedding: {
    name: "Wedding / Event",
    hourly: { low: 35, mid: 65, high: 125 },
    perFinishedMinute: { low: 100, mid: 200, high: 400 },
    typicalProject: "Full wedding film (4-8 min highlight)",
    typicalPrice: "$1,200-$4,500",
    ratio: "20-40 total hours per wedding",
  },
  ad: {
    name: "Ad / Commercial (30-60 sec)",
    hourly: { low: 75, mid: 150, high: 300 },
    perFinishedMinute: { low: 500, mid: 1500, high: 5000 },
    typicalProject: "30-second social ad",
    typicalPrice: "$500-$3,500",
    ratio: "10-30 hours per finished minute",
  },
  documentary: {
    name: "Short Documentary",
    hourly: { low: 50, mid: 90, high: 175 },
    perFinishedMinute: { low: 300, mid: 700, high: 1500 },
    typicalProject: "10-min short doc",
    typicalPrice: "$3,000-$15,000",
    ratio: "10-20 hours per finished minute",
  },
};

const experienceMultipliers = {
  junior: { label: "Junior (0-2 yrs)", value: 0.7 },
  mid: { label: "Mid (3-5 yrs)", value: 1.0 },
  senior: { label: "Senior (6+ yrs)", value: 1.5 },
};

export default function VideoEditorCalculator() {
  const [projectType, setProjectType] = useState<ProjectType>("youtube-long");
  const [pricingModel, setPricingModel] = useState<PricingModel>("per-project");
  const [experience, setExperience] = useState<keyof typeof experienceMultipliers>("mid");
  const [finishedMinutes, setFinishedMinutes] = useState(12);

  const data = projectTypeData[projectType];
  const expMult = experienceMultipliers[experience].value;

  const adjustedHourly = {
    low: Math.round(data.hourly.low * expMult),
    mid: Math.round(data.hourly.mid * expMult),
    high: Math.round(data.hourly.high * expMult),
  };

  const adjustedPerMin = {
    low: Math.round(data.perFinishedMinute.low * expMult),
    mid: Math.round(data.perFinishedMinute.mid * expMult),
    high: Math.round(data.perFinishedMinute.high * expMult),
  };

  const projectLow = adjustedPerMin.low * finishedMinutes;
  const projectMid = adjustedPerMin.mid * finishedMinutes;
  const projectHigh = adjustedPerMin.high * finishedMinutes;

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Calculate Your Rate</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
              Project Type
            </label>
            <select
              id="projectType"
              value={projectType}
              onChange={(e) => setProjectType(e.target.value as ProjectType)}
              className="w-full rounded-lg border border-gray-300 py-3 px-4 text-lg focus:border-violet-500 focus:ring-2 focus:ring-violet-200 outline-none transition"
            >
              {Object.entries(projectTypeData).map(([key, { name }]) => (
                <option key={key} value={key}>{name}</option>
              ))}
            </select>
            <p className="text-xs text-gray-500 mt-2">Typical ratio: {data.ratio}</p>
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
              <option value="per-project">Per Project</option>
              <option value="per-minute">Per Finished Minute</option>
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
            <label htmlFor="finishedMinutes" className="block text-sm font-medium text-gray-700 mb-2">
              Finished video length: {finishedMinutes} min
            </label>
            <input
              id="finishedMinutes"
              type="range"
              min={1}
              max={60}
              step={1}
              value={finishedMinutes}
              onChange={(e) => setFinishedMinutes(Number(e.target.value))}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>1 min</span>
              <span>60 min</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-green-600 rounded-xl p-6 text-white text-center">
        {pricingModel === "hourly" && (
          <>
            <p className="text-green-100 text-sm mb-1">Recommended hourly rate</p>
            <p className="text-5xl font-bold mb-1">${adjustedHourly.low} — ${adjustedHourly.high}/hr</p>
            <p className="text-green-200 text-sm">
              Midpoint: ${adjustedHourly.mid}/hr | {data.name}
            </p>
          </>
        )}
        {pricingModel === "per-minute" && (
          <>
            <p className="text-green-100 text-sm mb-1">Recommended per-finished-minute rate</p>
            <p className="text-5xl font-bold mb-1">${fmt(adjustedPerMin.low)} — ${fmt(adjustedPerMin.high)}/min</p>
            <p className="text-green-200 text-sm">
              {finishedMinutes} min finished = ${fmt(projectLow)}-${fmt(projectHigh)}
            </p>
          </>
        )}
        {pricingModel === "per-project" && (
          <>
            <p className="text-green-100 text-sm mb-1">Recommended project price ({finishedMinutes} min finished)</p>
            <p className="text-5xl font-bold mb-1">${fmt(projectLow)} — ${fmt(projectHigh)}</p>
            <p className="text-green-200 text-sm">
              Midpoint: ${fmt(projectMid)} | {data.name}
            </p>
          </>
        )}
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="font-semibold text-gray-900 mb-4">Rates by Project Type (US, mid-level)</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-2 px-3 font-medium text-gray-700">Project Type</th>
                <th className="text-left py-2 px-3 font-medium text-gray-700">Hourly</th>
                <th className="text-left py-2 px-3 font-medium text-gray-700">Per Finished Min</th>
                <th className="text-left py-2 px-3 font-medium text-gray-700">Typical Project</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(projectTypeData).map(([key, d]) => (
                <tr key={key} className={`border-b border-gray-100 ${key === projectType ? "bg-violet-50" : ""}`}>
                  <td className="py-2 px-3 font-medium">{d.name}</td>
                  <td className="py-2 px-3">${d.hourly.low}-${d.hourly.high}/hr</td>
                  <td className="py-2 px-3">${d.perFinishedMinute.low}-${d.perFinishedMinute.high}/min</td>
                  <td className="py-2 px-3 text-gray-500">{d.typicalPrice}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-500 mt-3">
          Per-finished-minute pricing captures the real cost of editing — a 30-second ad can take more hours than a 12-minute YouTube video.
        </p>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
        <h3 className="font-semibold text-amber-900 mb-3">Hourly vs Per-Minute vs Per-Project</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <p className="font-medium text-amber-900 mb-1">Hourly</p>
            <p className="text-sm text-amber-800">
              Best for: revisions, clean-up work, unclear scope. Caps your earning ceiling once you get fast.
            </p>
          </div>
          <div>
            <p className="font-medium text-amber-900 mb-1">Per Finished Minute</p>
            <p className="text-sm text-amber-800">
              Best for: predictable, repeat work (YouTube channels, podcasts). Clients love the transparency; rewards your speed.
            </p>
          </div>
          <div>
            <p className="font-medium text-amber-900 mb-1">Per Project</p>
            <p className="text-sm text-amber-800">
              Best for: high-production-value work (ads, weddings). Specify revision limits in the contract or scope creep will eat your margin.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
