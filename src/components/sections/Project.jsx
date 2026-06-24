import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ExternalLink, X, Monitor, ShoppingCart,
  BookOpen, BarChart2, Briefcase, ArrowRight
} from 'lucide-react';
import elearningImage from '../../../src/assets/e-learning.png';
import ppdbImage from '../../assets/tlfajar.png';
/* ─────────────────────────────────────────
   DATA
───────────────────────────────────────── */
const projects = [
  {
    id: 1,
    category: 'Web App',
    title: 'Sistem PPDB Online',
    desc: 'Platform penerimaan peserta didik baru berbasis web dengan manajemen formulir, verifikasi dokumen, dan dashboard admin real-time.',
    tech: ['React', 'Tailwind CSS', 'Node.js'],
    icon: <BookOpen size={20} />,
    accent: '#6D28D9',
    accentBg: 'rgba(109,40,217,0.12)',
    image: ppdbImage,
  },
  {
    id: 2,
    category: 'E-Learning',
    title: 'Platform E-Learning PKBM',
    desc: 'LMS lengkap dengan modul pembelajaran, video streaming, kuis interaktif, forum diskusi, dan laporan progres siswa.',
    tech: ['PHP', 'CodeIgniter', 'MySQL'],
    icon: <Monitor size={20} />,
    accent: '#2563EB',
    accentBg: 'rgba(37,99,235,0.12)',
    image: elearningImage,
  },
  {
    id: 3,
    category: 'Enterprise',
    title: 'Enterprise Resource Planning',
    desc: 'Sistem ERP terpadu untuk mengelola keuangan, inventaris, SDM, dan operasional bisnis dalam satu platform yang scalable.',
    tech: ['Laravel', 'Tailwind CSS', 'MySQL'],
    icon: <BarChart2 size={20} />,
    accent: '#0D9488',
    accentBg: 'rgba(13,148,136,0.12)',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
  },
  {
    id: 4,
    category: 'Company Profile',
    title: 'Company Profile & CMS',
    desc: 'Website profil perusahaan dinamis dengan CMS admin untuk mengelola konten, portofolio, dan formulir kontak secara mandiri.',
    tech: ['Laravel', 'Tailwind CSS', 'MySQL'],
    icon: <Briefcase size={20} />,
    accent: '#7C3AED',
    accentBg: 'rgba(124,58,237,0.12)',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=500&fit=crop',
  },
  {
    id: 5,
    category: 'Web App',
    title: 'Job Tracking Application',
    desc: 'Aplikasi pemantau lamaran kerja dengan pipeline Kanban, notifikasi otomatis, dan analitik status rekrutmen.',
    tech: ['Laravel', 'SQLite', 'Alpine.js'],
    icon: <ShoppingCart size={20} />,
    accent: '#B45309',
    accentBg: 'rgba(180,83,9,0.12)',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop',
  },
];

/* ─────────────────────────────────────────
   VARIANTS
───────────────────────────────────────── */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

