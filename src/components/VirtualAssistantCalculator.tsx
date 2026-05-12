"use client";

import { useState } from "react";

function fmt(n: number): string {
  return n.toLocaleString("en-US", { maximumFractionDigits: 0 });
}

type ServiceType = "general-admin" | "executive" | "social-media" | "bookkeeping" | "ecommerce" | "project-mgmt" | "tech-support";
type PricingModel = "hourly" | "retainer" | "package";
type Location = "us" | "uk" | "western-eu" | "philippines" | "latin-america";

const serviceTypeData: Record<ServiceType, {
  name: string;
  hourly: { low: number; mid: number; high: number };
  description: string;
}> = {
  "general-admin": {
    name: "General Admin (email, scheduling, data entry)",
    hourly: { low: 18, mid: 30, high: 50 },
    description: "Inbox management, calendar coordination, travel booking, basic research.",
  },
  executive: {
    name: "Executive Assistant",
    hourly: { low: 35, mid: 60, high: 100 },
    description: "C-suite support, board prep, stakeholder communications, complex scheduling.",
  },
  "social-media": {
    name: "Social Media VA",
    hourly: { low: 25, mid: 45, high: 75 },
    description: "Content scheduling, community engagement, basic graphics, reporting.",
  },
  bookkeeping: {
    name: "Bookkeeping / Finance",
    hourly: { low: 30, mid: 50, high: 85 },
    description: "Invoicing, expense tracking, QuickBooks/Xero, reconciliation.",
  },
  ecommerce: {
    name: "E-commerce VA (Shopify, Amazon)",
    hourly: { low: 25, mid: 45, high: 75 },
    description: "Product listings, order processing, customer service, inventory.",
  },
  "project-mgmt": {
    name: "Project Management",
    hourly: { low: 35, mid: 60, high: 95 },
    description: "Task tracking, team coordination, status reporting, Asana/ClickUp ops.",
  },
  "tech-support": {
    name: "Technical / Operations VA",
    hourly: { low: 35, mid: 60, high: 100 },
    description: "Automation (Zapier, Make), CRM admin, SOP creation, light tech ops.",
  },
};

const experienceMultipliers = {
  entry: { label: "Entry (0-1 yr)", value: 0.75 },
  mid: { label: "Mid (2-4 yrs)", value: 1.0 },
  senior: { label: "Senior (5+ yrs)", value: 1.35 },
};

const locationMultipliers: Record<Location, { name: string; multiplier: number }> = {
  us: { name: "United States / Canada", multiplier: 1.0 },
  uk: { name: "United Kingdom", multiplier: 0.9 },
  "western-eu": { name: "Western Europe", multiplier: 0.85 },
  philippines: { name: "Philippines / SE Asia", multiplier: 0.35 },
  "latin-america": { name: "Latin America", multiplier: 0.5 },
};

