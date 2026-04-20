"use client";

import { useState } from "react";
import { PROFESSIONS, Profession } from "@/data/professions";

function fmt(n: number): string {
  return n.toLocaleString("en-US", { maximumFractionDigits: 0 });
}

export default function RateCalculator() {
  const [selectedProfession, setSelectedProfession] = useState<Profession | null>(null);
  const [targetIncome, setTargetIncome] = useState(80000);
  const [healthInsurance, setHealthInsurance] = useState(6000);
  const [retirement, setRetirement] = useState(6000);
  const [businessExpenses, setBusinessExpenses] = useState(3000);
  const [vacationWeeks, setVacationWeeks] = useState(3);
  const [sickDays, setSickDays] = useState(5);
  const [holidays, setHolidays] = useState(10);
  const [billablePercent, setBillablePercent] = useState(70);

  // Project pricing state
  const [projectHours, setProjectHours] = useState(40);
  const [complexityMultiplier, setComplexityMultiplier] = useState(1.25);
  const [rushFee, setRushFee] = useState(false);
  const [rushPercent, setRushPercent] = useState(25);

  // Calculations
  const seTaxRate = 0.153;
  const effectiveFederalRate = 0.18; // Simplified average

  // Total annual costs you need to cover
  const totalCostsToRecover =
    healthInsurance + retirement + businessExpenses;
  const grossNeeded = targetIncome + totalCostsToRecover;

  // Account for SE tax (you need to earn more to net the gross)
  const grossAfterSETax = grossNeeded / (1 - 0.9235 * seTaxRate);
  const seTax = grossAfterSETax * 0.9235 * seTaxRate;

  // Federal income tax estimate
  const federalTax = grossAfterSETax * effectiveFederalRate;
  const totalGrossRequired = grossAfterSETax + federalTax;

  // Available working hours
  const totalWeeksPerYear = 52;
  const workingWeeks = totalWeeksPerYear - vacationWeeks;
  const totalWorkDays = workingWeeks * 5 - holidays - sickDays;
  const totalWorkHours = totalWorkDays * 8;
  const billableHours = Math.round(totalWorkHours * (billablePercent / 100));

  // Rates
  const hourlyRate = totalGrossRequired / billableHours;
  const dailyRate = hourlyRate * 8;
  const weeklyRate = dailyRate * 5;
  const monthlyRate = totalGrossRequired / 12;

  // Naive calculation for comparison
  const naiveHourly = targetIncome / 2080;

  // Project pricing calculations
  const baseProjectPrice = projectHours * hourlyRate;
  const complexityAdjustment = baseProjectPrice * (complexityMultiplier - 1);
  const subtotalBeforeRush = baseProjectPrice + complexityAdjustment;
  const rushAmount = rushFee ? subtotalBeforeRush * (rushPercent / 100) : 0;
  const totalProjectQuote = subtotalBeforeRush + rushAmount;

  function handleProfessionChange(slug: string) {
    if (!slug) {
      setSelectedProfession(null);
      return;
    }
    const profession = PROFESSIONS.find((p) => p.slug === slug) || null;
    setSelectedProfession(profession);
    if (profession) {
      setTargetIncome(profession.typicalIncome);
      setHealthInsurance(profession.healthInsurance);
    }
  }

  // Market rate position (0 to 100 percent)
  function getMarketPosition(): number {
    if (!selectedProfession) return 50;
    const { low, high } = selectedProfession.typicalRate;
    const clamped = Math.max(low, Math.min(high, hourlyRate));
    return ((clamped - low) / (high - low)) * 100;
  }

  return (
    <div className="space-y-8">
      {/* Profession Selector */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Your Profession
        </h2>
        <div>
          <label htmlFor="profession" className="block text-sm font-medium text-gray-700 mb-2">
            Select your profession (optional)
          </label>
          <select
            id="profession"
            value={selectedProfession?.slug || ""}
            onChange={(e) => handleProfessionChange(e.target.value)}
            className="w-full rounded-lg border border-gray-300 py-3 px-4 text-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
          >
            <option value="">-- Choose a profession --</option>
            {PROFESSIONS.map((p) => (
              <option key={p.slug} value={p.slug}>
                {p.name}
              </option>
            ))}
          </select>
          {selectedProfession && (
            <p className="text-sm text-gray-500 mt-2">
              {selectedProfession.description}
            </p>
          )}
        </div>
      </div>

      {/* Inputs */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Your Target Income
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputField
            id="target"
            label="Desired take-home income"
            value={targetIncome}
            onChange={setTargetIncome}
            prefix="$"
            suffix="/year"
            step={5000}
          />
          <InputField
            id="health"
            label="Health insurance (annual)"
            value={healthInsurance}
            onChange={setHealthInsurance}
            prefix="$"
            suffix="/year"
            step={500}
          />
          <InputField
            id="retirement"
            label="Retirement contributions"
            value={retirement}
            onChange={setRetirement}
            prefix="$"
            suffix="/year"
            step={500}
          />
          <InputField
            id="expenses"
            label="Business expenses"
            value={businessExpenses}
            onChange={setBusinessExpenses}
            prefix="$"
            suffix="/year"
            step={500}
          />
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Your Time
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <InputField
            id="vacation"
            label="Vacation weeks"
            value={vacationWeeks}
            onChange={setVacationWeeks}
            suffix="weeks"
            step={1}
            min={0}
            max={12}
          />
          <InputField
            id="sick"
            label="Sick days"
            value={sickDays}
            onChange={setSickDays}
            suffix="days"
            step={1}
            min={0}
          />
          <InputField
            id="holidays"
            label="Holidays"
            value={holidays}
            onChange={setHolidays}
            suffix="days"
            step={1}
            min={0}
          />
          <div>
            <label
              htmlFor="billable"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Billable time: {billablePercent}%
            </label>
            <input
              id="billable"
              type="range"
              min={40}
              max={95}
              step={5}
              value={billablePercent}
              onChange={(e) => setBillablePercent(Number(e.target.value))}
              className="w-full mt-2"
            />
            <p className="text-xs text-gray-500 mt-1">
              Rest is admin, sales, marketing
            </p>
          </div>
        </div>
      </div>

      {/* Key Result */}
      <div className="bg-green-600 rounded-xl p-6 text-white text-center">
        <p className="text-green-100 text-sm mb-1">
          You should charge at least
        </p>
        <p className="text-5xl font-bold mb-1">${fmt(Math.ceil(hourlyRate))}/hr</p>
        <p className="text-green-200 text-sm">
          to take home ${fmt(targetIncome)}/year after taxes, insurance, and
          expenses
        </p>
      </div>

      {/* Market Rate Comparison */}
      {selectedProfession && (
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
          <h3 className="font-semibold text-blue-900 mb-3">
            Market Rate Comparison: {selectedProfession.name}
          </h3>
          <div className="flex items-center justify-between text-sm text-blue-800 mb-2">
            <span>Your rate: <strong>${fmt(Math.ceil(hourlyRate))}/hr</strong></span>
            <span>Market range: ${selectedProfession.typicalRate.low}&ndash;${selectedProfession.typicalRate.high}/hr</span>
          </div>
          {/* Visual bar */}
          <div className="relative h-4 bg-blue-200 rounded-full overflow-hidden">
            {/* Low-mid-high zones */}
            <div className="absolute inset-0 flex">
              <div className="flex-1 bg-blue-200" />
              <div className="flex-1 bg-blue-300" />
              <div className="flex-1 bg-blue-400" />
            </div>
            {/* Marker for user's rate */}
            <div
              className="absolute top-0 h-full w-1 bg-blue-900 rounded"
              style={{ left: `${getMarketPosition()}%` }}
            />
          </div>
          <div className="flex justify-between text-xs text-blue-600 mt-1">
            <span>${selectedProfession.typicalRate.low}</span>
            <span>${selectedProfession.typicalRate.mid} (mid)</span>
            <span>${selectedProfession.typicalRate.high}</span>
          </div>
          {hourlyRate < selectedProfession.typicalRate.low && (
            <p className="text-sm text-blue-800 mt-3">
              Your calculated rate is <strong>below</strong> the typical market range. Consider whether your expenses or income target are set too low.
            </p>
          )}
          {hourlyRate > selectedProfession.typicalRate.high && (
            <p className="text-sm text-blue-800 mt-3">
              Your calculated rate is <strong>above</strong> the typical market range. This may be justified by experience or specialization, but ensure it aligns with your market.
            </p>
          )}
        </div>
      )}

      {/* Comparison */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
        <h3 className="font-semibold text-amber-900 mb-2">
          The naive calculation says ${fmt(Math.ceil(naiveHourly))}/hr — here&apos;s
          why that&apos;s wrong
        </h3>
        <p className="text-sm text-amber-800">
          Dividing ${fmt(targetIncome)} by 2,080 hours (40hr/week x 52 weeks)
          ignores: self-employment tax (15.3%), health insurance ($
          {fmt(healthInsurance)}/yr), retirement (${fmt(retirement)}/yr), vacation
          ({vacationWeeks} weeks unpaid), sick days ({sickDays} unpaid), holidays
          ({holidays} unpaid), and non-billable time (
          {100 - billablePercent}% of your hours). That&apos;s a{" "}
          <strong>
            ${fmt(Math.ceil(hourlyRate - naiveHourly))}/hr difference
          </strong>{" "}
          — {Math.round(((hourlyRate - naiveHourly) / naiveHourly) * 100)}% more
          than the naive number.
        </p>
      </div>

      {/* Rate Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <RateCard label="Hourly" amount={hourlyRate} />
        <RateCard label="Daily (8hr)" amount={dailyRate} />
        <RateCard label="Weekly" amount={weeklyRate} />
        <RateCard label="Monthly" amount={monthlyRate} />
      </div>

      {/* Breakdown */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="font-semibold text-gray-900 mb-4">
          Full Breakdown
        </h3>
        <div className="space-y-2">
          <BreakdownLine label="Target take-home" value={targetIncome} />
          <BreakdownLine
            label="Health insurance"
            value={healthInsurance}
            color="red"
          />
          <BreakdownLine
            label="Retirement contributions"
            value={retirement}
            color="red"
          />
          <BreakdownLine
            label="Business expenses"
            value={businessExpenses}
            color="red"
          />
          <BreakdownLine
            label="Self-employment tax (15.3%)"
            value={Math.round(seTax)}
            color="red"
          />
          <BreakdownLine
            label="Federal income tax (est.)"
            value={Math.round(federalTax)}
            color="red"
          />
          <div className="border-t border-gray-200 pt-2">
            <BreakdownLine
              label="Total you need to earn"
              value={Math.round(totalGrossRequired)}
              bold
            />
          </div>
          <div className="border-t border-gray-200 pt-2 mt-2">
            <div className="flex justify-between text-sm text-gray-600">
              <span>Working days/year</span>
              <span>{totalWorkDays} days</span>
            </div>
            <div className="flex justify-between text-sm text-gray-600">
              <span>Total work hours</span>
              <span>{fmt(totalWorkHours)} hours</span>
            </div>
            <div className="flex justify-between text-sm text-gray-600">
              <span>Billable hours ({billablePercent}%)</span>
              <span className="font-semibold">{fmt(billableHours)} hours</span>
            </div>
          </div>
        </div>
      </div>

      {/* Project-Based Pricing */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Convert to Project Pricing
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <InputField
            id="projectHours"
            label="Estimated project hours"
            value={projectHours}
            onChange={setProjectHours}
            suffix="hours"
            step={5}
            min={1}
          />
          <div>
            <label htmlFor="complexity" className="block text-sm font-medium text-gray-700 mb-2">
              Complexity multiplier
            </label>
            <select
              id="complexity"
              value={complexityMultiplier}
              onChange={(e) => setComplexityMultiplier(Number(e.target.value))}
              className="w-full rounded-lg border border-gray-300 py-3 px-4 text-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
            >
              <option value={1.0}>Simple (1.0x)</option>
              <option value={1.25}>Standard (1.25x)</option>
              <option value={1.5}>Complex (1.5x)</option>
              <option value={2.0}>Highly Complex (2.0x)</option>
            </select>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <input
                id="rushToggle"
                type="checkbox"
                checked={rushFee}
                onChange={(e) => setRushFee(e.target.checked)}
                className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <label htmlFor="rushToggle" className="text-sm font-medium text-gray-700">
                Rush fee
              </label>
            </div>
            {rushFee && (
              <div className="flex items-center gap-2">
                <input
                  type="range"
                  min={25}
                  max={50}
                  step={5}
                  value={rushPercent}
                  onChange={(e) => setRushPercent(Number(e.target.value))}
                  className="w-24"
                />
                <span className="text-sm text-gray-600">+{rushPercent}%</span>
              </div>
            )}
          </div>
        </div>

        {/* Project Quote Result */}
        <div className="bg-gray-50 rounded-lg border border-gray-200 p-5">
          <h3 className="font-semibold text-gray-900 mb-3">Suggested Project Quote</h3>
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-600">
              <span>Base price ({projectHours} hrs x ${fmt(Math.ceil(hourlyRate))}/hr)</span>
              <span>${fmt(Math.round(baseProjectPrice))}</span>
            </div>
            {complexityMultiplier > 1 && (
              <div className="flex justify-between text-sm text-gray-600">
                <span>Complexity adjustment ({complexityMultiplier}x)</span>
                <span>+${fmt(Math.round(complexityAdjustment))}</span>
              </div>
            )}
            {rushFee && (
              <div className="flex justify-between text-sm text-orange-600">
                <span>Rush fee (+{rushPercent}%)</span>
                <span>+${fmt(Math.round(rushAmount))}</span>
              </div>
            )}
            <div className="border-t border-gray-300 pt-2">
              <div className="flex justify-between">
                <span className="font-semibold text-gray-900">Total project quote</span>
                <span className="text-xl font-bold text-gray-900">${fmt(Math.round(totalProjectQuote))}</span>
              </div>
            </div>
          </div>

          {/* Milestone Splits */}
          <div className="mt-4 pt-4 border-t border-gray-200">
            <h4 className="text-sm font-medium text-gray-700 mb-2">Suggested Payment Milestones</h4>
            {totalProjectQuote <= 5000 ? (
              <div className="grid grid-cols-2 gap-3">
                <MilestoneCard label="Deposit (50%)" amount={totalProjectQuote * 0.5} description="Due at project start" />
                <MilestoneCard label="Final (50%)" amount={totalProjectQuote * 0.5} description="Due at delivery" />
              </div>
            ) : (
              <div className="grid grid-cols-3 gap-3">
                <MilestoneCard label="Deposit (30%)" amount={totalProjectQuote * 0.3} description="Due at project start" />
                <MilestoneCard label="Midpoint (40%)" amount={totalProjectQuote * 0.4} description="Due at halfway mark" />
                <MilestoneCard label="Final (30%)" amount={totalProjectQuote * 0.3} description="Due at delivery" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function InputField({
  id,
  label,
  value,
  onChange,
  prefix,
  suffix,
  step,
  min = 0,
  max,
}: {
  id: string;
  label: string;
  value: number;
  onChange: (v: number) => void;
  prefix?: string;
  suffix?: string;
  step: number;
  min?: number;
  max?: number;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <div className="relative">
        {prefix && (
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
            {prefix}
          </span>
        )}
        <input
          id={id}
          type="number"
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className={`w-full rounded-lg border border-gray-300 py-3 text-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition ${prefix ? "pl-8 pr-16" : "pl-4 pr-16"}`}
          min={min}
          max={max}
          step={step}
        />
        {suffix && (
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
            {suffix}
          </span>
        )}
      </div>
    </div>
  );
}

function RateCard({ label, amount }: { label: string; amount: number }) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
      <p className="text-sm text-gray-500 mb-1">{label}</p>
      <p className="text-2xl font-bold text-gray-900">${fmt(Math.ceil(amount))}</p>
    </div>
  );
}

function MilestoneCard({ label, amount, description }: { label: string; amount: number; description: string }) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-3 text-center">
      <p className="text-xs text-gray-500 mb-1">{label}</p>
      <p className="text-lg font-bold text-gray-900">${fmt(Math.round(amount))}</p>
      <p className="text-xs text-gray-400">{description}</p>
    </div>
  );
}

function BreakdownLine({
  label,
  value,
  bold,
  color,
}: {
  label: string;
  value: number;
  bold?: boolean;
  color?: "red";
}) {
  return (
    <div className="flex justify-between">
      <span className={`text-sm ${bold ? "font-semibold text-gray-900" : "text-gray-600"}`}>
        {label}
      </span>
      <span
        className={`${bold ? "text-lg font-bold text-gray-900" : "text-sm"} ${color === "red" ? "text-red-600" : ""}`}
      >
        {color === "red" ? "+" : ""}${fmt(value)}
      </span>
    </div>
  );
}
