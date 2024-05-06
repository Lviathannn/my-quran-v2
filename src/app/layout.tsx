import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layouts/Navbar";
import Sidebar from "@/components/layouts/Sidebar";
import localFont from "next/font/local";
import ScrollTop from "@/components/features/ScrollTop";

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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} ${arabic.variable}`}>
        <Navbar />
        <Sidebar />
        <ScrollTop>{children}</ScrollTop>
      </body>
    </html>
  );
}
