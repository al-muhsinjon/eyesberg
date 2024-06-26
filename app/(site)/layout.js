import { Inter } from "next/font/google";
import "../globals.css";
import { Footer, Navbar } from "@/components";
import LoginModal from "@/components/login-modal";
import Promo from "@/components/promo";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  icons: {
    icon: "favicon.ico",
  },
  title: "Eyesberg",
  description: "Finding the best jobs and workers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={inter.className}>
        <Suspense>
          <LoginModal />
        </Suspense>
        <Promo />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
