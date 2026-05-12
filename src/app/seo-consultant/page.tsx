import { Metadata } from "next";
import SEOConsultantCalculator from "@/components/SEOConsultantCalculator";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SEO Consultant Rate Calculator — Hourly, Project & Monthly Retainer Pricing",
  description:
    "Calculate freelance SEO consultant rates by engagement type, experience, and pricing model. Compare hourly, project, and monthly retainer pricing for audits, technical, content, link building, and local SEO.",
  alternates: {
    canonical: "/seo-consultant",
  },
  openGraph: {
    title: "SEO Consultant Rate Calculator",
    description:
      "Calculate SEO consultant rates by engagement type, experience, and pricing model. Audit, technical, content, link building, and full-service benchmarks.",
    type: "website",
    url: "https://freelancerates.net/seo-consultant",
    siteName: "Freelance Rate Calculator",
  },
};

const webAppJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "SEO Consultant Rate Calculator",
  description: "Calculate freelance SEO consultant rates by engagement type, experience, and pricing model.",
  url: "https://freelancerates.net/seo-consultant",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Any",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

export default function SEOConsultantPage() {
  return (
    <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppJsonLd) }} />
    <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          SEO Consultant Rate Calculator
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl">
          Price SEO consulting work — audits, technical SEO, content strategy,
          link building, local SEO, full-service retainers, and pure strategy
          consulting. Includes hourly, per-project, and monthly retainer
          benchmarks by experience.
        </p>
      </div>

      <SEOConsultantCalculator />

      <div className="mt-12 space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            How to Set Your SEO Consulting Rates
          </h2>
          <p className="text-gray-600 mb-4">
            SEO rates have one of the widest spreads in freelance services —
            from $50/hr generalists on Upwork to $500/hr specialist consultants
            at major brands. The spread reflects real differences in expertise,
            results, and risk transfer. Here&apos;s how to price yourself
            correctly:
          </p>
          <ul className="space-y-2 text-gray-600">
            <li>
              <strong>SEO results compound — your pricing should reflect that</strong>{" "}—
              A successful 12-month engagement might drive $500K in incremental
              revenue. Pricing yourself at $5K/month is leaving most of that
              value on the table. Anchor on outcomes, not hours.
            </li>
            <li>
              <strong>Audits are the highest-ROI single product</strong> —
              A $3,500 SEO audit produces a deliverable in 15-25 hours of work.
              That&apos;s an effective $140-$235/hr — and audits often lead to
              follow-on retainer work.
            </li>
            <li>
              <strong>Retainers should be 6-12 month minimums</strong> — SEO
              takes 3-6 months to show results. Anything shorter and you&apos;ll
              get blamed for things you couldn&apos;t have fixed. Lock in long
              engagements or don&apos;t take the work.
            </li>
            <li>
              <strong>Specialize for premium rates</strong> — &quot;SEO consultant
              for SaaS startups&quot; or &quot;Local SEO for medical practices&quot;
              earns 2-3x what a generalist earns. Niche knowledge means faster
              wins and lower client acquisition cost.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            SEO Rates by Engagement Type
          </h2>
          <div className="text-gray-600 space-y-3">
            <p>
              <strong>SEO audit ($1,500-$8,000/project)</strong> — One-time
              comprehensive analysis. Typical deliverable: 30-50 page written
              report plus prioritized roadmap. The most common entry-point
              engagement for new clients.
            </p>
            <p>
              <strong>Technical SEO ($1,500-$7,500/mo or $2,500-$12,000/project)</strong>
              {" "}— Site architecture, crawl optimization, Core Web Vitals,
              schema, log analysis. Often a 1-3 month project, not an ongoing
              retainer.
            </p>
            <p>
              <strong>Content SEO ($2,000-$9,000/mo)</strong> — Keyword
              research, content briefs, on-page optimization, internal linking
              strategy. Usually paired with content writing services or an
              in-house writing team.
            </p>
            <p>
              <strong>Link building / digital PR ($2,000-$12,000/mo)</strong>
              {" "}— Outreach, guest posting, digital PR campaigns. Often billed
              per acquired link ($100-$1,000/link) rather than retainer.
            </p>
            <p>
              <strong>Local SEO ($750-$4,000/mo)</strong> — Google Business
              Profile, local citations, review management, geo-targeted content.
              Lower retainer ranges because client budgets are smaller (single
              location vs national brand).
            </p>
            <p>
              <strong>Full-service retainer ($3,000-$18,000/mo)</strong> —
              End-to-end SEO ownership. Usually 6-12 month commitments with
              clear KPIs. The most lucrative engagement type.
            </p>
            <p>
              <strong>Strategy consulting ($2,500-$10,000/mo or $150-$500/hr)</strong>
              {" "}— Advisory only. No execution. Coaches in-house SEO teams,
              evaluates vendors, sets strategy. The highest hourly rates in SEO.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            How to Move from $75/hr to $300+/hr
          </h2>
          <ul className="space-y-2 text-gray-600">
            <li>
              <strong>Pick a vertical</strong> — &quot;SEO for B2B SaaS&quot;
              or &quot;SEO for ecommerce DTC brands&quot;. Vertical specialists
              charge 2-3x what generalists charge because pattern recognition
              speeds up every engagement.
            </li>
            <li>
              <strong>Publish case studies</strong> — &quot;Took client from
              5K to 80K monthly organic visitors in 9 months.&quot; Documented
              wins justify premium rates better than testimonials.
            </li>
            <li>
              <strong>Productize an audit</strong> — Fixed-price &quot;Technical
              SEO Audit&quot; or &quot;Content Gap Analysis&quot; with a
              defined scope and deliverable. Predictable revenue, easy to sell.
            </li>
            <li>
              <strong>Move into strategy</strong> — The path from $100/hr to
              $300/hr runs through advisory work, not execution. As you build
              authority, sell the brain, not the labor.
            </li>
            <li>
              <strong>Speak at industry events</strong> — Conference talks
              and podcast appearances are the single highest-leverage way to
              raise authority and pricing simultaneously.
            </li>
          </ul>
        </section>
      </div>

      <div className="mt-12 bg-gray-50 rounded-xl border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Related Calculators</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link href="/" className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-violet-300 transition">
            <p className="font-medium text-violet-600">Freelance Rate Calculator</p>
            <p className="text-sm text-gray-500">Calculate your minimum hourly rate</p>
          </Link>
          <Link href="/copywriter" className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-violet-300 transition">
            <p className="font-medium text-violet-600">Copywriter Rates</p>
            <p className="text-sm text-gray-500">SEO content writing rates and benchmarks</p>
          </Link>
          <Link href="/web-developer" className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-violet-300 transition">
            <p className="font-medium text-violet-600">Web Developer Rates</p>
            <p className="text-sm text-gray-500">Technical implementation rates by stack</p>
          </Link>
          <Link href="/project-pricing" className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-violet-300 transition">
            <p className="font-medium text-violet-600">Project Pricing Calculator</p>
            <p className="text-sm text-gray-500">Convert hourly to project rates</p>
          </Link>
        </div>
      </div>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">How much does an SEO consultant charge per hour?</h3>
            <p className="text-gray-600">Freelance SEO consultants typically charge $75-$300/hour, with strategy consultants reaching $500+/hr. Junior consultants run $50-$100/hr, mid-level specialists $125-$200/hr, and senior consultants with documented case studies $250-$500/hr. Most experienced consultants prefer project or retainer pricing over hourly.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">How much does an SEO retainer cost?</h3>
            <p className="text-gray-600">SEO retainers range from $750/mo (local SEO for a single-location business) to $18,000+/mo (full-service for a mid-market brand). Most freelance retainers fall in the $2,000-$7,500/mo range covering content strategy, on-page work, and light link building. Enterprise full-service retainers usually start at $8,000/mo.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">What does an SEO audit cost?</h3>
            <p className="text-gray-600">A comprehensive SEO audit typically costs $1,500-$8,000 depending on site size and depth. A 50-page site audit from a mid-level consultant runs $2,500-$4,000. Enterprise audits for large e-commerce or media sites can run $10,000-$25,000. Avoid &quot;free SEO audits&quot; — they&apos;re sales tools, not real audits.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">How long should an SEO engagement last?</h3>
            <p className="text-gray-600">Retainers should be 6-12 month minimums. SEO takes 3-6 months to show meaningful organic traffic gains in most niches, and 12-18 months for competitive verticals. Anything shorter and you risk being blamed for results that were never achievable in the timeframe. Audits and technical projects can be 1-3 months.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Should I price SEO hourly, per project, or as a retainer?</h3>
            <p className="text-gray-600">Use project pricing for audits and one-off technical fixes, monthly retainers for ongoing content/link/full-service work, and hourly for ad-hoc consulting or advisory calls. Hourly is the worst option for ongoing SEO — it caps your earnings as you get faster and gives clients pricing anxiety. Move to retainers as soon as the relationship is stable.</p>
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
                "name": "How much does an SEO consultant charge per hour?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Freelance SEO consultants typically charge $75-$300/hour, with strategy consultants reaching $500+/hr. Junior consultants run $50-$100/hr, mid-level specialists $125-$200/hr, and senior consultants with documented case studies $250-$500/hr. Most experienced consultants prefer project or retainer pricing over hourly."
                }
              },
              {
                "@type": "Question",
                "name": "How much does an SEO retainer cost?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "SEO retainers range from $750/mo (local SEO for a single-location business) to $18,000+/mo (full-service for a mid-market brand). Most freelance retainers fall in the $2,000-$7,500/mo range covering content strategy, on-page work, and light link building. Enterprise full-service retainers usually start at $8,000/mo."
                }
              },
              {
                "@type": "Question",
                "name": "What does an SEO audit cost?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A comprehensive SEO audit typically costs $1,500-$8,000 depending on site size and depth. A 50-page site audit from a mid-level consultant runs $2,500-$4,000. Enterprise audits for large e-commerce or media sites can run $10,000-$25,000. Avoid free SEO audits — they're sales tools, not real audits."
                }
              },
              {
                "@type": "Question",
                "name": "How long should an SEO engagement last?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Retainers should be 6-12 month minimums. SEO takes 3-6 months to show meaningful organic traffic gains in most niches, and 12-18 months for competitive verticals. Anything shorter and you risk being blamed for results that were never achievable in the timeframe. Audits and technical projects can be 1-3 months."
                }
              },
              {
                "@type": "Question",
                "name": "Should I price SEO hourly, per project, or as a retainer?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Use project pricing for audits and one-off technical fixes, monthly retainers for ongoing content/link/full-service work, and hourly for ad-hoc consulting or advisory calls. Hourly is the worst option for ongoing SEO — it caps your earnings as you get faster and gives clients pricing anxiety. Move to retainers as soon as the relationship is stable."
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
              { "@type": "ListItem", "position": 2, "name": "SEO Consultant Rates", "item": "https://freelancerates.net/seo-consultant" }
            ]
          })
        }}
      />
    </div>
    </>
  );
}
