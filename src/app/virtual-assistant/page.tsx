import { Metadata } from "next";
import VirtualAssistantCalculator from "@/components/VirtualAssistantCalculator";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Virtual Assistant Rate Calculator — Hourly, Retainer & Package Pricing",
  description:
    "Calculate virtual assistant rates by service type, experience, and location. Compare hourly, monthly retainer, and package pricing for general admin, executive, social media, and specialized VAs.",
  alternates: {
    canonical: "/virtual-assistant",
  },
  openGraph: {
    title: "Virtual Assistant Rate Calculator",
    description:
      "Calculate virtual assistant rates by service type, experience, and location. Hourly, retainer, and package pricing benchmarks.",
    type: "website",
    url: "https://freelancerates.net/virtual-assistant",
    siteName: "Freelance Rate Calculator",
  },
};

const webAppJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Virtual Assistant Rate Calculator",
  description: "Calculate virtual assistant rates by service type, experience, and location. Compare hourly, monthly retainer, and package pricing.",
  url: "https://freelancerates.net/virtual-assistant",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Any",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

export default function VirtualAssistantPage() {
  return (
    <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppJsonLd) }} />
    <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Virtual Assistant Rate Calculator
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl">
          Find the right rate for virtual assistant work — general admin, executive
          support, social media, bookkeeping, and beyond. Includes hourly, retainer,
          and package pricing benchmarks across experience levels and locations.
        </p>
      </div>

      <VirtualAssistantCalculator />

      <div className="mt-12 space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            How to Set Your VA Rate
          </h2>
          <p className="text-gray-600 mb-4">
            Virtual assistant rates vary more by service category than by hours
            worked. A general admin VA charges very differently from an executive
            assistant or a technical operations VA. Here&apos;s how to price the work:
          </p>
          <ul className="space-y-2 text-gray-600">
            <li>
              <strong>Price the specialty, not the task</strong> — &quot;Inbox
              management for a CEO&quot; is executive-assistant work ($50-$100/hr),
              not general admin ($18-$50/hr). Charge for the responsibility, not
              the keystroke.
            </li>
            <li>
              <strong>Retainers stabilize income</strong> — Once you have
              consistent ongoing clients, move them to monthly retainers with a
              5-10% discount. Predictable income is worth giving up a small margin.
            </li>
            <li>
              <strong>Specialized tools = higher rates</strong> — Familiarity
              with QuickBooks, Zapier, HubSpot, Shopify, or Notion lets you
              charge 30-50% more than a generalist. Specialize early.
            </li>
            <li>
              <strong>Location sets the baseline, not the ceiling</strong> —
              US-based clients with US-based VAs pay $30-$75/hr. Offshore VAs
              often charge $8-$20/hr. If you&apos;re offshore but deliver
              US-equivalent quality, position yourself at $25-$40/hr — well
              above market, still a bargain for the client.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            VA Rates by Service Type (US, mid-level)
          </h2>
          <div className="text-gray-600 space-y-3">
            <p>
              <strong>General admin VA ($18-$50/hr)</strong> — Email, scheduling,
              data entry, travel booking, basic research. Entry-level work; high
              competition from offshore.
            </p>
            <p>
              <strong>Executive assistant ($35-$100/hr)</strong> — C-suite support,
              board prep, complex calendar work, stakeholder coordination. Requires
              discretion and judgment; commands a major premium.
            </p>
            <p>
              <strong>Social media VA ($25-$75/hr)</strong> — Content scheduling,
              community engagement, basic graphic design (Canva), monthly
              reporting. Not strategy — that&apos;s a social media manager.
            </p>
            <p>
              <strong>Bookkeeping VA ($30-$85/hr)</strong> — QuickBooks/Xero,
              invoicing, expense categorization, reconciliation. Higher rates
              for VAs who also handle payroll or sales tax.
            </p>
            <p>
              <strong>E-commerce VA ($25-$75/hr)</strong> — Shopify/Amazon
              listings, order processing, customer service tickets, inventory
              tracking. Platform-specific certifications boost rates.
            </p>
            <p>
              <strong>Technical / operations VA ($35-$100/hr)</strong> —
              Zapier/Make automations, CRM admin, SOP documentation, light tech
              setup. Closer to operations consulting than admin work.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            How to Move from $20/hr to $60+/hr
          </h2>
          <ul className="space-y-2 text-gray-600">
            <li>
              <strong>Niche down</strong> — &quot;VA for real estate agents&quot;
              or &quot;VA for podcasters&quot; earns 2-3x more than &quot;general
              VA&quot;. Niche knowledge means less training and faster output.
            </li>
            <li>
              <strong>Learn one specialized tool well</strong> — Zapier, Notion,
              HubSpot, Airtable, or QuickBooks. Tool fluency is a hard skill
              clients pay for.
            </li>
            <li>
              <strong>Build SOPs and document outcomes</strong> — Show clients
              how you saved them hours per week. Position yourself as a force
              multiplier, not labor.
            </li>
            <li>
              <strong>Move from tasks to outcomes</strong> — Instead of
              &quot;I&apos;ll handle email,&quot; sell &quot;inbox zero by
              5pm daily.&quot; Outcome pricing supports higher rates.
            </li>
            <li>
              <strong>Stop hourly when you can</strong> — Retainers reward
              speed. The faster you finish, the higher your effective rate.
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
          <Link href="/social-media-manager" className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-violet-300 transition">
            <p className="font-medium text-violet-600">Social Media Manager Rates</p>
            <p className="text-sm text-gray-500">Strategy and content rates by platform</p>
          </Link>
          <Link href="/hourly-to-salary" className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-violet-300 transition">
            <p className="font-medium text-violet-600">Hourly to Salary Converter</p>
            <p className="text-sm text-gray-500">What your rate equals as a salary</p>
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
            <h3 className="text-lg font-semibold text-gray-900 mb-2">How much does a virtual assistant charge per hour?</h3>
            <p className="text-gray-600">US-based virtual assistants typically charge $18-$75/hr depending on specialty and experience. General admin VAs earn $18-$50/hr, social media and e-commerce VAs $25-$75/hr, and executive assistants or technical VAs $35-$100/hr. Offshore VAs (Philippines, Latin America) usually charge 30-50% of US rates.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Is it better to charge hourly or by retainer as a VA?</h3>
            <p className="text-gray-600">Retainers are better once you have a reliable ongoing relationship — they stabilize your income and reward you for getting faster. Hourly works best for new clients, ad-hoc projects, and undefined scope. Most established VAs run a mix: hourly for new clients, retainers for proven ongoing engagements (usually with a 5-10% discount).</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">What is a typical VA package?</h3>
            <p className="text-gray-600">Common packages are 10, 20, and 40 hours per month, billed up front and used within the month. A 10-hour package at $40/hr midpoint runs ~$380, a 20-hour package ~$720, and a 40-hour package ~$1,360 — each tier typically gets a steeper discount (5%/10%/15%) to reward larger commitments.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">How do I justify charging $60+/hr as a VA?</h3>
            <p className="text-gray-600">Specialize in a niche (real estate, podcasting, SaaS founders), master one or two specialized tools (Zapier, HubSpot, QuickBooks), and sell outcomes rather than tasks. Clients paying premium rates aren&apos;t buying admin support — they&apos;re buying a fractional operations hire who removes work from their plate predictably.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Do offshore VAs really make $5-$10/hr?</h3>
            <p className="text-gray-600">Many do, especially on marketplaces like Upwork and Onlinejobs.ph. But experienced offshore VAs who position themselves as specialists (not generalists) regularly earn $15-$30/hr. The ceiling for offshore VAs has risen significantly as remote work has normalized — quality, communication, and tool fluency now matter more than location.</p>
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
                "name": "How much does a virtual assistant charge per hour?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "US-based virtual assistants typically charge $18-$75/hr depending on specialty and experience. General admin VAs earn $18-$50/hr, social media and e-commerce VAs $25-$75/hr, and executive assistants or technical VAs $35-$100/hr. Offshore VAs (Philippines, Latin America) usually charge 30-50% of US rates."
                }
              },
              {
                "@type": "Question",
                "name": "Is it better to charge hourly or by retainer as a VA?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Retainers are better once you have a reliable ongoing relationship — they stabilize your income and reward you for getting faster. Hourly works best for new clients, ad-hoc projects, and undefined scope. Most established VAs run a mix: hourly for new clients, retainers for proven ongoing engagements (usually with a 5-10% discount)."
                }
              },
              {
                "@type": "Question",
                "name": "What is a typical VA package?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Common packages are 10, 20, and 40 hours per month, billed up front and used within the month. A 10-hour package at $40/hr midpoint runs ~$380, a 20-hour package ~$720, and a 40-hour package ~$1,360 — each tier typically gets a steeper discount (5%/10%/15%) to reward larger commitments."
                }
              },
              {
                "@type": "Question",
                "name": "How do I justify charging $60+/hr as a VA?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Specialize in a niche (real estate, podcasting, SaaS founders), master one or two specialized tools (Zapier, HubSpot, QuickBooks), and sell outcomes rather than tasks. Clients paying premium rates aren't buying admin support — they're buying a fractional operations hire who removes work from their plate predictably."
                }
              },
              {
                "@type": "Question",
                "name": "Do offshore VAs really make $5-$10/hr?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Many do, especially on marketplaces like Upwork and Onlinejobs.ph. But experienced offshore VAs who position themselves as specialists (not generalists) regularly earn $15-$30/hr. The ceiling for offshore VAs has risen significantly as remote work has normalized — quality, communication, and tool fluency now matter more than location."
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
              { "@type": "ListItem", "position": 2, "name": "Virtual Assistant Rates", "item": "https://freelancerates.net/virtual-assistant" }
            ]
          })
        }}
      />
    </div>
    </>
  );
}
