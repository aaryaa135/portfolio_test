import { useRef, type ReactNode } from 'react'
import { useFrame } from '@react-three/fiber'
import { easing } from 'maath'
import * as THREE from 'three'

interface HeroCameraProps {
  children: ReactNode
  isMobile: boolean
}

export default function HeroCamera({ children, isMobile }: HeroCameraProps) {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state, delta) => {
    if (!groupRef.current) return

    // Smooth camera follow on desktop only
    if (!isMobile) {
      easing.damp3(
        state.camera.position,
        [state.pointer.x * 0.5, state.pointer.y * 0.3 + 1, 14],
        0.25,
        delta,
      )
    }

    // Subtle rotation based on pointer
    easing.dampE(
      groupRef.current.rotation,
      [state.pointer.y * 0.06, state.pointer.x * 0.12, 0],
      0.25,
      delta,
    )
  })

  return <group ref={groupRef}>{children}</group>
}
