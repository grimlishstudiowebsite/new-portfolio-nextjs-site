import "@/app/_styles/globals.css";
import { Playfair_Display } from "next/font/google";
import Header from "@/app/_components/Header";
import Footer from "@/app/_components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

export const metadata = {
  title: {
    template: "%s | Brochure Website",
    default: "Brochure Website",
  },
  description: "Reusable Brochure Website Foundation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={playfair.variable}>
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
