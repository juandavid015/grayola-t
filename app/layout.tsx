import { GeistSans } from "geist/font/sans";
import "./globals.css";

import Navbar from "@/components/navbar";
import { Toaster } from "@/components/ui/sonner";
import Header from "@/components/header";
import Footer from "@/components/footer";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Next.js and Supabase Starter Kit",
  description: "The fastest way to build apps with Next.js and Supabase",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body
        className="bg-background text-foreground flex flex-col items-center relative 
      min-h-screen"
      >
        <Header />
        <Navbar />
        <main className="min-h-screen flex flex-col items-center w-full h-full">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
