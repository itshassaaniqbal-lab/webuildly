"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";

const questions=[
  ["How long does development take?","Most focused websites take 3–6 weeks. SaaS products, AI applications, and custom platforms typically take 8–16+ weeks depending on scope. After discovery, you receive a clear roadmap and delivery range."],
  ["Can you redesign my website?","Yes. We can reshape strategy, structure, UX, visual design, and engineering—or focus only on the parts creating friction. Every redesign starts with what should improve for your business and users."],
  ["Do you build SaaS?","Yes. We help from product definition through design, development, launch, and iteration, including dashboards, subscriptions, role-based experiences, integrations, and scalable product systems."],
  ["Do you build AI products?","Yes. We create practical AI tools, agentic workflows, intelligent interfaces, knowledge systems, and automations designed around real business outcomes—not novelty."],
  ["Can we work remotely?","Absolutely. Buildly works remotely with clients across time zones using clear milestones, regular calls, async updates, and a single shared view of progress."],
  ["How do payments work?","Projects are usually split into milestone-based payments. The exact schedule depends on the engagement, and everything is agreed transparently before work begins."],
];

export default function FAQ(){return <section className="section" id="faq"><div className="shell faq-layout"><motion.div initial={{opacity:0,y:25}} whileInView={{opacity:1,y:0}} viewport={{once:true}}><span className="eyebrow">FAQ</span><h2 className="section-title">Good questions. <span className="muted">Clear answers.</span></h2><p className="section-copy">Have something more specific in mind? Tell us what you’re building and we’ll reply directly.</p><a className="pill-button pill-ghost" href="#contact" style={{marginTop:28}}>Ask us anything</a></motion.div><Accordion.Root className="faq-list" type="single" collapsible>{questions.map(([q,a],i)=><Accordion.Item className="faq-item" value={`item-${i}`} key={q}><Accordion.Header><Accordion.Trigger className="faq-trigger">{q}<Plus size={18}/></Accordion.Trigger></Accordion.Header><Accordion.Content className="faq-content"><p>{a}</p></Accordion.Content></Accordion.Item>)}</Accordion.Root></div></section>}
