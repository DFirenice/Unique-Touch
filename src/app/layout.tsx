import type { Metadata } from "next";
import { Work_Sans, Roboto_Mono } from "next/font/google";
import "./globals.css";

// Chakra UI
import { Provider } from "@/components/ui/provider";

// variable, subsets

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  display: "swap",
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Unique Touch",
  description: "Website designed for Unique Touch 4 Wellness massage & therapies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${workSans.variable} ${robotoMono.variable} antialiased m-0 p-0`}
      >
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}