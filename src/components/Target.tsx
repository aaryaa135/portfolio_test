import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import type { GroupProps } from '@react-three/fiber'
import * as THREE from 'three'

useGLTF.preload('/models/target.glb')

export default function Target(props: GroupProps) {
  const { scene } = useGLTF('/models/target.glb')
  const ref = useRef<THREE.Group>(null)

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.position.y = Math.sin(clock.getElapsedTime()) * 0.15
    }
  })

  return (
    <group ref={ref} {...props} dispose={null}>
      <primitive object={scene} scale={1.5} />
    </group>
  )
}