/* ─────────────────────────────────────────
   COMPONENT
───────────────────────────────────────── */
const Projects = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section
      id="portfolio"
      className="relative bg-[#0A0A0F] py-24 overflow-hidden"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(139,92,246,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.03) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      {/* Glow blobs */}
      <div
        className="absolute top-0 left-1/3 w-[500px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(109,40,217,0.07) 0%, transparent 70%)' }}
      />
      <div
        className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 70%)' }}
      />

      <div className="container mx-auto px-6 relative z-10">

        {/* ── Header ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-5"
            style={{
              background: 'rgba(139,92,246,0.1)',
              border: '1px solid rgba(139,92,246,0.25)',
              color: '#A78BFA',
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
            Portofolio Proyek
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="font-bold text-[#F8F8FC] mb-4"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(32px, 4vw, 48px)',
              letterSpacing: '-0.02em',
              lineHeight: 1.2,
            }}
          >
            Proyek yang Telah{' '}
            <span className="text-violet-400">Kami Wujudkan</span>
          </motion.h2>

          <motion.div
            variants={fadeUp}
            className="mx-auto h-px w-48 mb-6"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(139,92,246,0.6), transparent)' }}
          />

          <motion.p
            variants={fadeUp}
            className="text-base max-w-xl mx-auto leading-relaxed"
            style={{ color: '#8898AA' }}
          >
            Setiap proyek adalah bukti komitmen kami menghadirkan solusi digital
            yang fungsional, andal, dan berdampak nyata.
          </motion.p>
        </motion.div>

        {/* ── Cards Grid ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {projects.map((p) => (
            <motion.div
              key={p.id}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
              className="group rounded-2xl overflow-hidden cursor-pointer"
              style={{
                background: '#12121C',
                border: '1px solid rgba(255,255,255,0.07)',
              }}
              onClick={() => setSelected(p)}
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* overlay */}
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(to bottom, rgba(10,10,15,0.1), rgba(10,10,15,0.7))' }}
                />
                {/* category pill */}
                <span
                  className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold"
                  style={{ background: p.accentBg, color: p.accent, border: `1px solid ${p.accent}40` }}
                >
                  {p.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                {/* icon + title */}
                <div className="flex items-start gap-3 mb-3">
                  <div
                    className="flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center mt-0.5"
                    style={{ background: p.accentBg, color: p.accent }}
                  >
                    {p.icon}
                  </div>
                  <h3
                    className="font-semibold text-[#E2E8F0] text-sm leading-snug"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {p.title}
                  </h3>
                </div>

                <p className="text-xs leading-relaxed mb-4" style={{ color: '#556070' }}>
                  {p.desc}
                </p>

                {/* tech pills */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md text-xs font-medium"
                      style={{
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        color: '#64748B',
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* detail trigger */}
                <button
                  className="inline-flex items-center gap-1.5 text-xs font-semibold transition-colors"
                  style={{ color: p.accent }}
                >
                  Lihat Detail
                  <ArrowRight size={13} />
                </button>
              </div>
            </motion.div>
          ))}

          {/* CTA card — "Ada proyek?" */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.25 }}
            className="rounded-2xl p-6 flex flex-col justify-between"
            style={{
              background: 'rgba(109,40,217,0.08)',
              border: '1px solid rgba(109,40,217,0.2)',
              minHeight: 260,
            }}
          >
            <div>
              <span
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4"
                style={{
                  background: 'rgba(109,40,217,0.15)',
                  border: '1px solid rgba(109,40,217,0.3)',
                  color: '#A78BFA',
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
                Proyek Berikutnya
              </span>

              <h3
                className="font-bold text-[#E2E8F0] mb-3"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 20,
                  lineHeight: 1.3,
                }}
              >
                Punya Ide Proyek?
              </h3>

              <p className="text-xs leading-relaxed" style={{ color: '#556070' }}>
                Ceritakan kebutuhan Anda kepada kami. Kami siap membantu mewujudkannya
                dari konsep hingga deployment.
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.97 }}
              onClick={() =>
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }
              className="mt-6 w-full py-3 rounded-xl text-sm font-semibold text-white"
              style={{ background: '#6D28D9' }}
            >
              Diskusi Sekarang
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* ── Modal Detail ── */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(6px)' }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 30 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl rounded-2xl overflow-hidden"
              style={{
                background: '#12121C',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              {/* Close */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full flex items-center justify-center"
                style={{ background: 'rgba(255,255,255,0.08)', color: '#94A3B8' }}
              >
                <X size={16} />
              </motion.button>

              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={selected.image}
                  alt={selected.title}
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(to bottom, transparent 40%, rgba(10,10,15,0.95))' }}
                />
                <span
                  className="absolute bottom-4 left-5 px-3 py-1 rounded-full text-xs font-semibold"
                  style={{
                    background: selected.accentBg,
                    color: selected.accent,
                    border: `1px solid ${selected.accent}40`,
                  }}
                >
                  {selected.category}
                </span>
              </div>

              {/* Body */}
              <div className="p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: selected.accentBg, color: selected.accent }}
                  >
                    {selected.icon}
                  </div>
                  <div>
                    <h3
                      className="font-bold text-[#F8F8FC] text-lg"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {selected.title}
                    </h3>
                    <p className="text-xs mt-1 leading-relaxed" style={{ color: '#8898AA' }}>
                      {selected.desc}
                    </p>
                  </div>
                </div>

                {/* Tech */}
                <div>
                  <p
                    className="text-xs font-semibold tracking-widest uppercase mb-2"
                    style={{ color: '#556070' }}
                  >
                    Teknologi
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {selected.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1.5 rounded-lg text-xs font-medium"
                        style={{
                          background: 'rgba(255,255,255,0.04)',
                          border: '1px solid rgba(255,255,255,0.1)',
                          color: '#94A3B8',
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3 pt-2">
                  <motion.button
                    whileHover={{ scale: 1.03, y: -1 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() =>
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                    }
                    className="flex-1 py-3 rounded-xl text-sm font-semibold text-white inline-flex items-center justify-center gap-2"
                    style={{ background: '#6D28D9' }}
                  >
                    <ExternalLink size={15} />
                    Diskusikan Proyek Serupa
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setSelected(null)}
                    className="px-5 py-3 rounded-xl text-sm font-semibold"
                    style={{
                      background: 'transparent',
                      border: '1px solid rgba(255,255,255,0.1)',
                      color: '#64748B',
                    }}
                  >
                    Tutup
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;