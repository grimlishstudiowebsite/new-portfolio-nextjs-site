import "@/app/_styles/globals.css";
import { Jost } from "next/font/google";
import { Bricolage_Grotesque } from "next/font/google";
import Header from "@/app/_components/Header";
import Footer from "@/app/_components/Footer";

import siteConfig from "@/app/_lib/site.config";

const jost = Jost({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jost",
});

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bricolageGrotesque",
});

export const metadata = {
  metadataBase: siteConfig.url,

  title: {
    template: `%s | ${siteConfig.name}`,
    default: siteConfig.name,
  },
  description: siteConfig.description,

  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    type: "website",
    siteName: siteConfig.name,
    images: [
      {
        url: "/og-image.png",
        width: 1774,
        height: 887,
        alt: "Grimlish Studio",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${jost.variable} ${bricolageGrotesque.variable}`}
    >
      <body className="flex min-h-screen flex-col bg-background font-sans text-secondary-dark antialiased">
        <Header />
        <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
