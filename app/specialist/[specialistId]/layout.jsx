import { Navbar } from "@/components";
import React from "react";
import "./../../globals.css";
import LoginModal from "@/components/login-modal";

export default function RootLayout({ children, params }) {
  return (
    <html lang="en">
      <title>{params.specialistId}</title>
      <body suppressHydrationWarning={true}>
        <LoginModal />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
