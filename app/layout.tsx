import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Dispatch | News, Ideas & Analysis",
  description:
    "Independent journalism, thoughtful analysis, and ideas across technology, politics, science, business, and culture.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
