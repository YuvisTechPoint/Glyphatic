'use client'

import React, { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Sphere, QuadraticBezierLine } from '@react-three/drei'
import * as THREE from 'three'

// Utility to get a random point on a sphere's surface
function randomPointOnSphere(radius: number): THREE.Vector3 {
 const u = Math.random()
 const v = Math.random()
 const theta = u * 2.0 * Math.PI
 const phi = Math.acos(2.0 * v - 1.0)
 
 const sinPhi = Math.sin(phi)
 const x = radius * sinPhi * Math.cos(theta)
 const y = radius * sinPhi * Math.sin(theta)
 const z = radius * Math.cos(phi)
 
 return new THREE.Vector3(x, y, z)
}

function Arc({ start, end }: { start: THREE.Vector3; end: THREE.Vector3 }) {
 const lineRef = useRef<any>(null)
 
 // Calculate a control point that pushes outwards to make an arc
 const midPoint = start.clone().lerp(end, 0.5)
 // Distance from center determines how "high" the arc goes
 const distance = start.distanceTo(end)
 const controlPoint = midPoint.normalize().multiplyScalar(2 + distance * 0.4)
 
 useFrame(() => {
 if (lineRef.current?.material) {
 lineRef.current.material.dashOffset -= 0.005
 }
 })

 return (
 <QuadraticBezierLine
 ref={lineRef}
 start={start}
 end={end}
 mid={controlPoint}
 color="#FA582D" // Brand orange
 lineWidth={1.5}
 dashed
 dashScale={50}
 dashSize={2}
 dashOffset={0}
 transparent
 opacity={0.8}
 />
 )
}

export function ThreatGlobe() {
 const groupRef = useRef<THREE.Group>(null)
 
 // Generate random arcs
 const arcs = useMemo(() => {
 const lines = []
 for (let i = 0; i < 20; i++) {
 lines.push({
 start: randomPointOnSphere(2),
 end: randomPointOnSphere(2)
 })
 }
 return lines
 }, [])

 useFrame(() => {
 if (groupRef.current) {
 groupRef.current.rotation.y += 0.001
 groupRef.current.rotation.x += 0.0005
 }
 })

 return (
 <group ref={groupRef}>
 {/* Base Globe (Wireframe) */}
 <Sphere args={[2, 32, 32]}>
 <meshBasicMaterial 
 color="#334155" // Slate-700
 wireframe
 transparent
 opacity={0.15}
 />
 </Sphere>

 {/* Inner solid sphere to block lines going through the back */}
 <Sphere args={[1.98, 32, 32]}>
 <meshBasicMaterial color="#020617" /> {/* Slate-950 or very dark */}
 </Sphere>
 
 {/* Animated attack arcs */}
 {arcs.map((arc, i) => (
 <Arc key={i} start={arc.start} end={arc.end} />
 ))}
 </group>
 )
}
