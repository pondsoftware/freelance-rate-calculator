"use client";

import { useState } from "react";

function fmt(n: number): string {
  return n.toLocaleString("en-US", { maximumFractionDigits: 0 });
}

interface Phase {
  id: string;
  name: string;
  hours: number;
}

export default function ProjectPricingCalculator() {
  const [hourlyRate, setHourlyRate] = useState(100);
  const [phases, setPhases] = useState<Phase[]>([
    { id: "1", name: "Discovery & Planning", hours: 8 },
    { id: "2", name: "Design/Development", hours: 40 },
    { id: "3", name: "Revisions & QA", hours: 12 },
    { id: "4", name: "Deployment & Handoff", hours: 4 },
  ]);
  const [bufferPercent, setBufferPercent] = useState(20);
  const [profitMargin, setProfitMargin] = useState(15);
  const [scopeCreepBuffer, setScopeCreepBuffer] = useState(10);
  const [rushMultiplier, setRushMultiplier] = useState(1.0);

  const totalBaseHours = phases.reduce((sum, p) => sum + p.hours, 0);
  const bufferedHours = totalBaseHours * (1 + bufferPercent / 100);
  const basePrice = bufferedHours * hourlyRate;
  const profitAmount = basePrice * (profitMargin / 100);
  const scopeAmount = basePrice * (scopeCreepBuffer / 100);
  const subtotal = basePrice + profitAmount + scopeAmount;
  const rushAmount = subtotal * (rushMultiplier - 1);
  const totalProjectPrice = subtotal + rushAmount;

  // Milestone breakdown
  const milestones = totalProjectPrice <= 5000
    ? [
        { label: "Deposit", percent: 50, amount: totalProjectPrice * 0.5 },
        { label: "Final delivery", percent: 50, amount: totalProjectPrice * 0.5 },
      ]
    : totalProjectPrice <= 15000
    ? [
        { label: "Deposit", percent: 30, amount: totalProjectPrice * 0.3 },
        { label: "Midpoint", percent: 40, amount: totalProjectPrice * 0.4 },
        { label: "Final delivery", percent: 30, amount: totalProjectPrice * 0.3 },
      ]
    : [
        { label: "Deposit", percent: 25, amount: totalProjectPrice * 0.25 },
        { label: "Phase 1 complete", percent: 25, amount: totalProjectPrice * 0.25 },
        { label: "Phase 2 complete", percent: 25, amount: totalProjectPrice * 0.25 },
        { label: "Final delivery", percent: 25, amount: totalProjectPrice * 0.25 },
      ];

  // Effective hourly rate
  const effectiveHourly = totalProjectPrice / totalBaseHours;

  function updatePhase(id: string, field: "name" | "hours", value: string | number) {
    setPhases(phases.map(p => p.id === id ? { ...p, [field]: value } : p));
  }

  function addPhase() {
    setPhases([...phases, { id: Date.now().toString(), name: "New Phase", hours: 8 }]);
  }

  function removePhase(id: string) {
    if (phases.length > 1) {
      setPhases(phases.filter(p => p.id !== id));
    }
  }

  return (
    <div className="space-y-8">
      {/* Hourly Rate Input */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Your Hourly Rate</h2>
        <div className="max-w-xs">
          <label htmlFor="hourlyRate" className="block text-sm font-medium text-gray-700 mb-2">
            Base hourly rate
          </label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">$</span>
            <input
              id="hourlyRate"
              type="number"
              value={hourlyRate}
              onChange={(e) => setHourlyRate(Number(e.target.value))}
              className="w-full rounded-lg border border-gray-300 py-3 pl-8 pr-16 text-lg focus:border-violet-500 focus:ring-2 focus:ring-violet-200 outline-none transition"
              min={1}
              step={5}
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm">/hour</span>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            Don&apos;t know your rate? <a href="/" className="text-violet-600 hover:underline">Calculate it here</a>
          </p>
        </div>
      </div>

      {/* Project Phases */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Project Phases</h2>
          <button
            onClick={addPhase}
            className="text-sm bg-violet-100 text-violet-700 px-3 py-1.5 rounded-lg hover:bg-violet-200 transition"
          >
            + Add Phase
          </button>
        </div>
        <div className="space-y-3">
          {phases.map((phase) => (
            <div key={phase.id} className="flex items-center gap-3">
              <input
                type="text"
                value={phase.name}
                onChange={(e) => updatePhase(phase.id, "name", e.target.value)}
                className="flex-1 rounded-lg border border-gray-300 py-2 px-3 text-sm focus:border-violet-500 focus:ring-2 focus:ring-violet-200 outline-none transition"
                placeholder="Phase name"
              />
              <div className="relative w-28">
                <input
                  type="number"
                  value={phase.hours}
                  onChange={(e) => updatePhase(phase.id, "hours", Number(e.target.value))}
                  className="w-full rounded-lg border border-gray-300 py-2 pl-3 pr-10 text-sm focus:border-violet-500 focus:ring-2 focus:ring-violet-200 outline-none transition"
                  min={1}
                  step={1}
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs">hrs</span>
              </div>
              <button
                onClick={() => removePhase(phase.id)}
                className="text-gray-400 hover:text-red-500 transition p-1"
                disabled={phases.length <= 1}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          ))}
        </div>
        <div className="mt-3 pt-3 border-t border-gray-200 flex justify-between text-sm">
          <span className="font-medium text-gray-700">Total estimated hours</span>
          <span className="font-bold text-gray-900">{totalBaseHours} hours</span>
        </div>
      </div>

      {/* Adjustments */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Pricing Adjustments</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="buffer" className="block text-sm font-medium text-gray-700 mb-2">
              Time buffer: {bufferPercent}%
            </label>
            <input
              id="buffer"
              type="range"
              min={0}
              max={50}
              step={5}
              value={bufferPercent}
              onChange={(e) => setBufferPercent(Number(e.target.value))}
              className="w-full"
            />
            <p className="text-xs text-gray-500 mt-1">
              Accounts for unknowns and underestimation. 15-25% is standard.
            </p>
          </div>
          <div>
            <label htmlFor="profit" className="block text-sm font-medium text-gray-700 mb-2">
              Profit margin: {profitMargin}%
            </label>
            <input
              id="profit"
              type="range"
              min={0}
              max={50}
              step={5}
              value={profitMargin}
              onChange={(e) => setProfitMargin(Number(e.target.value))}
              className="w-full"
            />
            <p className="text-xs text-gray-500 mt-1">
              Margin above costs for business growth. 10-20% is typical.
            </p>
          </div>
          <div>
            <label htmlFor="scope" className="block text-sm font-medium text-gray-700 mb-2">
              Scope creep buffer: {scopeCreepBuffer}%
            </label>
            <input
              id="scope"
              type="range"
              min={0}
              max={30}
              step={5}
              value={scopeCreepBuffer}
              onChange={(e) => setScopeCreepBuffer(Number(e.target.value))}
              className="w-full"
            />
            <p className="text-xs text-gray-500 mt-1">
              Padding for &quot;can you also...&quot; requests. 10% for tight contracts, more for loose scope.
            </p>
          </div>
          <div>
            <label htmlFor="rush" className="block text-sm font-medium text-gray-700 mb-2">
              Timeline
            </label>
            <select
              id="rush"
              value={rushMultiplier}
              onChange={(e) => setRushMultiplier(Number(e.target.value))}
              className="w-full rounded-lg border border-gray-300 py-3 px-4 text-lg focus:border-violet-500 focus:ring-2 focus:ring-violet-200 outline-none transition"
            >
              <option value={1.0}>Standard timeline</option>
              <option value={1.25}>Rush (+25%)</option>
              <option value={1.5}>Urgent rush (+50%)</option>
              <option value={2.0}>Emergency (+100%)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Result */}
      <div className="bg-green-600 rounded-xl p-6 text-white text-center">
        <p className="text-green-100 text-sm mb-1">Your project quote</p>
        <p className="text-5xl font-bold mb-1">${fmt(Math.round(totalProjectPrice))}</p>
        <p className="text-green-200 text-sm">
          Effective rate: ${fmt(Math.round(effectiveHourly))}/hr ({Math.round((effectiveHourly / hourlyRate - 1) * 100)}% above base rate)
        </p>
      </div>

      {/* Breakdown */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="font-semibold text-gray-900 mb-4">Price Breakdown</h3>
        <div className="space-y-2">
          <div className="flex justify-between text-sm text-gray-600">
            <span>Base hours ({totalBaseHours} hrs x ${hourlyRate}/hr)</span>
            <span>${fmt(totalBaseHours * hourlyRate)}</span>
          </div>
          <div className="flex justify-between text-sm text-gray-600">
            <span>Time buffer (+{bufferPercent}%)</span>
            <span>+${fmt(Math.round(totalBaseHours * (bufferPercent / 100) * hourlyRate))}</span>
          </div>
          <div className="flex justify-between text-sm text-gray-600">
            <span>Profit margin (+{profitMargin}%)</span>
            <span>+${fmt(Math.round(profitAmount))}</span>
          </div>
          <div className="flex justify-between text-sm text-gray-600">
            <span>Scope creep buffer (+{scopeCreepBuffer}%)</span>
            <span>+${fmt(Math.round(scopeAmount))}</span>
          </div>
          {rushMultiplier > 1 && (
            <div className="flex justify-between text-sm text-orange-600">
              <span>Rush fee (+{Math.round((rushMultiplier - 1) * 100)}%)</span>
              <span>+${fmt(Math.round(rushAmount))}</span>
            </div>
          )}
          <div className="border-t border-gray-200 pt-2">
            <div className="flex justify-between font-semibold text-gray-900">
              <span>Total project price</span>
              <span>${fmt(Math.round(totalProjectPrice))}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Milestones */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="font-semibold text-gray-900 mb-4">Suggested Payment Schedule</h3>
        <div className={`grid gap-4 ${milestones.length === 2 ? "grid-cols-2" : milestones.length === 3 ? "grid-cols-3" : "grid-cols-2 md:grid-cols-4"}`}>
          {milestones.map((milestone, i) => (
            <div key={i} className="bg-gray-50 rounded-lg border border-gray-200 p-4 text-center">
              <p className="text-xs text-gray-500 mb-1">{milestone.label} ({milestone.percent}%)</p>
              <p className="text-lg font-bold text-gray-900">${fmt(Math.round(milestone.amount))}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-500 mt-3">
          Always collect a deposit before starting work. Milestone payments reduce risk for both parties.
        </p>
      </div>

      {/* Scope Creep Tips */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
        <h3 className="font-semibold text-amber-900 mb-3">Scope Creep Protection Checklist</h3>
        <ul className="space-y-2 text-sm text-amber-800">
          <li className="flex items-start gap-2">
            <span className="text-amber-600 mt-0.5">&#10003;</span>
            <span><strong>Define deliverables explicitly</strong> — List every deliverable in the contract. If it&apos;s not listed, it&apos;s not included.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-600 mt-0.5">&#10003;</span>
            <span><strong>Cap revision rounds</strong> — &quot;Includes 2 rounds of revisions. Additional rounds billed at $X/hr.&quot;</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-600 mt-0.5">&#10003;</span>
            <span><strong>Change order process</strong> — Any work outside the original scope requires a written change order with additional cost.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-600 mt-0.5">&#10003;</span>
            <span><strong>Timeline clause</strong> — Client delays beyond X days extend the timeline and may incur rescheduling fees.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-600 mt-0.5">&#10003;</span>
            <span><strong>Kill fee</strong> — If the client cancels mid-project, they owe the deposit plus any completed work at your hourly rate.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-600 mt-0.5">&#10003;</span>
            <span><strong>Communication boundaries</strong> — Define response times and meeting frequency. Unlimited &quot;quick calls&quot; eat your profit.</span>
          </li>
        </ul>
      </div>

      {/* Pricing Formula */}
      <div className="bg-violet-50 border border-violet-200 rounded-xl p-6">
        <h3 className="font-semibold text-violet-900 mb-3">The Project Pricing Formula</h3>
        <div className="bg-white rounded-lg p-4 font-mono text-sm text-violet-900 border border-violet-200">
          <p>Project Price = (Hours x Rate x Buffer) + Profit Margin + Scope Buffer + Rush Fee</p>
          <p className="mt-2 text-violet-600">
            = ({totalBaseHours} x ${hourlyRate} x {(1 + bufferPercent / 100).toFixed(2)}) + {profitMargin}% + {scopeCreepBuffer}%{rushMultiplier > 1 ? ` + ${Math.round((rushMultiplier - 1) * 100)}% rush` : ""}
          </p>
          <p className="mt-1 text-violet-900 font-bold">
            = ${fmt(Math.round(totalProjectPrice))}
          </p>
        </div>
      </div>
    </div>
  );
}
