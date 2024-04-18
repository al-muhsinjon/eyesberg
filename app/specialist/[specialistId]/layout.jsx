import { Navbar } from "@/components";
import React from "react";
import "./../../globals.css";

export default function RootLayout({ children, params }) {
  return (
    <html lang="en">
      <title>{params.specialistId}</title>
      <body suppressHydrationWarning={true}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
