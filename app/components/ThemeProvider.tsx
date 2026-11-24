"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useEffect, type ReactNode } from "react";

export default function ThemeProvider({
  children,
}: {
  children: ReactNode;
}) {

    useEffect(() => {

    console.log("ThemeProvider mounted");

    return () => {
      console.log("ThemeProvider unmounted");
    };

  }, []);
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
    //   disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  );
}