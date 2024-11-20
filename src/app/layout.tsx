import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { ReactLenis } from "@/utils/lenis";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const satoshi = localFont({
  src: [
    {
      path: "./fonts/Satoshi-Variable.woff2",
      style: "normal",
    },
    {
      path: "./fonts/Satoshi-VariableItalic.woff2",
      style: "italic",
    },
  ],
});

export const metadata: Metadata = {
  title: "Yuriy Koshyk - Product Designer",
  description:
    "Explore Yuriy Koshyk's Product Designer portfolio. See case studies in UX/UI design, product strategy, and digital innovation. Contact for collaborations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ReactLenis root>
        <body className={`${satoshi.className} antialiased`}>
          <Header />
          {children}
          <Footer />
        </body>
      </ReactLenis>
    </html>
  );
}
