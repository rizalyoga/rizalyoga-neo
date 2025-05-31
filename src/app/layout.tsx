import type { Metadata } from "next";
// import { Geist, Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./providers/ThemeProvider";
import Footer from "./components/navigations/Footer";
import BProgressBar from "./components/BProgressBar";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],// });

export const metadata: Metadata = {
  title: "Rizalyoga",
  description: "My personal website to share my projects.",
  keywords: [
    "front-end developer",
    "front-end engineer",
    "sofware-developer",
    "software-engineer",
    "coding",
    "personal website",
  ],
  openGraph: {
    url: "https://rizalyoga.vercel.app",
    title: "achmad rizal yogaswara — software engineer",
    description: "My personal website to share my projects.",
    images:
      "https://raw.githubusercontent.com/rizalyoga/next-portofolio/main/public/assets/card-seo/card-seo.png",
  },
  twitter: {
    title: "achmad rizal yogaswara — software engineer",
    description: "My personal website to share my projects.",
    images:
      "https://raw.githubusercontent.com/rizalyoga/next-portofolio/main/public/assets/card-seo/card-seo.png",
  },
};

export const dynamic = "force-static";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider defaultTheme="light" storageKey="portfolio-theme">
        <body>
          <BProgressBar>{children}</BProgressBar>
          <Footer />
        </body>
      </ThemeProvider>
    </html>
  );
}
