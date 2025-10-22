'use client';

import { memo } from 'react';
import { Canvas } from '@react-three/fiber';
import RoomScene from './RoomScene';
import { Product } from '@/hooks/useGameLogic';

type GameCanvasProps = {
  products: Product[];
  targetProduct: Product | null;
  foundProducts: Set<string>;
  onProductClick: (id: string) => { correct: boolean; alreadyFound: boolean };
};

// Custom comparison untuk memo - cegah re-render jika products sama
const arePropsEqual = (prev: GameCanvasProps, next: GameCanvasProps) => {
  return (
    prev.products === next.products &&
    prev.targetProduct?.id === next.targetProduct?.id &&
    prev.foundProducts.size === next.foundProducts.size
  );
};

const GameCanvas = memo(function GameCanvas({
  products,
  targetProduct,
  foundProducts,
  onProductClick,
}: GameCanvasProps) {
  return (
    <div className='h-screen w-full' style={{ background: '#87ceeb' }}>
      <Canvas
        frameloop='always'
        camera={{ position: [0, 5, 10], fov: 60 }}
        gl={{
          antialias: true,
          alpha: false,
          powerPreference: 'high-performance',
          preserveDrawingBuffer: true,
          failIfMajorPerformanceCaveat: false,
        }}
        dpr={[1, 2]}
        onCreated={({ gl }) => {
          gl.setClearColor('#87ceeb');
          console.log('WebGL initialized successfully');
        }}
      >
        <RoomScene
          products={products}
          targetProduct={targetProduct}
          foundProducts={foundProducts}
          onProductClick={onProductClick}
        />
      </Canvas>
    </div>
  );
},
arePropsEqual);

export default GameCanvas;
