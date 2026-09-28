import "@/app/_styles/globals.css";
import { Jost } from "next/font/google";
import { Bricolage_Grotesque } from "next/font/google";
import Header from "@/app/_components/Header";
import Footer from "@/app/_components/Footer";

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
  title: {
    template: "%s | Portfolio Website",
    default: "Portfolio Website",
  },
  description: "Reusable Portfolio Website Foundation",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${jost.variable} ${bricolageGrotesque.variable}`}
    >
      <body className="flex min-h-screen flex-col bg-background font-sans text-foreground antialiased">
        <Header />
        <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
