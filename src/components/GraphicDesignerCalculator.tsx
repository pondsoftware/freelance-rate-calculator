"use client";

import { useState } from "react";

function fmt(n: number): string {
  return n.toLocaleString("en-US", { maximumFractionDigits: 0 });
}

type Specialization = "brand" | "uiux" | "illustration" | "print" | "motion" | "general";
type ExperienceLevel = "junior" | "mid" | "senior" | "creative-director";

const specializationData: Record<Specialization, { name: string; rates: Record<ExperienceLevel, { low: number; mid: number; high: number }> }> = {
  brand: {
    name: "Brand/Identity Design",
    rates: {
      junior: { low: 30, mid: 50, high: 70 },
      mid: { low: 60, mid: 85, high: 120 },
      senior: { low: 100, mid: 140, high: 200 },
      "creative-director": { low: 150, mid: 200, high: 300 },
    }
  },
  uiux: {
    name: "UI/UX Design",
    rates: {
      junior: { low: 40, mid: 60, high: 80 },
      mid: { low: 70, mid: 100, high: 140 },
      senior: { low: 110, mid: 150, high: 200 },
      "creative-director": { low: 150, mid: 200, high: 300 },
    }
  },
  illustration: {
    name: "Illustration",
    rates: {
      junior: { low: 25, mid: 45, high: 65 },
      mid: { low: 50, mid: 75, high: 110 },
      senior: { low: 85, mid: 125, high: 175 },
      "creative-director": { low: 125, mid: 175, high: 250 },
    }
  },
  print: {
    name: "Print/Publication Design",
    rates: {
      junior: { low: 25, mid: 40, high: 60 },
      mid: { low: 50, mid: 70, high: 100 },
      senior: { low: 80, mid: 110, high: 150 },
      "creative-director": { low: 120, mid: 160, high: 225 },
    }
  },
  motion: {
    name: "Motion Graphics",
    rates: {
      junior: { low: 35, mid: 55, high: 75 },
      mid: { low: 65, mid: 95, high: 130 },
      senior: { low: 100, mid: 140, high: 190 },
      "creative-director": { low: 140, mid: 190, high: 275 },
    }
  },
  general: {
    name: "General Graphic Design",
    rates: {
      junior: { low: 25, mid: 40, high: 60 },
      mid: { low: 50, mid: 70, high: 100 },
      senior: { low: 80, mid: 110, high: 150 },
      "creative-director": { low: 120, mid: 165, high: 225 },
    }
  },
};

const deliverablePricing = [
  { name: "Logo design (basic)", priceRange: "$300-$1,500", notes: "Single concept with revisions" },
  { name: "Logo + brand identity package", priceRange: "$2,000-$10,000", notes: "Logo, colors, typography, guidelines" },
  { name: "Business card design", priceRange: "$150-$500", notes: "Print-ready file with revisions" },
  { name: "Social media template set", priceRange: "$500-$2,000", notes: "5-10 templates across platforms" },
  { name: "Website design (UI only)", priceRange: "$2,000-$8,000", notes: "5-10 page design, no development" },
  { name: "Packaging design", priceRange: "$1,000-$5,000", notes: "Single product, print-ready" },
  { name: "Brochure/flyer design", priceRange: "$200-$800", notes: "Single or bi-fold, print-ready" },
  { name: "Infographic", priceRange: "$300-$2,000", notes: "Complexity-dependent" },
  { name: "Presentation deck design", priceRange: "$500-$3,000", notes: "10-30 slide template" },
];

