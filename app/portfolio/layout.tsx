import Footer from "@/components/Footer";

import PortfolioNav from "@/components/portfolio/PortfolioNav";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PortfolioNav />
      {children}
    </>
  );
}
