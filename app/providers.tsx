"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

// Define the type for the theme provider props
type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: "light" | "dark" | "system";
  enableSystem?: boolean;
  disableTransitionOnChange?: boolean;
};

export function ThemeProvider({
  children,
  defaultTheme = "system",
  enableSystem = true,
  disableTransitionOnChange = true,
  ...props
}: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme={defaultTheme}
      enableSystem={enableSystem}
      disableTransitionOnChange={disableTransitionOnChange}
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}
