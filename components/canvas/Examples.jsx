'use client';

import { MeshDistortMaterial, useCursor } from '@react-three/drei';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export const Blob = ({ route = '/', ...props }) => {
  const router = useRouter();
  const [hovered, hover] = useState(false);
  useCursor(hovered);
  return (
    <mesh
      onClick={() => router.push(route)}
      onPointerOver={() => hover(true)}
      onPointerOut={() => hover(false)}
      {...props}
    >
      <sphereGeometry args={[1, 64, 64]} />
      <MeshDistortMaterial
        color="#FF4C00"
        distort={0.6}
        speed={8}
        roughness={0.8}
        metalness={0.5}
      />
    </mesh>
  );
};
