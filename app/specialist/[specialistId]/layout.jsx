import { Navbar } from "@/components";
import React, { Suspense } from "react";
import "./../../globals.css";
import LoginModal from "@/components/login-modal";

export default function RootLayout({ children, params }) {
  return (
    <html lang="en">
      <title>{params.specialistId}</title>
      <body suppressHydrationWarning={true}>
        <Suspense>
          <LoginModal />
        </Suspense>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
