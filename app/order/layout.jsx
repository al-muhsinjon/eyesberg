import { Navbar } from "@/components";
import React, { Suspense } from "react";
import "../globals.css";

export default function RootLayout({ children, params }) {
  return (
    <html lang="en">
      <title>What the hell</title>
      <body suppressHydrationWarning={true}>
        <Navbar />
        <Suspense>{children}</Suspense>
      </body>
    </html>
  );
}
