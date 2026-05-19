import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Raise Your Freelance Rates in 2026 — A Practical Playbook",
  description:
    "When to raise rates, how much, what to say. New-client and existing-client scripts, common objections, and a 90-day plan for a 20-30% increase without losing your book.",
  alternates: {
    canonical: "/how-to-raise-freelance-rates",
  },
  openGraph: {
    title: "How to Raise Your Freelance Rates — Practical Playbook",
    description:
      "When to raise, how much, scripts for new and existing clients, common objections, and a 90-day plan to land a 20-30% rate bump.",
    type: "article",
    url: "https://freelancerates.net/how-to-raise-freelance-rates",
    siteName: "Freelance Rate Calculator",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Raise Your Freelance Rates in 2026 — A Practical Playbook",
  description:
    "When to raise rates, how much, what to say. New- and existing-client scripts, objection handling, and a 90-day plan for a 20-30% increase.",
  url: "https://freelancerates.net/how-to-raise-freelance-rates",
  mainEntityOfPage: "https://freelancerates.net/how-to-raise-freelance-rates",
  author: { "@type": "Organization", name: "Freelance Rate Calculator" },
  publisher: { "@type": "Organization", name: "Freelance Rate Calculator" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How often should freelancers raise rates?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Once a year is the floor. Working freelancers raise rates 10-20% annually for new clients and adjust existing clients on contract renewal or every 12-18 months. If you're booked solid for two months out, you're under-priced — raise sooner.",
      },
    },
    {
      "@type": "Question",
      name: "How much should I raise my rate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For new clients: whatever the market will bear — test a 25-50% jump on the next quote and see if you keep winning. For existing clients: 10-20% per cycle keeps it inside the band of normal cost-of-living adjustments and avoids the sticker-shock conversation.",
      },
    },
    {
      "@type": "Question",
      name: "What do I say when raising rates on an existing client?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Keep it short, give 30-60 days notice, frame it as a scheduled adjustment, and don't apologize. \"Starting [date], my rate for new projects will be $X/hour, up from $Y. Everything in flight stays at the current rate.\" That's the whole message.",
      },
    },
    {
      "@type": "Question",
      name: "When is the best time to raise freelance rates?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "When demand exceeds supply — you have a wait list, you're declining work, or you're booked two months out. Raise for new inquiries first; existing clients follow on contract renewal or 60-day notice. Raising during a slow stretch backfires.",
      },
    },
    {
      "@type": "Question",
      name: "Will I lose clients if I raise rates?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Usually 10-30% of price-sensitive clients leave. That's not a failure mode — it's the math. A 20% rate increase with 20% client attrition leaves your income unchanged and your hours lower, which is the trade you actually want.",
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
      name: "How to Raise Freelance Rates",
      item: "https://freelancerates.net/how-to-raise-freelance-rates",
    },
  ],
};

export default function HowToRaiseFreelanceRatesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            How to Raise Your Freelance Rates
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            The single fastest way to raise freelance income isn&apos;t more
            hours — it&apos;s a higher rate. This is the playbook: when to do
            it, how much, what to say, and what to expect.
          </p>
        </div>

        <div className="space-y-10">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              The Three Signals You&apos;re Under-Priced
            </h2>
            <p className="text-gray-600 mb-4">
              If two of these are true right now, you&apos;re leaving money on
              the table:
            </p>
            <ul className="space-y-2 text-gray-600">
              <li>
                <strong>You&apos;re booked more than six weeks out.</strong>{" "}
                Demand exceeds supply. The market is telling you the price is
                too low.
              </li>
              <li>
                <strong>You&apos;re winning every quote.</strong> A healthy win
                rate is 40-60%. Winning 90%+ means you&apos;re quoting under
                market.
              </li>
              <li>
                <strong>Clients say yes without flinching.</strong> Some
                pushback on price is normal at the right level. Total silence
                on the number means it&apos;s too easy.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              How Much to Raise (And How Often)
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left border border-gray-200 rounded-lg">
                <thead className="bg-gray-50 text-gray-700">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Situation</th>
                    <th className="px-4 py-3 font-semibold">New Clients</th>
                    <th className="px-4 py-3 font-semibold">Existing Clients</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 text-gray-700">
                  <tr>
                    <td className="px-4 py-3 font-medium">Routine annual bump</td>
                    <td className="px-4 py-3">+10-15%</td>
                    <td className="px-4 py-3">+5-10%</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Booked solid, declining work</td>
                    <td className="px-4 py-3">+25-50%</td>
                    <td className="px-4 py-3">+15-25%</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Major skill / portfolio leap</td>
                    <td className="px-4 py-3">+50-100%</td>
                    <td className="px-4 py-3">+20-30%</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">First year freelancing</td>
                    <td className="px-4 py-3">+15-25% every 3-6 months</td>
                    <td className="px-4 py-3">+10% at first renewal</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              New clients absorb bigger jumps because they don&apos;t have a
              prior anchor. Existing clients have one, so move them more
              gradually and more often.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              Scripts That Work
            </h2>
            <div className="space-y-6">
              <div className="bg-violet-50 border border-violet-100 rounded-lg p-5">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Raising on new inquiries (no announcement needed)
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Just quote the new number. No preamble, no apology, no
                  reference to your old rate. &quot;My rate for this scope is
                  $X/hour&quot; or &quot;The project investment is $Y.&quot;
                  Treat it as the normal price.
                </p>
              </div>

              <div className="bg-violet-50 border border-violet-100 rounded-lg p-5">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Existing client, scheduled rate adjustment
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  &quot;Quick note: starting [date 30-60 days out], my rate is
                  moving to $X/hour. Any work already on the calendar through
                  [date] stays at the current rate. Happy to talk through what
                  you have coming up.&quot;
                </p>
                <p className="text-gray-500 text-xs mt-2">
                  Why it works: it&apos;s a statement, not a request. Gives
                  notice. Honors in-flight work. Doesn&apos;t open the door to
                  negotiation on the new number.
                </p>
              </div>

              <div className="bg-violet-50 border border-violet-100 rounded-lg p-5">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Existing client, new scope = new rate
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  &quot;For [new project / next phase], the rate is $X. The
                  scope is different from what we did before, so pricing
                  reflects current rates.&quot;
                </p>
                <p className="text-gray-500 text-xs mt-2">
                  This is the easiest path: don&apos;t raise on existing work,
                  price new work at the new rate. Over a year, the average
                  drifts up naturally.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              Common Objections (And What They Actually Mean)
            </h2>
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-gray-900">
                  &quot;Our budget is tight this quarter.&quot;
                </p>
                <p className="text-gray-600 text-sm">
                  Often true — and not your problem to solve. Offer to reduce
                  scope at the new rate rather than discount the rate. &quot;I
                  can deliver the core scope for the original budget at $X.
                  Shipping with [feature removed] keeps it on budget.&quot;
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">
                  &quot;That&apos;s more than we paid before.&quot;
                </p>
                <p className="text-gray-600 text-sm">
                  True statement, not a counter-offer. Acknowledge and move on.
                  &quot;Yes, that&apos;s the current rate. The scope is also
                  different / the market has moved / it&apos;s been [X] months
                  since the last adjustment.&quot;
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">
                  &quot;We can find someone cheaper.&quot;
                </p>
                <p className="text-gray-600 text-sm">
                  Almost always true, also not the question on the table.
                  &quot;You can — and for some projects that&apos;s the right
                  call. For this one, I&apos;d recommend the experience and
                  speed, but if cheaper is the priority, I understand.&quot;
                  No discount, no defense.
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">
                  &quot;Can you do it for $Y instead?&quot;
                </p>
                <p className="text-gray-600 text-sm">
                  Re-quote with reduced scope. Never just lower the rate for
                  the same work — that teaches the client your number is
                  flexible. &quot;Yes, for $Y I can do [reduced scope]. For the
                  original scope, the rate stays at $X.&quot;
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              The 90-Day Rate-Raise Plan
            </h2>
            <p className="text-gray-600 mb-4">
              A safe sequence that gets you a 20-30% increase without spooking
              your existing book:
            </p>
            <div className="space-y-4">
              <div className="border-l-4 border-violet-300 pl-4">
                <p className="font-semibold text-gray-900">Days 1-30: Update everything visible.</p>
                <p className="text-gray-600 text-sm">
                  Raise the rate on your website, your proposal template, and
                  the number you give in inquiry calls. Quote every new lead at
                  the new number. Watch the win rate.
                </p>
              </div>
              <div className="border-l-4 border-violet-300 pl-4">
                <p className="font-semibold text-gray-900">Days 30-60: Land 2-3 wins at the new rate.</p>
                <p className="text-gray-600 text-sm">
                  Proof that the market accepts it. If you&apos;re losing every
                  quote, back off 10% and try again. If you&apos;re winning
                  every quote, push higher.
                </p>
              </div>
              <div className="border-l-4 border-violet-300 pl-4">
                <p className="font-semibold text-gray-900">Days 60-90: Notify existing clients.</p>
                <p className="text-gray-600 text-sm">
                  Send the scheduled-adjustment script with 30 days notice.
                  Lead with the highest-rate / least-strategic clients. End
                  with your top 1-2 anchor clients — those conversations are
                  often easier than expected when you&apos;ve already proven
                  the rate on new business.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              How to Know Your Real Floor
            </h2>
            <p className="text-gray-600 mb-3">
              Before you raise, know the minimum rate you can actually sustain
              — taxes, benefits, non-billable time, the works. That number
              isn&apos;t your goal; it&apos;s the line below which you&apos;re
              effectively paying yourself less than minimum wage to be in
              business.
            </p>
            <p className="text-gray-600 mb-3">
              Run your numbers through the{" "}
              <Link href="/" className="text-violet-700 hover:underline">
                Freelance Rate Calculator
              </Link>{" "}
              first. That&apos;s the floor. Any rate raise should start from a
              number well above it, not at it.
            </p>
          </section>
        </div>

        {/* Internal Links */}
        <div className="mt-12 bg-gray-50 rounded-xl border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Related Tools</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/" className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-violet-300 transition">
              <p className="font-medium text-violet-600">Freelance Rate Calculator</p>
              <p className="text-sm text-gray-500">Find your true minimum hourly rate</p>
            </Link>
            <Link href="/freelance-rates-by-experience-level" className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-violet-300 transition">
              <p className="font-medium text-violet-600">Rates by Experience Level</p>
              <p className="text-sm text-gray-500">Junior, mid, and senior rate ranges across roles</p>
            </Link>
            <Link href="/hourly-to-salary" className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-violet-300 transition">
              <p className="font-medium text-violet-600">Hourly to Salary Converter</p>
              <p className="text-sm text-gray-500">What your rate equals as an employed salary</p>
            </Link>
            <Link href="/project-pricing" className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-violet-300 transition">
              <p className="font-medium text-violet-600">Project Pricing Calculator</p>
              <p className="text-sm text-gray-500">Convert hourly rates to project quotes</p>
            </Link>
          </div>
        </div>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How often should freelancers raise rates?</h3>
              <p className="text-gray-600">Once a year is the floor. Working freelancers raise rates 10-20% annually for new clients and adjust existing clients on contract renewal or every 12-18 months. If you&apos;re booked solid for two months out, you&apos;re under-priced — raise sooner.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How much should I raise my rate?</h3>
              <p className="text-gray-600">For new clients: whatever the market will bear — test a 25-50% jump on the next quote and see if you keep winning. For existing clients: 10-20% per cycle keeps it inside the band of normal cost-of-living adjustments and avoids the sticker-shock conversation.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What do I say when raising rates on an existing client?</h3>
              <p className="text-gray-600">Keep it short, give 30-60 days notice, frame it as a scheduled adjustment, and don&apos;t apologize. &quot;Starting [date], my rate for new projects will be $X/hour, up from $Y. Everything in flight stays at the current rate.&quot; That&apos;s the whole message.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">When is the best time to raise freelance rates?</h3>
              <p className="text-gray-600">When demand exceeds supply — you have a wait list, you&apos;re declining work, or you&apos;re booked two months out. Raise for new inquiries first; existing clients follow on contract renewal or 60-day notice. Raising during a slow stretch backfires.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Will I lose clients if I raise rates?</h3>
              <p className="text-gray-600">Usually 10-30% of price-sensitive clients leave. That&apos;s not a failure mode — it&apos;s the math. A 20% rate increase with 20% client attrition leaves your income unchanged and your hours lower, which is the trade you actually want.</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
