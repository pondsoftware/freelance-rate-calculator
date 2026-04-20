"use client";

import { useState } from "react";

function fmt(n: number): string {
  return n.toLocaleString("en-US", { maximumFractionDigits: 0 });
}

export default function HourlyToSalaryCalculator() {
  const [mode, setMode] = useState<"hourly-to-salary" | "salary-to-hourly">("hourly-to-salary");
  const [hourlyRate, setHourlyRate] = useState(75);
  const [salary, setSalary] = useState(80000);
  const [healthInsuranceCost, setHealthInsuranceCost] = useState(7900);
  const [retirementMatch, setRetirementMatch] = useState(4);
  const [paidTimeOffDays, setPaidTimeOffDays] = useState(20);
  const [billablePercent, setBillablePercent] = useState(70);

  // Constants
  const seTaxRate = 0.153;
  const employerFicaRate = 0.0765;
  const workingHoursPerYear = 2080;

  // Hourly to salary calculation
  const annualFreelanceGross = hourlyRate * workingHoursPerYear * (billablePercent / 100);
  const selfEmploymentTax = annualFreelanceGross * 0.9235 * seTaxRate;
  const afterSETax = annualFreelanceGross - selfEmploymentTax;
  const afterHealthInsurance = afterSETax - healthInsuranceCost;
  const afterRetirement = afterHealthInsurance; // Self-funded retirement
  const ptoValue = (hourlyRate * 8 * paidTimeOffDays);
  const equivalentSalary = afterHealthInsurance - ptoValue + (salary * retirementMatch / 100);
  // More accurate: what salary gives same take-home
  const trueSalaryEquivalent = afterSETax - healthInsuranceCost - ptoValue;

  // Salary to hourly calculation
  const employerBenefitsValue = (salary * employerFicaRate) + healthInsuranceCost + (salary * retirementMatch / 100) + ((salary / workingHoursPerYear) * 8 * paidTimeOffDays);
  const totalCompValue = salary + employerBenefitsValue;
  const neededGross = totalCompValue / (1 - 0.9235 * seTaxRate);
  const billableHours = workingHoursPerYear * (billablePercent / 100);
  const neededHourlyRate = neededGross / billableHours;

  return (
    <div className="space-y-8">
      {/* Mode Toggle */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="flex rounded-lg border border-gray-200 overflow-hidden">
          <button
            onClick={() => setMode("hourly-to-salary")}
            className={`flex-1 py-3 px-4 text-sm font-medium transition ${mode === "hourly-to-salary" ? "bg-violet-600 text-white" : "bg-white text-gray-700 hover:bg-gray-50"}`}
          >
            Hourly Rate &rarr; Salary Equivalent
          </button>
          <button
            onClick={() => setMode("salary-to-hourly")}
            className={`flex-1 py-3 px-4 text-sm font-medium transition ${mode === "salary-to-hourly" ? "bg-violet-600 text-white" : "bg-white text-gray-700 hover:bg-gray-50"}`}
          >
            Salary &rarr; Hourly Rate Needed
          </button>
        </div>
      </div>

      {/* Inputs */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          {mode === "hourly-to-salary" ? "Your Freelance Rate" : "Your Target Salary"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mode === "hourly-to-salary" ? (
            <div>
              <label htmlFor="hourlyRate" className="block text-sm font-medium text-gray-700 mb-2">
                Your freelance hourly rate
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
            </div>
          ) : (
            <div>
              <label htmlFor="salary" className="block text-sm font-medium text-gray-700 mb-2">
                Target annual salary
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">$</span>
                <input
                  id="salary"
                  type="number"
                  value={salary}
                  onChange={(e) => setSalary(Number(e.target.value))}
                  className="w-full rounded-lg border border-gray-300 py-3 pl-8 pr-16 text-lg focus:border-violet-500 focus:ring-2 focus:ring-violet-200 outline-none transition"
                  min={1000}
                  step={5000}
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm">/year</span>
              </div>
            </div>
          )}
          <div>
            <label htmlFor="healthIns" className="block text-sm font-medium text-gray-700 mb-2">
              Health insurance cost (annual)
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">$</span>
              <input
                id="healthIns"
                type="number"
                value={healthInsuranceCost}
                onChange={(e) => setHealthInsuranceCost(Number(e.target.value))}
                className="w-full rounded-lg border border-gray-300 py-3 pl-8 pr-16 text-lg focus:border-violet-500 focus:ring-2 focus:ring-violet-200 outline-none transition"
                min={0}
                step={500}
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm">/year</span>
            </div>
          </div>
          <div>
            <label htmlFor="retMatch" className="block text-sm font-medium text-gray-700 mb-2">
              Employer 401(k) match (%)
            </label>
            <div className="relative">
              <input
                id="retMatch"
                type="number"
                value={retirementMatch}
                onChange={(e) => setRetirementMatch(Number(e.target.value))}
                className="w-full rounded-lg border border-gray-300 py-3 pl-4 pr-16 text-lg focus:border-violet-500 focus:ring-2 focus:ring-violet-200 outline-none transition"
                min={0}
                max={10}
                step={0.5}
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm">%</span>
            </div>
          </div>
          <div>
            <label htmlFor="ptoDays" className="block text-sm font-medium text-gray-700 mb-2">
              Paid time off (employee equivalent)
            </label>
            <div className="relative">
              <input
                id="ptoDays"
                type="number"
                value={paidTimeOffDays}
                onChange={(e) => setPaidTimeOffDays(Number(e.target.value))}
                className="w-full rounded-lg border border-gray-300 py-3 pl-4 pr-16 text-lg focus:border-violet-500 focus:ring-2 focus:ring-violet-200 outline-none transition"
                min={0}
                max={50}
                step={1}
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm">days</span>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <label htmlFor="billable" className="block text-sm font-medium text-gray-700 mb-2">
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
            className="w-full"
          />
          <p className="text-xs text-gray-500 mt-1">
            Percentage of working hours you actually bill to clients
          </p>
        </div>
      </div>

      {/* Result */}
      {mode === "hourly-to-salary" ? (
        <>
          <div className="bg-green-600 rounded-xl p-6 text-white text-center">
            <p className="text-green-100 text-sm mb-1">
              Your ${hourlyRate}/hr freelance rate is equivalent to a salary of
            </p>
            <p className="text-5xl font-bold mb-1">${fmt(Math.round(trueSalaryEquivalent))}/yr</p>
            <p className="text-green-200 text-sm">
              after accounting for self-employment tax, benefits, and unpaid time off
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="font-semibold text-gray-900 mb-4">How We Calculated This</h3>
            <div className="space-y-2">
              <div className="flex justify-between text-sm text-gray-600">
                <span>Annual gross at {billablePercent}% billable</span>
                <span>${fmt(Math.round(annualFreelanceGross))}</span>
              </div>
              <div className="flex justify-between text-sm text-red-600">
                <span>Self-employment tax (15.3%)</span>
                <span>-${fmt(Math.round(selfEmploymentTax))}</span>
              </div>
              <div className="flex justify-between text-sm text-red-600">
                <span>Health insurance (self-paid)</span>
                <span>-${fmt(healthInsuranceCost)}</span>
              </div>
              <div className="flex justify-between text-sm text-red-600">
                <span>Lost PTO value ({paidTimeOffDays} days)</span>
                <span>-${fmt(Math.round(ptoValue))}</span>
              </div>
              <div className="border-t border-gray-200 pt-2">
                <div className="flex justify-between font-semibold text-gray-900">
                  <span>Equivalent salary</span>
                  <span>${fmt(Math.round(trueSalaryEquivalent))}</span>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="bg-green-600 rounded-xl p-6 text-white text-center">
            <p className="text-green-100 text-sm mb-1">
              To match a ${fmt(salary)}/yr salary with benefits, you need to charge
            </p>
            <p className="text-5xl font-bold mb-1">${fmt(Math.ceil(neededHourlyRate))}/hr</p>
            <p className="text-green-200 text-sm">
              at {billablePercent}% billable utilization
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Total Compensation Breakdown</h3>
            <div className="space-y-2">
              <div className="flex justify-between text-sm text-gray-600">
                <span>Base salary</span>
                <span>${fmt(salary)}</span>
              </div>
              <div className="flex justify-between text-sm text-gray-600">
                <span>Employer FICA (7.65%)</span>
                <span>+${fmt(Math.round(salary * employerFicaRate))}</span>
              </div>
              <div className="flex justify-between text-sm text-gray-600">
                <span>Health insurance</span>
                <span>+${fmt(healthInsuranceCost)}</span>
              </div>
              <div className="flex justify-between text-sm text-gray-600">
                <span>401(k) match ({retirementMatch}%)</span>
                <span>+${fmt(Math.round(salary * retirementMatch / 100))}</span>
              </div>
              <div className="flex justify-between text-sm text-gray-600">
                <span>PTO value ({paidTimeOffDays} days)</span>
                <span>+${fmt(Math.round((salary / workingHoursPerYear) * 8 * paidTimeOffDays))}</span>
              </div>
              <div className="border-t border-gray-200 pt-2">
                <div className="flex justify-between font-semibold text-gray-900">
                  <span>Total compensation value</span>
                  <span>${fmt(Math.round(totalCompValue))}</span>
                </div>
              </div>
              <div className="border-t border-gray-200 pt-2 mt-2">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Billable hours/year ({billablePercent}%)</span>
                  <span>{fmt(Math.round(billableHours))} hours</span>
                </div>
                <div className="flex justify-between font-semibold text-gray-900 mt-1">
                  <span>Required hourly rate</span>
                  <span>${fmt(Math.ceil(neededHourlyRate))}/hr</span>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Comparison Table */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="font-semibold text-gray-900 mb-4">Quick Reference: Hourly Rate to Salary</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-2 px-3 font-medium text-gray-700">Hourly Rate</th>
                <th className="text-left py-2 px-3 font-medium text-gray-700">Naive Salary</th>
                <th className="text-left py-2 px-3 font-medium text-gray-700">True Salary Equiv.</th>
                <th className="text-left py-2 px-3 font-medium text-gray-700">Difference</th>
              </tr>
            </thead>
            <tbody>
              {[25, 50, 75, 100, 125, 150, 200].map((rate) => {
                const naiveSalary = rate * 2080;
                const gross = rate * 2080 * (billablePercent / 100);
                const se = gross * 0.9235 * 0.153;
                const trueSal = gross - se - healthInsuranceCost - (rate * 8 * paidTimeOffDays);
                return (
                  <tr key={rate} className="border-b border-gray-100">
                    <td className="py-2 px-3 font-medium">${rate}/hr</td>
                    <td className="py-2 px-3">${fmt(naiveSalary)}</td>
                    <td className="py-2 px-3">${fmt(Math.round(trueSal))}</td>
                    <td className="py-2 px-3 text-red-600">-${fmt(Math.round(naiveSalary - trueSal))}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-500 mt-3">
          Based on {billablePercent}% billable time, ${fmt(healthInsuranceCost)} health insurance, {paidTimeOffDays} PTO days.
        </p>
      </div>
    </div>
  );
}
