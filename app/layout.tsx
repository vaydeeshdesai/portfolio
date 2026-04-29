import type { Metadata } from "next";
import { Space_Mono, DM_Sans } from "next/font/google";
import "./globals.css";

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
  display: "swap",
});

const dmSans = DM_Sans({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vaydeesh Desai — Software Engineer",
  description:
    "CS + Business student at Northeastern. Building at the intersection of finance and technology. Available for co-op Jul–Dec 2026.",
  openGraph: {
    title: "Vaydeesh Desai",
    description: "Software Engineer · CS + Finance @ Northeastern",
    url: "https://vaydeeshdesai.vercel.app",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceMono.variable} ${dmSans.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
