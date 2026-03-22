import type { Metadata } from "next";
import { Noto_Sans_SC, Space_Grotesk } from "next/font/google";
import "./globals.css";

const notoSansSC = Noto_Sans_SC({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "沃垄飞服 | 无人机服务公司模板",
  description:
    "沃垄飞服官网首版模板，包含无人机服务介绍、行业场景、作业流程和联系入口，适合继续补充案例与素材。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className={`${notoSansSC.variable} ${spaceGrotesk.variable}`}>
      <body>{children}</body>
    </html>
  );
}
