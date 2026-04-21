import { Metadata } from "next";
import CopywriterCalculator from "@/components/CopywriterCalculator";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Freelance Copywriter Rate Calculator — Per-Word, Project & Hourly Pricing",
  description:
    "Calculate freelance copywriter and content writer rates. Compare per-word, per-project, and hourly pricing for blog posts, landing pages, emails, and sales copy.",
  alternates: {
    canonical: "/copywriter",
  },
  openGraph: {
    title: "Freelance Copywriter Rate Calculator",
    description:
      "Calculate freelance copywriter rates by content type, pricing model, and experience. Includes per-word rates, project pricing, and hourly benchmarks.",
    type: "website",
    url: "https://freelancerates.net/copywriter",
    siteName: "Freelance Rate Calculator",
  },
};

const webAppJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Copywriter Rate Calculator",
  description: "Calculate freelance copywriter and content writer rates. Compare per-word, per-project, and hourly pricing for blog posts, landing pages, emails, and sales copy.",
  url: "https://freelancerates.net/copywriter",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Any",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

export default function CopywriterPage() {
  return (
    <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppJsonLd) }} />
    <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Freelance Copywriter Rate Calculator
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl">
          Calculate competitive rates for freelance copywriting and content
          writing. Compare per-word, per-project, and hourly pricing across
          different content types — from blog posts to sales pages.
        </p>
      </div>

      <CopywriterCalculator />

      <div className="mt-12 space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            How to Set Your Copywriting Rates
          </h2>
          <p className="text-gray-600 mb-4">
            Copywriting rates vary dramatically based on the type of content,
            your experience, and the value you deliver. Here&apos;s how to position
            your pricing:
          </p>
          <ul className="space-y-2 text-gray-600">
            <li>
              <strong>Content writing vs. copywriting</strong> — Content writing
              (blog posts, articles) typically pays $0.08-$0.40/word. Conversion
              copywriting (sales pages, emails) pays $0.20-$1.50/word because
              it directly drives revenue.
            </li>
            <li>
              <strong>Niche expertise commands premiums</strong> — Writers who
              understand finance, healthcare, SaaS, or legal topics earn 25-50%
              more than generalists because their content requires less
              client-side editing and review.
            </li>
            <li>
              <strong>Speed improves with experience</strong> — A senior
              copywriter may write 800 words/hour while a junior writes 300.
              This means per-word pricing rewards experienced writers who have
              internalized best practices.
            </li>
            <li>
              <strong>Value-based pricing</strong> — If your sales page generates
              $100K in revenue, charging $5,000 is a steal for the client. Always
              try to tie your pricing to business outcomes when possible.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Copywriter Rates by Content Type
          </h2>
          <div className="text-gray-600 space-y-3">
            <p>
              <strong>Blog posts/articles ($0.08-$0.40/word)</strong> — The bread
              and butter of content writing. Higher rates for researched,
              data-driven content vs. listicles. SEO expertise adds value.
            </p>
            <p>
              <strong>Landing pages ($500-$3,000 per page)</strong> — Conversion
              copywriting that requires understanding of user psychology,
              objection handling, and CTA optimization. Price per page, not per word.
            </p>
            <p>
              <strong>Email sequences ($100-$500 per email)</strong> — Welcome
              sequences, nurture campaigns, and sales emails. Pricing per email
              or per sequence. Proven email copywriters charge $500+ per email.
            </p>
            <p>
              <strong>Sales/direct response ($2,000-$15,000+)</strong> — The
              highest-paid writing specialization. Long-form sales pages, VSL
              scripts, and direct mail. Often includes royalty arrangements on
              top of flat fees.
            </p>
            <p>
              <strong>Technical writing ($0.10-$0.60/word)</strong> — Documentation,
              white papers, and case studies. Requires subject-matter expertise
              and clear communication of complex topics.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            How to Move from $0.10/word to $0.50+/word
          </h2>
          <ul className="space-y-2 text-gray-600">
            <li>
              <strong>Pick a niche</strong> — &quot;SaaS copywriter&quot; earns
              3-5x more than &quot;freelance writer&quot;. Deep expertise lets
              you write faster and produce better results.
            </li>
            <li>
              <strong>Show results</strong> — Track conversions, traffic growth,
              and revenue impact. A portfolio of results beats a portfolio of
              writing samples.
            </li>
            <li>
              <strong>Move up the content ladder</strong> — Blog posts pay less
              than landing pages, which pay less than sales pages. Develop
              conversion skills progressively.
            </li>
            <li>
              <strong>Work with bigger clients</strong> — Enterprise companies
              pay 2-5x more than small businesses for the same deliverable.
              Build case studies to access enterprise budgets.
            </li>
            <li>
              <strong>Switch to project pricing</strong> — Per-word pricing
              caps your income. Project pricing lets you charge based on value
              and earn more as you get faster.
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
            <p className="text-sm text-gray-500">Calculate your minimum hourly rate</p>
          </Link>
          <Link href="/hourly-to-salary" className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-violet-300 transition">
            <p className="font-medium text-violet-600">Hourly to Salary Converter</p>
            <p className="text-sm text-gray-500">What your rate equals as a salary</p>
          </Link>
          <Link href="/project-pricing" className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-violet-300 transition">
            <p className="font-medium text-violet-600">Project Pricing Calculator</p>
            <p className="text-sm text-gray-500">Convert hourly to project rates</p>
          </Link>
          <Link href="/graphic-designer" className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-violet-300 transition">
            <p className="font-medium text-violet-600">Graphic Designer Rates</p>
            <p className="text-sm text-gray-500">Compare creative freelance rates</p>
          </Link>
        </div>
      </div>

      {/* FAQ */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">How much do freelance copywriters charge per word?</h3>
            <p className="text-gray-600">Freelance copywriters charge $0.08-$1.50 per word depending on content type and experience. Blog posts average $0.10-$0.30/word, while sales copy and landing pages range from $0.25-$1.00+/word. Specialized niches (medical, legal, finance) command 25-50% premiums.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">How much should I charge for a 1,000-word blog post?</h3>
            <p className="text-gray-600">A 1,000-word blog post typically costs $100-$400 from a mid-level freelance writer. Entry-level writers charge $50-$100, while experienced writers with SEO expertise or niche knowledge charge $300-$800. The price reflects research depth, originality, and optimization requirements.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Is per-word or per-project pricing better for copywriters?</h3>
            <p className="text-gray-600">Per-project pricing is generally better for experienced copywriters because it rewards efficiency and allows value-based pricing. Per-word works well for straightforward content (blog posts, articles) where scope is clear. Avoid per-word for conversion copy — a 200-word email that drives $50K in sales shouldn&apos;t cost $60.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">How much do landing page copywriters charge?</h3>
            <p className="text-gray-600">Landing page copywriters typically charge $500-$3,000 per page. Junior copywriters start at $300-$500, mid-level at $750-$1,500, and conversion specialists with proven track records charge $2,000-$5,000+. Pricing should reflect the potential revenue the page will generate.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">How can I increase my copywriting rates?</h3>
            <p className="text-gray-600">Specialize in a profitable niche (SaaS, finance, health), build a portfolio showing measurable results (conversions, traffic, revenue), move from content writing to conversion copywriting, target larger clients with bigger budgets, and raise rates for every new client while maintaining existing agreements.</p>
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
                "name": "How much do freelance copywriters charge per word?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Freelance copywriters charge $0.08-$1.50 per word depending on content type and experience. Blog posts average $0.10-$0.30/word, while sales copy and landing pages range from $0.25-$1.00+/word. Specialized niches (medical, legal, finance) command 25-50% premiums."
                }
              },
              {
                "@type": "Question",
                "name": "How much should I charge for a 1,000-word blog post?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A 1,000-word blog post typically costs $100-$400 from a mid-level freelance writer. Entry-level writers charge $50-$100, while experienced writers with SEO expertise or niche knowledge charge $300-$800. The price reflects research depth, originality, and optimization requirements."
                }
              },
              {
                "@type": "Question",
                "name": "Is per-word or per-project pricing better for copywriters?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Per-project pricing is generally better for experienced copywriters because it rewards efficiency and allows value-based pricing. Per-word works well for straightforward content (blog posts, articles) where scope is clear. Avoid per-word for conversion copy — a 200-word email that drives $50K in sales shouldn't cost $60."
                }
              },
              {
                "@type": "Question",
                "name": "How much do landing page copywriters charge?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Landing page copywriters typically charge $500-$3,000 per page. Junior copywriters start at $300-$500, mid-level at $750-$1,500, and conversion specialists with proven track records charge $2,000-$5,000+. Pricing should reflect the potential revenue the page will generate."
                }
              },
              {
                "@type": "Question",
                "name": "How can I increase my copywriting rates?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Specialize in a profitable niche (SaaS, finance, health), build a portfolio showing measurable results (conversions, traffic, revenue), move from content writing to conversion copywriting, target larger clients with bigger budgets, and raise rates for every new client while maintaining existing agreements."
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
              { "@type": "ListItem", "position": 2, "name": "Copywriter Rates", "item": "https://freelancerates.net/copywriter" }
            ]
          })
        }}
      />
    </div>
    </>
  );
}
