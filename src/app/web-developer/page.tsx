import { Metadata } from "next";
import WebDeveloperCalculator from "@/components/WebDeveloperCalculator";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Freelance Web Developer Rate Calculator — 2024 Rates by Experience & Stack",
  description:
    "Calculate freelance web developer rates by experience level, tech stack, and location. See hourly rates for junior to senior developers, project pricing, and tech stack premiums.",
  alternates: {
    canonical: "/web-developer",
  },
  openGraph: {
    title: "Freelance Web Developer Rate Calculator",
    description:
      "Calculate freelance web developer rates by experience level, tech stack, and location. Includes project pricing for common web development work.",
    type: "website",
    url: "https://freelancerates.net/web-developer",
    siteName: "Freelance Rate Calculator",
  },
};

const webAppJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Web Developer Rate Calculator",
  description: "Calculate freelance web developer rates by experience level, tech stack, and location. See hourly rates for junior to senior developers, project pricing, and tech stack premiums.",
  url: "https://freelancerates.net/web-developer",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Any",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

export default function WebDeveloperPage() {
  return (
    <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppJsonLd) }} />
    <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Freelance Web Developer Rate Calculator
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl">
          Find the right hourly rate for freelance web development based on your
          experience, tech stack, and market. Includes project pricing benchmarks
          for common web development work.
        </p>
      </div>

      <WebDeveloperCalculator />

      <div className="mt-12 space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            What Determines Web Developer Freelance Rates?
          </h2>
          <p className="text-gray-600 mb-4">
            Freelance web development rates vary widely based on several factors.
            Understanding these helps you position your rate competitively:
          </p>
          <ul className="space-y-2 text-gray-600">
            <li>
              <strong>Experience level</strong> — Junior developers (0-2 years)
              typically charge $35-$75/hr, while senior developers (6+ years)
              command $100-$200+/hr
            </li>
            <li>
              <strong>Tech stack specialization</strong> — Emerging technologies
              (AI/ML, blockchain) command 20-40% premiums over commodity skills
              (WordPress, basic HTML/CSS)
            </li>
            <li>
              <strong>Project complexity</strong> — A simple landing page vs. a
              custom SaaS application have vastly different rate expectations
            </li>
            <li>
              <strong>Client type</strong> — Enterprise clients expect (and pay
              for) higher rates than small businesses or startups
            </li>
            <li>
              <strong>Geographic market</strong> — US-based developers charge 2-3x
              more than developers in Eastern Europe or Asia
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Hourly vs. Project-Based Pricing for Web Developers
          </h2>
          <div className="text-gray-600 space-y-3">
            <p>
              <strong>Hourly pricing</strong> works best for ongoing maintenance,
              retainer work, or projects with unclear scope. It protects you from
              scope creep but limits your earning potential.
            </p>
            <p>
              <strong>Project-based pricing</strong> rewards efficiency — as you
              get faster, your effective hourly rate increases. Best for
              well-defined deliverables like landing pages, marketing sites, or
              specific features.
            </p>
            <p>
              <strong>Value-based pricing</strong> ties your fee to business
              outcomes. If your e-commerce site redesign increases revenue by
              $500K/year, charging $50K for the project is easy to justify
              regardless of hours spent.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Tips for Increasing Your Web Development Rate
          </h2>
          <ul className="space-y-2 text-gray-600">
            <li>
              <strong>Specialize</strong> — &quot;React developer for fintech
              startups&quot; commands higher rates than &quot;web developer&quot;
            </li>
            <li>
              <strong>Build a portfolio of results</strong> — Show performance
              metrics, conversion improvements, not just screenshots
            </li>
            <li>
              <strong>Learn adjacent skills</strong> — DevOps, AI integration,
              and system architecture all justify premium rates
            </li>
            <li>
              <strong>Target larger clients</strong> — Enterprise budgets are
              10-50x larger than small business budgets
            </li>
            <li>
              <strong>Raise rates for new clients</strong> — Keep existing rates
              stable, test higher rates with every new prospect
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
            <p className="text-sm text-gray-500">Calculate your minimum hourly rate based on expenses</p>
          </Link>
          <Link href="/hourly-to-salary" className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-violet-300 transition">
            <p className="font-medium text-violet-600">Hourly to Salary Converter</p>
            <p className="text-sm text-gray-500">See your rate as a salary equivalent</p>
          </Link>
          <Link href="/project-pricing" className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-violet-300 transition">
            <p className="font-medium text-violet-600">Project Pricing Calculator</p>
            <p className="text-sm text-gray-500">Convert hourly rates to project quotes</p>
          </Link>
          <Link href="/graphic-designer" className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-violet-300 transition">
            <p className="font-medium text-violet-600">Graphic Designer Rates</p>
            <p className="text-sm text-gray-500">Compare rates across creative fields</p>
          </Link>
        </div>
      </div>

      {/* FAQ */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">How much do freelance web developers charge per hour?</h3>
            <p className="text-gray-600">US-based freelance web developers charge $50-$200/hr depending on experience and specialization. Junior developers start at $35-$75/hr, mid-level at $65-$135/hr, and senior developers at $100-$200+/hr.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Should I charge more for React or WordPress development?</h3>
            <p className="text-gray-600">React and modern JavaScript framework developers typically charge 10-25% more than WordPress developers, reflecting higher technical complexity and market demand. However, specialized WordPress developers (WooCommerce, enterprise multisite) can command competitive rates.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">How much should I charge for a website as a freelancer?</h3>
            <p className="text-gray-600">A simple business website (5-10 pages) typically costs $4,000-$12,000. Landing pages range from $800-$3,000. E-commerce sites run $8,000-$30,000. Custom web applications start at $20,000 and can exceed $100,000 for complex projects.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Do full-stack developers charge more than frontend or backend specialists?</h3>
            <p className="text-gray-600">Full-stack developers typically charge 10-15% more per hour than pure frontend or backend specialists because they offer broader project coverage. However, deep specialists in high-demand areas (AI/ML, DevOps) often command the highest rates.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">How do I price my first freelance web development project?</h3>
            <p className="text-gray-600">Estimate the hours realistically (then add 30-50% buffer for unknowns), multiply by your target hourly rate, and present a project price. For your first few projects, hourly billing may be safer until you can estimate accurately.</p>
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
                "name": "How much do freelance web developers charge per hour?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "US-based freelance web developers charge $50-$200/hr depending on experience and specialization. Junior developers start at $35-$75/hr, mid-level at $65-$135/hr, and senior developers at $100-$200+/hr."
                }
              },
              {
                "@type": "Question",
                "name": "Should I charge more for React or WordPress development?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "React and modern JavaScript framework developers typically charge 10-25% more than WordPress developers, reflecting higher technical complexity and market demand. However, specialized WordPress developers (WooCommerce, enterprise multisite) can command competitive rates."
                }
              },
              {
                "@type": "Question",
                "name": "How much should I charge for a website as a freelancer?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A simple business website (5-10 pages) typically costs $4,000-$12,000. Landing pages range from $800-$3,000. E-commerce sites run $8,000-$30,000. Custom web applications start at $20,000 and can exceed $100,000 for complex projects."
                }
              },
              {
                "@type": "Question",
                "name": "Do full-stack developers charge more than frontend or backend specialists?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Full-stack developers typically charge 10-15% more per hour than pure frontend or backend specialists because they offer broader project coverage. However, deep specialists in high-demand areas (AI/ML, DevOps) often command the highest rates."
                }
              },
              {
                "@type": "Question",
                "name": "How do I price my first freelance web development project?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Estimate the hours realistically (then add 30-50% buffer for unknowns), multiply by your target hourly rate, and present a project price. For your first few projects, hourly billing may be safer until you can estimate accurately."
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
              { "@type": "ListItem", "position": 2, "name": "Web Developer Rates", "item": "https://freelancerates.net/web-developer" }
            ]
          })
        }}
      />
    </div>
    </>
  );
}
