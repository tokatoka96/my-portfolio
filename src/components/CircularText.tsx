// components/CircularText.tsx
import React from 'react';

interface CircularTextProps {
  text: string;
  radius?: number; // 円の半径（デフォルトは60）
  className?: string; // 追加のクラス名（オプション）
}

const CircularText: React.FC<CircularTextProps> = ({ text, radius = 60, className = '' }) => {
  const letters = text.split('');
  const angleStep = 360 / letters.length;

  // コンテナのサイズを計算
  const diameter = radius * 2;
  const containerSize = diameter + 30; // 余白として30px追加

  return (
    <div
      className={`relative`}
      style={{
        width: `${containerSize}px`,
        height: `${containerSize}px`,
      }}
    >
      <div className={`absolute inset-0 animate-spin-slow ${className}`}>
        {letters.map((letter, index) => {
          const angle = angleStep * index;
          return (
            <span
              key={index}
              className="absolute left-1/2 top-1/2 transform"
              style={{
                transform: `rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)`,
                transformOrigin: '0 0',
              }}
            >
              <span className="text-xs tracking-wider">{letter}</span>
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default CircularText;
