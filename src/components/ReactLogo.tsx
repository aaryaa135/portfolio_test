import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import type { GroupProps } from '@react-three/fiber'
import * as THREE from 'three'

useGLTF.preload('/models/react_logo.glb')

export default function ReactLogo(props: GroupProps) {
  const { scene } = useGLTF('/models/react_logo.glb')
  const ref = useRef<THREE.Group>(null)

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.8
  })

  return (
    <group ref={ref} {...props} dispose={null}>
      <primitive object={scene} scale={0.3} />
    </group>
  )
}
