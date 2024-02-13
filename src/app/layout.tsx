import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";

const inter = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Innovatsion matematika",
  description: "Matematikani chuqur o’rganishingizga va keying bosqichga o’tishingizda Xalqaro matematika olimpiadasining g’oliblari tomonidan ishlab chiqilgan testda sizga yordam beradi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz">
      <body className={inter.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
