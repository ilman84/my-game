'use client';

import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';
import { Product } from '@/hooks/useGameLogic';

type ProductItemProps = {
  product: Product;
  onClick: (id: string) => { correct: boolean; alreadyFound: boolean };
  isTarget: boolean;
  isFound: boolean;
};

export default function ProductItem({
  product,
  onClick,
  isTarget,
  isFound,
}: ProductItemProps) {
  const meshRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  useFrame(() => {
    if (!meshRef.current) return;

    // Simple hover animation only
    if (hovered && !isFound) {
      meshRef.current.scale.lerp(new THREE.Vector3(1.1, 1.1, 1.1), 0.1);
    } else {
      meshRef.current.scale.lerp(new THREE.Vector3(1, 1, 1), 0.1);
    }
  });

  const handleClick = () => {
    onClick(product.id);
  };

  const materialProps = {
    color: product.color,
    emissive: isTarget && !isFound ? product.color : '#000000',
    emissiveIntensity: isTarget && !isFound ? 0.3 : 0,
    metalness: 0.3,
    roughness: 0.7,
    opacity: isFound ? 0.5 : 1,
    transparent: isFound,
  };

  return (
    <group
      position={product.position}
      ref={meshRef}
      onClick={handleClick}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {/* Render 3D model dengan material */}
      {(() => {
        switch (product.id) {
          case 'redBag':
            return (
              <group>
                <mesh position={[0, 0, 0]}>
                  <boxGeometry args={[0.8, 1, 0.4]} />
                  <meshStandardMaterial {...materialProps} />
                </mesh>
                <mesh position={[0, 0.7, 0]}>
                  <torusGeometry args={[0.3, 0.05, 8, 16, Math.PI]} />
                  <meshStandardMaterial {...materialProps} />
                </mesh>
                <mesh position={[0, 0, 0.21]}>
                  <boxGeometry args={[0.5, 0.6, 0.05]} />
                  <meshStandardMaterial color='#a00000' />
                </mesh>
              </group>
            );

          case 'television':
            return (
              <group rotation={[0, Math.PI / 8, 0]}>
                {/* TV frame/body hitam */}
                <mesh position={[0, 0, 0]}>
                  <boxGeometry args={[0.9, 0.6, 0.08]} />
                  <meshStandardMaterial {...materialProps} />
                </mesh>
                {/* Screen biru menyala */}
                <mesh position={[0, 0.05, 0.045]}>
                  <boxGeometry args={[0.82, 0.48, 0.02]} />
                  <meshStandardMaterial
                    color='#1e40af'
                    emissive='#3b82f6'
                    emissiveIntensity={0.5}
                  />
                </mesh>
                {/* Logo brand */}
                <mesh position={[0, -0.25, 0.045]}>
                  <boxGeometry args={[0.15, 0.03, 0.01]} />
                  <meshStandardMaterial color='#9ca3af' />
                </mesh>
                {/* Stand base */}
                <mesh position={[0, -0.35, 0]}>
                  <boxGeometry args={[0.4, 0.05, 0.25]} />
                  <meshStandardMaterial {...materialProps} />
                </mesh>
                {/* Stand pole */}
                <mesh position={[0, -0.3, 0]}>
                  <cylinderGeometry args={[0.04, 0.04, 0.15, 16]} />
                  <meshStandardMaterial {...materialProps} />
                </mesh>
                {/* Speaker dots */}
                <mesh position={[-0.3, -0.22, 0.045]}>
                  <cylinderGeometry args={[0.02, 0.02, 0.01, 16]} />
                  <meshStandardMaterial color='#4b5563' />
                </mesh>
                <mesh position={[0.3, -0.22, 0.045]}>
                  <cylinderGeometry args={[0.02, 0.02, 0.01, 16]} />
                  <meshStandardMaterial color='#4b5563' />
                </mesh>
              </group>
            );

          case 'goldWatch':
            return (
              <group>
                <mesh position={[0, 0, 0]}>
                  <cylinderGeometry args={[0.25, 0.25, 0.1, 32]} />
                  <meshStandardMaterial {...materialProps} metalness={0.8} />
                </mesh>
                <mesh position={[0.3, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
                  <cylinderGeometry args={[0.05, 0.05, 0.08, 16]} />
                  <meshStandardMaterial {...materialProps} />
                </mesh>
                <mesh position={[0, 0, -0.4]}>
                  <boxGeometry args={[0.15, 0.05, 0.5]} />
                  <meshStandardMaterial color='#a07000' />
                </mesh>
                <mesh position={[0, 0, 0.4]}>
                  <boxGeometry args={[0.15, 0.05, 0.5]} />
                  <meshStandardMaterial color='#a07000' />
                </mesh>
              </group>
            );

          case 'greenBottle':
            return (
              <group>
                <mesh position={[0, 0, 0]}>
                  <cylinderGeometry args={[0.25, 0.3, 0.8, 16]} />
                  <meshStandardMaterial
                    {...materialProps}
                    transparent
                    opacity={0.7}
                  />
                </mesh>
                <mesh position={[0, 0.5, 0]}>
                  <cylinderGeometry args={[0.12, 0.15, 0.3, 16]} />
                  <meshStandardMaterial
                    {...materialProps}
                    transparent
                    opacity={0.7}
                  />
                </mesh>
                <mesh position={[0, 0.7, 0]}>
                  <cylinderGeometry args={[0.13, 0.13, 0.1, 16]} />
                  <meshStandardMaterial color='#0a5000' />
                </mesh>
              </group>
            );

          case 'purpleBox':
            return (
              <group>
                <mesh position={[0, 0, 0]}>
                  <boxGeometry args={[0.7, 0.7, 0.7]} />
                  <meshStandardMaterial {...materialProps} />
                </mesh>
                <mesh position={[0, 0, 0]}>
                  <boxGeometry args={[0.75, 0.1, 0.75]} />
                  <meshStandardMaterial color='#d946ef' />
                </mesh>
                <mesh position={[0, 0, 0]}>
                  <boxGeometry args={[0.1, 0.75, 0.75]} />
                  <meshStandardMaterial color='#d946ef' />
                </mesh>
              </group>
            );

          case 'wallClock':
            return (
              <group rotation={[Math.PI / 2, 0, 0]}>
                {/* Body jam dinding putih */}
                <mesh position={[0, 0, 0]}>
                  <cylinderGeometry args={[0.5, 0.5, 0.15, 32]} />
                  <meshStandardMaterial color='#ffffff' roughness={0.3} />
                </mesh>
                {/* Ring frame hitam tebal */}
                <mesh position={[0, 0, 0.08]}>
                  <torusGeometry args={[0.48, 0.04, 16, 32]} />
                  <meshStandardMaterial color='#000000' />
                </mesh>
                {/* Face putih di depan */}
                <mesh position={[0, 0, 0.076]}>
                  <cylinderGeometry args={[0.44, 0.44, 0.01, 32]} />
                  <meshStandardMaterial color='#f8f8f8' />
                </mesh>
                {/* Jarum jam PENDEK (tebal, hitam, jelas) */}
                <mesh
                  position={[0.06, 0.06, 0.09]}
                  rotation={[0, 0, -Math.PI / 4]}
                >
                  <boxGeometry args={[0.25, 0.04, 0.03]} />
                  <meshStandardMaterial color='#000000' />
                </mesh>
                {/* Jarum menit PANJANG (tebal, hitam, jelas) */}
                <mesh position={[0, 0.2, 0.095]} rotation={[0, 0, 0]}>
                  <boxGeometry args={[0.04, 0.35, 0.03]} />
                  <meshStandardMaterial color='#000000' />
                </mesh>
                {/* Jarum detik merah (tipis) */}
                <mesh position={[0, 0.22, 0.1]} rotation={[0, 0, 0]}>
                  <boxGeometry args={[0.02, 0.38, 0.01]} />
                  <meshStandardMaterial color='#ff0000' />
                </mesh>
                {/* Center dot hitam besar */}
                <mesh position={[0, 0, 0.105]}>
                  <cylinderGeometry args={[0.05, 0.05, 0.03, 16]} />
                  <meshStandardMaterial color='#000000' />
                </mesh>
                {/* Marker angka 12, 3, 6, 9 */}
                <mesh position={[0, 0.38, 0.09]}>
                  <boxGeometry args={[0.04, 0.08, 0.02]} />
                  <meshStandardMaterial color='#000000' />
                </mesh>
                <mesh position={[0.38, 0, 0.09]}>
                  <boxGeometry args={[0.08, 0.04, 0.02]} />
                  <meshStandardMaterial color='#000000' />
                </mesh>
                <mesh position={[0, -0.38, 0.09]}>
                  <boxGeometry args={[0.04, 0.08, 0.02]} />
                  <meshStandardMaterial color='#000000' />
                </mesh>
                <mesh position={[-0.38, 0, 0.09]}>
                  <boxGeometry args={[0.08, 0.04, 0.02]} />
                  <meshStandardMaterial color='#000000' />
                </mesh>
              </group>
            );

          case 'orangeFruit':
            return (
              <group>
                {/* Jeruk kecil */}
                <mesh position={[0, 0, 0]}>
                  <sphereGeometry args={[0.12, 32, 32]} />
                  <meshStandardMaterial color='#ff8c00' roughness={0.9} />
                </mesh>
                {/* Tangkai kecil */}
                <mesh position={[0, 0.11, 0]}>
                  <cylinderGeometry args={[0.015, 0.015, 0.04, 8]} />
                  <meshStandardMaterial color='#228b22' />
                </mesh>
                {/* Daun kecil */}
                <mesh position={[0.02, 0.13, 0]} rotation={[0, 0, Math.PI / 6]}>
                  <boxGeometry args={[0.05, 0.02, 0.01]} />
                  <meshStandardMaterial color='#228b22' />
                </mesh>
              </group>
            );

          case 'hangingShirt':
            return (
              <group>
                {/* Hanger */}
                <mesh position={[0, 0.4, 0]}>
                  <cylinderGeometry args={[0.01, 0.01, 0.05, 8]} />
                  <meshStandardMaterial color='#333333' />
                </mesh>
                <mesh position={[0, 0.37, 0]} rotation={[0, 0, Math.PI / 2]}>
                  <cylinderGeometry args={[0.01, 0.01, 0.3, 8]} />
                  <meshStandardMaterial color='#333333' />
                </mesh>
                {/* Body baju */}
                <mesh position={[0, 0.15, 0]}>
                  <boxGeometry args={[0.4, 0.5, 0.05]} />
                  <meshStandardMaterial {...materialProps} />
                </mesh>
                {/* Lengan kiri */}
                <mesh position={[-0.25, 0.25, 0]}>
                  <boxGeometry args={[0.15, 0.3, 0.05]} />
                  <meshStandardMaterial {...materialProps} />
                </mesh>
                {/* Lengan kanan */}
                <mesh position={[0.25, 0.25, 0]}>
                  <boxGeometry args={[0.15, 0.3, 0.05]} />
                  <meshStandardMaterial {...materialProps} />
                </mesh>
                {/* Kerah */}
                <mesh position={[0, 0.38, 0]}>
                  <boxGeometry args={[0.15, 0.08, 0.06]} />
                  <meshStandardMaterial color='#ffffff' />
                </mesh>
              </group>
            );

          case 'laptop':
            return (
              <group rotation={[-0.3, Math.PI / 4, 0]}>
                {/* Base keyboard */}
                <mesh position={[0, 0, 0]}>
                  <boxGeometry args={[0.6, 0.02, 0.4]} />
                  <meshStandardMaterial {...materialProps} metalness={0.4} />
                </mesh>
                {/* Keyboard area */}
                <mesh position={[0, 0.015, 0]}>
                  <boxGeometry args={[0.5, 0.01, 0.35]} />
                  <meshStandardMaterial color='#1f2937' />
                </mesh>
                {/* Trackpad */}
                <mesh position={[0, 0.016, 0.12]}>
                  <boxGeometry args={[0.15, 0.01, 0.1]} />
                  <meshStandardMaterial color='#4b5563' />
                </mesh>
                {/* Screen back */}
                <mesh position={[0, 0.2, -0.2]} rotation={[0.3, 0, 0]}>
                  <boxGeometry args={[0.6, 0.38, 0.02]} />
                  <meshStandardMaterial {...materialProps} metalness={0.4} />
                </mesh>
                {/* Screen display */}
                <mesh position={[0, 0.2, -0.19]} rotation={[0.3, 0, 0]}>
                  <boxGeometry args={[0.56, 0.34, 0.01]} />
                  <meshStandardMaterial
                    color='#1e40af'
                    emissive='#1e40af'
                    emissiveIntensity={0.4}
                  />
                </mesh>
                {/* Logo */}
                <mesh position={[0, 0.2, -0.21]} rotation={[0.3, 0, 0]}>
                  <sphereGeometry args={[0.02, 16, 16]} />
                  <meshStandardMaterial
                    color='#ffffff'
                    emissive='#ffffff'
                    emissiveIntensity={0.3}
                  />
                </mesh>
              </group>
            );

          case 'yellowBall':
            return (
              <group>
                {/* Bola kuning polos */}
                <mesh position={[0, 0, 0]}>
                  <sphereGeometry args={[0.25, 32, 32]} />
                  <meshStandardMaterial
                    color='#ffd700'
                    roughness={0.4}
                    metalness={0.2}
                  />
                </mesh>
                {/* Garis horizontal tengah hitam */}
                <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
                  <torusGeometry args={[0.25, 0.015, 8, 32]} />
                  <meshStandardMaterial color='#000000' />
                </mesh>
              </group>
            );

          default:
            return (
              <mesh>
                <boxGeometry args={product.size} />
                <meshStandardMaterial {...materialProps} />
              </mesh>
            );
        }
      })()}

      {/* Label - hanya tampil saat hover, bukan target */}
      {hovered && !isTarget && !isFound && (
        <Text
          position={[0, 1.2, 0]}
          fontSize={0.25}
          color='#ffffff'
          anchorX='center'
          anchorY='middle'
          outlineWidth={0.05}
          outlineColor='#000000'
        >
          {product.name}
        </Text>
      )}

      {/* Found checkmark */}
      {isFound && (
        <Text
          position={[0, 1.2, 0]}
          fontSize={0.5}
          color='#22c55e'
          anchorX='center'
          anchorY='middle'
        >
          ✓
        </Text>
      )}
    </group>
  );
}
