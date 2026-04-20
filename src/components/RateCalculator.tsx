"use client";

import { useState } from "react";

function fmt(n: number): string {
  return n.toLocaleString("en-US", { maximumFractionDigits: 0 });
}

export default function RateCalculator() {
  const [targetIncome, setTargetIncome] = useState(80000);
  const [healthInsurance, setHealthInsurance] = useState(6000);
  const [retirement, setRetirement] = useState(6000);
  const [businessExpenses, setBusinessExpenses] = useState(3000);
  const [vacationWeeks, setVacationWeeks] = useState(3);
  const [sickDays, setSickDays] = useState(5);
  const [holidays, setHolidays] = useState(10);
  const [billablePercent, setBillablePercent] = useState(70);

  // Calculations
  const seTaxRate = 0.153;
  const effectiveFederalRate = 0.18; // Simplified average

  // Total annual costs you need to cover
  const totalCostsToRecover =
    healthInsurance + retirement + businessExpenses;
  const grossNeeded = targetIncome + totalCostsToRecover;

  // Account for SE tax (you need to earn more to net the gross)
  // SE tax is on 92.35% of net SE income
  // gross - (gross * 0.9235 * 0.153) = net after SE
  // To find gross: net / (1 - 0.9235 * 0.153) = net / 0.8587
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

  return (
    <div className="space-y-8">
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
