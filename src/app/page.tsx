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

      <section className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">How much should a freelancer charge per hour?</h3>
            <p className="text-gray-600">Your rate depends on your target income, expenses, taxes, and billable hours. Most freelancers need to charge 40-60% more than an equivalent hourly wage to cover self-employment tax, benefits, and non-billable time.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">What is a good freelance rate for a developer?</h3>
            <p className="text-gray-600">Freelance web developers typically charge $75-$200/hour depending on experience and specialization. Junior developers may start at $50-$75, while specialized developers (AI/ML, blockchain) can charge $200+.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Should I charge hourly or project-based?</h3>
            <p className="text-gray-600">Hourly works well for ongoing or undefined work. Project-based pricing works better for well-scoped deliverables and lets you earn more as you get faster. Many freelancers use a mix of both.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">How do I raise my freelance rates?</h3>
            <p className="text-gray-600">Raise rates for new clients first. For existing clients, give 30-60 days notice and frame it as a market adjustment. Aim to raise rates 10-20% annually. The best time is when you&apos;re fully booked.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">What expenses should freelancers track?</h3>
            <p className="text-gray-600">Track home office costs, equipment, software subscriptions, internet, phone, mileage, professional development, health insurance, and retirement contributions. These reduce your taxable income.</p>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How much should a freelancer charge per hour?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Your rate depends on your target income, expenses, taxes, and billable hours. Most freelancers need to charge 40-60% more than an equivalent hourly wage to cover self-employment tax, benefits, and non-billable time."
                }
              },
              {
                "@type": "Question",
                "name": "What is a good freelance rate for a developer?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Freelance web developers typically charge $75-$200/hour depending on experience and specialization. Junior developers may start at $50-$75, while specialized developers (AI/ML, blockchain) can charge $200+."
                }
              },
              {
                "@type": "Question",
                "name": "Should I charge hourly or project-based?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Hourly works well for ongoing or undefined work. Project-based pricing works better for well-scoped deliverables and lets you earn more as you get faster. Many freelancers use a mix of both."
                }
              },
              {
                "@type": "Question",
                "name": "How do I raise my freelance rates?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Raise rates for new clients first. For existing clients, give 30-60 days notice and frame it as a market adjustment. Aim to raise rates 10-20% annually. The best time is when you're fully booked."
                }
              },
              {
                "@type": "Question",
                "name": "What expenses should freelancers track?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Track home office costs, equipment, software subscriptions, internet, phone, mileage, professional development, health insurance, and retirement contributions. These reduce your taxable income."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}
