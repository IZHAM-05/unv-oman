import type { Metadata } from "next";

import "./globals.css";

import LayoutWrapper from "@/components/common/LayoutWrapper";

export const metadata: Metadata = {
  title: "UNV Oman",
  description:
    "Professional UNV and Uniview video surveillance solutions across Oman.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
      </body>
    </html>
  );
}