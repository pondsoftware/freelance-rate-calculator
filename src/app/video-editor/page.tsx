import { Metadata } from "next";
import VideoEditorCalculator from "@/components/VideoEditorCalculator";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Freelance Video Editor Rate Calculator — Per Minute, Per Project & Hourly",
  description:
    "Calculate freelance video editor rates by project type, experience, and length. Compare hourly, per-finished-minute, and per-project pricing for YouTube, shorts, podcasts, corporate, weddings, and ads.",
  alternates: {
    canonical: "/video-editor",
  },
  openGraph: {
    title: "Freelance Video Editor Rate Calculator",
    description:
      "Calculate video editor rates — hourly, per finished minute, and per project for YouTube, shorts, podcasts, corporate, and more.",
    type: "website",
    url: "https://freelancerates.net/video-editor",
    siteName: "Freelance Rate Calculator",
  },
};

const webAppJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Video Editor Rate Calculator",
  description: "Calculate freelance video editor rates by project type, experience, and length.",
  url: "https://freelancerates.net/video-editor",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Any",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

export default function VideoEditorPage() {
  return (
    <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppJsonLd) }} />
    <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Freelance Video Editor Rate Calculator
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl">
          Price video editing work — from long-form YouTube to short-form
          social, podcasts, corporate explainers, weddings, and ads. Includes
          hourly, per-finished-minute, and per-project benchmarks by experience.
        </p>
      </div>

      <VideoEditorCalculator />

      <div className="mt-12 space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            How to Set Your Video Editing Rates
          </h2>
          <p className="text-gray-600 mb-4">
            Video editing is one of the few freelance disciplines where hourly
            billing actively works against you — clients have no idea how long
            a video should take, and you get punished for being efficient.
            Most successful editors charge per finished minute or per project.
            Here&apos;s how to think about pricing:
          </p>
          <ul className="space-y-2 text-gray-600">
            <li>
              <strong>Per finished minute is the industry default</strong> —
              For predictable work (YouTube creators, podcasts), bill per
              finished minute of video. A 12-minute YouTube video at $150/min
              = $1,800. Clients understand it, and your speed is rewarded.
            </li>
            <li>
              <strong>Editing ratios vary 10x by project type</strong> — A
              60-second corporate ad can take 20+ hours; a 60-minute podcast
              can take 30 minutes. Per-hour pricing collapses all that nuance.
              Price by project type instead.
            </li>
            <li>
              <strong>Always cap revisions in the contract</strong> — &quot;2
              rounds of revisions included, additional rounds at $X/round.&quot;
              Without revision limits, scope creep will destroy your margin.
            </li>
            <li>
              <strong>Charge separately for extras</strong> — Color grading,
              sound design, motion graphics, captions, and music licensing
              are line items, not assumed inclusions. Build them into a
              tiered package (basic / standard / premium).
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Video Editor Rates by Project Type
          </h2>
          <div className="text-gray-600 space-y-3">
            <p>
              <strong>YouTube long-form ($75-$300/finished minute)</strong> —
              The most common freelance editing work. Most creator-economy
              editors bill per finished minute. Typical: 3-5 editing hours per
              finished minute. A 12-minute video at $150/min = $1,800.
            </p>
            <p>
              <strong>Shorts / Reels / TikTok ($100-$450/finished minute)</strong>
              {" "}— Short-form pays more per minute because the editing density
              is much higher (cuts every 1-2 seconds, captions, hooks). Pack
              pricing is common: $500-$2,500 for a batch of 10.
            </p>
            <p>
              <strong>Podcast editing ($15-$65/finished minute)</strong> — Lower
              per-minute rates because the editing is simpler (cuts, levels,
              minor cleanup). A 60-minute podcast usually bills $300-$1,500.
              Video podcasts add 30-50% to audio-only rates.
            </p>
            <p>
              <strong>Corporate / B2B ($250-$1,200/finished minute)</strong> —
              Higher production value, more stakeholders, more revisions. A
              3-minute corporate explainer commonly runs $1,500-$6,000.
            </p>
            <p>
              <strong>Wedding / event ($1,200-$4,500/project)</strong> —
              Usually flat-rate per wedding rather than per finished minute.
              Includes 20-40 hours of total editing time for a 4-8 minute
              highlight film plus extras (full ceremony, toasts).
            </p>
            <p>
              <strong>Ads / commercials ($500-$5,000+/finished minute)</strong>
              {" "}— The highest-paid editing category. Production value is
              extreme; a 30-second ad can take 10-30 hours of editing time.
              Often delivered with multiple cuts (15s, 30s, vertical).
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            How to Move from $50/hr to $150+/finished-minute
          </h2>
          <ul className="space-y-2 text-gray-600">
            <li>
              <strong>Stop billing hourly</strong> — Switch to per-finished-minute
              or per-project. The faster you get, the more your effective rate
              climbs.
            </li>
            <li>
              <strong>Specialize in one niche</strong> — &quot;YouTube editor
              for finance creators&quot; or &quot;short-form editor for SaaS
              brands&quot; commands 2-3x the rate of a generalist.
            </li>
            <li>
              <strong>Build a productized service</strong> — &quot;1 long-form
              + 5 shorts per week, $4,000/mo retainer&quot; outperforms
              one-off project pricing for income predictability.
            </li>
            <li>
              <strong>Add motion graphics</strong> — Editors who can produce
              their own lower-thirds, animated text, and basic motion graphics
              charge 50-100% more than pure-edit-only editors.
            </li>
            <li>
              <strong>Work for established channels</strong> — A channel doing
              500K+ views per video pays 3-5x what a small creator pays for
              the same edit, because the value is real. Pitch up.
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
          <Link href="/graphic-designer" className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-violet-300 transition">
            <p className="font-medium text-violet-600">Graphic Designer Rates</p>
            <p className="text-sm text-gray-500">Brand, UI/UX, and print design rates</p>
          </Link>
          <Link href="/social-media-manager" className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-violet-300 transition">
            <p className="font-medium text-violet-600">Social Media Manager Rates</p>
            <p className="text-sm text-gray-500">Content and strategy retainer rates</p>
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
            <h3 className="text-lg font-semibold text-gray-900 mb-2">How much do freelance video editors charge per hour?</h3>
            <p className="text-gray-600">Freelance video editors typically charge $30-$150/hour depending on project type and experience. Podcast and basic YouTube editing runs $30-$75/hr, mid-level commercial and corporate work $60-$125/hr, and senior ad/commercial editors $150+/hr. Most experienced editors avoid hourly pricing in favor of per-finished-minute or per-project rates.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">How much should I charge per finished minute?</h3>
            <p className="text-gray-600">YouTube long-form runs $75-$300 per finished minute, short-form $100-$450/min, podcasts $15-$65/min, corporate $250-$1,200/min, and ads $500-$5,000+/min. The wide ranges reflect production value and editing density — a 30-second ad has 50x more editing decisions per minute than a podcast.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">How much does it cost to edit a 10-minute YouTube video?</h3>
            <p className="text-gray-600">A 10-minute YouTube video typically costs $400-$2,000 from a mid-level freelance editor, depending on editing density (cuts per minute), motion graphics, and revision rounds. Simple talking-head content with light B-roll runs $400-$800. Heavy-edit content (multiple speakers, animated overlays, sound design) runs $1,200-$2,000+.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Should I charge by the hour or by the project?</h3>
            <p className="text-gray-600">Project-based or per-finished-minute pricing is almost always better than hourly. Hourly billing punishes you for getting fast and gives clients pricing anxiety (&quot;how long will this take?&quot;). Per-finished-minute is transparent, scalable, and the industry default for creator economy work.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">How much do YouTube creators pay their editors?</h3>
            <p className="text-gray-600">Small creators (10K-100K subs) typically pay $200-$800 per long-form video. Mid-tier creators (100K-1M subs) pay $800-$3,000 per video, often as a monthly retainer covering multiple videos. Top-tier creators (1M+ subs) pay $3,000-$10,000+ per video, often hiring full-time editors at $80K-$150K/year.</p>
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
                "name": "How much do freelance video editors charge per hour?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Freelance video editors typically charge $30-$150/hour depending on project type and experience. Podcast and basic YouTube editing runs $30-$75/hr, mid-level commercial and corporate work $60-$125/hr, and senior ad/commercial editors $150+/hr. Most experienced editors avoid hourly pricing in favor of per-finished-minute or per-project rates."
                }
              },
              {
                "@type": "Question",
                "name": "How much should I charge per finished minute?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "YouTube long-form runs $75-$300 per finished minute, short-form $100-$450/min, podcasts $15-$65/min, corporate $250-$1,200/min, and ads $500-$5,000+/min. The wide ranges reflect production value and editing density — a 30-second ad has 50x more editing decisions per minute than a podcast."
                }
              },
              {
                "@type": "Question",
                "name": "How much does it cost to edit a 10-minute YouTube video?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A 10-minute YouTube video typically costs $400-$2,000 from a mid-level freelance editor, depending on editing density (cuts per minute), motion graphics, and revision rounds. Simple talking-head content with light B-roll runs $400-$800. Heavy-edit content (multiple speakers, animated overlays, sound design) runs $1,200-$2,000+."
                }
              },
              {
                "@type": "Question",
                "name": "Should I charge by the hour or by the project?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Project-based or per-finished-minute pricing is almost always better than hourly. Hourly billing punishes you for getting fast and gives clients pricing anxiety (how long will this take?). Per-finished-minute is transparent, scalable, and the industry default for creator economy work."
                }
              },
              {
                "@type": "Question",
                "name": "How much do YouTube creators pay their editors?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Small creators (10K-100K subs) typically pay $200-$800 per long-form video. Mid-tier creators (100K-1M subs) pay $800-$3,000 per video, often as a monthly retainer covering multiple videos. Top-tier creators (1M+ subs) pay $3,000-$10,000+ per video, often hiring full-time editors at $80K-$150K/year."
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
              { "@type": "ListItem", "position": 2, "name": "Video Editor Rates", "item": "https://freelancerates.net/video-editor" }
            ]
          })
        }}
      />
    </div>
    </>
  );
}
