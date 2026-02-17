import { motion } from "framer-motion";
import { useMemo } from "react";

const HeroParticles = () => {
  const particles = useMemo(() => {
    return Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 4 + 3,
      delay: Math.random() * 5,
      opacity: Math.random() * 0.5 + 0.2,
    }));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-primary"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [0, -60, -120],
            opacity: [0, p.opacity, 0],
            scale: [0, 1, 0.5],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeOut",
          }}
        />
      ))}
      {/* Sparkle flashes */}
      {Array.from({ length: 8 }, (_, i) => (
        <motion.div
          key={`sparkle-${i}`}
          className="absolute w-1 h-1 bg-accent rounded-full"
          style={{
            left: `${15 + Math.random() * 70}%`,
            top: `${10 + Math.random() * 80}%`,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: i * 0.8 + Math.random() * 2,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default HeroParticles;
