import { Inter as FontSans } from "next/font/google";

import { cn } from "@/lib/utils";
import WagmiCtx from "@/components/wagmi-provider";

import "./globals.css";
import "@rainbow-me/rainbowkit/styles.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <WagmiCtx>{children}</WagmiCtx>
      </body>
    </html>
  );
}
