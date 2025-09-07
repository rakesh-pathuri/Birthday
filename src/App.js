import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Gift, Volume2, VolumeX } from 'lucide-react';

import ConfettiAnimation from './components/ConfettiAnimation';
import FloatingBalloons from './components/FloatingBalloons';
import GlowingMessage from './components/GlowingMessage';
import HeartfeltMessage from './components/HeartfeltMessage';

export default function BirthdayWish() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMuted, setIsMuted] = useState(true); // start muted
  const audioRef = useRef(null);

useEffect(() => {
  const startMusic = () => {
    if (audioRef.current) {
      audioRef.current.muted = false; // unmute
      audioRef.current.play().catch(err => console.log(err));
    }
    window.removeEventListener('click', startMusic);
    window.removeEventListener('touchstart', startMusic);
  };

  window.addEventListener('click', startMusic);
  window.addEventListener('touchstart', startMusic);

  return () => {
    window.removeEventListener('click', startMusic);
    window.removeEventListener('touchstart', startMusic);
  };
}, []);

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted;
      setIsMuted(audioRef.current.muted);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <audio
        ref={audioRef}
        src="/music.mp3"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Mute Button */}
      <motion.button
        onClick={toggleMute}
        className="fixed top-4 right-4 z-50 p-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        aria-label="Mute or unmute music"
      >
        {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
      </motion.button>

      {/* Background, Balloons, Confetti, and Main Content */}
      <FloatingBalloons />
      <ConfettiAnimation />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 50 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center space-y-8 max-w-4xl mx-auto"
        >
          <motion.div
            className="flex justify-center gap-8 mb-8"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <Sparkles className="w-8 h-8 text-yellow-400 animate-pulse" />
            <Gift className="w-10 h-10 text-pink-400" />
            <Sparkles className="w-8 h-8 text-yellow-400 animate-pulse" />
          </motion.div>

          <GlowingMessage />
          <HeartfeltMessage />

          <motion.div
            className="flex justify-center items-center gap-4 mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
          >
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-golden-400 to-transparent"></div>
            <Heart className="w-6 h-6 text-red-400 animate-pulse" />
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-golden-400 to-transparent"></div>
          </motion.div>

          <motion.div
            className="mt-8 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3, duration: 1 }}
          >
            <p className="text-white/60 text-sm italic">
              Made with ❤️ By Rakesh Pathuri.
            </p>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -40, -20],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </div>
  );
}
