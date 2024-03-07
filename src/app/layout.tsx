import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "앱 개발 업체 | 홈페이지 제작 업체 | NEXACODE",
  description:
    "앱 개발 업체, 홈페이지 제작 업체 찾으시나요? NEXACODE를 선택하세요!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
