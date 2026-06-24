import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Code2, Server, Globe, Layers } from 'lucide-react';

/* ─────────────────────────────────────────
   DATA
───────────────────────────────────────── */
const SERVICES = [
  { icon: <Code2 size={16} />,  label: 'Software Development' },
  { icon: <Server size={16} />, label: 'Backend & API' },
  { icon: <Globe size={16} />,  label: 'Network & Infra' },
  { icon: <Layers size={16} />, label: 'System Integration' },
];

const TAGLINES = [
  'Solusi Digital Tepat Sasaran.',
  'Teknologi untuk Bisnis Anda.',
  'Dari Konsep hingga Deployment.',
];

/* ─────────────────────────────────────────
   COMPONENT
───────────────────────────────────────── */
const SplashScreen = ({ onEnter }) => {
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [progress, setProgress]         = useState(0);
  const [ready, setReady]               = useState(false);

  // Cycle taglines
  useEffect(() => {
    const id = setInterval(() => {
      setTaglineIndex((i) => (i + 1) % TAGLINES.length);
    }, 1800);
    return () => clearInterval(id);
  }, []);

  // Progress bar → 5 s then auto-enter
  useEffect(() => {
    const start = Date.now();
    const DURATION = 5000;

    const tick = () => {
      const elapsed = Date.now() - start;
      const pct = Math.min((elapsed / DURATION) * 100, 100);
      setProgress(pct);
      if (pct < 100) {
        requestAnimationFrame(tick);
      } else {
        setReady(true);
        setTimeout(onEnter, 400);
      }
    };

    const raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [onEnter]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden"
        style={{ background: '#0A0A0F' }}
      >
        {/* Background grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(139,92,246,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.04) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        {/* Glow blobs */}
        <div
          className="absolute pointer-events-none"
          style={{
            width: 600, height: 600,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(109,40,217,0.12) 0%, transparent 70%)',
            top: '-150px', left: '-150px',
          }}
        />
        <div
          className="absolute pointer-events-none"
          style={{
            width: 400, height: 400,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 70%)',
            bottom: 0, right: 0,
          }}
        />

        {/* ── Content ── */}
        <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-2xl w-full">

          {/* Logo mark */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mb-8"
          >
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5"
              style={{ background: 'rgba(109,40,217,0.15)', border: '1px solid rgba(109,40,217,0.3)' }}
            >
              {/* Simple "HV" monogram */}
              <span
                className="font-bold text-xl select-none"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  color: '#A78BFA',
                  letterSpacing: '-0.02em',
                }}
              >
                HV
              </span>
            </div>

            {/* Company name */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-xs font-semibold tracking-[0.18em] uppercase"
              style={{ color: '#6D28D9' }}
            >
              Hawkins Valkyrie Solusi Indonesia
            </motion.p>
          </motion.div>

          {/* Tagline — cycles */}
          <div className="h-14 flex items-center justify-center mb-8 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.h1
                key={taglineIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="font-bold text-[#F8F8FC]"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 'clamp(24px, 4vw, 38px)',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.2,
                }}
              >
                {TAGLINES[taglineIndex]}
              </motion.h1>
            </AnimatePresence>
          </div>

          {/* Divider */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 160 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="h-px mb-8"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(139,92,246,0.6), transparent)' }}
          />

          {/* Service pills */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-2 mb-12"
          >
            {SERVICES.map((s, i) => (
              <motion.span
                key={s.label}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + i * 0.1, duration: 0.4 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium"
                style={{
                  background: 'rgba(139,92,246,0.08)',
                  border: '1px solid rgba(139,92,246,0.2)',
                  color: '#A78BFA',
                }}
              >
                {s.icon}
                {s.label}
              </motion.span>
            ))}
          </motion.div>

          {/* Progress bar + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="w-full max-w-sm"
          >
            {/* Track */}
            <div
              className="w-full h-1 rounded-full mb-5 overflow-hidden"
              style={{ background: 'rgba(255,255,255,0.05)' }}
            >
              <div
                className="h-full rounded-full transition-none"
                style={{
                  width: `${progress}%`,
                  background: 'linear-gradient(90deg, #6D28D9, #3B82F6)',
                }}
              />
            </div>

            {/* Skip / Enter button */}
            <motion.button
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.97 }}
              onClick={onEnter}
              className="inline-flex items-center gap-2 px-8 py-3 rounded-xl text-sm font-semibold text-white"
              style={{ background: '#6D28D9' }}
            >
              {ready ? 'Masuk Sekarang' : 'Lewati Intro'}
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.4 }}
              >
                <ArrowRight size={15} />
              </motion.span>
            </motion.button>

            {/* Subtle note */}
            <p className="mt-4 text-xs" style={{ color: '#334155' }}>
              Akan masuk otomatis dalam beberapa detik…
            </p>
          </motion.div>
        </div>

        {/* Bottom wordmark */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-6 text-xs font-mono tracking-widest uppercase"
          style={{ color: '#64748B' }}
        >
          hawkinsvalkyrie.id
        </motion.p>
      </motion.div>
    </AnimatePresence>
  );
};

export default SplashScreen;