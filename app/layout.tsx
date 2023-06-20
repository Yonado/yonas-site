import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import { Suspense } from "react";
import Loading from "./loading";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Yonatan Doanias",
  description: "Code, Design, Artificial Intelligence.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="favicon.ico" />
      </Head>
      <body>
        <Navbar />
        <Suspense fallback={<Loading />}></Suspense>
        {children}
      </body>
    </html>
  );
}
