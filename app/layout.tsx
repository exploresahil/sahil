import Header from "@/components/header/Header";
import "./scss/globals.scss";
import type { Metadata } from "next";
import Footer from "@/components/footer/Footer";

export const metadata: Metadata = {
  title: "Sahil Satpute | Fullstack Designer",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
