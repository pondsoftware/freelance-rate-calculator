import { Metadata } from "next";
import GraphicDesignerCalculator from "@/components/GraphicDesignerCalculator";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Freelance Graphic Designer Rate Calculator — 2024 Pricing Guide",
  description:
    "Calculate freelance graphic designer rates by specialization (brand, UI/UX, illustration, print) and experience level. Includes project pricing for logos, websites, and marketing materials.",
  alternates: {
    canonical: "/graphic-designer",
  },
  openGraph: {
    title: "Freelance Graphic Designer Rate Calculator",
    description:
      "Calculate freelance graphic designer rates by specialization and experience. Includes project pricing for common design deliverables.",
    type: "website",
    url: "https://freelancerates.net/graphic-designer",
    siteName: "Freelance Rate Calculator",
  },
};

const webAppJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Graphic Designer Rate Calculator",
  description: "Calculate freelance graphic designer rates by specialization (brand, UI/UX, illustration, print) and experience level. Includes project pricing for logos, websites, and marketing materials.",
  url: "https://freelancerates.net/graphic-designer",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Any",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

export default function GraphicDesignerPage() {
  return (
    <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppJsonLd) }} />
    <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Freelance Graphic Designer Rate Calculator
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl">
          Find competitive rates for freelance graphic design work. This
          calculator factors in your specialization, experience level, and
          project scope to recommend hourly and project-based pricing.
        </p>
      </div>

      <GraphicDesignerCalculator />

      <div className="mt-12 space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            How to Price Graphic Design Work
          </h2>
          <p className="text-gray-600 mb-4">
            Graphic design pricing depends on what you&apos;re creating, who it&apos;s
            for, and the value it delivers. Here&apos;s how to think about it:
          </p>
          <ul className="space-y-2 text-gray-600">
            <li>
              <strong>Hourly billing</strong> — Good for ongoing client
              relationships, retainer work, and projects with evolving scope.
              Track every hour including research, concepts, and revisions.
            </li>
            <li>
              <strong>Project-based pricing</strong> — Better for defined
              deliverables (logos, brochures, social sets). Quote a flat fee
              based on estimated hours + revision rounds + value delivered.
            </li>
            <li>
              <strong>Value-based pricing</strong> — A logo for a $50M company
              is worth more than one for a local bakery, even if the hours are
              similar. Price based on business impact when possible.
            </li>
            <li>
              <strong>Revision policies</strong> — Always cap included revisions
              (2-3 rounds is standard). Charge per additional round at your
              hourly rate. This prevents endless revision cycles.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Graphic Designer Rates by Specialization
          </h2>
          <div className="text-gray-600 space-y-3">
            <p>
              <strong>Brand/Identity Design ($60-$200/hr)</strong> — The highest-paying
              design specialization. Includes logo design, brand guidelines,
              visual identity systems. Requires strategic thinking beyond aesthetics.
            </p>
            <p>
              <strong>UI/UX Design ($70-$200/hr)</strong> — Combines design with
              user research and interaction design. High demand from tech
              companies and startups. Requires proficiency in Figma/Sketch and
              understanding of development constraints.
            </p>
            <p>
              <strong>Illustration ($50-$175/hr)</strong> — Ranges from editorial
              illustration to character design. Rates vary widely based on
              complexity, usage rights, and client size.
            </p>
            <p>
              <strong>Print/Publication ($50-$150/hr)</strong> — Books, magazines,
              packaging, signage. Requires deep knowledge of print production,
              color management, and vendor relationships.
            </p>
            <p>
              <strong>Motion Graphics ($65-$190/hr)</strong> — Growing demand for
              animated content, social video, and UI animations. Commands premium
              rates due to technical complexity and software expertise required.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Common Mistakes When Pricing Design Work
          </h2>
          <ul className="space-y-2 text-gray-600">
            <li>
              <strong>Underestimating revisions</strong> — The average project
              takes 2-3 revision rounds. Budget time for client feedback cycles.
            </li>
            <li>
              <strong>Not charging for research</strong> — Competitor analysis,
              mood boards, and strategy are billable work, not free extras.
            </li>
            <li>
              <strong>Ignoring usage rights</strong> — A logo used globally by a
              Fortune 500 company should cost more than one for a local shop.
              License your work appropriately.
            </li>
            <li>
              <strong>Competing on price</strong> — Racing to the bottom
              attracts the worst clients. Compete on quality, reliability, and
              strategic value instead.
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
            <p className="text-sm text-gray-500">See what your rate equals as a salary</p>
          </Link>
          <Link href="/copywriter" className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-violet-300 transition">
            <p className="font-medium text-violet-600">Copywriter Rates</p>
            <p className="text-sm text-gray-500">Compare rates for content and copy</p>
          </Link>
          <Link href="/project-pricing" className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-violet-300 transition">
            <p className="font-medium text-violet-600">Project Pricing Calculator</p>
            <p className="text-sm text-gray-500">Convert hours to project quotes</p>
          </Link>
        </div>
      </div>

      {/* FAQ */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">How much should a freelance graphic designer charge?</h3>
            <p className="text-gray-600">Freelance graphic designers in the US typically charge $35-$150/hr depending on experience and specialization. Entry-level designers start at $25-$50/hr, mid-level at $50-$100/hr, and senior designers at $80-$200/hr. Specialty areas like UI/UX and brand identity command the highest rates.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">How much should I charge for a logo design?</h3>
            <p className="text-gray-600">Logo design pricing ranges from $300-$1,500 for a basic logo to $2,000-$10,000+ for a full brand identity package. The price depends on your experience, the number of concepts and revisions, usage rights, and the client&apos;s size. Never charge under $500 for professional logo work.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Should graphic designers charge hourly or per project?</h3>
            <p className="text-gray-600">Project-based pricing is generally better for defined deliverables (logos, brochures, social templates) because you benefit from efficiency. Hourly billing works better for ongoing retainers, undefined scope, or when a client wants continuous iteration. Many designers use a hybrid approach.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">How many revisions should I include in my price?</h3>
            <p className="text-gray-600">Include 2-3 revision rounds in your project price. This is industry standard and gives clients enough flexibility without creating endless feedback loops. Charge your hourly rate for additional revisions beyond the included rounds, and make this clear in your contract upfront.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Do UI/UX designers earn more than graphic designers?</h3>
            <p className="text-gray-600">Yes, UI/UX designers typically earn 20-40% more than general graphic designers. The premium reflects the additional skills required: user research, interaction design, prototyping, and understanding of development constraints. UI/UX rates range from $70-$200/hr for experienced designers.</p>
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
                "name": "How much should a freelance graphic designer charge?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Freelance graphic designers in the US typically charge $35-$150/hr depending on experience and specialization. Entry-level designers start at $25-$50/hr, mid-level at $50-$100/hr, and senior designers at $80-$200/hr. Specialty areas like UI/UX and brand identity command the highest rates."
                }
              },
              {
                "@type": "Question",
                "name": "How much should I charge for a logo design?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Logo design pricing ranges from $300-$1,500 for a basic logo to $2,000-$10,000+ for a full brand identity package. The price depends on your experience, the number of concepts and revisions, usage rights, and the client's size. Never charge under $500 for professional logo work."
                }
              },
              {
                "@type": "Question",
                "name": "Should graphic designers charge hourly or per project?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Project-based pricing is generally better for defined deliverables (logos, brochures, social templates) because you benefit from efficiency. Hourly billing works better for ongoing retainers, undefined scope, or when a client wants continuous iteration. Many designers use a hybrid approach."
                }
              },
              {
                "@type": "Question",
                "name": "How many revisions should I include in my price?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Include 2-3 revision rounds in your project price. This is industry standard and gives clients enough flexibility without creating endless feedback loops. Charge your hourly rate for additional revisions beyond the included rounds, and make this clear in your contract upfront."
                }
              },
              {
                "@type": "Question",
                "name": "Do UI/UX designers earn more than graphic designers?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, UI/UX designers typically earn 20-40% more than general graphic designers. The premium reflects the additional skills required: user research, interaction design, prototyping, and understanding of development constraints. UI/UX rates range from $70-$200/hr for experienced designers."
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
              { "@type": "ListItem", "position": 2, "name": "Graphic Designer Rates", "item": "https://freelancerates.net/graphic-designer" }
            ]
          })
        }}
      />
    </div>
    </>
  );
}
