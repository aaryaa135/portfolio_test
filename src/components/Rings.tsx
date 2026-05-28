import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function Rings() {
  const ref = useRef<THREE.Group>(null)

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.z += delta * 0.3
  })

  return (
    <group ref={ref} position={[0, 0.25, 0]}>
      {[1.4, 1.8, 2.2].map((r, i) => (
        <mesh key={i} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[r, 0.02, 16, 100]} />
          <meshStandardMaterial color="#cbacf9" opacity={0.3 - i * 0.08} transparent />
        </mesh>
      ))}
    </group>
  )
}
