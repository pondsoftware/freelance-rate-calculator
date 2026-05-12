import { Metadata } from "next";
import SocialMediaManagerCalculator from "@/components/SocialMediaManagerCalculator";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Social Media Manager Rate Calculator — Hourly & Monthly Retainer Pricing",
  description:
    "Calculate freelance social media manager rates by service level, experience, and platform count. Compare hourly and monthly retainer pricing for content creation, strategy, and paid ads.",
  alternates: {
    canonical: "/social-media-manager",
  },
  openGraph: {
    title: "Social Media Manager Rate Calculator",
    description:
      "Calculate social media manager rates — hourly, monthly retainer, by platform count, service level, and experience.",
    type: "website",
    url: "https://freelancerates.net/social-media-manager",
    siteName: "Freelance Rate Calculator",
  },
};

const webAppJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Social Media Manager Rate Calculator",
  description: "Calculate freelance social media manager rates by service level, experience, and platform count.",
  url: "https://freelancerates.net/social-media-manager",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Any",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

export default function SocialMediaManagerPage() {
  return (
    <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppJsonLd) }} />
    <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Social Media Manager Rate Calculator
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl">
          Price social media management work — from basic posting to multi-platform
          content production, strategy, and paid ads. Includes hourly and monthly
          retainer benchmarks by service level, experience, and platform count.
        </p>
      </div>

      <SocialMediaManagerCalculator />

      <div className="mt-12 space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            How to Set Your Social Media Management Rates
          </h2>
          <p className="text-gray-600 mb-4">
            Social media work is one of the easiest freelance services to
            underprice — clients see &quot;posting on Instagram&quot; and assume
            it&apos;s casual labor. In reality, a full-service social media
            retainer involves strategy, content production, community management,
            and analytics. Here&apos;s how to price it correctly:
          </p>
          <ul className="space-y-2 text-gray-600">
            <li>
              <strong>Sell retainers, not hours</strong> — Clients don&apos;t
              care if you spent 12 or 22 hours this month. They care about
              outputs (posts, engagement, follower growth). Monthly retainers
              with clear deliverables outperform hourly billing every time.
            </li>
            <li>
              <strong>Charge per platform</strong> — Each additional platform
              should add 20-30% to your retainer. Cross-posting isn&apos;t free
              — every platform has different content norms, dimensions, and
              audience behaviors.
            </li>
            <li>
              <strong>Separate strategy from execution</strong> — Strategy
              consulting bills at $100-$300/hr. Execution (posting, engagement)
              bills at $25-$100/hr. Don&apos;t bundle them at the lower rate.
            </li>
            <li>
              <strong>Paid ads = different pricing model</strong> — Manage paid
              social campaigns as a percentage of ad spend (10-20%) plus a
              minimum monthly fee. Hourly billing on ads work caps your income
              and misaligns incentives.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Service Levels and Typical Monthly Retainers
          </h2>
          <div className="text-gray-600 space-y-3">
            <p>
              <strong>Basic management ($500-$2,000/mo)</strong> — Posting,
              scheduling, light community engagement on 1-2 platforms. Usually
              3-5 posts/week with client-provided content.
            </p>
            <p>
              <strong>Content creation + management ($1,500-$5,000/mo)</strong>
              {" "}— Original graphics, captions, light video, scheduling, and
              community management on 2-3 platforms. The bread-and-butter
              freelance SMM retainer.
            </p>
            <p>
              <strong>Full-service ($3,000-$9,000/mo)</strong> — Multi-platform
              with short-form video production, strategy input, and detailed
              monthly reporting. Usually 3+ platforms; often involves a small
              team of contractors.
            </p>
            <p>
              <strong>Strategy / consulting ($3,000-$12,000/mo)</strong> —
              Brand voice development, audience research, campaign planning,
              analytics. Execution stays with the client&apos;s team or another
              vendor.
            </p>
            <p>
              <strong>Paid social ads ($1,500-$8,000/mo + % of spend)</strong> —
              Ad creative, audience targeting, campaign management. Common
              structure: minimum monthly fee + 10-20% of managed ad spend.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            How to Move from $1,500 to $5,000+/mo Retainers
          </h2>
          <ul className="space-y-2 text-gray-600">
            <li>
              <strong>Niche down by industry</strong> — &quot;SMM for SaaS
              startups&quot; or &quot;SMM for restaurants&quot; commands a
              premium over generalist SMM. Industry fluency reduces onboarding
              friction and improves results.
            </li>
            <li>
              <strong>Add short-form video production</strong> — Reels, TikToks,
              and Shorts are where attention is. SMMs who can produce native
              video earn 50-100% more than those limited to graphics.
            </li>
            <li>
              <strong>Build a process, not a service</strong> — Document your
              content workflow (research, briefs, production, review, posting,
              reporting). Productized retainers scale; ad-hoc work doesn&apos;t.
            </li>
            <li>
              <strong>Report on business outcomes</strong> — Track leads,
              website traffic, and revenue attribution, not just impressions and
              follower count. Outcome-anchored retainers stick longer and renew
              at higher rates.
            </li>
            <li>
              <strong>Layer in ad management</strong> — Existing organic clients
              are the easiest path into paid ads. Adding ad management can
              double a retainer&apos;s value.
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
            <p className="text-sm text-gray-500">Per-word, project, and hourly copywriting rates</p>
          </Link>
          <Link href="/video-editor" className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-violet-300 transition">
            <p className="font-medium text-violet-600">Video Editor Rates</p>
            <p className="text-sm text-gray-500">Per-minute, per-project, and hourly editing rates</p>
          </Link>
          <Link href="/graphic-designer" className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-violet-300 transition">
            <p className="font-medium text-violet-600">Graphic Designer Rates</p>
            <p className="text-sm text-gray-500">Brand, UI/UX, and print design rates</p>
          </Link>
        </div>
      </div>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">How much does a freelance social media manager charge per month?</h3>
            <p className="text-gray-600">Freelance social media managers typically charge $500-$9,000/month depending on service level and platforms. Basic posting on 1-2 platforms runs $500-$2,000/mo, content creation packages $1,500-$5,000/mo, and full-service multi-platform with video production $3,000-$9,000/mo. Strategy-only consulting starts at $3,000/mo.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Should I charge hourly or monthly for social media management?</h3>
            <p className="text-gray-600">Monthly retainers are strongly preferred for ongoing social media work. They give clients predictable costs and you predictable income, and they reward efficiency. Hourly billing works for short consulting engagements, audits, and one-off projects but caps your income on ongoing work where you naturally get faster month over month.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">How should I price paid social ads management?</h3>
            <p className="text-gray-600">The industry standard is a percentage of ad spend (10-20%) with a monthly minimum fee. For example: 15% of spend with a $1,500/mo minimum. Below $10K/mo in ad spend, charge a flat retainer ($1,500-$3,000) instead — percentage-of-spend becomes unprofitable at low ad budgets.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">How much more should I charge for additional platforms?</h3>
            <p className="text-gray-600">Add 20-30% to your base retainer for each additional platform. Cross-posting isn&apos;t free — Instagram, TikTok, LinkedIn, and X each have distinct content norms, dimensions, and audience expectations. Producing platform-native content takes real time even when the underlying message is the same.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">What is a realistic income for a freelance SMM?</h3>
            <p className="text-gray-600">A full-time freelance social media manager with 4-6 client retainers typically earns $5K-$12K/month. The top of the range requires either premium positioning (niche expertise, full-service production) or scaling via a small team. Solo SMMs without team support usually cap around $10K/month before burnout.</p>
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
                "name": "How much does a freelance social media manager charge per month?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Freelance social media managers typically charge $500-$9,000/month depending on service level and platforms. Basic posting on 1-2 platforms runs $500-$2,000/mo, content creation packages $1,500-$5,000/mo, and full-service multi-platform with video production $3,000-$9,000/mo. Strategy-only consulting starts at $3,000/mo."
                }
              },
              {
                "@type": "Question",
                "name": "Should I charge hourly or monthly for social media management?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Monthly retainers are strongly preferred for ongoing social media work. They give clients predictable costs and you predictable income, and they reward efficiency. Hourly billing works for short consulting engagements, audits, and one-off projects but caps your income on ongoing work where you naturally get faster month over month."
                }
              },
              {
                "@type": "Question",
                "name": "How should I price paid social ads management?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The industry standard is a percentage of ad spend (10-20%) with a monthly minimum fee. For example: 15% of spend with a $1,500/mo minimum. Below $10K/mo in ad spend, charge a flat retainer ($1,500-$3,000) instead — percentage-of-spend becomes unprofitable at low ad budgets."
                }
              },
              {
                "@type": "Question",
                "name": "How much more should I charge for additional platforms?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Add 20-30% to your base retainer for each additional platform. Cross-posting isn't free — Instagram, TikTok, LinkedIn, and X each have distinct content norms, dimensions, and audience expectations. Producing platform-native content takes real time even when the underlying message is the same."
                }
              },
              {
                "@type": "Question",
                "name": "What is a realistic income for a freelance SMM?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A full-time freelance social media manager with 4-6 client retainers typically earns $5K-$12K/month. The top of the range requires either premium positioning (niche expertise, full-service production) or scaling via a small team. Solo SMMs without team support usually cap around $10K/month before burnout."
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
              { "@type": "ListItem", "position": 2, "name": "Social Media Manager Rates", "item": "https://freelancerates.net/social-media-manager" }
            ]
          })
        }}
      />
    </div>
    </>
  );
}
