import Footer from "@/components/Footer";
import "./globals.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Asteria Webpage",
  description: "Created for Asteria 2024",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
