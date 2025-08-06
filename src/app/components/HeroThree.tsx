"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { Suspense, useRef } from "react";
import { Group } from "three";

function Model() {
  const gltf = useGLTF("/models/scene.gltf");
  const modelRef = useRef<Group>(null);

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.005;
    }
  });

  return (
    <primitive
      ref={modelRef}
      object={gltf.scene}
      scale={0.5}
      position={[0, -10, 0]}
    />
  );
}

export default function Hero3DModel() {
  return (
    <div className="w-full max-w-sm aspect-square mx-auto border-2 bg-white/5 backdrop-blur-lg border-primary rounded-xl ">
      <Canvas camera={{ position: [0, 2, 15], fov: 90 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 2]} />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
      </Canvas>
    </div>
  );
}