export default function GraphicDesignerCalculator() {
  const [specialization, setSpecialization] = useState<Specialization>("brand");
  const [experience, setExperience] = useState<ExperienceLevel>("mid");
  const [revisions, setRevisions] = useState(2);
  const [projectHours, setProjectHours] = useState(20);

  const rates = specializationData[specialization].rates[experience];
  const revisionMultiplier = 1 + (revisions * 0.1);
  const adjustedMid = Math.round(rates.mid * revisionMultiplier);
  const projectEstLow = Math.round(rates.low * projectHours * revisionMultiplier);
  const projectEstMid = Math.round(rates.mid * projectHours * revisionMultiplier);
  const projectEstHigh = Math.round(rates.high * projectHours * revisionMultiplier);

  return (
    <div className="space-y-8">
      {/* Calculator */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Calculate Your Rate</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="specialization" className="block text-sm font-medium text-gray-700 mb-2">
              Specialization
            </label>
            <select
              id="specialization"
              value={specialization}
              onChange={(e) => setSpecialization(e.target.value as Specialization)}
              className="w-full rounded-lg border border-gray-300 py-3 px-4 text-lg focus:border-violet-500 focus:ring-2 focus:ring-violet-200 outline-none transition"
            >
              {Object.entries(specializationData).map(([key, { name }]) => (
                <option key={key} value={key}>{name}</option>
              ))}
            </select>
          </div>
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
              <option value="creative-director">Creative Director (10+ years)</option>
            </select>
          </div>
          <div>
            <label htmlFor="revisions" className="block text-sm font-medium text-gray-700 mb-2">
              Included revisions: {revisions} rounds
            </label>
            <input
              id="revisions"
              type="range"
              min={0}
              max={5}
              step={1}
              value={revisions}
              onChange={(e) => setRevisions(Number(e.target.value))}
              className="w-full"
            />
            <p className="text-xs text-gray-500 mt-1">
              More revisions = higher project price (+10% per round)
            </p>
          </div>
          <div>
            <label htmlFor="projHours" className="block text-sm font-medium text-gray-700 mb-2">
              Estimated project hours
            </label>
            <div className="relative">
              <input
                id="projHours"
                type="number"
                value={projectHours}
                onChange={(e) => setProjectHours(Number(e.target.value))}
                className="w-full rounded-lg border border-gray-300 py-3 pl-4 pr-16 text-lg focus:border-violet-500 focus:ring-2 focus:ring-violet-200 outline-none transition"
                min={1}
                step={5}
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm">hours</span>
            </div>
          </div>
        </div>
      </div>

      {/* Rate Result */}
      <div className="bg-green-600 rounded-xl p-6 text-white text-center">
        <p className="text-green-100 text-sm mb-1">
          Recommended hourly rate for {specializationData[specialization].name}
        </p>
        <p className="text-5xl font-bold mb-1">${rates.low} — ${rates.high}/hr</p>
        <p className="text-green-200 text-sm">
          Midpoint: ${rates.mid}/hr | With {revisions} revision rounds: ~${adjustedMid}/hr effective
        </p>
      </div>

      {/* Project Estimate */}
      <div className="bg-violet-50 border border-violet-200 rounded-xl p-6">
        <h3 className="font-semibold text-violet-900 mb-3">
          Project Estimate ({projectHours} hours, {revisions} revisions)
        </h3>
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <p className="text-sm text-violet-600">Low</p>
            <p className="text-xl font-bold text-violet-900">${fmt(projectEstLow)}</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-violet-600">Mid</p>
            <p className="text-xl font-bold text-violet-900">${fmt(projectEstMid)}</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-violet-600">High</p>
            <p className="text-xl font-bold text-violet-900">${fmt(projectEstHigh)}</p>
          </div>
        </div>
      </div>

      {/* Rate Comparison by Specialization */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="font-semibold text-gray-900 mb-4">Rates by Specialization (Mid-Level)</h3>
        <div className="space-y-3">
          {Object.entries(specializationData).map(([key, { name, rates: specRates }]) => {
            const midRates = specRates.mid;
            return (
              <div key={key} className={`flex items-center justify-between p-2 rounded ${key === specialization ? "bg-violet-50" : ""}`}>
                <span className="text-sm text-gray-700 font-medium">{name}</span>
                <div className="flex items-center gap-3">
                  <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-violet-500 rounded-full"
                      style={{ width: `${(midRates.mid / 200) * 100}%` }}
                    />
                  </div>
                  <span className="text-sm text-gray-600 w-28 text-right">${midRates.low}-${midRates.high}/hr</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Deliverable Pricing */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="font-semibold text-gray-900 mb-4">Common Deliverable Pricing (US Market)</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-2 px-3 font-medium text-gray-700">Deliverable</th>
                <th className="text-left py-2 px-3 font-medium text-gray-700">Price Range</th>
                <th className="text-left py-2 px-3 font-medium text-gray-700">Notes</th>
              </tr>
            </thead>
            <tbody>
              {deliverablePricing.map((item) => (
                <tr key={item.name} className="border-b border-gray-100">
                  <td className="py-2 px-3 font-medium">{item.name}</td>
                  <td className="py-2 px-3">{item.priceRange}</td>
                  <td className="py-2 px-3 text-gray-500">{item.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
