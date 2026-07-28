"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton(){return <motion.a className="wa-float" href="https://wa.me/923202729210?text=Hi%20Buildly%2C%20I%27d%20like%20to%20talk%20about%20a%20project." target="_blank" rel="noreferrer" aria-label="Chat with Buildly on WhatsApp" initial={{scale:0}} animate={{scale:1}} transition={{delay:1.8,type:"spring"}} whileTap={{scale:.92}}><MessageCircle size={22}/></motion.a>}
