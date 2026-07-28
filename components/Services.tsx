"use client";

import { motion } from "framer-motion";
import { Bot, Box, Braces, Cpu, PanelsTopLeft, Smartphone } from "lucide-react";

const services = [
  { icon:PanelsTopLeft, title:"Digital experiences", desc:"Fast, refined websites and landing pages built to turn attention into action.", tags:["Websites","E-commerce","Landing pages"], glow:"rgba(35,213,255,.13)" },
  { icon:Box, title:"SaaS & MVPs", desc:"Product strategy, UX, and scalable engineering—from first proof to funded platform.", tags:["SaaS","MVP","Product systems"], glow:"rgba(124,92,255,.14)" },
  { icon:Bot, title:"AI products", desc:"Useful AI applications grounded in real workflows, clear interfaces, and dependable systems.", tags:["AI apps","Agents","Integrations"], glow:"rgba(79,140,255,.14)" },
  { icon:Cpu, title:"Automation systems", desc:"Business and AI automation that removes repetitive work and keeps operations moving.", tags:["Workflows","Operations","AI automation"], glow:"rgba(35,213,255,.11)" },
  { icon:Smartphone, title:"Apps, everywhere", desc:"Polished mobile and desktop applications designed around the way your users actually work.", tags:["iOS & Android","Desktop","Cross-platform"], glow:"rgba(124,92,255,.12)" },
  { icon:Braces, title:"Software infrastructure", desc:"Secure APIs and custom software that connect your tools, data, customers, and teams.", tags:["API development","Custom software","Architecture"], glow:"rgba(79,140,255,.13)" },
];

export default function Services(){return <section className="section" id="services"><div className="shell"><motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.4}}><span className="eyebrow">Capabilities</span><h2 className="section-title">One studio. <span className="muted">Every digital layer.</span></h2><p className="section-copy">We combine senior product thinking, expressive design, and robust engineering to create systems that look exceptional and work even harder.</p></motion.div><div className="service-stage">{services.map((service,i)=><motion.article className="service-card glass" style={{"--card-glow":service.glow} as React.CSSProperties} key={service.title} initial={{opacity:0,y:45,rotateX:5}} whileInView={{opacity:1,y:0,rotateX:0}} viewport={{once:true,amount:.2}} transition={{duration:.65,delay:(i%3)*.08}}><div className="service-head"><span className="service-icon"><service.icon size={19}/></span><span className="service-number">0{i+1}</span></div><h3>{service.title}</h3><p>{service.desc}</p><div className="service-list">{service.tags.map(tag=><span key={tag}>{tag}</span>)}</div></motion.article>)}</div></div></section>}
