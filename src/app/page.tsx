import RateCalculator from "@/components/RateCalculator";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          What Should You Charge as a Freelancer?
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl">
          Most freelancers set their rate by dividing a target salary by 2,080
          hours. That ignores taxes, insurance, unpaid time off, and non-billable
          work. This calculator shows your real number.
        </p>
      </div>

      <RateCalculator />

      <div className="mt-12 space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Why the Naive Hourly Calculation Is Wrong
          </h2>
          <p className="text-gray-600 mb-4">
            Employees get benefits that freelancers have to pay for themselves.
            When you go freelance, you lose:
          </p>
          <ul className="space-y-2 text-gray-600">
            <li>
              <strong>Employer-paid FICA taxes (7.65%)</strong> — you now pay
              both halves: 15.3% self-employment tax
            </li>
            <li>
              <strong>Health insurance</strong> — employer plans average
              $7,900/year for individuals; you pay 100%
            </li>
            <li>
              <strong>Paid time off</strong> — vacation, sick days, and holidays
              are now unpaid
            </li>
            <li>
              <strong>Retirement match</strong> — no more 401(k) match, and
              you&apos;re responsible for your own contributions
            </li>
            <li>
              <strong>Non-billable time</strong> — invoicing, marketing,
              sales, admin, and learning typically consume 20-40% of your hours
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            How to Use This Calculator
          </h2>
          <div className="text-gray-600 space-y-3">
            <p>
              <strong>Target take-home income</strong> — the annual amount you
              want to deposit into your personal bank account after all business
              costs and taxes. Think of this as your equivalent W-2 salary.
            </p>
            <p>
              <strong>Billable time percentage</strong> — the most impactful and
              most underestimated variable. New freelancers often bill only 50-60%
              of their time. Established freelancers with steady clients might
              reach 75-80%. If you&apos;re spending significant time on sales and
              marketing, lower this number.
            </p>
            <p>
              <strong>The result is your minimum rate</strong> — you should
              charge at or above this number. Charging below it means you&apos;re
              effectively earning less than your target income.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
