import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

export const metadata: Metadata = {
  title: "UNV Dubai | CCTV & Surveillance Solutions",
  description:
    "Professional UNV and Uniview CCTV, IP camera, NVR, PTZ camera, thermal camera and VMS solutions in Dubai, UAE.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}