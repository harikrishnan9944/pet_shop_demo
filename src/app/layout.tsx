import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Happy Paws Pet Shop | Everything Your Pets Need in One Place",
  description: "Happy Paws is your trusted local pet shop. We provide organic pet food, premium accessories, expert grooming services, and essential pet healthcare products.",
  keywords: ["pet shop", "dog food", "cat food", "pet accessories", "pet grooming", "pet supplies", "local pet store"],
  authors: [{ name: "Happy Paws Pet Shop" }],
  openGraph: {
    title: "Happy Paws Pet Shop | Everything Your Pets Need",
    description: "Premium food, toys, grooming services, and veterinary wellness products for your best friends.",
    type: "website",
    locale: "en_US",
    siteName: "Happy Paws Pet Shop",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} h-full scroll-smooth`}
    >
      <body className="font-sans antialiased text-slate-800 bg-[#fcfbfa] min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
