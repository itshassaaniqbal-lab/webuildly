"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";

const ThreeScene = dynamic(() => import("./ThreeScene"), { ssr:false, loading:() => <div className="scene-fallback" /> });
const words = ["Websites", "SaaS", "AI", "Automation", "Software"];
const marquee = ["Website Development","SaaS","AI","Automation","Apps","UI Design","API","Software"];

export default function Hero() {
  const [word, setWord] = useState(0);
  useEffect(() => { const timer = setInterval(() => setWord(v => (v+1)%words.length), 1900); return () => clearInterval(timer); }, []);
  return (
    <>
      <section className="hero" id="home">
        <div className="scene-wrap" aria-hidden="true"><ThreeScene /></div>
        <div className="shell hero-grid">
          <motion.div className="hero-copy" initial={{ opacity:0,y:30 }} animate={{ opacity:1,y:0 }} transition={{ duration:.9,delay:.2 }}>
            <div className="hero-kicker"><span className="status-dot" /> Accepting selected projects · 2026</div>
            <h1>WE BUILD<br/><span className="gradient-text">DIGITAL</span><br/>EXPERIENCES<br/>THAT SCALE</h1>
            <div className="hero-rotator"><span>Engineered for</span><AnimatePresence mode="wait"><motion.span key={word} className="rotating-word" initial={{ opacity:0,y:8,filter:"blur(5px)" }} animate={{ opacity:1,y:0,filter:"blur(0px)" }} exit={{ opacity:0,y:-8,filter:"blur(5px)" }} transition={{ duration:.35 }}>{words[word]}</motion.span></AnimatePresence></div>
            <p className="hero-description">We design and develop premium websites, SaaS platforms, AI products, business software, and automation systems that help companies grow faster.</p>
            <div className="hero-actions">
              <a className="pill-button pill-primary" href="https://wa.me/923202729210?text=Hi%20Buildly%2C%20I%27d%20like%20to%20discuss%20a%20project." target="_blank" rel="noreferrer">Start your project <ArrowUpRight size={16}/></a>
              <a className="pill-button pill-ghost" href="#services">Explore services <ArrowDown size={15}/></a>
            </div>
          </motion.div>
          <motion.div className="hero-metric glass" initial={{ opacity:0,x:25 }} animate={{ opacity:1,x:0 }} transition={{ delay:1,duration:.7 }}>
            <div className="hero-metric-top"><span>System velocity</span><span>+184%</span></div><div className="metric-line" />
          </motion.div>
        </div>
        <div className="scroll-cue"><span>Scroll to explore</span><span className="scroll-line" /></div>
      </section>
      <div className="marquee" aria-label="Buildly capabilities"><div className="marquee-track">{[...marquee,...marquee].map((item,i) => <span key={`${item}-${i}`}>{item}</span>)}</div></div>
      <About />
    </>
  );
}

function About() {
  const stats = [["50+","Projects completed"],["98%","Client satisfaction"],["20+","Modern technologies"],["24/7","Global support"]];
  return <section className="about-band" id="about"><div className="shell"><div className="about-layout"><motion.div className="about-label" initial={{opacity:0,y:25}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.4}}>Buildly is an independent digital product studio for ambitious companies that refuse to blend in.</motion.div><motion.div initial={{opacity:0,y:35}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.3}}><span className="eyebrow">About Buildly</span><h2 className="section-title">We build products that <span className="muted">businesses love.</span></h2><p className="section-copy">Strategy, design, and engineering move as one team here. The result is software that feels considered, performs under pressure, and creates measurable momentum.</p></motion.div></div><div className="stats">{stats.map(([value,label],i)=><motion.div className="stat" key={label} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.08}}><strong>{value}</strong><span>{label}</span></motion.div>)}</div></div></section>;
}
