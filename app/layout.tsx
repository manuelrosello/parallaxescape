import type { Metadata } from "next";
import { manrope } from "./ui/fonts";
import "./ui/styles/globals.css";

export const metadata: Metadata = {
  title: "parallax // escape",
  description: "a comfy place by manuel rosello",
  keywords: ["parallax", "escape", "relax", "comfy", "vibes", "chillhop"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.className} antialiased`}>{children}</body>
    </html>
  );
}
