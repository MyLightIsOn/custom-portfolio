import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { defaultTheme } from "@/config/themes";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Personal portfolio showcasing projects and experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={defaultTheme}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
