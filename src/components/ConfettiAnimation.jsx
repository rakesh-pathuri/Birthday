import React from 'react';
import { motion } from 'framer-motion';

export default function ConfettiAnimation() {
  const confettiColors = [
    'bg-red-500',
    'bg-blue-500',
    'bg-yellow-500',
    'bg-green-500',
    'bg-purple-500',
    'bg-pink-500',
    'bg-orange-500',
    'bg-cyan-500'
  ];

  const confettiShapes = ['square', 'circle', 'triangle'];

  const generateConfetti = (count) => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      color: confettiColors[Math.floor(Math.random() * confettiColors.length)],
      shape: confettiShapes[Math.floor(Math.random() * confettiShapes.length)],
      x: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 8 + Math.random() * 4,
      size: 8 + Math.random() * 8
    }));
  };

  const confettiPieces = generateConfetti(50);

  const getShapeClasses = (shape, size) => {
    const baseClasses = `absolute opacity-80`;
    
    switch (shape) {
      case 'circle':
        return `${baseClasses} rounded-full w-${Math.floor(size/2)} h-${Math.floor(size/2)}`;
      case 'triangle':
        return `${baseClasses} w-0 h-0 border-l-${Math.floor(size/4)} border-r-${Math.floor(size/4)} border-b-${Math.floor(size/2)} border-transparent`;
      default: // square
        return `${baseClasses} w-${Math.floor(size/2)} h-${Math.floor(size/2)}`;
    }
  };

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {confettiPieces.map((piece) => (
        <motion.div
          key={piece.id}
          className={`${piece.color} w-3 h-3`}
          style={{
            position: 'absolute',
            left: `${piece.x}%`,
            top: '-20px',
          }}
          initial={{
            y: -100,
            rotate: 0,
            opacity: 0,
          }}
          animate={{
            y: window.innerHeight + 100,
            rotate: 360 * 3,
            opacity: [0, 1, 1, 0],
            x: [0, Math.random() * 100 - 50, Math.random() * 100 - 50],
          }}
          transition={{
            duration: piece.duration,
            delay: piece.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* Burst Effect - triggered confetti from center */}
      {Array.from({ length: 30 }, (_, i) => (
        <motion.div
          key={`burst-${i}`}
          className={`absolute w-2 h-2 ${confettiColors[i % confettiColors.length]} rounded-full`}
          style={{
            left: '50%',
            top: '30%',
          }}
          initial={{
            scale: 0,
            opacity: 0,
          }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
            x: Math.cos((i / 30) * Math.PI * 2) * (100 + Math.random() * 100),
            y: Math.sin((i / 30) * Math.PI * 2) * (100 + Math.random() * 100) + Math.random() * 200,
          }}
          transition={{
            duration: 3,
            delay: 1 + Math.random() * 2,
            repeat: Infinity,
            repeatDelay: 8 + Math.random() * 5,
          }}
        />
      ))}
    </div>
  );
}