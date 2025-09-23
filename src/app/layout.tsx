import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { TRPCReactProvider } from "@/trpc/client";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Meetly AI",
  description: "AI Powered Video Calling Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <TRPCReactProvider>
      <html lang="en">
        <head>
          <link rel="icon" href="/logo2.svg" />
        </head>
        <body
          className={`${inter.className} antialiased`}
        >
          {children}
        </body>
      </html>
    </TRPCReactProvider>
  );
}
