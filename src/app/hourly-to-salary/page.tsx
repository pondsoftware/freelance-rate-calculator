import { Metadata } from "next";
import HourlyToSalaryCalculator from "@/components/HourlyToSalaryCalculator";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Freelance Hourly Rate to Salary Converter — FreelanceRates.net",
  description:
    "Convert your freelance hourly rate to an equivalent annual salary. Accounts for self-employment taxes, health insurance, retirement, PTO, and non-billable hours.",
  alternates: {
    canonical: "/hourly-to-salary",
  },
  openGraph: {
    title: "Freelance Hourly Rate to Salary Converter",
    description:
      "Convert your freelance hourly rate to an equivalent annual salary. Accounts for self-employment taxes, health insurance, retirement, PTO, and non-billable hours.",
    type: "website",
    url: "https://freelancerates.net/hourly-to-salary",
    siteName: "Freelance Rate Calculator",
  },
};

export default function HourlyToSalaryPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Freelance Hourly Rate to Salary Converter
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl">
          Your freelance rate and a salaried job aren&apos;t directly comparable.
          Employees get benefits worth 30-40% of their salary that freelancers
          pay for themselves. This calculator shows the true salary equivalent of
          your freelance rate — or what hourly rate you need to match a salary.
        </p>
      </div>

      <HourlyToSalaryCalculator />

      <div className="mt-12 space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Why $75/hr Freelance Does NOT Equal $156,000 Salary
          </h2>
          <p className="text-gray-600 mb-4">
            The naive calculation ($75 x 2,080 hours) gives $156,000 — but
            freelancers earning $75/hr typically take home what a $90,000-$110,000
            salaried employee makes. Here&apos;s why:
          </p>
          <ul className="space-y-2 text-gray-600">
            <li>
              <strong>Self-employment tax (15.3%)</strong> — employees only pay
              half (7.65%); their employer covers the rest
            </li>
            <li>
              <strong>Health insurance</strong> — employers pay an average of
              $7,900/year toward individual coverage
            </li>
            <li>
              <strong>401(k) match</strong> — a 4% match on $100K salary = $4,000
              free money you don&apos;t get as a freelancer
            </li>
            <li>
              <strong>Paid time off</strong> — 15-20 days PTO is unpaid as a
              freelancer, costing thousands
            </li>
            <li>
              <strong>Non-billable hours</strong> — admin, marketing, and sales
              eat 20-40% of your time
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            When to Use This Calculator
          </h2>
          <div className="text-gray-600 space-y-3">
            <p>
              <strong>Leaving a salaried job?</strong> Use the &quot;Salary to
              Hourly Rate&quot; mode to find what you need to charge to maintain
              your total compensation, not just your base pay.
            </p>
            <p>
              <strong>Comparing a job offer to freelancing?</strong> Use the
              &quot;Hourly to Salary&quot; mode to see what your current rate is
              really worth in salary terms.
            </p>
            <p>
              <strong>Negotiating rates?</strong> Show clients the breakdown —
              many don&apos;t realize the hidden costs of freelancing and why
              rates must be higher than employee hourly wages.
            </p>
          </div>
        </section>
      </div>

      {/* Internal Links */}
      <div className="mt-12 bg-gray-50 rounded-xl border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Related Calculators</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link href="/" className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-violet-300 transition">
            <p className="font-medium text-violet-600">Freelance Rate Calculator</p>
            <p className="text-sm text-gray-500">Calculate your minimum hourly rate</p>
          </Link>
          <Link href="/project-pricing" className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-violet-300 transition">
            <p className="font-medium text-violet-600">Project Pricing Calculator</p>
            <p className="text-sm text-gray-500">Convert hourly rates to project quotes</p>
          </Link>
          <Link href="/web-developer" className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-violet-300 transition">
            <p className="font-medium text-violet-600">Web Developer Rates</p>
            <p className="text-sm text-gray-500">Industry-specific rate guide</p>
          </Link>
          <Link href="/copywriter" className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-violet-300 transition">
            <p className="font-medium text-violet-600">Copywriter Rates</p>
            <p className="text-sm text-gray-500">Content writing rate calculator</p>
          </Link>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">How do I convert my freelance rate to a salary?</h3>
            <p className="text-gray-600">Multiply your hourly rate by your actual billable hours per year (not 2,080), then subtract self-employment tax (15.3%), health insurance, and the value of benefits you&apos;d receive as an employee like PTO and retirement matching.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">What hourly rate equals $100K salary?</h3>
            <p className="text-gray-600">To match a $100K salary with full benefits, most freelancers need to charge $65-$85/hr depending on their billable utilization rate and location. The common answer of &quot;$48/hr&quot; ($100K / 2,080) dramatically underestimates the true cost.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Why is the salary equivalent so much lower than expected?</h3>
            <p className="text-gray-600">Freelancers absorb costs that employers normally pay: the employer half of FICA (7.65%), health insurance ($7,900+ average), retirement contributions, paid leave, and non-billable administrative time. These hidden costs reduce your effective earnings by 30-50%.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Should I include benefits when comparing freelance to salary?</h3>
            <p className="text-gray-600">Absolutely. Total compensation (salary + benefits) is the only fair comparison. A $90K salary with good benefits often beats a $120K equivalent in freelance gross income once you account for self-employment tax, insurance, and unpaid time off.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">What is a typical billable utilization rate?</h3>
            <p className="text-gray-600">New freelancers average 50-60% billable utilization. Established freelancers with regular clients reach 70-80%. The remaining time goes to marketing, admin, invoicing, professional development, and sales. Never assume 100% billable time.</p>
          </div>
        </div>
      </section>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How do I convert my freelance rate to a salary?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Multiply your hourly rate by your actual billable hours per year (not 2,080), then subtract self-employment tax (15.3%), health insurance, and the value of benefits you'd receive as an employee like PTO and retirement matching."
                }
              },
              {
                "@type": "Question",
                "name": "What hourly rate equals $100K salary?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "To match a $100K salary with full benefits, most freelancers need to charge $65-$85/hr depending on their billable utilization rate and location. The common answer of \"$48/hr\" ($100K / 2,080) dramatically underestimates the true cost."
                }
              },
              {
                "@type": "Question",
                "name": "Why is the salary equivalent so much lower than expected?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Freelancers absorb costs that employers normally pay: the employer half of FICA (7.65%), health insurance ($7,900+ average), retirement contributions, paid leave, and non-billable administrative time. These hidden costs reduce your effective earnings by 30-50%."
                }
              },
              {
                "@type": "Question",
                "name": "Should I include benefits when comparing freelance to salary?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Absolutely. Total compensation (salary + benefits) is the only fair comparison. A $90K salary with good benefits often beats a $120K equivalent in freelance gross income once you account for self-employment tax, insurance, and unpaid time off."
                }
              },
              {
                "@type": "Question",
                "name": "What is a typical billable utilization rate?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "New freelancers average 50-60% billable utilization. Established freelancers with regular clients reach 70-80%. The remaining time goes to marketing, admin, invoicing, professional development, and sales. Never assume 100% billable time."
                }
              }
            ]
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://freelancerates.net" },
              { "@type": "ListItem", "position": 2, "name": "Hourly to Salary Converter", "item": "https://freelancerates.net/hourly-to-salary" }
            ]
          })
        }}
      />
    </div>
  );
}
