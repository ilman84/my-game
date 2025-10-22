'use client';

import { OrbitControls } from '@react-three/drei';
import ProductItem from './ProductItem';
import { Product } from '@/hooks/useGameLogic';

type RoomSceneProps = {
  products: Product[];
  targetProduct: Product | null;
  foundProducts: Set<string>;
  onProductClick: (id: string) => { correct: boolean; alreadyFound: boolean };
};

export default function RoomScene({
  products,
  targetProduct,
  foundProducts,
  onProductClick,
}: RoomSceneProps) {
  return (
    <>
      {/* Background color - sky blue */}
      <color attach='background' args={['#87ceeb']} />

      {/* Lighting - balanced */}
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 10, 5]} intensity={0.8} />
      <pointLight position={[0, 4, 0]} intensity={0.6} />

      {/* Camera Controls */}
      <OrbitControls
        enableZoom={true}
        enablePan={false}
        minDistance={5}
        maxDistance={15}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 6}
      />

      {/* Floor - coklat kayu GELAP */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        <planeGeometry args={[20, 20]} />
        <meshLambertMaterial color='#654321' />
      </mesh>

      {/* Ceiling - krem/beige */}
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 5, 0]}>
        <planeGeometry args={[20, 20]} />
        <meshLambertMaterial color='#d2b48c' />
      </mesh>

      {/* Walls - WARNA JELAS */}
      {/* Back wall - CREAM/PEACH */}
      <mesh position={[0, 2.5, -5]}>
        <boxGeometry args={[20, 5, 0.2]} />
        <meshLambertMaterial color='#ffdab9' />
      </mesh>

      {/* Left wall - BIRU MUDA */}
      <mesh position={[-10, 2.5, 0]} rotation={[0, Math.PI / 2, 0]}>
        <boxGeometry args={[20, 5, 0.2]} />
        <meshLambertMaterial color='#87ceeb' />
      </mesh>

      {/* Right wall - HIJAU MUDA */}
      <mesh position={[10, 2.5, 0]} rotation={[0, -Math.PI / 2, 0]}>
        <boxGeometry args={[20, 5, 0.2]} />
        <meshLambertMaterial color='#98fb98' />
      </mesh>

      {/* Furniture - Table COKLAT */}
      <group position={[0, 0, -2]}>
        <mesh position={[0, 0.4, 0]}>
          <boxGeometry args={[3, 0.1, 1.5]} />
          <meshLambertMaterial color='#8b4513' />
        </mesh>
        {/* Table legs */}
        {[
          [-1.3, -0.2, -0.6],
          [1.3, -0.2, -0.6],
          [-1.3, -0.2, 0.6],
          [1.3, -0.2, 0.6],
        ].map((pos, i) => (
          <mesh key={i} position={pos as [number, number, number]}>
            <boxGeometry args={[0.1, 0.8, 0.1]} />
            <meshLambertMaterial color='#654321' />
          </mesh>
        ))}
      </group>

      {/* Sofa BIRU */}
      <group position={[-4, 0, 3]}>
        <mesh position={[0, 0.3, 0]}>
          <boxGeometry args={[2, 0.6, 1]} />
          <meshLambertMaterial color='#4169e1' />
        </mesh>
        <mesh position={[0, 0.7, -0.4]}>
          <boxGeometry args={[2, 0.8, 0.2]} />
          <meshLambertMaterial color='#4682b4' />
        </mesh>
      </group>

      {/* Lamp KUNING */}
      <group position={[4, 0, -3]}>
        <mesh position={[0, 0.9, 0]}>
          <cylinderGeometry args={[0.05, 0.05, 1.8, 16]} />
          <meshLambertMaterial color='#2f4f4f' />
        </mesh>
        <mesh position={[0, 1.9, 0]}>
          <cylinderGeometry args={[0.3, 0.4, 0.5, 16]} />
          <meshLambertMaterial
            color='#ffd700'
            emissive='#ffd700'
            emissiveIntensity={0.8}
          />
        </mesh>
        <pointLight
          position={[0, 2, 0]}
          intensity={3}
          distance={6}
          color='#ffd700'
        />
      </group>

      {/* Shelf COKLAT */}
      <group position={[5, 1.5, 0]}>
        <mesh>
          <boxGeometry args={[0.8, 2, 0.3]} />
          <meshLambertMaterial color='#a0522d' />
        </mesh>
      </group>

      {/* Products */}
      {products.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          onClick={onProductClick}
          isTarget={targetProduct?.id === product.id}
          isFound={foundProducts.has(product.id)}
        />
      ))}
    </>
  );
}
