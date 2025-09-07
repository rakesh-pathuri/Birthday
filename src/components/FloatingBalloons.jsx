import React from 'react';
import { motion } from 'framer-motion';

export default function FloatingBalloons() {
  const balloons = [
    { color: 'bg-red-500', x: '10%', delay: 0, size: 'w-16 h-20' },
    { color: 'bg-blue-500', x: '20%', delay: 0.5, size: 'w-14 h-18' },
    { color: 'bg-yellow-500', x: '85%', delay: 1, size: 'w-18 h-22' },
    { color: 'bg-green-500', x: '90%', delay: 1.5, size: 'w-16 h-20' },
    { color: 'bg-purple-500', x: '5%', delay: 2, size: 'w-12 h-16' },
    { color: 'bg-pink-500', x: '95%', delay: 2.5, size: 'w-14 h-18' },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {balloons.map((balloon, index) => (
        <motion.div
          key={index}
          className="absolute bottom-0"
          style={{ left: balloon.x }}
          initial={{ y: 100, opacity: 0 }}
          animate={{
            y: [-100, -120, -100],
            opacity: [0, 1, 1],
            x: [-10, 10, -10],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: balloon.delay,
            ease: "easeInOut"
          }}
        >
          {/* Balloon */}
          <div className={`${balloon.color} ${balloon.size} rounded-full relative shadow-lg`}>
            {/* Balloon Highlight */}
            <div className="absolute top-2 left-2 w-4 h-6 bg-white/40 rounded-full blur-sm" />
            
            {/* Balloon String */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0.5 h-24 bg-gray-600" />
            
            {/* String Attachment */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1 w-2 h-2 bg-gray-700 rounded-full" />
          </div>
        </motion.div>
      ))}

      {/* Additional floating balloons in background */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`bg-${i}`}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 60 + 20}%`,
          }}
          animate={{
            y: [-20, 20, -20],
            x: [-15, 15, -15],
            rotate: [-5, 5, -5],
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeInOut"
          }}
        >
          <div className={`w-8 h-10 rounded-full opacity-30 ${
            ['bg-red-400', 'bg-blue-400', 'bg-yellow-400', 'bg-green-400', 'bg-purple-400', 'bg-pink-400'][Math.floor(Math.random() * 6)]
          }`} />
        </motion.div>
      ))}
    </div>
  );
}