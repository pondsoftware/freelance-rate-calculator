import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://freelancerates.net"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.svg",
  },
  title: "Freelance Rate Calculator — What Should You Charge Per Hour?",
  description:
    "Calculate your true freelance hourly rate accounting for self-employment tax, health insurance, retirement, non-billable hours, PTO, and business expenses.",
  openGraph: {
    title: "Freelance Rate Calculator",
    description:
      "Calculate your true freelance hourly rate accounting for self-employment tax, health insurance, retirement, non-billable hours, PTO, and business expenses.",
    type: "website",
    url: "https://freelancerates.net",
    siteName: "Freelance Rate Calculator",
  },
  twitter: {
    card: "summary",
    title: "Freelance Rate Calculator",
    description:
      "Calculate your true freelance hourly rate accounting for self-employment tax, health insurance, retirement, non-billable hours, PTO, and business expenses.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-K7FMZ8XELQ"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-K7FMZ8XELQ');
        `}
      </Script>
      <body className="min-h-full flex flex-col font-sans bg-gray-50 text-gray-900">
        <header className="bg-violet-600 text-white">
          <div className="max-w-4xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex items-center gap-3">
            <a href="/" className="flex items-center gap-3 text-xl font-bold text-white hover:text-violet-100 transition">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0" />
              </svg>
              Freelance Rate Calculator
            </a>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="bg-white border-t border-gray-200 mt-12">
          <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
            <div className="mb-4">
              <p className="text-sm font-medium text-gray-700 text-center mb-2">More Free Tools</p>
              <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-sm">
                <a href="https://appliancecostcalculator.net" className="text-violet-600 hover:underline">Appliance Cost Calculator</a>
                <a href="https://sidehustletaxcalculator.net" className="text-violet-600 hover:underline">Side Hustle Tax Calculator</a>
                <a href="https://imageconverters.net" className="text-violet-600 hover:underline">Image Converter</a>
                <a href="https://photometadata.net" className="text-violet-600 hover:underline">Photo Metadata Viewer</a>
                <a href="https://imageresizers.net" className="text-violet-600 hover:underline">Social Image Resizer</a>
                <a href="https://lendingcalculator.net" className="text-violet-600 hover:underline">Mortgage Calculator</a>
                <a href="https://compoundinterestcalc.app" className="text-violet-600 hover:underline">Compound Interest Calculator</a>
                <a href="https://salaryconverter.net" className="text-violet-600 hover:underline">Salary Converter</a>
                <a href="https://printablepolly.com" className="text-violet-600 hover:underline">Printable Polly</a>
                <a href="https://biblegarden.net" className="text-violet-600 hover:underline">Bible Garden</a>
              </div>
            </div>
            <p className="text-sm text-gray-500 text-center">
              This calculator provides estimates to help you set freelance
              rates. Tax calculations use simplified 2024 federal rates and
              do not include state taxes or credits. Consult a tax professional
              for advice specific to your situation.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
