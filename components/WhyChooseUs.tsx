"use client";

import { motion } from "framer-motion";
import { Gauge, Gem, HeartHandshake, Layers3, Sparkles, TerminalSquare } from "lucide-react";

const reasons=[
  [Gauge,"Fast delivery","Small senior teams, direct communication, and focused sprints keep progress visible and velocity high."],
  [Layers3,"Modern tech stack","We choose proven, modern tools that make your product faster today and easier to evolve tomorrow."],
  [TerminalSquare,"Clean code","Thoughtful architecture and disciplined implementation create systems your future team can trust."],
  [Sparkles,"Creative design","Every interface is crafted for your brand, your users, and the feeling you want to leave behind."],
  [Gem,"Scalable systems","We design foundations that support the next release, the next team, and the next stage of growth."],
  [HeartHandshake,"Long-term support","Launch is a milestone, not a goodbye. We stay available for iteration, care, and new ambition."],
];

export default function WhyChooseUs(){return <section className="section" id="why-buildly"><div className="shell why-layout"><div className="sticky-title"><span className="eyebrow">Why Buildly</span><h2 className="section-title">Your unfair <span className="muted">digital advantage.</span></h2><p className="section-copy">The care of a boutique studio. The systems thinking of a product company. The pace of a team that knows what matters.</p></div><div className="why-cards">{reasons.map(([Icon,title,copy],i)=>{const ReasonIcon=Icon as typeof Gauge;return <motion.article className="why-card glass" key={title as string} initial={{opacity:0,y:45}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.25}} transition={{delay:(i%2)*.08}}><ReasonIcon size={22}/><h3>{title as string}</h3><p>{copy as string}</p></motion.article>})}</div></div></section>}
