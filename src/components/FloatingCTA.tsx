import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const ctaVariations = [
  "Get $150 Bonus — Download Now",
  "Install App & Claim Bonus",
  "Start Now — Exclusive Bonus",
  "Download & Unlock Rewards",
  "Play Now — Limited Offer",
];

const FloatingCTA = () => {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [variantIndex] = useState(() => Math.floor(Math.random() * ctaVariations.length));

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400 && !dismissed) {
        setVisible(true);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [dismissed]);

  if (dismissed) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="fixed bottom-4 left-4 right-4 z-50 md:hidden"
        >
          <div className="relative flex items-center gap-3 btn-gradient rounded-2xl px-4 py-3.5 blue-glow-strong shadow-2xl">
            <a
              href="#AFFILIATE_LINK_PLACEHOLDER"
              className="flex-1 text-center text-sm font-bold text-foreground"
            >
              {ctaVariations[variantIndex]}
            </a>
            <button
              onClick={() => setDismissed(true)}
              className="shrink-0 p-1 text-foreground/70 hover:text-foreground"
              aria-label="Dismiss"
            >
              <X size={16} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingCTA;
