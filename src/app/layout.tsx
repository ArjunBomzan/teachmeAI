import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./Header";
import Footer from "./Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Teach Me Ai ",
  description: "Discover how to harness the power of artificial intelligence in education with Teach Me AI. Our platform offers comprehensive resources and practical guides for students and teachers to integrate AI into their learning and teaching practices. Explore tutorials, lesson plans, and cutting-edge tools designed to enhance the educational experience through AI technology.",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
