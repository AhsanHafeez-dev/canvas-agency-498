import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Canvas Agency — Creative Design Studio",
  description:
    "We craft bold digital experiences. A full-service creative agency specializing in branding, web design, and motion graphics.",
  openGraph: {
    title: "Canvas Agency — Creative Design Studio",
    description:
      "We craft bold digital experiences. A full-service creative agency specializing in branding, web design, and motion graphics.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col bg-white text-zinc-900 antialiased">
        {children}
      </body>
    </html>
  );
}
