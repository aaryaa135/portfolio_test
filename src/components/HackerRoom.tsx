import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import type { GroupProps } from '@react-three/fiber'

// Preload the model so it's ready before the component mounts
useGLTF.preload('/models/hacker-room.glb')

interface HackerRoomProps extends GroupProps {
  scale?: number | [number, number, number]
}

export default function HackerRoom({ scale = 1, ...props }: HackerRoomProps) {
  const { scene } = useGLTF('/models/hacker-room.glb')
  const groupRef = useRef<THREE.Group>(null)

  return (
    <group ref={groupRef} {...props} scale={scale} dispose={null}>
      <primitive object={scene} />
    </group>
  )
}
