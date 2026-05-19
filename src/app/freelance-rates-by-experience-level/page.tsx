import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Freelance Rates by Experience Level in 2026 — Junior, Mid, Senior",
  description:
    "Freelance rate ranges by experience level across web dev, design, copywriting, video, SMM, SEO, and VA roles. What separates each tier and how long the jump takes.",
  alternates: {
    canonical: "/freelance-rates-by-experience-level",
  },
  openGraph: {
    title: "Freelance Rates by Experience Level — 2026 Guide",
    description:
      "Rate ranges for junior, mid-career, and senior freelancers across every major role, plus the markers that separate one tier from the next.",
    type: "article",
    url: "https://freelancerates.net/freelance-rates-by-experience-level",
    siteName: "Freelance Rate Calculator",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Freelance Rates by Experience Level in 2026 — Junior, Mid, Senior",
  description:
    "Freelance rate ranges by experience level across every major role, plus the portfolio and skill markers that separate one tier from the next.",
  url: "https://freelancerates.net/freelance-rates-by-experience-level",
  mainEntityOfPage: "https://freelancerates.net/freelance-rates-by-experience-level",
  author: { "@type": "Organization", name: "Freelance Rate Calculator" },
  publisher: { "@type": "Organization", name: "Freelance Rate Calculator" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What counts as a junior freelancer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Less than two years of paid freelance work in the field, a portfolio of 5-15 deliverables, no repeat clients yet or just one to two. Skills are reactive — you can execute well-defined briefs but don't yet shape scope. Most juniors charge $25-$60/hour depending on role.",
      },
    },
    {
      "@type": "Question",
      name: "When do I move from junior to mid-career rates?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The jump happens when you can run a project end-to-end without supervision and have 2-3 repeat clients sending you steady work. That usually takes 2-4 years on top of any prior employed experience. Rates typically double in this transition — $40 to $80, or $60 to $120, depending on the role.",
      },
    },
    {
      "@type": "Question",
      name: "What makes a senior freelancer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Five-plus years, a defined specialty, measurable past results (traffic, conversions, revenue, awards), and clients who hire you for outcomes rather than hours. Senior freelancers price strategy and judgment, not labor. Rates start around 2-3x mid-career and have no real ceiling — specialized seniors clear $300-$500/hour or $20k+ per project.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to go from junior to senior?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Six to ten years of full-time freelance work is typical, though prior employed experience compresses that. The bottleneck is rarely skill — it's positioning. Most freelancers stall in the middle tier because their portfolio reads as generalist; specializing tightens the path significantly.",
      },
    },
    {
      "@type": "Question",
      name: "Can I skip the junior tier with prior employed experience?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Often yes. A senior in-house designer going freelance usually starts at mid-career rates, not junior. Your portfolio carries over. What you do lack is the freelance-specific layer — quoting, scope control, client comms, taxes — and those take a few cycles to develop, regardless of craft skill.",
      },
    },
  ],
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://freelancerates.net" },
    {
      "@type": "ListItem",
      position: 2,
      name: "Freelance Rates by Experience Level",
      item: "https://freelancerates.net/freelance-rates-by-experience-level",
    },
  ],
};

export default function FreelanceRatesByExperienceLevelPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Freelance Rates by Experience Level
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Rate ranges for junior, mid-career, and senior freelancers across
            every major role — plus the portfolio, repeat-client, and skill
            markers that actually move you between tiers.
          </p>
        </div>

        <div className="space-y-10">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              The Three-Tier Rate Map
            </h2>
            <p className="text-gray-600 mb-4">
              Across roles, the spread between junior and senior is usually
              4-8x. Mid-career sits roughly in the middle. Use these as quoting
              benchmarks, not rules.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left border border-gray-200 rounded-lg">
                <thead className="bg-gray-50 text-gray-700">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Role</th>
                    <th className="px-4 py-3 font-semibold">Junior</th>
                    <th className="px-4 py-3 font-semibold">Mid-Career</th>
                    <th className="px-4 py-3 font-semibold">Senior / Specialist</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 text-gray-700">
                  <tr>
                    <td className="px-4 py-3 font-medium">Web developer</td>
                    <td className="px-4 py-3">$40 – $75</td>
                    <td className="px-4 py-3">$85 – $150</td>
                    <td className="px-4 py-3">$175 – $350+</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Graphic designer</td>
                    <td className="px-4 py-3">$30 – $55</td>
                    <td className="px-4 py-3">$65 – $120</td>
                    <td className="px-4 py-3">$150 – $300+</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Copywriter</td>
                    <td className="px-4 py-3">$35 – $65</td>
                    <td className="px-4 py-3">$75 – $150</td>
                    <td className="px-4 py-3">$200 – $500+</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">SEO consultant</td>
                    <td className="px-4 py-3">$50 – $85</td>
                    <td className="px-4 py-3">$100 – $175</td>
                    <td className="px-4 py-3">$200 – $400+</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Video editor</td>
                    <td className="px-4 py-3">$30 – $60</td>
                    <td className="px-4 py-3">$70 – $125</td>
                    <td className="px-4 py-3">$150 – $300+</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Social media manager</td>
                    <td className="px-4 py-3">$25 – $50</td>
                    <td className="px-4 py-3">$60 – $110</td>
                    <td className="px-4 py-3">$125 – $250+</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Virtual assistant</td>
                    <td className="px-4 py-3">$15 – $30</td>
                    <td className="px-4 py-3">$35 – $60</td>
                    <td className="px-4 py-3">$75 – $150+</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              US-market hourly rates in 2026. Specialist seniors (regulated
              industries, named credentials, conversion track records) frequently
              clear the high end.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              Junior — The First 24 Months
            </h2>
            <div className="space-y-3 text-gray-600">
              <p>
                <strong>What defines this tier.</strong> Less than two years of
                paid freelance work in the field. A portfolio of 5-15
                deliverables, mostly from one-off projects rather than repeat
                clients. Comfortable executing a well-defined brief, but scope
                changes and ambiguous projects still feel risky.
              </p>
              <p>
                <strong>How clients see you.</strong> Affordable, eager, capable
                of clearly-bounded work. Most clients at this tier are
                price-sensitive and expect to manage scope themselves.
              </p>
              <p>
                <strong>The trap.</strong> Content mills and bid platforms
                ($5-$20/hour). These train you to compete on price, not value,
                and the portfolio they produce doesn&apos;t help you climb out.
                Almost any client is better than one of these.
              </p>
              <p>
                <strong>What moves you to the next tier.</strong> Two or three
                repeat clients sending steady work, the ability to run a
                project end-to-end without supervision, and one defined niche
                you can credibly claim.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              Mid-Career — The Plateau
            </h2>
            <div className="space-y-3 text-gray-600">
              <p>
                <strong>What defines this tier.</strong> Two to five years of
                full-time freelancing. A book of repeat clients. A portfolio
                weighted toward your niche. You can write a proposal, shape
                scope, manage a multi-week project, and turn down work that
                doesn&apos;t fit.
              </p>
              <p>
                <strong>How clients see you.</strong> Reliable, in demand,
                worth a premium over juniors. Most clients here are buying a
                known outcome — they&apos;ve hired freelancers before and
                expect competence by default.
              </p>
              <p>
                <strong>The trap.</strong> Demand is steady, rates feel fine,
                and there&apos;s no forcing function to push higher. Most
                freelancers stall here for years. The fix is positioning: a
                generalist mid-career profile reads junior to senior buyers,
                while a specialist mid-career profile often reads senior.
              </p>
              <p>
                <strong>What moves you to the next tier.</strong> Documented
                results (traffic, revenue, conversions, awards), a tightened
                specialty, and pricing that signals senior — even if your
                experience hasn&apos;t fully caught up to the rate.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              Senior / Specialist — Pricing Outcomes
            </h2>
            <div className="space-y-3 text-gray-600">
              <p>
                <strong>What defines this tier.</strong> Five-plus years, a
                defined specialty, measurable results from past work, and
                clients who hire you for judgment rather than throughput.
                Senior freelancers usually have a small client roster (2-6 at
                any time), turn down more work than they take, and increasingly
                blur into consulting.
              </p>
              <p>
                <strong>How clients see you.</strong> Expensive, in demand,
                hard to get on the calendar. The buying motion is closer to
                hiring a fractional executive than booking a vendor.
              </p>
              <p>
                <strong>Pricing model shifts.</strong> Hourly rates exist but
                aren&apos;t how senior freelancers usually quote. Common
                structures: project pricing tied to outcomes, monthly retainers
                for ongoing strategic work, equity or revenue share for early-
                stage clients. Effective hourly rates of $300-$500+ are normal.
              </p>
              <p>
                <strong>What separates senior from specialist.</strong> Niche
                depth and named credentials. A senior generalist designer
                might charge $175/hour; a designer who&apos;s shipped three
                Y-Combinator launches commands $300+ for the same calendar
                hour.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              Why the Tiers Aren&apos;t Time-Based
            </h2>
            <p className="text-gray-600 mb-3">
              You don&apos;t age into the next tier — you position into it.
              A four-year freelancer with a single repeat client and a
              generalist portfolio is junior, regardless of total years. A
              two-year freelancer who specialized hard, shipped measurable
              wins, and runs end-to-end can be charging mid-career rates by
              month 18.
            </p>
            <p className="text-gray-600">
              The fast path through the tiers, in order of impact: pick a
              niche, document outcomes, raise rates on new clients first, kill
              the bottom 20% of the book annually.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              Calibrate Against Your Real Floor
            </h2>
            <p className="text-gray-600 mb-3">
              Before targeting a tier, calculate your minimum sustainable rate
              — the number below which freelancing pays worse than employment.
              That number isn&apos;t your goal; it&apos;s the line you should
              never quote under, even as a junior taking a hard-to-pass client.
            </p>
            <p className="text-gray-600">
              Run your numbers through the{" "}
              <Link href="/" className="text-violet-700 hover:underline">
                Freelance Rate Calculator
              </Link>{" "}
              to find that floor. Then position toward whichever tier the
              market accepts — and read{" "}
              <Link href="/how-to-raise-freelance-rates" className="text-violet-700 hover:underline">
                How to Raise Freelance Rates
              </Link>{" "}
              for the actual playbook.
            </p>
          </section>
        </div>

        {/* Internal Links */}
        <div className="mt-12 bg-gray-50 rounded-xl border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Related Tools & Articles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/" className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-violet-300 transition">
              <p className="font-medium text-violet-600">Freelance Rate Calculator</p>
              <p className="text-sm text-gray-500">Find your true minimum hourly rate</p>
            </Link>
            <Link href="/how-to-raise-freelance-rates" className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-violet-300 transition">
              <p className="font-medium text-violet-600">How to Raise Freelance Rates</p>
              <p className="text-sm text-gray-500">When to raise, how much, what to say</p>
            </Link>
            <Link href="/web-developer" className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-violet-300 transition">
              <p className="font-medium text-violet-600">Web Developer Rates</p>
              <p className="text-sm text-gray-500">Rates by stack and project type</p>
            </Link>
            <Link href="/freelance-writing-rates-per-word" className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-violet-300 transition">
              <p className="font-medium text-violet-600">Writing Rates Per Word</p>
              <p className="text-sm text-gray-500">Per-word pricing by niche & length</p>
            </Link>
          </div>
        </div>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What counts as a junior freelancer?</h3>
              <p className="text-gray-600">Less than two years of paid freelance work in the field, a portfolio of 5-15 deliverables, no repeat clients yet or just one to two. Skills are reactive — you can execute well-defined briefs but don&apos;t yet shape scope. Most juniors charge $25-$60/hour depending on role.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">When do I move from junior to mid-career rates?</h3>
              <p className="text-gray-600">The jump happens when you can run a project end-to-end without supervision and have 2-3 repeat clients sending you steady work. That usually takes 2-4 years on top of any prior employed experience. Rates typically double in this transition — $40 to $80, or $60 to $120, depending on the role.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What makes a senior freelancer?</h3>
              <p className="text-gray-600">Five-plus years, a defined specialty, measurable past results (traffic, conversions, revenue, awards), and clients who hire you for outcomes rather than hours. Senior freelancers price strategy and judgment, not labor. Rates start around 2-3x mid-career and have no real ceiling — specialized seniors clear $300-$500/hour or $20k+ per project.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How long does it take to go from junior to senior?</h3>
              <p className="text-gray-600">Six to ten years of full-time freelance work is typical, though prior employed experience compresses that. The bottleneck is rarely skill — it&apos;s positioning. Most freelancers stall in the middle tier because their portfolio reads as generalist; specializing tightens the path significantly.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I skip the junior tier with prior employed experience?</h3>
              <p className="text-gray-600">Often yes. A senior in-house designer going freelance usually starts at mid-career rates, not junior. Your portfolio carries over. What you do lack is the freelance-specific layer — quoting, scope control, client comms, taxes — and those take a few cycles to develop, regardless of craft skill.</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
