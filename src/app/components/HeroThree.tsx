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
      <Canvas camera={{ position: [0, 0, 15], fov: 90 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 2]} />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
      </Canvas>

      {/* License Credits*/}
      <div className="relative group inline-block">
        <a className="text-sm cursor-pointer underline">Hover for Credits</a>

        <div
          className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block
                  bg-base-100 text-white text-xs rounded-lg p-4 z-20 
                  max-w-md w-[320px] whitespace-pre-line text-left shadow-lg"
        >
          {
            'This work is based on "Magic Crystal B&W"\n\n(sketchfab.com/3d-models/magic-crystal-bw-871e40e7271d4db28fe466bf32598d8a)\n\nby Toni García Vilche (sketchfab.com/zul_gv)\n\nlicensed under CC-BY-4.0\n(creativecommons.org/licenses/by/4.0/)'
          }
        </div>
      </div>
    </div>
  );
}
