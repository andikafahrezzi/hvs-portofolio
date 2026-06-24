import React from 'react';
import { motion } from 'framer-motion';
import { Target, Rocket, ShieldCheck, Users, Code2, Server, Globe, Layers } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const values = [
  {
    icon: <Target size={20} />,
    title: 'Berorientasi Hasil',
    desc: 'Setiap solusi dirancang untuk memberikan dampak nyata dan terukur bagi bisnis klien.',
    color: '#6D28D9',
    bg: 'rgba(109,40,217,0.12)',
  },
  {
    icon: <ShieldCheck size={20} />,
    title: 'Keamanan Prioritas',
    desc: 'Sistem yang kami bangun mengutamakan keamanan data dan keandalan infrastruktur.',
    color: '#2563EB',
    bg: 'rgba(37,99,235,0.12)',
  },
  {
    icon: <Rocket size={20} />,
    title: 'Inovasi Berkelanjutan',
    desc: 'Kami terus mengadopsi teknologi terkini untuk memberikan solusi yang relevan dan scalable.',
    color: '#0D9488',
    bg: 'rgba(13,148,136,0.12)',
  },
  {
    icon: <Users size={20} />,
    title: 'Kemitraan Jangka Panjang',
    desc: 'Kami bukan sekadar vendor, tetapi mitra teknologi yang tumbuh bersama bisnis Anda.',
    color: '#7C3AED',
    bg: 'rgba(124,58,237,0.12)',
  },
];

const expertise = [
  { icon: <Code2 size={18} />, label: 'Web & Mobile App' },
  { icon: <Server size={18} />, label: 'Backend & API' },
  { icon: <Globe size={18} />, label: 'Network & Infra' },
  { icon: <Layers size={18} />, label: 'System Integration' },
];

const About = () => {
  return (
    <section
      id="about"
      className="relative bg-[#0A0A0F] py-24 overflow-hidden"
    >
      {/* Background grid — sama seperti Hero */}
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
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.07) 0%, transparent 70%)' }}
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(109,40,217,0.08) 0%, transparent 70%)' }}
      />

      <div className="container mx-auto px-6 relative z-10">

        {/* ── Section Header ── */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-20"
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
            Tentang Kami
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
            Teknologi yang <span className="text-violet-400">Membangun</span>
            <br />Masa Depan Bisnis Anda
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
            Hawkins Valkyrie Solusi Indonesia adalah perusahaan teknologi yang
            berfokus pada pengembangan perangkat lunak dan infrastruktur digital
            untuk bisnis yang ingin bertumbuh.
          </motion.p>
        </motion.div>

        {/* ── Main Grid ── */}
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-start">

          {/* LEFT — Story & Expertise */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="space-y-8"
          >
            {/* Story card */}
            <div
              className="rounded-2xl p-8 space-y-5"
              style={{
                background: '#12121C',
                border: '1px solid rgba(255,255,255,0.07)',
              }}
            >
              <div className="flex items-center gap-3 mb-2">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center"
                  style={{ background: 'rgba(109,40,217,0.2)' }}
                >
                  <Target size={18} color="#A78BFA" />
                </div>
                <h3
                  className="font-semibold text-lg text-[#E2E8F0]"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  Siapa Kami
                </h3>
              </div>

              <p className="text-sm leading-7" style={{ color: '#8898AA' }}>
                Kami adalah tim profesional di bidang IT yang berpengalaman membangun
                solusi digital mulai dari{' '}
                <span style={{ color: '#A78BFA', fontWeight: 600 }}>
                  sistem enterprise
                </span>
                , aplikasi web &amp; mobile, hingga infrastruktur jaringan skala menengah dan besar.
              </p>

              <p className="text-sm leading-7" style={{ color: '#8898AA' }}>
                Berdiri dengan semangat untuk menjembatani kebutuhan bisnis dengan
                teknologi modern, kami hadir sebagai{' '}
                <span style={{ color: '#60A5FA', fontWeight: 600 }}>
                  mitra strategis
                </span>{' '}
                yang memahami tantangan nyata di lapangan.
              </p>

              {/* Divider */}
              <div
                className="h-px w-full"
                style={{ background: 'rgba(255,255,255,0.05)' }}
              />

              {/* Expertise pills */}
              <div>
                <p
                  className="text-xs font-semibold tracking-widest uppercase mb-3"
                  style={{ color: '#556070' }}
                >
                  Area Keahlian
                </p>
                <div className="flex flex-wrap gap-2">
                  {expertise.map((e) => (
                    <span
                      key={e.label}
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium"
                      style={{
                        background: 'rgba(139,92,246,0.08)',
                        border: '1px solid rgba(139,92,246,0.2)',
                        color: '#A78BFA',
                      }}
                    >
                      {e.icon}
                      {e.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { num: '50+', label: 'Proyek Selesai' },
                { num: '30+', label: 'Klien Aktif' },
                { num: '5+',  label: 'Tahun Berdiri' },
              ].map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl p-5 text-center"
                  style={{
                    background: '#12121C',
                    border: '1px solid rgba(255,255,255,0.07)',
                  }}
                >
                  <div
                    className="font-bold text-2xl text-[#F8F8FC] mb-1"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {s.num}
                  </div>
                  <div className="text-xs" style={{ color: '#556070' }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT — Values */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="grid grid-cols-1 gap-4"
          >
            <p
              className="text-xs font-semibold tracking-widest uppercase mb-1"
              style={{ color: '#556070' }}
            >
              Nilai-Nilai Kami
            </p>

            {values.map((v, i) => (
              <motion.div
                key={v.title}
                variants={fadeUp}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
                className="flex gap-4 rounded-xl p-5"
                style={{
                  background: '#12121C',
                  border: '1px solid rgba(255,255,255,0.07)',
                }}
              >
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center mt-0.5"
                  style={{ background: v.bg, color: v.color }}
                >
                  {v.icon}
                </div>
                <div>
                  <h4
                    className="font-semibold text-sm mb-1 text-[#E2E8F0]"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {v.title}
                  </h4>
                  <p className="text-xs leading-relaxed" style={{ color: '#556070' }}>
                    {v.desc}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* CTA card */}
            <motion.div
              variants={fadeUp}
              className="rounded-xl p-5 flex items-center justify-between gap-4 mt-2"
              style={{
                background: 'rgba(109,40,217,0.1)',
                border: '1px solid rgba(109,40,217,0.25)',
              }}
            >
              <div>
                <p
                  className="font-semibold text-sm text-[#E2E8F0] mb-1"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  Siap mulai proyek bersama kami?
                </p>
                <p className="text-xs" style={{ color: '#8898AA' }}>
                  Konsultasi awal gratis, tanpa komitmen.
                </p>
              </div>
              <motion.button
                whileHover={{ scale: 1.04, y: -1 }}
                whileTap={{ scale: 0.97 }}
                onClick={() =>
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }
                className="flex-shrink-0 px-5 py-2.5 rounded-lg text-sm font-semibold text-white"
                style={{ background: '#6D28D9' }}
              >
                Hubungi Kami
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;