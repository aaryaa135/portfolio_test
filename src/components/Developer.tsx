import { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useEffect } from 'react'
import type { GroupProps } from '@react-three/fiber'

useGLTF.preload('/models/animations/developer.glb')

interface DeveloperProps extends GroupProps {
  animationName?: string
}

export default function Developer({ animationName = 'idle', ...props }: DeveloperProps) {
  const ref = useRef<THREE.Group>(null)
  const { scene, animations } = useGLTF('/models/animations/developer.glb')
  const { actions } = useAnimations(animations, ref)

  useEffect(() => {
    const action = actions[animationName]
    if (action) {
      action.reset().fadeIn(0.4).play()
      return () => { action.fadeOut(0.4) }
    }
  }, [actions, animationName])

  return (
    <group ref={ref} {...props} dispose={null}>
      <primitive object={scene} />
    </group>
  )
}
