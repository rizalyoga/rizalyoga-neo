import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./providers/ThemeProvider";
import Footer from "./components/navigations/Footer";
import BProgressBar from "./components/BProgressBar";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],// });

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Rizalyoga",
  description: "My personal website to share my projects.",
  keywords: [
    "frontend",
    "front-end",
    "front-end developer",
    "frontend developer",
    "front-end engineer",
    "frontend engineer",
    "sofware developer",
    "software engineer",
    "coding",
    "personal website",
    "freelance",
    "programmer",
    "website",
  ],
  openGraph: {
    title: "achmad rizal yogaswara — software engineer",
    description: "My personal website to share my projects.",
    url: "https://rizalyoga.vercel.app",
    type: "website",
    siteName: "achmad rizal yogaswara — software engineer",
    images: [
      {
        url: "https://raw.githubusercontent.com/rizalyoga/next-portofolio/main/public/assets/card-seo/card-seo.png",
        secureUrl:
          "https://raw.githubusercontent.com/rizalyoga/next-portofolio/main/public/assets/card-seo/card-seo.png",
        width: 1200,
        height: 630,
        alt: "achmad rizal yogaswara — software engineer",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@rizalyoga",
    title: "achmad rizal yogaswara — software engineer",
    description: "My personal website to share my projects.",
    creator: "@rizalyoga",
    images: {
      url: "https://raw.githubusercontent.com/rizalyoga/next-portofolio/main/public/assets/card-seo/card-seo.png",
      alt: "achmad rizal yogaswara — software engineer",
      width: 1200,
      height: 630,
      type: "image/png",
    },
  },
};

export const dynamic = "force-static";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable}`}>
      <ThemeProvider defaultTheme="light" storageKey="portfolio-theme">
        <body>
          <BProgressBar>{children}</BProgressBar>
          <Footer />
        </body>
      </ThemeProvider>
    </html>
  );
}
