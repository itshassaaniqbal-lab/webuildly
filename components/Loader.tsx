"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Loader() {
  const [progress,setProgress]=useState(0); const [done,setDone]=useState(false);
  useEffect(()=>{ document.body.style.overflow="hidden"; const start=performance.now(); const tick=()=>{ const p=Math.min(100,Math.round((performance.now()-start)/12)); setProgress(p); if(p<100) requestAnimationFrame(tick); else setTimeout(()=>{setDone(true);document.body.style.overflow="";},220); }; requestAnimationFrame(tick); return()=>{document.body.style.overflow="";};},[]);
  return <AnimatePresence>{!done&&<motion.div className="loader" exit={{opacity:0}} transition={{duration:.65}}><div className="loader-inner"><motion.div className="loader-logo" initial={{opacity:0,scale:.94}} animate={{opacity:1,scale:1}}><motion.span className="brand-mark" animate={{rotate:[0,0,90,90]}} transition={{duration:1.2,times:[0,.4,.6,1]}}/>Buildly</motion.div><div className="loader-track"><motion.div className="loader-bar" animate={{width:`${progress}%`}}/></div><div className="loader-count">SYSTEM INITIALIZING · {String(progress).padStart(3,"0")}</div></div></motion.div>}</AnimatePresence>;
}
