import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import ThemeProvider from "./components/ThemeProvider";
import DashboardShell from "./components/layout/DashboardShell";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "HR Management",
  description: "Human Resource Management System",
   icons: {
    icon: "/iprotects_logo_2.png?v=2",
    shortcut: "/iprotects_logo_2.png?v=2",
    apple: "/iprotects_logo_2.png?v=2",
  },
};

export default function RootLayout({ children }:  {
  children: React.ReactNode;
}) {
 return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <ThemeProvider>
          <DashboardShell
            role="admin"
            name="admin"
            email="admin@example.com"
          >
            {children}
          </DashboardShell>
        </ThemeProvider>
      </body>
    </html>
  );
}
