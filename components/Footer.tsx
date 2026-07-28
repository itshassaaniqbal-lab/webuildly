import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="shell">
        <div className="footer-grid">
          <div className="footer-intro">
            <a className="brand" href="#home"><span className="brand-mark" />Buildly</a>
            <p>Premium digital products, automation, and software systems for companies building what comes next.</p>
          </div>
          <FooterGroup title="Explore" links={[["Home","#home"],["Services","#services"],["Projects","#projects"],["Process","#process"],["Contact","#contact"]]} />
          <FooterGroup title="Services" links={[["Web development","#services"],["SaaS & AI","#services"],["Automation","#services"],["Apps & software","#services"],["UI & UX","#services"]]} />
          <FooterGroup title="Connect" links={[["WhatsApp","https://wa.me/923202729210"],["Facebook","https://facebook.com/webuildly"],["Start a project","#contact"]]} />
        </div>
        <div className="footer-bottom">
          <span>&copy; {new Date().getFullYear()} Buildly. All rights reserved.</span>
          <a href="#home">Back to top <ArrowUpRight size={11} style={{ display:"inline" }} /></a>
        </div>
      </div>
    </footer>
  );
}

function FooterGroup({ title, links }: { title:string; links:string[][] }) {
  return <div><h4>{title}</h4><div className="footer-links">{links.map(([label,href]) => <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined}>{label}</a>)}</div></div>;
}
