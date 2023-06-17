import { Metadata } from "next";
import LayoutHead from "./head";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Proto",
  description: "Proto Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <LayoutHead />
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
