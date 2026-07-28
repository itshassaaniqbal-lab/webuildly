"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const quotes=[
  ["Ayesha Khan","Founder, Northstar","Buildly understood the business behind the product. The new platform feels effortless, and our team finally has room to move faster."],
  ["Daniel Reed","CEO, Arc Labs","The level of craft was obvious from the first prototype. They turned a complex idea into a product our customers understood immediately."],
  ["Omar Siddiqui","COO, Vertex","Our automation now saves dozens of hours every week. The system is clean, dependable, and much better than we had imagined."],
  ["Maya Chen","Product Lead, Halo","Rare combination of strong taste and serious technical judgment. Every detail feels intentional, and performance is excellent."],
];

export default function Testimonials(){const all=[...quotes,...quotes];return <section className="section" id="testimonials"><div className="shell"><motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}}><span className="eyebrow">Client notes</span><h2 className="section-title">Trust, earned in <span className="muted">the details.</span></h2></motion.div></div><div className="testimonials-window"><div className="testimonials-track">{all.map(([name,company,quote],i)=><article className="quote-card glass" key={`${name}-${i}`}><div className="stars" aria-label="Five out of five stars">{Array.from({length:5}).map((_,n)=><Star key={n} size={14} fill="currentColor"/>)}</div><blockquote>“{quote}”</blockquote><div className="person"><div className="avatar">{name.split(" ").map(x=>x[0]).join("")}</div><div><strong>{name}</strong><span>{company}</span></div></div></article>)}</div></div></section>}
