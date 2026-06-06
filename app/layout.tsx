import { Inter } from "next/font/google";
import "./globals.css";
import NextAuthSessionProvider from "./providers";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dry Fruit Store",
  description: "Your one-stop shop for premium dry fruits.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthSessionProvider>
          <Navbar />
          {children}
        </NextAuthSessionProvider>
      </body>
    </html>
  );
}
