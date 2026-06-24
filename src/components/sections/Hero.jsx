import React from 'react';
/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
/* eslint-enable no-unused-vars */
import { Mail, Github, Linkedin, Phone, Send, Code, Server, Database, Download, Briefcase, Award, FileText, Layers, MapPin, Clock } from 'lucide-react';
import { MessageCircle, ArrowRight, Shield, Code2 } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
};

const fadeRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } }
};

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#0A0A0F] pt-16"
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
      <div className="absolute -top-24 -left-24 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(109,40,217,0.12) 0%, transparent 70%)' }} />
      <div className="absolute bottom-0 right-0 w-[380px] h-[380px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 70%)' }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* ── LEFT ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="space-y-6"
          >
            {/* Eyebrow */}
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2">
              <span
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase"
                style={{
                  background: 'rgba(139,92,246,0.1)',
                  border: '1px solid rgba(139,92,246,0.25)',
                  color: '#A78BFA',
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse"
                />
                IT &amp; Software Solutions
              </span>
            </motion.div>

            {/* Company name */}
            <motion.p
              variants={fadeUp}
              className="text-xs font-semibold tracking-[0.15em] uppercase"
              style={{ color: '#6D28D9' }}
            >
              SanTech Indonesia
            </motion.p>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              className="font-bold leading-tight"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 'clamp(34px, 4vw, 52px)',
                letterSpacing: '-0.02em',
              }}
            >
              <span className="text-[#F8F8FC]">Solusi Digital</span>
              <br />
              <span className="text-violet-400">Tepat Sasaran,</span>
              <br />
              <span className="font-normal text-slate-400">Tanpa Kompromi.</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              className="text-base leading-relaxed max-w-md"
              style={{ color: '#8898AA' }}
            >
              Kami membangun sistem, aplikasi, dan infrastruktur digital yang
              dirancang untuk tumbuh bersama bisnis Anda — dari konsultasi
              hingga deployment.
            </motion.p>

            {/* CTA buttons */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
              <motion.button
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm text-white"
                style={{ background: '#6D28D9' }}
              >
                <MessageCircle size={16} />
                Konsultasi Gratis
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm"
                style={{
                  color: '#A78BFA',
                  border: '1px solid rgba(167,139,250,0.3)',
                  background: 'transparent',
                }}
              >
                Lihat Layanan Kami
                <ArrowRight size={14} />
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={fadeUp}
              className="flex gap-8 pt-6"
              style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
            >
              {[
                { num: '50+', label: 'Proyek Selesai' },
                { num: '30+', label: 'Klien Aktif' },
                { num: '5+',  label: 'Tahun Pengalaman' },
              ].map((s) => (
                <div key={s.label}>
                  <div
                    className="font-bold text-2xl text-[#F8F8FC]"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {s.num}
                  </div>
                  <div className="text-xs mt-1" style={{ color: '#556070' }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── RIGHT ── */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="flex justify-center items-center"
          >
            <div className="relative w-[340px] h-[380px]">

              {/* Back cards */}
              <div
                className="absolute rounded-2xl"
                style={{
                  width: 260, height: 180,
                  background: '#12121C',
                  border: '1px solid rgba(255,255,255,0.07)',
                  top: '50%', left: '50%',
                  transform: 'translate(-44%, -46%) rotate(6deg)',
                  opacity: 0.5,
                  zIndex: 1,
                }}
              />
              <div
                className="absolute rounded-2xl"
                style={{
                  width: 260, height: 180,
                  background: '#12121C',
                  border: '1px solid rgba(255,255,255,0.07)',
                  top: '50%', left: '50%',
                  transform: 'translate(-56%, -54%) rotate(-5deg)',
                  opacity: 0.35,
                  zIndex: 2,
                }}
              />

              {/* Main card */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute rounded-2xl p-6"
                style={{
                  width: 280,
                  background: '#12121C',
                  border: '1px solid rgba(255,255,255,0.08)',
                  top: '50%', left: '50%',
                  transform: 'translate(-50%, -50%)',
                  zIndex: 3,
                }}
              >
                {/* Icon */}
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: 'rgba(109,40,217,0.2)' }}
                >
                  <Code2 size={18} color="#A78BFA" />
                </div>

                <div
                  className="font-semibold text-sm mb-1 text-[#E2E8F0]"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  Custom Software Development
                </div>
                <div className="text-xs leading-relaxed" style={{ color: '#475569' }}>
                  Aplikasi web &amp; mobile yang dibangun sesuai kebutuhan bisnis Anda
                </div>

                {/* Progress bar */}
                <div
                  className="mt-4 h-1 rounded-full overflow-hidden"
                  style={{ background: 'rgba(255,255,255,0.05)' }}
                >
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '78%' }}
                    viewport={{ once: false }}
                    transition={{ duration: 1.4, ease: 'easeOut', delay: 0.3 }}
                    className="h-full rounded-full"
                    style={{ background: 'linear-gradient(90deg, #6D28D9, #3B82F6)' }}
                  />
                </div>
              </motion.div>

              {/* Badge — top right */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute flex items-center gap-2 px-3 py-2 rounded-full text-xs font-medium"
                style={{
                  top: 12, right: -16,
                  background: '#1A1A2E',
                  border: '1px solid rgba(255,255,255,0.08)',
                  color: '#94A3B8',
                  zIndex: 10,
                  whiteSpace: 'nowrap',
                }}
              >
                <span className="w-2 h-2 rounded-full bg-green-400" />
                System Online
              </motion.div>

              {/* Badge — bottom left */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute flex items-center gap-2 px-3 py-2 rounded-full text-xs font-medium"
                style={{
                  bottom: 28, left: -16,
                  background: '#1A1A2E',
                  border: '1px solid rgba(255,255,255,0.08)',
                  color: '#60A5FA',
                  zIndex: 10,
                  whiteSpace: 'nowrap',
                }}
              >
                <Shield size={13} color="#60A5FA" />
                Secure &amp; Scalable
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;