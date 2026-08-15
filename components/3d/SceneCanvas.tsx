'use client'

import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Preload } from '@react-three/drei'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'

interface SceneCanvasProps {
 children: React.ReactNode
 fallback?: React.ReactNode
 cameraPosition?: [number, number, number]
 fov?: number
 className?: string
}

export function SceneCanvas({
 children,
 fallback = null,
 cameraPosition = [0, 0, 5],
 fov = 50,
 className = '',
}: SceneCanvasProps) {
 const reducedMotion = usePrefersReducedMotion()

 if (reducedMotion) {
 return <div className={`w-full h-full ${className}`}>{fallback}</div>
 }

 return (
 <div className={`w-full h-full ${className}`}>
 <Canvas
 camera={{ position: cameraPosition, fov }}
 dpr={[1, 2]} // Support for high DPI displays, cap at 2 for performance
 gl={{ alpha: true, antialias: true }}
 >
 <Suspense fallback={null}>
 {children}
 <Preload all />
 </Suspense>
 </Canvas>
 </div>
 )
}
