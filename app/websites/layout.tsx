import "./style.scss";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <section id="header">
        <div className="links">
          <Link href="/projects" className="projects-link">
            projects
          </Link>

          <Link href="/websites">Wesbites</Link>
        </div>
        <p>by Sahil Satpute</p>
      </section>
      {children}
    </>
  );
}
