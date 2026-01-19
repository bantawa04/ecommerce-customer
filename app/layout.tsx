import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

// Primary font: Geist (sans-serif)
const geistSans = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Secondary font: Point (serif)
// TODO: Add Point font files to /public/fonts/ and update the src path
// Download the font and place files like: public/fonts/Point-Regular.woff2
const pointSerif = localFont({
  src: [
    {
      path: "../public/fonts/Point-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    // Add more weights/styles as needed:
    // { path: "../public/fonts/Point-Medium.woff2", weight: "500", style: "normal" },
    // { path: "../public/fonts/Point-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-point",
  fallback: ["Georgia", "Times New Roman", "serif"],
});

export const metadata: Metadata = {
  title: "Beauty Essentials",
  description: "Your destination for beauty products",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pointSerif.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
