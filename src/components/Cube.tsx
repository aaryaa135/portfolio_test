import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { RoundedBox } from '@react-three/drei'
import * as THREE from 'three'

interface CubeProps {
  position?: [number, number, number]
  color?: string
}

export default function Cube({ position = [0, 0, 0], color = '#cbacf9' }: CubeProps) {
  const ref = useRef<THREE.Mesh>(null)

  useFrame((_, delta) => {
    if (!ref.current) return
    ref.current.rotation.x += delta * 0.3
    ref.current.rotation.y += delta * 0.4
  })

  return (
    <RoundedBox ref={ref} position={position} args={[0.5, 0.5, 0.5]} radius={0.05} smoothness={4}>
      <meshStandardMaterial color={color} roughness={0.3} metalness={0.6} />
    </RoundedBox>
  )
}
