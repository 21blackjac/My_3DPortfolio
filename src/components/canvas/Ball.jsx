import React, { Suspense, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import CanvasLoader from "../Loader";

const Ball = ({ imgUrl }) => {
  const [decal] = useTexture([imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  const canvasRef = useRef();

  useEffect(() => {
    const canvasNode = canvasRef.current;
    return () => {
      // Proper cleanup on component unmount
      if (canvasNode) {
        const gl = canvasNode.getContext('webgl') || canvasNode.getContext('experimental-webgl');
        
        if (gl) {
          // Force garbage collection
          gl.getExtension('WEBGL_lose_context')?.loseContext();
        }
      }
    };
  }, []);

  return (
    <Canvas
      ref={canvasRef}
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ 
        preserveDrawingBuffer: true,
        // Add power preference for better mobile performance
        powerPreference: "high-performance",
        // Add antialias only if needed (can be expensive on mobile)
        antialias: false
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;