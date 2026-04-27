import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "MUN Portfolio — Learning site & tools",
    template: "%s · MUN Portfolio",
  },
  description:
    "A delegate learning portfolio: journey, thinking, evidence, leadership, conference design, resources, and reflection — plus the MUN-OS interactive workspace.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full overflow-x-hidden overflow-y-auto bg-[#05070d] text-white antialiased">
        {children}
      </body>
    </html>
  );
}