export default function VirtualAssistantCalculator() {
  const [serviceType, setServiceType] = useState<ServiceType>("general-admin");
  const [pricingModel, setPricingModel] = useState<PricingModel>("hourly");
  const [experience, setExperience] = useState<keyof typeof experienceMultipliers>("mid");
  const [location, setLocation] = useState<Location>("us");
  const [hoursPerWeek, setHoursPerWeek] = useState(10);

  const data = serviceTypeData[serviceType];
  const expMult = experienceMultipliers[experience].value;
  const locMult = locationMultipliers[location].multiplier;

  const adjustedHourly = {
    low: Math.round(data.hourly.low * expMult * locMult),
    mid: Math.round(data.hourly.mid * expMult * locMult),
    high: Math.round(data.hourly.high * expMult * locMult),
  };

  // Retainer = hours/week * 4.33 weeks/mo * rate (with ~10% retainer discount)
  const monthlyHours = hoursPerWeek * 4.33;
  const retainerLow = Math.round(adjustedHourly.low * monthlyHours * 0.9);
  const retainerMid = Math.round(adjustedHourly.mid * monthlyHours * 0.9);
  const retainerHigh = Math.round(adjustedHourly.high * monthlyHours * 0.9);

  // Common packages: 10h, 20h, 40h per month
  const package10 = Math.round(adjustedHourly.mid * 10 * 0.95);
  const package20 = Math.round(adjustedHourly.mid * 20 * 0.9);
  const package40 = Math.round(adjustedHourly.mid * 40 * 0.85);

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Calculate Your Rate</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-2">
              Service Type
            </label>
            <select
              id="serviceType"
              value={serviceType}
              onChange={(e) => setServiceType(e.target.value as ServiceType)}
              className="w-full rounded-lg border border-gray-300 py-3 px-4 text-lg focus:border-violet-500 focus:ring-2 focus:ring-violet-200 outline-none transition"
            >
              {Object.entries(serviceTypeData).map(([key, { name }]) => (
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
              <option value="retainer">Monthly Retainer</option>
              <option value="package">Package (10/20/40 hrs)</option>
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
            <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
              Location
            </label>
            <select
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value as Location)}
              className="w-full rounded-lg border border-gray-300 py-3 px-4 text-lg focus:border-violet-500 focus:ring-2 focus:ring-violet-200 outline-none transition"
            >
              {Object.entries(locationMultipliers).map(([key, { name }]) => (
                <option key={key} value={key}>{name}</option>
              ))}
            </select>
          </div>
          {pricingModel === "retainer" && (
            <div className="md:col-span-2">
              <label htmlFor="hoursPerWeek" className="block text-sm font-medium text-gray-700 mb-2">
                Hours per week: {hoursPerWeek}
              </label>
              <input
                id="hoursPerWeek"
                type="range"
                min={5}
                max={40}
                step={5}
                value={hoursPerWeek}
                onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>5 hrs</span>
                <span>40 hrs (full-time)</span>
              </div>
            </div>
          )}
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
        {pricingModel === "retainer" && (
          <>
            <p className="text-green-100 text-sm mb-1">Monthly retainer ({hoursPerWeek} hrs/wk)</p>
            <p className="text-5xl font-bold mb-1">${fmt(retainerLow)} — ${fmt(retainerHigh)}/mo</p>
            <p className="text-green-200 text-sm">
              Midpoint: ${fmt(retainerMid)}/mo | Includes ~10% retainer discount
            </p>
          </>
        )}
        {pricingModel === "package" && (
          <>
            <p className="text-green-100 text-sm mb-1">Suggested package prices (midpoint rate)</p>
            <p className="text-3xl font-bold mb-1">
              10 hrs: ${fmt(package10)} | 20 hrs: ${fmt(package20)} | 40 hrs: ${fmt(package40)}
            </p>
            <p className="text-green-200 text-sm">
              Larger packages = bigger discount (5/10/15%) to reward commitment
            </p>
          </>
        )}
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="font-semibold text-gray-900 mb-4">Rates by Service Type (US, mid-level)</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-2 px-3 font-medium text-gray-700">Service</th>
                <th className="text-left py-2 px-3 font-medium text-gray-700">Hourly Range</th>
                <th className="text-left py-2 px-3 font-medium text-gray-700">Monthly (20 hrs/wk)</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(serviceTypeData).map(([key, d]) => (
                <tr key={key} className={`border-b border-gray-100 ${key === serviceType ? "bg-violet-50" : ""}`}>
                  <td className="py-2 px-3 font-medium">{d.name}</td>
                  <td className="py-2 px-3">${d.hourly.low}-${d.hourly.high}/hr</td>
                  <td className="py-2 px-3 text-gray-500">
                    ${fmt(Math.round(d.hourly.low * 20 * 4.33 * 0.9))}-${fmt(Math.round(d.hourly.high * 20 * 4.33 * 0.9))}/mo
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-500 mt-3">
          US-based VAs. Offshore rates (Philippines/SE Asia) typically run 30-40% of US rates.
        </p>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
        <h3 className="font-semibold text-amber-900 mb-3">Hourly vs Retainer vs Package</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <p className="font-medium text-amber-900 mb-1">Hourly</p>
            <p className="text-sm text-amber-800">
              Best for: ad-hoc work, new clients, undefined scope. Track every minute. No income predictability.
            </p>
          </div>
          <div>
            <p className="font-medium text-amber-900 mb-1">Monthly Retainer</p>
            <p className="text-sm text-amber-800">
              Best for: established clients with consistent ongoing needs. Predictable income; usually 5-10% discount for commitment.
            </p>
          </div>
          <div>
            <p className="font-medium text-amber-900 mb-1">Package (e.g. 20 hrs)</p>
            <p className="text-sm text-amber-800">
              Best for: clients testing the waters. Sell blocks of hours that expire monthly — protects against scope creep.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
