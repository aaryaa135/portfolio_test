import { useGLTF } from '@react-three/drei'
import type { GroupProps } from '@react-three/fiber'

useGLTF.preload('/models/computer.glb')

export default function DemoComputer(props: GroupProps) {
  const { scene } = useGLTF('/models/computer.glb')
  return (
    <group {...props} dispose={null}>
      <primitive object={scene} />
    </group>
  )
}
