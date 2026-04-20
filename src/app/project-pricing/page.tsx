import { Metadata } from "next";
import ProjectPricingCalculator from "@/components/ProjectPricingCalculator";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Freelance Project Pricing Calculator — Convert Hourly to Project Rates",
  description:
    "Calculate freelance project prices from hourly rates. Add time buffers, profit margins, scope creep protection, and rush fees. Includes payment milestone suggestions.",
  alternates: {
    canonical: "/project-pricing",
  },
  openGraph: {
    title: "Freelance Project Pricing Calculator",
    description:
      "Convert your hourly rate into professional project quotes. Includes buffer calculations, scope creep protection, and payment milestone breakdowns.",
    type: "website",
    url: "https://freelancerates.net/project-pricing",
    siteName: "Freelance Rate Calculator",
  },
};

export default function ProjectPricingPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Freelance Project Pricing Calculator
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl">
          Stop leaving money on the table with hourly billing. Convert your hourly
          rate into professional project quotes that account for scope creep,
          profit margins, and unexpected complexity. Build pricing that protects
          your time and income.
        </p>
      </div>

      <ProjectPricingCalculator />

      <div className="mt-12 space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Why Switch from Hourly to Project Pricing?
          </h2>
          <p className="text-gray-600 mb-4">
            Project-based pricing benefits both freelancers and clients when done
            correctly:
          </p>
          <ul className="space-y-2 text-gray-600">
            <li>
              <strong>You earn more as you get faster</strong> — With hourly billing,
              efficiency is penalized. With project pricing, a task that used to
              take 10 hours but now takes 5 still earns the same fee.
            </li>
            <li>
              <strong>Clients prefer predictability</strong> — Most clients would
              rather know the total cost upfront than track hours. Fixed pricing
              reduces budget anxiety and approval friction.
            </li>
            <li>
              <strong>Focus shifts to value</strong> — Hourly billing anchors the
              conversation on time. Project pricing anchors it on outcomes and
              deliverables.
            </li>
            <li>
              <strong>Higher perceived value</strong> — A &quot;$5,000 website
              redesign&quot; sounds more professional than &quot;50 hours at
              $100/hr.&quot; Same price, different framing.
            </li>
            <li>
              <strong>Eliminates time tracking debates</strong> — No more
              justifying hours or worrying clients will question your timesheet.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            How to Estimate Project Hours Accurately
          </h2>
          <div className="text-gray-600 space-y-3">
            <p>
              <strong>Break the project into phases</strong> — Discovery,
              design, development, revisions, testing, and deployment. Estimate
              each phase separately for accuracy.
            </p>
            <p>
              <strong>Use historical data</strong> — Track time on similar past
              projects. After 5-10 projects, you&apos;ll have reliable estimates for
              common deliverables.
            </p>
            <p>
              <strong>Apply the 1.5x rule</strong> — Whatever your initial
              estimate is, multiply by 1.5. Research consistently shows
              developers and creatives underestimate by 30-50%.
            </p>
            <p>
              <strong>Identify risk factors</strong> — New technology, unclear
              requirements, multiple stakeholders, and tight timelines all
              increase actual hours. Add buffer accordingly.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            When to Use Hourly vs. Project Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="font-medium text-green-900 mb-2">Use Project Pricing When:</h3>
              <ul className="space-y-1 text-sm text-green-800">
                <li>&bull; Scope is well-defined and documented</li>
                <li>&bull; You&apos;ve done similar projects before</li>
                <li>&bull; The client wants budget certainty</li>
                <li>&bull; You&apos;re faster than average at the work</li>
                <li>&bull; The project has clear deliverables</li>
              </ul>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="font-medium text-blue-900 mb-2">Use Hourly Pricing When:</h3>
              <ul className="space-y-1 text-sm text-blue-800">
                <li>&bull; Scope is unclear or evolving</li>
                <li>&bull; The client wants ongoing support</li>
                <li>&bull; Requirements will change frequently</li>
                <li>&bull; You&apos;re new to this type of work</li>
                <li>&bull; It&apos;s a retainer/advisory relationship</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Contract Essentials for Project Pricing
          </h2>
          <ul className="space-y-2 text-gray-600">
            <li>
              <strong>Detailed scope of work</strong> — Every deliverable, feature,
              and page explicitly listed. What&apos;s not in the scope document is not
              included.
            </li>
            <li>
              <strong>Change order clause</strong> — New requests require a written
              change order with cost estimate and timeline impact before work begins.
            </li>
            <li>
              <strong>Payment milestones</strong> — Never start without a deposit
              (25-50%). Tie remaining payments to deliverable milestones, not dates.
            </li>
            <li>
              <strong>Revision limits</strong> — Define how many revision rounds are
              included (2-3 is standard). Additional rounds are billed separately.
            </li>
            <li>
              <strong>Timeline and delays</strong> — If the client delays feedback
              beyond X days, you may need to reschedule at a higher rate.
            </li>
          </ul>
        </section>
      </div>

      {/* Internal Links */}
      <div className="mt-12 bg-gray-50 rounded-xl border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Related Calculators</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link href="/" className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-violet-300 transition">
            <p className="font-medium text-violet-600">Freelance Rate Calculator</p>
            <p className="text-sm text-gray-500">Find your base hourly rate first</p>
          </Link>
          <Link href="/hourly-to-salary" className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-violet-300 transition">
            <p className="font-medium text-violet-600">Hourly to Salary Converter</p>
            <p className="text-sm text-gray-500">Compare your rate to salaried jobs</p>
          </Link>
          <Link href="/web-developer" className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-violet-300 transition">
            <p className="font-medium text-violet-600">Web Developer Rates</p>
            <p className="text-sm text-gray-500">Project pricing for web development</p>
          </Link>
          <Link href="/copywriter" className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-violet-300 transition">
            <p className="font-medium text-violet-600">Copywriter Rates</p>
            <p className="text-sm text-gray-500">Per-word and per-project pricing</p>
          </Link>
        </div>
      </div>

      {/* FAQ */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">How do I convert my hourly rate to project pricing?</h3>
            <p className="text-gray-600">Estimate total hours for the project, add a 15-25% buffer for unknowns, then add your profit margin (10-20%). This gives you a project price that exceeds what you&apos;d earn hourly, compensating for the risk of fixed pricing and scope management effort.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">How much buffer should I add to project estimates?</h3>
            <p className="text-gray-600">Add 15-25% for projects you&apos;ve done before, 30-50% for new types of work, and 50%+ for projects with unclear requirements or multiple decision-makers. The buffer accounts for communication overhead, revisions, technical surprises, and the planning fallacy.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">What if the project takes longer than estimated?</h3>
            <p className="text-gray-600">If scope hasn&apos;t changed, your buffer should cover the overage — that&apos;s why it&apos;s there. If the client added requirements, use your change order process. Track hours even on project-priced work so you can improve estimates for future projects.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">How do I handle scope creep with project pricing?</h3>
            <p className="text-gray-600">Include a change order clause in your contract. When a client requests work outside the defined scope, respond with: &quot;That&apos;s outside our current agreement. I can add it for $X and Y additional days. Should I prepare a change order?&quot; Always get written approval before doing extra work.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Should I charge a rush fee for tight deadlines?</h3>
            <p className="text-gray-600">Yes. Rush work displaces other commitments and often requires evenings/weekends. Standard rush fees are 25-50% for moderately tight timelines and 50-100% for emergencies. Communicate this upfront so clients understand the premium before committing to a timeline.</p>
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
                "name": "How do I convert my hourly rate to project pricing?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Estimate total hours for the project, add a 15-25% buffer for unknowns, then add your profit margin (10-20%). This gives you a project price that exceeds what you'd earn hourly, compensating for the risk of fixed pricing and scope management effort."
                }
              },
              {
                "@type": "Question",
                "name": "How much buffer should I add to project estimates?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Add 15-25% for projects you've done before, 30-50% for new types of work, and 50%+ for projects with unclear requirements or multiple decision-makers. The buffer accounts for communication overhead, revisions, technical surprises, and the planning fallacy."
                }
              },
              {
                "@type": "Question",
                "name": "What if the project takes longer than estimated?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "If scope hasn't changed, your buffer should cover the overage — that's why it's there. If the client added requirements, use your change order process. Track hours even on project-priced work so you can improve estimates for future projects."
                }
              },
              {
                "@type": "Question",
                "name": "How do I handle scope creep with project pricing?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Include a change order clause in your contract. When a client requests work outside the defined scope, respond with: \"That's outside our current agreement. I can add it for $X and Y additional days. Should I prepare a change order?\" Always get written approval before doing extra work."
                }
              },
              {
                "@type": "Question",
                "name": "Should I charge a rush fee for tight deadlines?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. Rush work displaces other commitments and often requires evenings/weekends. Standard rush fees are 25-50% for moderately tight timelines and 50-100% for emergencies. Communicate this upfront so clients understand the premium before committing to a timeline."
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
              { "@type": "ListItem", "position": 2, "name": "Project Pricing Calculator", "item": "https://freelancerates.net/project-pricing" }
            ]
          })
        }}
      />
    </div>
  );
}
