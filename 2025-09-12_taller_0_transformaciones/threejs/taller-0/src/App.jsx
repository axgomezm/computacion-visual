import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

function Donut() {
  const ref = useRef()

  useFrame((state, delta) => {
    ref.current.rotation.y += delta
    ref.current.rotation.x += delta * 0.5
  })

  return (
    <mesh ref={ref}>
      <torusGeometry args={[1, 0.4, 16, 100]} />
      <meshStandardMaterial color="cyan" />
    </mesh>
  )
}


export default function App() {
  
  return (
    <div className="app-canvas">
      <Canvas shadows camera={{ position: [0, 2, 6], fov: 60 }}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
        <Donut />
        <OrbitControls makeDefault />
      </Canvas>
    </div>
  )
}
