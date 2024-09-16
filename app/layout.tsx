import type { Metadata } from "next";
import { manrope } from "./ui/fonts";

export const metadata: Metadata = {
  title: "parallax // escape",
  description: "a comfy place by manuel rosello",
  keywords: ["parallax", "escape", "comfy", "vibes"],
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
