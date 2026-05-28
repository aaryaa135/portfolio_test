import { Html, useProgress } from '@react-three/drei'

/**
 * Three.js canvas loading indicator.
 * Uses @react-three/drei's Html + useProgress hook.
 * Displayed inside the Canvas Suspense boundary.
 */
export default function CanvasLoader() {
  const { progress } = useProgress()

  return (
    <Html
      as="div"
      center
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '12px',
      }}
    >
      {/* Spinner ring */}
      <div
        style={{
          width: 48,
          height: 48,
          border: '3px solid rgba(203,172,249,0.15)',
          borderTop: '3px solid #cbacf9',
          borderRadius: '50%',
          animation: 'spin 0.8s linear infinite',
        }}
        aria-hidden
      />
      {/* Percentage */}
      <p
        style={{
          fontSize: 12,
          fontWeight: 500,
          color: '#cbacf9',
          fontFamily: 'monospace',
        }}
        aria-live="polite"
        aria-label={`Loading 3D scene: ${Math.round(progress)}%`}
      >
        {Math.round(progress)}%
      </p>
      <style>{`@keyframes spin { to { transform: rotate(360deg) } }`}</style>
    </Html>
  )
}
