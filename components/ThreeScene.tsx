"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, Sparkles } from "@react-three/drei";
import { useEffect, useRef } from "react";
import * as THREE from "three";

function Core() {
  const group = useRef<THREE.Group>(null);
  const shellA = useRef<THREE.Mesh>(null);
  const shellB = useRef<THREE.Mesh>(null);
  const { pointer } = useThree();
  useFrame((state,delta) => {
    if (!group.current) return;
    const scroll = Math.min(window.scrollY / Math.max(document.body.scrollHeight - innerHeight,1),1);
    group.current.rotation.y += delta * .1;
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, pointer.y*.13 + scroll*.9, .025);
    group.current.rotation.z = THREE.MathUtils.lerp(group.current.rotation.z, -pointer.x*.1 + scroll*.28, .025);
    group.current.position.x = THREE.MathUtils.lerp(group.current.position.x, pointer.x*.16, .03);
    if (shellA.current) shellA.current.position.x = scroll * 1.6;
    if (shellB.current) shellB.current.position.x = -scroll * 1.6;
  });
  const glass = { transparent:true, opacity:.18, roughness:.08, metalness:.65, depthWrite:false };
  return <group ref={group} rotation={[.45,.4,.15]}>
    <Float speed={1.25} rotationIntensity={.22} floatIntensity={.3}>
      <mesh ref={shellA} rotation={[0,.3,.2]}><icosahedronGeometry args={[2.1,0]}/><meshPhysicalMaterial color="#5ba4ff" wireframe transparent opacity={.28}/></mesh>
      <mesh ref={shellB} rotation={[.4,-.2,-.1]}><octahedronGeometry args={[1.65,0]}/><meshPhysicalMaterial color="#8f7cff" {...glass}/></mesh>
      <mesh><sphereGeometry args={[.72,48,48]}/><meshPhysicalMaterial color="#bfe8ff" emissive="#3d8cff" emissiveIntensity={2.8} roughness={.12} metalness={.1}/></mesh>
      <mesh rotation={[Math.PI/2,0,.4]}><torusGeometry args={[2.65,.018,10,180]}/><meshBasicMaterial color="#43cfff" transparent opacity={.5}/></mesh>
      <mesh rotation={[.25,.65,0]}><torusGeometry args={[3.05,.012,10,180]}/><meshBasicMaterial color="#8c72ff" transparent opacity={.35}/></mesh>
      {Array.from({length:8}).map((_,i)=>{ const a=(i/8)*Math.PI*2; return <mesh key={i} position={[Math.cos(a)*2.65,Math.sin(a)*2.05,Math.sin(a*2)*.8]}><sphereGeometry args={[.055,12,12]}/><meshBasicMaterial color={i%2?"#23d5ff":"#8a6dff"}/></mesh>;})}
    </Float>
  </group>;
}

export default function ThreeScene() {
  const reduced = typeof window !== "undefined" && matchMedia("(prefers-reduced-motion: reduce)").matches;
  const mobile = typeof window !== "undefined" && matchMedia("(max-width: 720px)").matches;
  useEffect(()=>{},[]);
  return <Canvas dpr={mobile?[1,1.25]:[1,1.7]} camera={{ position:[0,0,8], fov:42 }} gl={{ antialias:!mobile, alpha:true, powerPreference:"high-performance" }} frameloop={reduced?"demand":"always"}>
    <ambientLight intensity={.25}/><pointLight color="#5aa4ff" position={[4,3,5]} intensity={35}/><pointLight color="#8b65ff" position={[-4,-2,3]} intensity={28}/><Core/>{!mobile&&<Sparkles count={75} scale={[10,8,6]} size={1.2} speed={.25} opacity={.55} color="#8ccfff"/>}
  </Canvas>;
}
