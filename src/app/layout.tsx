import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Providers } from "@/components/Providers";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Parth Solanki — Java Backend Engineer | Spring, GCP, Kafka",
  description:
    "Hire a production Java engineer: Spring Boot microservices, GCP/GKE, Kafka & Pub/Sub, PostgreSQL — with resume-backed metrics. Vadodara, open to remote.",
  openGraph: {
    title: "Parth Solanki — Java Backend Engineer",
    description:
      "Backend systems that stay calm under load. Spring Boot, cloud, messaging — metrics you can verify in conversation.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Parth Solanki — Java Backend Engineer",
    description:
      "Spring Boot · GCP · Kafka — production Java with measurable impact. Open to backend roles.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${jakarta.variable} ${jetbrains.variable} ${fraunces.variable}`}
    >
      <body className="min-h-screen font-sans">
        <Providers>
          <div className="noise-layer" aria-hidden />
          <Header />
          <main className="relative z-10">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
