"use client"

import React, { useEffect, useRef } from 'react';

interface CircularTextProps {
  text: string;
  radius?: number;
  className?: string;
  fontSize?: number;
  color?: string;
  rotationSpeed?: number;
}

const CircularText: React.FC<CircularTextProps> = ({
  text,
  radius = 120,
  className = '',
  fontSize = 16,
  color = '#1a1a1a',
  rotationSpeed = 10
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const size = radius * 2 + 60; // 余白を追加
    canvas.width = size;
    canvas.height = size;

    let rotation = 0;
    const centerX = size / 2;
    const centerY = size / 2;

    const animate = () => {
      ctx.clearRect(0, 0, size, size);
      
      ctx.font = `${fontSize}px sans-serif`;
      ctx.fillStyle = color;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      const letters = text.split('');
      const angleStep = (Math.PI * 2) / letters.length;

      letters.forEach((letter, i) => {
        const angle = i * angleStep + rotation;
        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius;

        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(angle + Math.PI / 2);
        ctx.fillText(letter, 0, 0);
        ctx.restore();
      });

      rotation += (Math.PI * 2) / (60 * rotationSpeed); // 60fps想定
      requestAnimationFrame(animate);
    };

    animate();
  }, [text, radius, fontSize, color, rotationSpeed]);

  return (
    <canvas
      ref={canvasRef}
      className={`${className} animate-spin-slow`}
      style={{
        width: `${radius * 2 + 60}px`,
        height: `${radius * 2 + 60}px`,
      }}
    />
  );
};

export default CircularText;

