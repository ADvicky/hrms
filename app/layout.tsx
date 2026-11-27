import type { Metadata } from "next";
import { Roboto, Geist_Mono } from "next/font/google";
import "./globals.css";

import ThemeProvider from "./components/ThemeProvider";
import DashboardShell from "./components/layout/DashboardShell";
import MuiThemeProvider from "./components/MuiThemeProvider";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${roboto.className} ${roboto.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <ThemeProvider>
          <MuiThemeProvider>
          <DashboardShell
            role="admin"
            name="admin"
            email="admin@example.com"
          >
            {children}
          </DashboardShell>
          </MuiThemeProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
