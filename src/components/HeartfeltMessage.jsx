import React from 'react';
import { motion } from 'framer-motion';

export default function HeartfeltMessage() {
  const message = "You are getting old Daddy!. Anyway wishing you a very Happy Birthday.";
  
  return (
    <motion.div
      className="max-w-3xl mx-auto mt-12"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5, duration: 1 }}
    >
      <div className="relative">
        {/* Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-cyan-500/10 blur-xl rounded-3xl" />
        
        {/* Message Container */}
        <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 md:p-12">
          <motion.p 
            className="text-xl md:text-2xl lg:text-3xl text-white font-light leading-relaxed text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1.5 }}
          >
            {message.split(' ').map((word, index) => (
              <motion.span
                key={index}
                className="inline-block mr-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 2 + (index * 0.1),
                  duration: 0.5
                }}
              >
                {word}
              </motion.span>
            ))}
          </motion.p>

          {/* Decorative Hearts */}
          <div className="absolute -top-4 -right-4 w-8 h-8 bg-red-500 rounded-full opacity-60 animate-pulse" />
          <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-500 rounded-full opacity-60 animate-pulse" />
        </div>

        {/* Floating Hearts Around Message */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-red-400 text-2xl pointer-events-none"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-10, -30, -10],
              x: [-5, 5, -5],
              opacity: [0.4, 0.8, 0.4],
              rotate: [-10, 10, -10],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            ♥
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}