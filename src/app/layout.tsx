import Header from "@/components/layout/header/Header";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/global.css";
import { contentWrapper } from "@/styles/main.css";
import { cookies } from "next/headers";
import { darkTheme, lightTheme } from "@/styles/theme.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "손성열 포트폴리오",
  description: "Self Portfolio",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const themeCookie = cookieStore.get("theme")?.value;

  const themeClass =
    themeCookie === "dark"
      ? darkTheme
      : themeCookie === "light"
      ? lightTheme
      : lightTheme;

  return (
    <html
      lang="ko-KR"
      className={`${geistSans.variable} ${geistMono.variable} ${themeClass}`}
    >
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Self Portfolio" />
        <meta name="msapplication-TileColor" content="#0066ff" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/icons/favicon/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/icons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/icons/favicon-16x16.png"
        />
      </head>
      <body>
        <Header />
        <main className={contentWrapper}>{children}</main>
        <footer />
      </body>
    </html>
  );
}
