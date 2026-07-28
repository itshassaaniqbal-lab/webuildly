"use client";

import { motion } from "framer-motion";

const steps=[
  ["Discovery","We uncover the real opportunity, align on goals, and define what success means."],
  ["Planning","The product takes shape through scope, architecture, milestones, and a clear roadmap."],
  ["Design","We create an intuitive visual system and prototype the moments that matter most."],
  ["Development","Senior engineering turns the system into fast, scalable, production-ready software."],
  ["Launch","We test, refine, deploy, and stay close as the product meets the real world."],
];

export default function Process(){return <section className="section" id="process"><div className="shell"><motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}}><span className="eyebrow">Our process</span><h2 className="section-title">Clarity at every <span className="muted">critical step.</span></h2><p className="section-copy">No black boxes. A focused five-stage system keeps decisions fast, quality high, and everyone moving in the same direction.</p></motion.div><div className="process-track">{steps.map(([title,copy],i)=><motion.article className="process-item" key={title} initial={{opacity:0,y:25}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.6}} transition={{delay:i*.12}}><motion.div className="process-node" whileHover={{scale:1.2,boxShadow:"0 0 40px rgba(79,140,255,.45)"}}>0{i+1}</motion.div><h3>{title}</h3><p>{copy}</p></motion.article>)}</div></div></section>}
