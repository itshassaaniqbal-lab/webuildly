"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  ["Home", "#home"], ["Services", "#services"], ["Projects", "#projects"],
  ["Process", "#process"], ["About", "#about"], ["Contact", "#contact"],
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`} aria-label="Primary navigation">
      <div className="shell nav-inner">
        <a className="brand" href="#home" aria-label="Buildly home"><span className="brand-mark" />Buildly</a>
        <div className="nav-links">{links.map(([label, href]) => <a key={label} href={href}>{label}</a>)}</div>
        <div className="nav-actions">
          <a className="pill-button pill-primary" href="https://wa.me/923202729210?text=Hi%20Buildly%2C%20I%27d%20like%20to%20start%20a%20project." target="_blank" rel="noreferrer">Start project <ArrowUpRight size={15} /></a>
          <button className="menu-button" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>{open ? <X size={19} /> : <Menu size={19} />}</button>
        </div>
      </div>
      <AnimatePresence>
        {open && <motion.div className="mobile-menu glass" initial={{ opacity:0,y:-12,scale:.98 }} animate={{ opacity:1,y:0,scale:1 }} exit={{ opacity:0,y:-12,scale:.98 }}>
          {links.map(([label,href]) => <a key={label} href={href} onClick={() => setOpen(false)}>{label}</a>)}
          <a href="https://wa.me/923202729210?text=Hi%20Buildly%2C%20I%27d%20like%20to%20start%20a%20project." target="_blank" rel="noreferrer">Start a project <ArrowUpRight size={18} /></a>
        </motion.div>}
      </AnimatePresence>
    </nav>
  );
}
