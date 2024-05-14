import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layouts/Navbar";
import Sidebar from "@/components/layouts/Sidebar";
import localFont from "next/font/local";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/provider/ThemeProvider";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin-ext"],
});

const arabic = localFont({
  src: "./arabic-font.ttf",
  display: "swap",
  variable: "--arabic",
});

export const metadata: Metadata = {
  title: "My Qur'an",
  description:
    "Al Qur'an digital gratis dan dapat diakses dimana saja , dengan tampilan yang nyaman dan mudah dipahami",
  openGraph: {
    type: "website",
    images: "/open-graph.png",
    title: {
      template: "%s / myquran",
      default: "MyQuran",
    },
  },
  metadataBase: new URL(
    process.env.KINDE_SITE_URL || "",
    "https://my-quran-v2.vercel.app/",
  ),
  creator: "Muhammad Asrul Rifa Anwar",
  publisher: "Muhammad Asrul Rifa Anwar",
  twitter: {
    images: "/open-graph.png",
    title: {
      template: "%s / myquran",
      default: "MyQuran",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} ${arabic.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="system">
          <Navbar />
          <Sidebar />
          {children}
          <Toaster duration={3000} />
        </ThemeProvider>
      </body>
    </html>
  );
}
